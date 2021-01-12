from django.db import models


# Create your models here.
class ToDoItem(models.Model):
    label = models.CharField(max_length=120)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.label
