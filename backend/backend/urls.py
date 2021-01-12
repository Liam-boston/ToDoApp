from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from todoapp.views import ToDoItemView

router = SimpleRouter()
router.register(r'thingstodo', ToDoItemView, basename='todoitem')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
