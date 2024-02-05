from .serializers import CountrySerializer
from .models import Country
from views.TraitView import TraitView

@TraitView.register_trait_view
class CountryView(TraitView):
    serializer_class = CountrySerializer
    queryset = Country.objects.all()
    label = 'country'