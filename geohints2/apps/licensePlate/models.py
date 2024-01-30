from django.db import models
from models.baseTraits import BaseTrait, BaseTraitImage

# Create your models here.

class LicensePlateImage(BaseTraitImage):
    pass

class LicensePlate(BaseTrait):
    description = models.TextField(blank=True, null=True)
    images = models.ManyToManyField(LicensePlateImage)

    def __str__(self):
        return str(self.id)