from django.db import models
from models.localeTraits import LocaleTrait, LocaleTraitImage

# Create your models here.

class BollardImage(LocaleTraitImage):
    pass

class Bollard(LocaleTrait):
    class Meta:
        verbose_name_plural = "bollards"

    description = models.TextField(blank=True, null=True)
    images = models.ManyToManyField(BollardImage)

    def _str_(self):
        return self.id