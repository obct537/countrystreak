from django.db import models
from models.baseTraits import BaseTrait

from apps.bollard.models import Bollard
from apps.roadSign.models import RoadSign


# Create your models here.

class Country(BaseTrait):
    class Meta:
        verbose_name_plural = "countries"

    # TODO: Continent key
        
    # Country traits
    name = models.CharField(max_length=150)
    leftOrRight = models.CharField(max_length=1, choices=[("L", "Left"), ("R", "Right")])
    domain = models.CharField(max_length=10, blank=True, null=True)
    alpha2code = models.CharField(max_length=2, blank=True, null=True, unique=True)
    alpha3code = models.CharField(max_length=3, blank=True, null=True, unique=True)

    # Locale Traits for country
    bollards = models.ManyToManyField(Bollard, blank=True)
    signs = models.ManyToManyField(RoadSign, blank=True)

    def __str__(self):
        return self.name