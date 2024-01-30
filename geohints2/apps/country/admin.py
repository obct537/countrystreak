from django.contrib import admin
from .models import Country

class CountryAdmin(admin.ModelAdmin):
    list_display = ('name', 'leftOrRight')

# Register your models here.

admin.site.register(Country, CountryAdmin)