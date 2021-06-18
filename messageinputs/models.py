from django.db import models

# Create your models here.
class MessageInput(models.Model):
    input = models.TextField()
