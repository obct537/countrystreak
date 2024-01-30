from django.db import models
from models.baseTraits import BaseTraitWithSubcategories, BaseTraitCategory, BaseTraitImage
# Create your models here.

class VehicleImage(BaseTraitImage):
    pass

class VehicleCategory(BaseTraitCategory):
    class Meta:
        verbose_name_plural = "categories"

class Vehicle(BaseTraitWithSubcategories):
    class Meta:
        verbose_name_plural = "road_signs"

    category = models.ForeignKey(VehicleCategory, on_delete=models.CASCADE)
    images = models.ManyToManyField(VehicleImage)

    def __str__(self):
        return str(self.pk)
