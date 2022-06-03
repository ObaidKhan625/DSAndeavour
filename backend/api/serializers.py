from rest_framework import serializers
from .models import User

class PinnedTopicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['topics_pinned']