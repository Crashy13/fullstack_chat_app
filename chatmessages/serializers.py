from rest_framework import serializers
from .models import ChatMessage

class ChatMessageSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField('get_username')

    def get_username(self, obj):
        return obj.username.username

    class Meta:
        model = ChatMessage
        fields = ('username', 'message')
