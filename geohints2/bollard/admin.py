from django.contrib import admin
from .models import Bollard

class BollardAdmin(admin.ModelAdmin):
    list_display = ('id', 'description')

# Register your models here.

admin.site.register(Bollard, BollardAdmin)