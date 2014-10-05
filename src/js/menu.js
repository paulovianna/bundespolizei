var content = $('#content');
var menu_toggle = $('#menu-toggle');
var menu = $('#menu');
var menu_active = false;

menu_toggle.on('click', function(event){
	menu.toggleClass('sidebar-hidden');
	content.toggleClass('content-push');
	event.preventDefault();
});
