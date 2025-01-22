from django.urls import path
from .views import index , getAllEmployees, getEmployeeById
urlpatterns = [
    path('', index),
    path('employees/', getAllEmployees),
    path('employees/<str:id>', getEmployeeById)
]