from django.contrib.gis import admin
from mapprf.models import DiaSemana,EstadoFisico,Local,OcorrenciaPessoa,Ocorrencias,Pessoa,PrfRodovias,Rodovias,Segmento
from django.db import models     

class AdminGeo(admin.OSMGeoAdmin):
    
    scrollable = True
    map_width = 700
    map_height = 350
    
class RodoviasAdmin(AdminGeo):
    pass

class SegmentoAdmin(AdminGeo):
    pass

class PrfRodoviasAdmin(AdminGeo):
    pass

admin.site.register(DiaSemana)
admin.site.register(EstadoFisico)
admin.site.register(Local)
admin.site.register(Ocorrencias)
admin.site.register(OcorrenciaPessoa)
admin.site.register(Pessoa)
admin.site.register(Rodovias,RodoviasAdmin)
admin.site.register(Segmento,SegmentoAdmin)
admin.site.register(PrfRodovias,PrfRodoviasAdmin)