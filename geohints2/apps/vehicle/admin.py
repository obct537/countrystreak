from django.contrib import admin
from .models import Vehicle, VehicleCategory, VehicleImage

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

@admin.register(VehicleCategory)
class VehicleCategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(VehicleImage)
class VehicleImageAdmin(admin.ModelAdmin):
    pass