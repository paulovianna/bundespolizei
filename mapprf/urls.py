from django.conf.urls.defaults import patterns,url
from views import ocorrenciasMunicipio, ocorrenciasSegmento, ocorrenciasRodovia, inicio, docs, ocorrencias


urlpatterns = patterns('mapprf',
	url(r'^$', inicio),
	url(r'^docs/$', docs),
	url(r'^municipio/$', ocorrencias),
    url(r'^municipio/(?P<cod>\w+)/$', ocorrenciasMunicipio),
    url(r'^segmento/$', ocorrenciasSegmento),
    url(r'^rodovia/$', ocorrenciasRodovia),
)	