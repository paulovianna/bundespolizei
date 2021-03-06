# -*- coding: utf-8 -*-
from django.db.models import Count
from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.core.context_processors import csrf
from django.utils import simplejson
from django.db.models import Max
from mapprf.models import Ocorrencias, PrfRodovias, Local
from geoliberty.models import Municipio, Regiao, Uf, Pais
from django.views.decorators.cache import cache_page
from django.views.decorators.csrf import csrf_protect

def inicio(request):
	return render_to_response('mapprf.html',
                              RequestContext(request,{}))

def docs(request):
	return render_to_response('docs.html',
                              RequestContext(request,{}))

@cache_page(3600 * 24)
@csrf_protect
def ocorrencias(request):
	c = {}
	c.update(csrf(request))
	cidades = Municipio.objects.all().order_by('municipio')
	identificador = request.POST.get('cidade')

	if request.method == 'POST':
		ocorrencias = Ocorrencias.objects.filter(id_municipio = request.POST.get('cidade'))
		cidade = Municipio.objects.get(codPrf=request.POST.get('cidade'))
	else:
		cidade = 'Brasil'
		ocorrencias = Ocorrencias.objects.all()
	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))

	for d in diaDaSemana:
		porc = (100 * d['valor']) / qtOcorrencias
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (100 * d['valor']) / qtOcorrencias
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (100 * d['valor']) / qtOcorrencias
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])

	return render_to_response('mapa_brasil.html',
                              RequestContext(request,{'iden':identificador,
                              						  'ocorrencias':qtOcorrencias,
                                                      'mortes': mortes,
                                                      'diaDaSemana':diaDaSemana,
                                                      'mes':mes,
                                                      'hora':hora,
                                                      'cidades':cidades,
                                                      'cidade':cidade,
                                                      'c':c}))

def ocorrenciasMunicipio(request,cod):
	ocorrencias = Ocorrencias.objects.filter(id_municipio = cod)
	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))
	nomeMunicipio = Municipio.objects.filter(codPrf=cod)
	nomeMunicipio = nomeMunicipio[0].municipio
	identificador = cod

	for d in diaDaSemana:
		porc = (100 * d['valor']) / qtOcorrencias
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (100 * d['valor']) / qtOcorrencias
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (100 * d['valor']) / qtOcorrencias
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])

	return render_to_response('mapa_brasil.html',
                              RequestContext(request,{'iden':identificador,
                              						  'ocorrencias':qtOcorrencias,
                                                      'mortes': mortes,
                                                      'diaDaSemana':diaDaSemana,
                                                      'mes':mes,
                                                      'hora':hora,
                                                      'nome':nomeMunicipio}))


def ocorrenciasSegmento(request):
	cod = request.GET.get('id')
	br = request.GET.get('br')

	segmento = PrfRodovias.objects.get(id=cod)
	ocorrencias = Ocorrencias.objects.filter(id_local__br=br,id_local__km__range=(segmento.kmi,segmento.kmf))
	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))


	for d in diaDaSemana:
		porc = (100 * d['valor']) / qtOcorrencias
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (100 * m['valor']) / qtOcorrencias
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (100 * h['valor']) / qtOcorrencias
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])


	def ValuesQuerySetToDict(vqs):
		return [item for item in vqs]

	dados = {}
	data_dict = ValuesQuerySetToDict(diaDaSemana)
	data_dict1 = ValuesQuerySetToDict(mes)
	data_dict2 = ValuesQuerySetToDict(hora)

	dados['dia'] = data_dict
	dados['mes'] = data_dict1
	dados['hora'] = data_dict2
	dados['mortes'] = mortes
	dados['acidentes'] = qtOcorrencias

	data_json = simplejson.dumps(dados)

	return HttpResponse(data_json)

def pesquisa(request):
	string = request.GET.get("search")
	cidades = Municipio.objects.filter(municipio__icontains=string)
	regioes = Regiao.objects.filter(regiao__icontains=string)
	estados = Uf.objects.filter(uf__icontains=string);
	paises = Pais.objects.filter(pais__icontains=string);
	
	return render_to_response('resultados.html',
                              RequestContext(request,{'string':string,
                              						  'cidades':cidades,
                              						  'regioes':regioes,
                                                      'estados': estados,
                                                      'paises':paises}))


def ocorrenciasMunicipioAjax(request):
	cod = request.GET.get('id')
	dia = request.GET.get('dia')
	hora = request.GET.get('hora')
	mes = request.GET.get('mes')

	if cod == "Brasil":
		ocorrencias = Ocorrencias.objects.all()
	else:
		ocorrencias = Ocorrencias.objects.filter(id_municipio = cod)

	if dia != "ZZZ":
		ocorrencias = ocorrencias.filter(id_dia_semana = dia)

	if hora != "ZZZ":
		ocorrencias = ocorrencias.extra(where=['extract(hour from data) = '+hora])

	if mes != "ZZZ":
		ocorrencias = ocorrencias.extra(where=['extract(month from data) = '+mes])

	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))


	for d in diaDaSemana:
		porc = (100 * d['valor']) / qtOcorrencias
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (100 * m['valor']) / qtOcorrencias
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (100 * h['valor']) / qtOcorrencias
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])


	def ValuesQuerySetToDict(vqs):
		return [item for item in vqs]

	dados = {}
	data_dict = ValuesQuerySetToDict(diaDaSemana)
	data_dict1 = ValuesQuerySetToDict(mes)
	data_dict2 = ValuesQuerySetToDict(hora)

	dados['dia'] = data_dict
	dados['mes'] = data_dict1
	dados['hora'] = data_dict2
	dados['mortes'] = mortes
	dados['acidentes'] = qtOcorrencias

	data_json = simplejson.dumps(dados)

	return HttpResponse(data_json)

@cache_page(3600 * 24)
@csrf_protect
def ocorrenciasRodovia(request,cod=386):
	c = {}
	c.update(csrf(request))
	if request.method == 'POST':
		cod = request.POST.get('idBr')
	codigo = str(cod)
	rodovia = PrfRodovias.objects.filter(codigo__startswith=codigo)
	maior = 0
	for a in rodovia:
		count = Ocorrencias.objects.filter(id_local__br=cod,id_local__km__range=(a.kmi,a.kmf)).count()
		if((a.kmf - a.kmi) == 0 ):
			media = 1
		else:
			media = count / (a.kmf - a.kmi)
		if media > maior:
			maior = media
	for a in rodovia:
		ocorrenciasSeg = Ocorrencias.objects.filter(id_local__br=cod,id_local__km__range=(a.kmi,a.kmf))
		count = ocorrenciasSeg.count()
		if((a.kmf - a.kmi) == 0 ):
			media = 1
		else:
			media = count / (a.kmf - a.kmi)
		if(maior == 0):
			maior = 1
		porc = (100 * media) / maior
		if (porc >= 0) and (porc < 20):
			a.cor = '#369EAD'
		elif (porc >= 20) and (porc < 40):
			a.cor = '#86B402'
		elif (porc >= 40) and (porc < 60):
			a.cor = '#C8B631'
		elif (porc >= 60) and (porc < 80):
			a.cor = '#F79647'
		else:
			a.cor = '#C24642'
		a.ocorrencias = count
		a.mortes = ocorrenciasSeg.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	brs = Local.objects.values('br').order_by('br').distinct()
	ocorrencias = Ocorrencias.objects.filter(id_local__br=cod)
	pontos = Local.objects.filter(br=cod, ocorrencias__ocorrenciapessoa__id_pessoa__id_estado_fisico=4)
	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))

	for d in diaDaSemana:
		porc = (100 * d['valor']) / qtOcorrencias
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (100 * d['valor']) / qtOcorrencias
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (100 * d['valor']) / qtOcorrencias
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])

	return render_to_response('mapa_rodovia.html',
                              RequestContext(request,{'ocorrencias':qtOcorrencias,
                                                      'mortes': mortes,
                                                      'diaDaSemana':diaDaSemana,
                                                      'mes':mes,
                                                      'hora':hora,
                                                      'rodovia':rodovia,
                                                      'pontos':pontos,
                                                      'cod':cod,
                                                      'brs':brs,
                                                      'c':c}))



def ocorrenciasRodoviaAjax(request):
	br = request.GET.get('br')
	cod = request.GET.get('id')
	dia = request.GET.get('dia')
	hora = request.GET.get('hora')
	mes = request.GET.get('mes')

	if cod == "Brasil":
		ocorrencias = Ocorrencias.objects.filter(id_local__br=br)
	else:
		segmento = PrfRodovias.objects.get(id=cod)
		ocorrencias = Ocorrencias.objects.filter(id_local__br=br, id_local__km__range=(segmento.kmi,segmento.kmf))

	if dia != "ZZZ":
		ocorrencias = ocorrencias.filter(id_dia_semana = dia)

	if hora != "ZZZ":
		ocorrencias = ocorrencias.extra(where=['extract(hour from data) = '+hora])

	if mes != "ZZZ":
		ocorrencias = ocorrencias.extra(where=['extract(month from data) = '+mes])


	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by('nome').annotate(valor=Count('data'))


	for d in diaDaSemana:
		porc = (100 * d['valor']) / qtOcorrencias
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (100 * m['valor']) / qtOcorrencias
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (100 * h['valor']) / qtOcorrencias
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])


	def ValuesQuerySetToDict(vqs):
		return [item for item in vqs]

	dados = {}
	data_dict = ValuesQuerySetToDict(diaDaSemana)
	data_dict1 = ValuesQuerySetToDict(mes)
	data_dict2 = ValuesQuerySetToDict(hora)

	dados['dia'] = data_dict
	dados['mes'] = data_dict1
	dados['hora'] = data_dict2
	dados['mortes'] = mortes
	dados['acidentes'] = qtOcorrencias

	data_json = simplejson.dumps(dados)

	return HttpResponse(data_json)

def getMes(cod):
	if cod == 1.0:
		retorno = u'Janeiro'
	elif cod == 2.0:
		retorno = u'Fevereiro'
	elif cod == 3.0:
		retorno = u'Março'
	elif cod == 4.0:
		retorno = u'Abril'
	elif cod == 5.0:
		retorno = u'Maio'
	elif cod == 6.0:
		retorno = u'Junho'
	elif cod == 7.0:
		retorno = u'Julho'
	elif cod == 8.0:
		retorno = u'Agosto'
	elif cod == 9.0:
		retorno = u'Setembro'
	elif cod == 10.0:
		retorno = u'Outubro'
	elif cod == 11.0:
		retorno = u'Novembro'
	else:
		retorno = u'Dezembro'
	return retorno
