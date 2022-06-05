from rest_framework import serializers
from .models import *

class PinnedTopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['topics_pinned']

class ProblemInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemInfo
        fields = ['content']

class ProblemStatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['problem_status']