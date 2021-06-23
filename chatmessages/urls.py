from django.urls import path
from .views import ChatMessageListAPIView
from .views import ChatMessageDetailAPIView

app_name = 'chatmessages'

urlpatterns = [
    path('<int:pk>/', ChatMessageDetailAPIView.as_view(), name='chatmessage_detail'),
    path('', ChatMessageListAPIView.as_view(), name="chat_message_list"),
]
