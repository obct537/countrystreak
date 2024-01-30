from django.contrib import admin
from .models import Flag, FlagImage

@admin.register(Flag)
class FlagAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

@admin.register(FlagImage)
class FlagImageAdmin(admin.ModelAdmin):
    pass