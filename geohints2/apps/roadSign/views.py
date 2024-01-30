from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RoadSignSerializer
from .models import RoadSign

# Create your views here.

class RoadSignView(viewsets.ModelViewSet):
    serializer_class = RoadSignSerializer
    queryset = RoadSign.objects.all()