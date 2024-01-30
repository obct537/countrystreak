from django.db import models
from models.baseTraits import BaseTrait, BaseTraitImage

# Create your models here.

class BollardImage(BaseTraitImage):
    pass

class Bollard(BaseTrait):
    class Meta:
        verbose_name_plural = "bollards"

    description = models.TextField(blank=True, null=True)
    images = models.ManyToManyField(BollardImage)

    def __str__(self):
        return str(self.id)