from django.urls import path
from .views import MessageInputListAPIView

app_name = 'messageinputs'

urlpatterns = [
    path('', MessageInputListAPIView.as_view(), name="message_input_list")
]
