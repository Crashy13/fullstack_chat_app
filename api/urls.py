from django.urls import path, include
from . import views

app_name = 'api_v1'

urlpatterns = [
    path('messageinputs/', include('messageinputs.urls', namespace='messageinputs')),
    path('chatmessages/', include('chatmessages.urls', namespace='chatmessages'))
]
