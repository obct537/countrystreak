from django.contrib import admin
from .models import RoadSign, RoadSignCategory

@admin.register(RoadSign)
class RoadSignAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

@admin.register(RoadSignCategory)
class RoadSignCategoryAdmin(admin.ModelAdmin):
    pass
