from django.shortcuts import render
from rest_framework import viewsets
from .serializers import VehicleSerializer
from .models import Vehicle

# Create your views here.

class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()