from django.urls import path
from .views import ChatMessageListAPIView

app_name = 'chatmessages'

urlpatterns = [
    path('', ChatMessageListAPIView.as_view(), name="chat_message_list")
]
