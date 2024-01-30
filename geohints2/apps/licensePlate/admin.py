from django.contrib import admin
from .models import LicensePlate, LicensePlateImage

@admin.register(LicensePlate)
class LicensePlateAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

@admin.register(LicensePlateImage)
class FlagImageAdmin(admin.ModelAdmin):
    pass