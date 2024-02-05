from rest_framework import serializers
from .models import LicensePlate

class LicensePlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = LicensePlate
        fields = '__all__'

