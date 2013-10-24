from django.conf.urls.defaults import patterns,url
from views import ocorrenciasPolitica


urlpatterns = patterns('mapprf',
    url(r'^(?P<tipo>\w+)/(?P<cod>\w+)/$', ocorrenciasPolitica),
)