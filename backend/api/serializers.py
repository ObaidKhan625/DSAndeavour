from rest_framework import serializers
from .models import *

class PinnedTopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['topics_pinned']

class ProblemStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['problem_status']

class ProblemNotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['problems_notes']