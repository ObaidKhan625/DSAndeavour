from .models import *
from django.shortcuts import get_object_or_404
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response

class PinnedTopicsViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, username = 'obaid')
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, topicNumber, topicStatus):
        user = User.objects.get(username = 'obaid')
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

class ProblemStatusViewSet(viewsets.ViewSet):
    def retrieve(self, request):
        user = User.objects.get(username = 'obaid')
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, problemNumber, problemStatus):
        user = User.objects.get(username = 'obaid')
        self.changeProblemStatus(user, problemNumber, problemStatus)
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)

    def changeProblemStatus(self, user, problemNumber, problemStatus):
        currentUserProblemStatus = list(user.problem_status)
        currentUserProblemStatus[problemNumber] = problemStatus
        user.problem_status = ''.join(currentUserProblemStatus)
        user.save()

class Abc(viewsets.ViewSet):
    def retrieve(self, request):
        user = User.objects.get(username = 'obaid')
        user.problem_status = '0'*350
        user.save()
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)