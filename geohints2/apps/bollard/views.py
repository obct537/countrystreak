from views.TraitView import TraitView

from .serializers import BollardSerializer, BollardImageSerializer
from .models import Bollard, BollardImage

from rest_framework import routers

# Create your views here.

@TraitView.register_trait_view
class BollardView(TraitView):
    serializer_class = BollardSerializer
    queryset = Bollard.objects.all()
    label = 'bollard'

class BollardImageView(TraitView):
    serializer_class = BollardImageSerializer

    def get_queryset(self):
        # Get the bollard ID to lookup first
       bollardId = self.kwargs['bollardId']

       bollardInstance = Bollard.objects.get(pk=bollardId)
       return bollardInstance.images.all()
