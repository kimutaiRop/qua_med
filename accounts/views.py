from .models import Profile
from django.shortcuts import redirect
from rest_framework import status
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.serializers import ProfileSerializer


@api_view()
def null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view()
def complete_view(request):
    return Response("Email account is activated")


class RedirectFronm(APIView):

    def get(self, request, format=None):
        return redirect('/set-password')


class GetProfile(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, SessionAuthentication]

    def get(self, request, format=None):
        user = request.user
        profile = Profile.objects.get(user=user)
        serialized = ProfileSerializer(profile, many=False).data
        return Response(serialized)
