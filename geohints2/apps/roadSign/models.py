from django.db import models
from models.baseTraits import BaseTraitWithSubcategories, BaseTraitCategory, BaseTraitImage
# Create your models here.

class RoadSignImage(BaseTraitImage):
    pass

class RoadSignCategory(BaseTraitCategory):
    class Meta:
        verbose_name_plural = "categories"

class RoadSign(BaseTraitWithSubcategories):
    class Meta:
        verbose_name_plural = "road_signs"

    category = models.ForeignKey(RoadSignCategory, on_delete=models.CASCADE)
    images = models.ManyToManyField(RoadSignImage)

    def __str__(self):
        return str(self.pk)
