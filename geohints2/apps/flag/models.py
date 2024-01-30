from django.db import models
from models.baseTraits import BaseTrait, BaseTraitImage

# Create your models here.

class FlagImage(BaseTraitImage):
    pass

class Flag(BaseTrait):
    description = models.TextField(blank=True, null=True)
    images = models.ManyToManyField(FlagImage)

    def __str__(self):
        return str(self.id)