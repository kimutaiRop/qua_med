from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Message(models.Model):
    text = models.CharField(max_length=2000)
    time = models.DateTimeField(auto_now_add=True,null=True)
    read = models.BooleanField(default=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='message_owner')


class Conversation(models.Model):
    user = models.OneToOneField(User, related_name='owner_user', on_delete=models.CASCADE)
    participants = models.ManyToManyField(User)
    messages = models.ManyToManyField(Message, default=False)
