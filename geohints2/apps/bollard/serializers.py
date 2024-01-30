from rest_framework import serializers
from .models import Bollard

class BollardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bollard
