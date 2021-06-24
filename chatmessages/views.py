from rest_framework import generics

from .models import ChatMessage
from .serializers import ChatMessageSerializer
from .permissions import IsAuthOrReadOnly


class ChatMessageListAPIView(generics.ListCreateAPIView):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer

    def perform_create(self, serializer):
        serializer.save(username=self.request.user)

class ChatMessageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ChatMessage.objects.all()
    serializer_class = ChatMessageSerializer
    permission_classes = (IsAuthOrReadOnly,)
