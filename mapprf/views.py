# -*- coding: utf-8 -*-
from django.db.models import Count
from django.shortcuts import render_to_response
from django.template import RequestContext
from mapprf.models import Ocorrencias

def ocorrenciasPolitica(request,tipo,cod):
	if tipo == 'municipio':
		ocorrencias = Ocorrencias.objects.filter(id_municipio = codPrf)
	else:
		#ocorrencias = Ocorrencias.objects.filter(id_municipio = codPrf)
	qtOcorrencias = ocorrencias.count()
	mortes = ocorrencias.filter(ocorrenciapessoa__id_pessoa__id_estado_fisico=4).count()
	diaDaSemana = ocorrencias.extra(select={'nome':'id_dia_semana'}).values('nome','id_dia_semana__dia_da_semana').order_by().annotate(valor=Count('id_dia_semana'))
	mes = ocorrencias.extra(select={'nome':'extract(month from data)'}).values('nome').order_by().annotate(valor=Count('data'))
	hora = ocorrencias.extra(select={'nome':'extract(hour from data)'}).values('nome').order_by().annotate(valor=Count('data'))
	
	for d in diaDaSemana:
		d['nome'] = d['id_dia_semana__dia_da_semana']

	return render_to_response('',
                              RequestContext(request,{'ocorrencias':qtOcorrencias,
                                                      'mortes': mortes,
                                                      'diadaSemana':diaDasemana,
                                                      'mes':mes,
                                                      'hora':hora}))

	

