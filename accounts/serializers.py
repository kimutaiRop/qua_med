from django.contrib.auth.models import User
from rest_framework import serializers

from accounts.models import Profile
from qua.serializer import UserSerializer


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(User)

    class Meta:
        fields = '__all__'
        model = Profile
