from django.contrib import admin
from .models import ToDoItem


class ToDoItemAdmin(admin.ModelAdmin):
    list_display = ("label", "completed")


# Register your models here.
admin.site.register(ToDoItem, ToDoItemAdmin)
