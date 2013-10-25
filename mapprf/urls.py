from django.conf.urls.defaults import patterns,url
from views import ocorrenciasMunicipio, ocorrenciasSegmento, ocorrenciasRodovia


urlpatterns = patterns('mapprf',
    url(r'^municipio/(?P<cod>\w+)/', ocorrenciasMunicipio),
    url(r'^segmento/(?P<cod>\w+)/$', ocorrenciasSegmento),
    url(r'^rodovia/(?P<cod>\w+)/$', ocorrenciasRodovia),
)