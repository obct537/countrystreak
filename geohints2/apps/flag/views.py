from .serializers import FlagSerializer
from .models import Flag
from views.TraitView import TraitView

@TraitView.register_trait_view
class FlagView(TraitView):
    serializer_class = FlagSerializer
    queryset = Flag.objects.all()
    label = 'flag'