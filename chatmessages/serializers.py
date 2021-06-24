from rest_framework import serializers
from .models import ChatMessage

class ChatMessageSerializer(serializers.ModelSerializer):
    is_owner = serializers.SerializerMethodField('get_owner_status')
    owner = serializers.ReadOnlyField(source='username.username')
    username = serializers.SerializerMethodField('get_username')

    def get_owner_status(self, obj):
        return obj.username == self.context['request'].user

    def get_username(self, obj):
        return obj.username.username

    class Meta:
        model = ChatMessage
        fields = '__all__'
