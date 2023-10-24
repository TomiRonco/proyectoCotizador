
from django.contrib import admin
from django.urls import path
from backend.views import CalcularView

urlpatterns = [
    path('api/calcular/', CalcularView.as_view(), name='calcular-view'),
]
