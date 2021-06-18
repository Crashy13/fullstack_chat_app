from rest_framework import generics
from .models import MessageInput
from .serializers import MessageInputSerializer

class MessageInputListAPIView(generics.ListCreateAPIView):
    queryset = MessageInput.objects.all()
    serializer_class = MessageInputSerializer
