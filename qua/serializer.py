from django.contrib.auth.forms import PasswordResetForm
from django.contrib.auth.models import User
from django.utils.translation import gettext as _
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from bot import settings
from .models import Message


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'email', 'last_name', 'date_joined')

class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)

    class Meta:
        model = Token
        fields = ('key', 'user')


class MessageSerializer(serializers.ModelSerializer):
    author = UserSerializer(many=False)

    class Meta:
        model = Message
        fields = '__all__'


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password_reset_form_class = PasswordResetForm

    def validate_email(self, value):
        self.reset_form = self.password_reset_form_class(data=self.initial_data)
        if not self.reset_form.is_valid():
            raise serializers.ValidationError(_('Error'))

        ###### FILTER YOUR USER MODEL ######
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError(_('Invalid e-mail address'))
        return value

    def save(self):
        request = self.context.get('request')
        opts = {
            'use_https': request.is_secure(),
            'from_email': getattr(settings, 'DEFAULT_FROM_EMAIL'),

            ###### USE YOUR TEXT FILE ######
            'email_template_name': 'accounts/email/password_reset.txt',

            'request': request,
        }
        self.reset_form.save(**opts)
