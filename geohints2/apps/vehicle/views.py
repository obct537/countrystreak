from .serializers import VehicleSerializer
from .models import Vehicle
from views.TraitView import TraitView

@TraitView.register_trait_view
class VehicleView(TraitView):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()
    label = 'vehicle'
