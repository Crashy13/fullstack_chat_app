from django.db import models

class MessageInput(models.Model):
    input = models.TextField()

    def __str__(self):
        return self.input
