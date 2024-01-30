from django.contrib import admin
from .models import RoadSign, RoadSignCategory, RoadSignImage

@admin.register(RoadSign)
class RoadSignAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

@admin.register(RoadSignCategory)
class RoadSignCategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(RoadSignImage)
class RoadSignImageAdmin(admin.ModelAdmin):
    pass