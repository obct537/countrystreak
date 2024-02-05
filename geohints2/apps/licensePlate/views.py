from .serializers import LicensePlateSerializer
from .models import LicensePlate
from views.TraitView import TraitView

@TraitView.register_trait_view
class LicensePlateView(TraitView):
    serializer_class = LicensePlateSerializer
    queryset = LicensePlate.objects.all()
    label = 'licenseplate'