from django.db import models
from django.contrib.auth.models import User
from django.utils.html import mark_safe
from django_currentuser.db.models import CurrentUserField

from multiupload.fields import MultiImageField

#
# Base model with update tracking
#
class baseModel(models.Model):
    class Meta:
        abstract = True

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.pk

#
# The abstract model for all of the images associated with our locale traits
#
class BaseTraitImage(baseModel):
    class Meta:
        abstract = True
        verbose_name_plural = "images"

    image = models.ImageField(upload_to='images/')
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.image.name

#
# Base model for all the locale traits
#
class BaseTrait(baseModel):
    class Meta:
        abstract = True

    description = models.TextField(blank=True, null=True)
    
#
# Model for the categories associated with some locale traits
#
class BaseTraitCategory(baseModel):
    class Meta:
        abstract = True

    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/',null=True)

    def __str__(self):
        return self.name

#
# Model for local trait types with subcategories
# ex: Signs have "direction signs", "chevrons", "speed limit signs", etc
#
class BaseTraitWithSubcategories(BaseTrait):
    class Meta:
        abstract = True
        verbose_name_plural = "categories"

    category = models.ForeignKey(BaseTraitCategory, on_delete=models.CASCADE)

    