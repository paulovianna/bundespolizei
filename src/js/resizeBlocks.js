/**
* Resize Elements
**/

wh = $(window).height();
fh = $('footer').outerHeight();
ch = $('.body').outerHeight();
hh = $('.header').outerHeight();

$(window).ready(function(){
	$('.body').css('min-height', (wh - fh - hh));
});

$(window).resize(function(){
	$('.body').css('min-height', (wh - fh - hh));
});

$(window).change(function(){
	$('.body').css('min-height', (wh - fh - hh));
});