ffrom django.conf.urls.defaults import patterns,url
from views import ocorrenciasBrasil, ocorrenciasSegmento


urlpatterns = patterns('mapprf',
    url(r'^(?P<tipo>\w+)/(?P<cod>\w+)/$', ocorrenciasBrasil),
    url(r'^segmento/(?P<cod>\w+)/$', ocorrenciasSegmento),
)