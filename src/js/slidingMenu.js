/**
*
* Sliding Responsive Menu
*
**/

$('.toggle-menu').on('click touchstart', function(e){
	$('body').toggleClass('menu-active');
	e.preventDefault();
});