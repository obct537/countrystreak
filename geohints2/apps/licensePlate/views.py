from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LicensePlateSerializer
from .models import LicensePlate

# Create your views here.

class LicensePlateView(viewsets.ModelViewSet):
    serializer_class = LicensePlateSerializer
    queryset = LicensePlate.objects.all()