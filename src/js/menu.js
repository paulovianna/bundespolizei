var content = document.getElementById('content');
var menu_toggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menu');
var menu_active = false;

menu_toggle.onclick = function(event){
	classie.toggle(menu, 'sidebar-hidden');
	classie.toggle(content, 'content-push');
	menu_active = true;
	event.preventDefault();	
};

content.onclick = function(){
	if(menu_active == true){
		classie.toggle(menu, 'sidebar-hidden');
		classie.toggle(content, 'content-push');
		menu_active = false;
	}
}