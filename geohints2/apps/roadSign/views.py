from django.shortcuts import render
from rest_framework import viewsets
from .serializers import RoadSignSerializer
from .models import RoadSign
from views.TraitView import TraitView

@TraitView.register_trait_view
class RoadSignView(TraitView):
    serializer_class = RoadSignSerializer
    queryset = RoadSign.objects.all()
    label = 'roadsign'