from views.TraitView import TraitView

from .serializers import BollardSerializer
from .models import Bollard

# Create your views here.

@TraitView.register_trait_view
class BollardView(TraitView):
    serializer_class = BollardSerializer
    queryset = Bollard.objects.all()
    label = 'bollard'