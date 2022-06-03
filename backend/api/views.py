from .models import User
from django.shortcuts import get_object_or_404
from .serializers import PinnedTopicsSerializer
from rest_framework import viewsets
from rest_framework.response import Response

class PinnedTopicsViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, username = request.user.username)
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, topicNumber, topicStatus):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, username = request.user.username)
        self.changeTopicStatus(user, topicNumber, topicStatus)
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)

    def changeTopicStatus(self, user, topicNumber, topicStatus):
        currentUserPinnedStatus = list(user.topics_pinned)
        currentUserPinnedStatus[topicNumber] = topicStatus
        user.topics_pinned = ''.join(currentUserPinnedStatus)
        user.save()