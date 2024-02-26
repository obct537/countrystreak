from rest_framework import serializers
from .models import Bollard, BollardImage

class BollardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bollard
        fields = '__all__'


class BollardImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = BollardImage
        fields = '__all__'