from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BollardSerializer
from .models import Bollard

# Create your views here.

class BollardView(viewsets.ModelViewSet):
    serializer_class = BollardSerializer
    queryset = Bollard.objects.all()