from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ToDoItemSerializer
from .models import ToDoItem


# Create your views here.
class ToDoItemView(viewsets.ModelViewSet):
    serializer_class = ToDoItemSerializer
    queryset = ToDoItem.objects.all()
