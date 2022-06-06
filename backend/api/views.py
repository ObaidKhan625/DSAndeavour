from .models import *
from django.shortcuts import get_object_or_404
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response

class PinnedTopicsViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, username = "obaid")
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, topicNumber, topicStatus):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, username = "obaid")
        self.changeTopicStatus(user, topicNumber, topicStatus)
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)

    def changeTopicStatus(self, user, topicNumber, topicStatus):
        currentUserPinnedStatus = list(user.topics_pinned)
        currentUserPinnedStatus[topicNumber] = topicStatus
        user.topics_pinned = ''.join(currentUserPinnedStatus)
        user.save()

class ProblemInfoViewSet(viewsets.ViewSet):
    def retrieve(self, request, problemId):
        queryset = ProblemInfo.objects.all()
        problemInfo = get_object_or_404(queryset, problem_id = problemId)
        serializer = ProblemInfoSerializer(note)
        return Response(serializer.data)