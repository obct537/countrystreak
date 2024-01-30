from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FlagSerializer
from .models import Flag

# Create your views here.

class FlagView(viewsets.ModelViewSet):
    serializer_class = FlagSerializer
    queryset = Flag.objects.all()