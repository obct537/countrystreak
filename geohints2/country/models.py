from django.db import models

# Create your models here.

class Country(models.Model):
    class Meta:
        verbose_name_plural = "countries"

    # TODO: Continent key
    name = models.CharField(max_length=120)
    leftOrRight = models.CharField(max_length=1, choices={"L": "Left", "R": "Right"})

    def _str_(self):
        return self.name