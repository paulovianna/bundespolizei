# -*- coding: utf-8 -*-
from django.db.models import Count
from django.shortcuts import render_to_response
from django.template import RequestContext
from mapprf.models import Ocorrencias, PrfRodovias


def ocorrenciasPolitica(request,tipo,cod):
	if tipo == 'municipio':
		ocorrencias = Ocorrencias.objects.filter(id_municipio = cod)
	else:
		ocorrencias = Ocorrencias.objects.filter(id_municipio = cod)
	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by().annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by().annotate(valor=Count('data'))

	for d in diaDaSemana:
		porc = (qtOcorrencias * d['valor']) / 100
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (qtOcorrencias * m['valor']) / 100
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (qtOcorrencias * h['valor']) / 100
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])

	return render_to_response('mapa_brasil.html',
                              RequestContext(request,{'ocorrencias':qtOcorrencias,
                                                      'mortes': mortes,
                                                      'diaDaSemana':diaDaSemana,
                                                      'mes':mes,
                                                      'hora':hora}))


def ocorrenciasSegmento(request,cod):
	segmento = PrfRodovias.objects.get(id=cod)
	ocorrencias = Ocorrencias.objects.filter(id_local__br=386,id_local__km__range=(segmento.kmi,segmento.kmf))
	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by().annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by().annotate(valor=Count('data'))

	for d in diaDaSemana:
		porc = (qtOcorrencias * d['valor']) / 100
		d['nome'] = d['id_dia_semana__dia_da_semana']
		d['porcentagem'] = porc
	for m in mes:
		porc = (qtOcorrencias * m['valor']) / 100
		m['porcentagem'] = porc
		m['nome'] = getMes(m['nome'])
	for h in hora:
		porc = (qtOcorrencias * h['valor']) / 100
		h['porcentagem'] = porc
		h['nome'] = int(h['nome'])

	return render_to_response('mapa_rodovia.html',
                              RequestContext(request,{'ocorrencias':qtOcorrencias,
                                                      'mortes': mortes,
                                                      'diaDaSemana':diaDaSemana,
                                                      'mes':mes,
                                                      'hora':hora}))


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