from django.db import models
from django.contrib.auth.models import User

class ChatMessage(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    username = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    


    def __str__(self):
        return self.message
