from django.db import models
from models.localeTraits import LocaleTraitWithSubcategories, LocaleTraitCategory, LocaleTraitImage
# Create your models here.

class RoadSignImage(LocaleTraitImage):
    pass

class RoadSignCategory(LocaleTraitCategory):
    pass

class RoadSign(LocaleTraitWithSubcategories):
    class Meta:
        verbose_name_plural = "road_signs"

    category = models.ForeignKey(RoadSignCategory, on_delete=models.CASCADE)
    images = models.ManyToManyField(RoadSignImage)

    def _str_(self):
        return self.pk
