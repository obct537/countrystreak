from rest_framework import serializers
from .models import RoadSign

class RoadSignSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoadSign
