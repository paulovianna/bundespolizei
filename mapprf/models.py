from __future__ import unicode_literals

from django.contrib.gis.db import models

class DiaSemana(models.Model):
    id = models.IntegerField(primary_key=True)
    dia_da_semana = models.CharField(max_length=32, blank=True)
    class Meta:
        db_table = '"ocorrencias\".\"dia_semana"'

    def __unicode__(self):
        return self.dia_da_semana

class EstadoFisico(models.Model):
    id = models.IntegerField(primary_key=True)
    estado_fisico = models.CharField(max_length=32, blank=True)
    class Meta:
        db_table = '"ocorrencias\".\"estado_fisico"'

    def __unicode__(self):
        return self.estado_fisico

class Local(models.Model):
    id = models.IntegerField(primary_key=True)
    br = models.CharField(max_length=8, blank=True)
    km = models.FloatField(null=True, blank=True)
    class Meta:
        db_table = '"ocorrencias\".\"local"'

    def __unicode__(self):
        return self.br

class OcorrenciaPessoa(models.Model):
    id = models.IntegerField(primary_key=True)
    id_pessoa = models.ForeignKey('Pessoa', null=True, db_column='id_pessoa', blank=True)
    id_ocorrencia = models.ForeignKey('Ocorrencias', null=True, db_column='id_ocorrencia', blank=True)
    class Meta:
        db_table = '"ocorrencias\".\"ocorrencia_pessoa"'

    def __unicode__(self):
        return self.id

class Ocorrencias(models.Model):
    id = models.IntegerField(primary_key=True)
    id_local = models.ForeignKey(Local, null=True, db_column='id_local', blank=True)
    id_municipio = models.IntegerField(null=True, blank=True)
    data = models.DateTimeField(null=True, blank=True)
    id_dia_semana = models.ForeignKey(DiaSemana, null=True, db_column='id_dia_semana', blank=True)
    class Meta:
        db_table = '"ocorrencias\".\"ocorrencias"'

    def __unicode__(self):
        return self.id

class Pessoa(models.Model):
    id = models.IntegerField(primary_key=True)
    id_municipio = models.IntegerField(null=True, blank=True)
    id_estado_fisico = models.ForeignKey(EstadoFisico, null=True, db_column='id_estado_fisico', blank=True)
    class Meta:
        db_table = '"ocorrencias\".\"pessoa"'

    def __unicode__(self):
        return self.id

class PrfRodovias(models.Model):
    id = models.IntegerField(primary_key=True)
    kmi = models.FloatField()
    kmf = models.FloatField()
    modal = models.CharField(max_length=128)
    descseg = models.CharField(max_length=256)
    seg_c1 = models.CharField(max_length=128)
    seg_c2 = models.CharField(max_length=128)
    seg_c3 = models.CharField(max_length=128)
    tipopnv = models.CharField(max_length=128)
    codigo = models.CharField(max_length=128)
    geometry = models.LineStringField('Linha')
    class Meta:
        db_table = '"malha_viaria\".\"prf_rodovias"'

    def __unicode__(self):
        return self.id

class Rodovias(models.Model):
    id = models.IntegerField(primary_key=True)
    rodovia = models.CharField(max_length=8, blank=True)
    geo = models.LineStringField('Linha')
    class Meta:
        db_table = '"malha_viaria\".\"rodovias"'

    def __unicode__(self):
        return self.rodovia

class Segmento(models.Model):
    id = models.IntegerField(primary_key=True)
    kmi = models.FloatField(null=True, blank=True)
    kmf = models.FloatField(null=True, blank=True)
    id_rodovia = models.ForeignKey(Rodovias, null=True, db_column='id_rodovia', blank=True)
    geo = models.LineStringField('Linha')
    class Meta:
        db_table = '"malha_viaria\".\"segmento"'

    def __unicode__(self):
        return self.id