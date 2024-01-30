from django.contrib import admin
from .models import Bollard, BollardImage

@admin.register(Bollard)
class BollardAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

@admin.register(BollardImage)
class BollardImageAdmin(admin.ModelAdmin):
    pass