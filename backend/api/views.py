from .models import *
from .serializers import *
from .services import *
from django.conf import settings
from django.shortcuts import redirect
from rest_framework import status
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from datetime import timedelta
from urllib.parse import urlencode
import jwt
import time

class GoogleLoginApi(APIView):
    def get(self, request, *args, **kwargs):
        auth_serializer = AuthSerializer(data=request.GET)
        auth_serializer.is_valid(raise_exception=True)
        
        validated_data = auth_serializer.validated_data
        user_data, jwt_token = createJwtToken(validated_data)
        
        response = redirect(settings.BASE_APP_URL)
        response.set_cookie('dsandeavour_access_token', jwt_token, max_age = 60 * 24 * 60 * 60)
        response.set_cookie('dsandeavour_username', user_data.get('name'), max_age = 60 * 24 * 60 * 60)
        response.set_cookie('dsandeavour_picture', user_data.get('picture'), max_age = 60 * 24 * 60 * 60)
        return response
    
    def post(self, request, *args, **kwargs):
        pass

class PinnedTopicsViewSet(viewsets.ViewSet):
    def list(self, request):
        try:
            email = getUserData(request)
        except:
            return Response({'hey': 'there'}, status = status.HTTP_401_UNAUTHORIZED)
        user = User.objects.get(email = email)
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, topicNumber, topicStatus):
        try:
            email = getUserData(request)
        except:
            return Response({'hey': 'there'}, status = status.HTTP_401_UNAUTHORIZED)
        user = User.objects.get(email = email)
        self.changeTopicStatus(user, topicNumber, topicStatus)
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)

    def changeTopicStatus(self, user, topicNumber, topicStatus):
        currentUserPinnedStatus = list(user.topics_pinned)
        currentUserPinnedStatus[topicNumber] = topicStatus
        user.topics_pinned = ''.join(currentUserPinnedStatus)
        user.save()

class ProblemStatusViewSet(viewsets.ViewSet):
    def retrieve(self, request):
        try:
            email = getUserData(request)
        except:
            return Response({'hey': 'there'}, status = status.HTTP_401_UNAUTHORIZED)
        user = User.objects.get(email = email)
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, problemNumber, problemStatus):
        try:
            email = getUserData(request)
        except:
            return Response({'hey': 'there'}, status = status.HTTP_401_UNAUTHORIZED)
        user = User.objects.get(email = email)
        self.changeProblemStatus(user, problemNumber, problemStatus)
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)

    def changeProblemStatus(self, user, problemNumber, problemStatus):
        currentUserProblemStatus = list(user.problem_status)
        currentUserProblemStatus[problemNumber] = problemStatus
        user.problem_status = ''.join(currentUserProblemStatus)
        user.save()

class ProblemNotesViewSet(viewsets.ViewSet):
    def retrieve(self, request):
        try:
            email = getUserData(request)
        except:
            return Response({'hey': 'there'}, status = status.HTTP_401_UNAUTHORIZED)
        user = User.objects.get(email = email)
        serializer = ProblemNotesSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, problemId):
        try:
            email = getUserData(request)
        except:
            return Response({'hey': 'there'}, status = status.HTTP_401_UNAUTHORIZED)
        user = User.objects.get(email = email)
        user.problems_notes[problemId] = request.data['problem_note']
        user.save()
        serializer = ProblemNotesSerializer(user)
        return Response(serializer.data)

@api_view(['POST'])
def feedback(request):
    print(request.data['feedback'])
    try:
        email = getUserData(request)
    except:
        return Response({'hey': 'there'}, status = status.HTTP_401_UNAUTHORIZED)
    user = User.objects.get(email = email)
    Feedback.objects.create(user = user, feedback = request.data['feedback'])
    return Response({'hey': 'hey'})

@api_view(['GET'])
def ping(request):
    return Response({'hey': 'hey'})