from .models import *
from django.shortcuts import get_object_or_404
from .serializers import *
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class PinnedTopicsViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    def list(self, request):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, username = request.user)
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, topicNumber, topicStatus):
        user = User.objects.get(username = request.user)
        self.changeTopicStatus(user, topicNumber, topicStatus)
        serializer = PinnedTopicsSerializer(user)
        return Response(serializer.data)

    def changeTopicStatus(self, user, topicNumber, topicStatus):
        currentUserPinnedStatus = list(user.topics_pinned)
        currentUserPinnedStatus[topicNumber] = topicStatus
        user.topics_pinned = ''.join(currentUserPinnedStatus)
        user.save()

class ProblemStatusViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    def retrieve(self, request):
        user = User.objects.get(username = request.user)
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, problemNumber, problemStatus):
        user = User.objects.get(username = request.user)
        self.changeProblemStatus(user, problemNumber, problemStatus)
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)

    def changeProblemStatus(self, user, problemNumber, problemStatus):
        currentUserProblemStatus = list(user.problem_status)
        currentUserProblemStatus[problemNumber] = problemStatus
        user.problem_status = ''.join(currentUserProblemStatus)
        user.save()

class ProblemNotesViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    def retrieve(self, request):
        user = User.objects.get(username = request.user)
        serializer = ProblemNotesSerializer(user)
        return Response(serializer.data)
    
    def update(self, request, problemId):
        user = User.objects.get(username = request.user)
        user.problems_notes[problemId] = request.data['problem_note']
        user.save()
        serializer = ProblemNotesSerializer(user)
        return Response(serializer.data)

class Abc(viewsets.ViewSet):
    def retrieve(self, request):
        user = User.objects.get(username = "ephiram2002")
        user.problem_status = '0'*350
        user.problems_notes[0] = "HEYYY"
        user.save()
        serializer = ProblemStatusSerializer(user)
        return Response(serializer.data)