from django.contrib.auth.models import AnonymousUser
from rest_framework.authtoken.models import Token


def get_user(token):
    try:
        token = Token.objects.select_related('user').get(key=token)
        return token.user
    except:
        return AnonymousUser


