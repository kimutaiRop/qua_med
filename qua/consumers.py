import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.contrib.auth import get_user_model

from qua.models import Conversation, Message
from qua.serializer import MessageSerializer
from .tasks import ReplyUserMessage

User = get_user_model()


class ChatBotConsumer(WebsocketConsumer):

    def fetch_messages(self, data):
        user = User.objects.get(username=data['username'])
        try:
            conversation = Conversation.objects.select_related('user').get(user=user)
        except:
            conversation = Conversation.objects.create(user=user)
        messages = conversation.messages.all().order_by('-id').prefetch_related('author', )
        content = {
            'command': 'messages',
            'messages': MessageSerializer(messages, many=True).data,
            'error': "chat not found"
        }

        self.send_message(content)

    def new_message(self, data):
        result = []
        user = User.objects.get(username=data['from'])
        message = Message.objects.create(author=user, text=data['message'])
        if data['from'] == 'qua_bot':
            user = User.objects.get(username=data['conversation'])
        conversation = Conversation.objects.select_related('user').get(user=user)
        conversation.messages.add(message)
        conversation.save()
        content = {
            'command': 'new_message',
            'message': MessageSerializer(message, many=False).data
        }
        if data['from'] != 'qua_bot':
            ReplyUserMessage(self.room_group_name, data['message'], data['from'])
        self.send_chat_message(content)
        return result

    commands = {
        'fetch_messages': fetch_messages,
        'new_message': new_message
    }

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        user = self.scope['user']
        self.room_group_name = 'chat_%s' % self.room_name
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        self.accept()

    def disconnect(self, close_code):
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        self.commands[data['command']](self, data)

    def send_chat_message(self, message):
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    def send_message(self, message):
        self.send(text_data=json.dumps(message))

    def chat_message(self, event):
        message = event['message']
        self.send(text_data=json.dumps(message))
