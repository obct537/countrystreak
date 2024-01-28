from django.contrib import admin
from .models import RoadSign

class RoadSignAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

# Register your models here.

admin.site.register(RoadSign, RoadSignAdmin)