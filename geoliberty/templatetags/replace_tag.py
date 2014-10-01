from django import template

register = template.Library()

def replace(cord):
	return str(cord).replace(',','.')

register.filter('replace', replace)