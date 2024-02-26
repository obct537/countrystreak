"""
URL configuration for geohints2 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from views.TraitView import TraitView

from apps.bollard.views import BollardView, BollardImageView
from apps.country.views import CountryView
from apps.flag.views import FlagView
from apps.vehicle.views import VehicleView
from apps.licensePlate.views import LicensePlateView
from apps.roadSign.views import RoadSignView

router = routers.DefaultRouter()
# router.register(r'countries', CountryView, 'country')

for view in TraitView.children():
    meta = view.queryset.model._meta
    plural = meta.verbose_name_plural
    label = meta.verbose_name
    router.register(plural, view, label)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/bollards/<int:bollardId>/images/', BollardImageView.as_view({'get': 'list'}), name='bollard-images')
]