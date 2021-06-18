from rest_framework import serializers
from .models import MessageInput

class MessageInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageInput
        fields = '__all__'
