/**
* bundespolizei v0.0.1 
* Copyright 2013 bundespolizei 
* @contributors: { 
*    Augusto Lazzarotto <gumaro@gmail.com,
*    Guto Foletto <gutofoletto@gmail.com> (http://about.me/gutofoletto),
*    Paulo Henrique Vianna <phtsiufsm@gmail.com>,
*    Vinicius Bisognin <vinibiso@gmail.com> 
* }
*/
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);;/*
 CanvasJS v1.3.0 Beta 3 - http://canvasjs.com/ 
 Copyright 2013 fenopix
*/
(function(){function N(a,c){a.prototype=ra(c.prototype);a.prototype.constructor=a;a.parent=c.prototype}function ra(a){function c(){}c.prototype=a;return new c}function ha(a,c,b){"millisecond"===b?a.setMilliseconds(a.getMilliseconds()+1*c):"second"===b?a.setSeconds(a.getSeconds()+1*c):"minute"===b?a.setMinutes(a.getMinutes()+1*c):"hour"===b?a.setHours(a.getHours()+1*c):"day"===b?a.setDate(a.getDate()+1*c):"week"===b?a.setDate(a.getDate()+7*c):"month"===b?a.setMonth(a.getMonth()+1*c):"year"===b&&a.setFullYear(a.getFullYear()+
1*c);return a}function R(a,c){return z[c+"Duration"]*a}function F(a,c){var b=!1;0>a&&(b=!0,a*=-1);a=""+a;for(c=c?c:1;a.length<c;)a="0"+a;return b?"-"+a:a}function $(a){a=a.replace(/^\s\s*/,"");for(var c=/\s/,b=a.length;c.test(a.charAt(--b)););return a.slice(0,b+1)}function sa(a){a.roundRect=function(a,b,d,e,f,g,h,m){h&&(this.fillStyle=h);m&&(this.strokeStyle=m);"undefined"==typeof stroke&&(stroke=!0);"undefined"===typeof f&&(f=5);this.lineWidth=g;this.beginPath();this.moveTo(a+f,b);this.lineTo(a+
d-f,b);this.quadraticCurveTo(a+d,b,a+d,b+f);this.lineTo(a+d,b+e-f);this.quadraticCurveTo(a+d,b+e,a+d-f,b+e);this.lineTo(a+f,b+e);this.quadraticCurveTo(a,b+e,a,b+e-f);this.lineTo(a,b+f);this.quadraticCurveTo(a,b,a+f,b);this.closePath();h&&this.fill();m&&0<g&&this.stroke()}}function ia(a,c){return a-c}function ta(a,c){return a.x-c.x}function B(a){var c=((a&16711680)>>16).toString(16),b=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);c=2>c.length?"0"+c:c;b=2>b.length?"0"+b:b;a=2>a.length?"0"+
a:a;return"#"+c+b+a}function aa(a){var c=[];c[0]=(a&16711680)>>16;c[1]=(a&65280)>>8;c[2]=(a&255)>>0;return c}function K(a,c,b,d){if(a.addEventListener)a.addEventListener(c,b,d||!1);else if(a.attachEvent)a.attachEvent("on"+c,function(c){c=c||window.event;c.preventDefault=c.preventDefault||function(){c.returnValue=!1};c.stopPropagation=c.stopPropagation||function(){c.cancelBubble=!0};b.call(a,c)});else return!1}function ja(a,c,b){a*=O;c*=O;a=b.getImageData(a,c,2,2).data;c=!0;for(b=0;4>b;b++)if(a[b]!==
a[b+4]|a[b]!==a[b+8]|a[b]!==a[b+12]){c=!1;break}return c?a[0]<<16|a[1]<<8|a[2]:0}function P(a,c,b){return a in c?c[a]:b[a]}function V(a,c,b){if(t&&ka){var d=a.getContext("2d");W=d.webkitBackingStorePixelRatio||d.mozBackingStorePixelRatio||d.msBackingStorePixelRatio||d.oBackingStorePixelRatio||d.backingStorePixelRatio||1;O=ba/W;a.width=c*O;a.height=b*O;ba!==W&&(a.style.width=c+"px",a.style.height=b+"px",d.scale(O,O))}else a.width=c,a.height=b}function X(a,c){var b=document.createElement("canvas");
V(b,a,c);t||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(b);return b}function H(a,c,b){this._defaultsKey=a;currentTheme={};b&&(ca[b]&&ca[b][a])&&(currentTheme=ca[b][a]);this._options=c?c:{};this.setOptions(this._options,currentTheme)}function w(a,c){c=c||{};w.parent.constructor.call(this,"Chart",c,c.theme?c.theme:"theme1");var b=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType=
"";this.panEnabled=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};this._dataInRenderedOrder=[];if(this._container=document.getElementById(this._containerId)){this._container.innerHTML="";var d=0,e=0,d=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,e=this._options.height?this.height:0<this._container.clientHeight?this._container.clientHeight:this.height;this.width=d;this.height=e;this._canvasJSContainer=
document.createElement("div");this._canvasJSContainer.style.position="relative";t||(this._canvasJSContainer.style.height="0px");this._container.appendChild(this._canvasJSContainer);this.canvas=X(d,e);this.canvas.style.position="absolute";this.canvas.getContext&&(this.canvas.style.background=this.backgroundColor,this._canvasJSContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.ctx.textBaseline="top",sa(this.ctx),t?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=X(d,e),this.plotArea.canvas.style.position=
"absolute",this.plotArea.canvas.setAttribute("class","plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d")),this.overlaidCanvas=X(d,e),this.overlaidCanvas.style.position="absolute",this._canvasJSContainer.appendChild(this.overlaidCanvas),this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d"),this.overlaidCanvasCtx.textBaseline="top",this._eventManager=new Y(this),this._toolBar=document.createElement("div"),this._toolBar.style.position=
"absolute",this._toolBar.style.top="0px",this._toolBar.style.right="0px",this._canvasJSContainer.appendChild(this._toolBar),this.zoomEnabled&&(this._zoomButton=document.createElement("button"),this._zoomButton.appendChild(document.createTextNode("Pan")),this._toolBar.appendChild(this._zoomButton),K(this._zoomButton,"click",function(){b.zoomEnabled?(b.zoomEnabled=!1,b.panEnabled=!0,b._zoomButton.innerHTML=b._cultureInfo.zoomText):(b.zoomEnabled=!0,b.panEnabled=!1,b._zoomButton.innerHTML=b._cultureInfo.panText);
b.render()})),this.zoomEnabled&&(this._resetButton=document.createElement("button"),this._resetButton.appendChild(document.createTextNode("Reset")),this._toolBar.appendChild(this._resetButton),this.zoomEnabled=this._options.zoomEnabled?!0:!1,this.panEnabled=!1,this.overlaidCanvas.style.cursor=b._defaultCursor,K(this._resetButton,"click",function(){b._toolTip.hide();b.zoomEnabled||b.panEnabled?(b.zoomEnabled=!0,b.panEnabled=!1,b._zoomButton.innerHTML=b._cultureInfo.panText,b._defaultCursor="default",
b.overlaidCanvas.style.cursor=b._defaultCursor):(b.zoomEnabled=!1,b.panEnabled=!1);b.sessionVariables.axisX.internalMinimum=b._options.axisX&&b._options.axisX.minimum?b._options.axisX.minimum:null;b.sessionVariables.axisX.internalMaximum=b._options.axisX&&b._options.axisX.maximum?b._options.axisX.maximum:null;b.resetOverlayedCanvas();b.render()})),K(window,"resize",function(){var a=0,c=0;b._options.width?a=b.width:b.width=a=0<b._container.clientWidth?b._container.clientWidth:b.width;b._options.height?
c=b.height:b.height=c=0<b._container.clientHeight?b._container.clientHeight:b.height;if(b.canvas.width!==a*O||b.canvas.height!==c*O)b.renderCount--,V(b.canvas,a,c),V(b.overlaidCanvas,a,c),V(b._eventManager.ghostCanvas,a,c),b.render()}),this._toolBar.style.display="none",this.bounds={x1:0,y1:0,x2:this.width,y2:this.height},b=this,K(this.overlaidCanvas,"click",function(a){b._mouseEventHandler(a)}),K(this.overlaidCanvas,"mousemove",function(a){b._mouseEventHandler(a)}),K(this.overlaidCanvas,"mouseup",
function(a){b._mouseEventHandler(a)}),K(this.overlaidCanvas,"mousedown",function(a){b._mouseEventHandler(a)}),K(this.overlaidCanvas,"mouseout",function(a){b._mouseEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){b._touchEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){b._touchEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerUp":"touchend",
function(a){b._touchEventHandler(a)}),K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){b._touchEventHandler(a)}),this._toolTip=new L(this,this._options.toolTip,this.theme),this.layoutManager=new S(this),this.axisY2=this.axisY=this.axisX=this.data=null,this.renderCount=0,this.creditText&&this.creditHref&&(this._creditLink=document.createElement("a"),this._creditLink.setAttribute("style","outline:none;margin:0px;position:absolute;right:3px;top:"+(e-
14)+"px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),this._creditLink.setAttribute("tabIndex",-1),this._creditLink.setAttribute("href",this.creditHref),this._creditLink.innerHTML=this.creditText,this._creditLink.setAttribute("target","_blank"),this._canvasJSContainer.appendChild(this._creditLink)),this.sessionVariables={axisX:{internalMinimum:null,internalMaximum:null},axisY:{internalMinimum:null,internalMaximum:null},axisY2:{internalMinimum:null,
internalMaximum:null}})}}function la(a,c){for(var b=[],d=0;d<a.length;d++)if(0==d)b.push(a[0]);else{var e,f,g;g=d-1;e=0===g?0:g-1;f=g===a.length-1?g:g+1;b[b.length]={x:a[g].x+(a[f].x-a[e].x)/c/3,y:a[g].y+(a[f].y-a[e].y)/c/3};g=d;e=0===g?0:g-1;f=g===a.length-1?g:g+1;b[b.length]={x:a[g].x-(a[f].x-a[e].x)/c/3,y:a[g].y-(a[f].y-a[e].y)/c/3};b[b.length]=a[d]}return b}function S(a){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=0;this.chart=a}function D(a,c){D.parent.constructor.call(this,
"TextBlock",c);this.ctx=a;this._isDirty=!0;this._wrappedText=null}function T(a,c){T.parent.constructor.call(this,"Title",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function Z(a,c,b){Z.parent.constructor.call(this,"Legend",c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.height=this.width=
0;this.orientation=null;this.horizontalSpacing=10;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null}}function da(a,c){da.parent.constructor.call(this,c);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}function M(a,c,b,d,e){M.parent.constructor.call(this,"DataSeries",c,b);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=d;this.maxWidthInX=this.noDataPointsInPlotArea=0;this.id=e;this.dataPointIds=[];this.axisY=this.axisX=null;this.axisPlacement=this.getDefaultAxisPlacement();
"undefined"===typeof this._options.indexLabelFontSize&&(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function A(a,c,b,d){A.parent.constructor.call(this,"Axis",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};"axisX"===b?(this.sessionVariables=this.chart.sessionVariables[b],
this._options.interval||(this.intervalType=null)):this.sessionVariables="left"===d||"top"===d?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2;"undefined"===typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this._options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=b;c&&"undefined"!==typeof c.gridThickness||(this.gridThickness="axisX"===b?0:1);this._position=
d;this.lineCoordinates={x1:null,y1:null,x2:null,y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:180<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);this._absoluteMaximum=this._absoluteMinimum=this._titleTextBlock=null;this.hasOptionChanged("minimum")&&(this.sessionVariables.internalMinimum=this.minimum);this.hasOptionChanged("maximum")&&(this.sessionVariables.internalMaximum=
this.maximum);this.trackChanges("minimum");this.trackChanges("maximum")}function L(a,c,b){L.parent.constructor.call(this,"ToolTip",c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this._initialize()}function Y(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=X(this.chart.width,this.chart.height);
this.ghostCtx=this.ghostCanvas.getContext("2d")}function ma(a,c){var b;c&&ea[c]&&(b=ea[c]);T.parent.constructor.call(this,"CultureInfo",b,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}var t=!!document.createElement("canvas").getContext,na={Chart:{width:500,height:400,zoomEnabled:!1,backgroundColor:"white",theme:"theme1",animationEnabled:t?!0:!1,colorSet:"colorSet1",culture:"en",/*creditHref:"http://canvasjs.com/",creditText:"CanvasJS.com"*/},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",
zoomText:"Zoom",panText:"Pan",resetText:"Reset",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",
borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:5},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,cursor:null,indexLabel:"",indexLabelPlacement:"outside",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:"#808080",indexLabelLineThickness:1,lineThickness:2,color:null,startAngle:0,
type:"column",xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null},Axis:{minimum:null,maximum:null,interval:null,intervalType:null,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",titleFontWeight:"normal",
titleFontStyle:"normal",labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!1,labelWrap:!0,labelMaxWidth:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,gridColor:"A0A0A0",gridThickness:0,interlacedColor:null,valueFormatString:null,margin:2},Legend:{name:null,borderThickness:0,borderColor:"black",cornerRadius:0,verticalAlign:"center",horizontalAlign:"right",
fontSize:14,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal"},ToolTip:{enabled:!0,borderColor:null,shared:!1,animationEnabled:!0,content:null},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"}},ea={en:{}},U={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),
colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},ca={theme1:{Chart:{colorSet:U[0]},Title:{fontFamily:"Calibri, Optima, Candara, Verdana, Geneva, sans-serif",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:"Calibri, Optima, Candara, Verdana, Geneva, sans-serif",
labelFontFamily:"Calibri, Optima, Candara, Verdana, Geneva, sans-serif",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:"monospace, sans-serif,arial black"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:"Calibri, Optima, Candara, Verdana, Geneva, sans-serif",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}},
theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:"monospace, sans-serif,arial black",titleFontWeight:"bold",labelFontFamily:"monospace, Courier New, Courier",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",
horizontalAlign:"center",fontFamily:"monospace, sans-serif,arial black"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:"Courier New, Courier, monospace",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif",fontSize:32,fontColor:"rgb(68,78,58)",fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",
margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:"Verdana, Geneva, Calibri, sans-serif",labelFontFamily:"Calibri, Optima, Candara, Verdana, Geneva, sans-serif",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:"monospace, sans-serif,arial black"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:"Candara, Optima, Calibri, Verdana, Geneva, sans-serif",
indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},z={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},oa=function(){var a=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,c="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
b="Sun Mon Tue Wed Thu Fri Sat".split(" "),d="January February March April May June July August September October November December".split(" "),e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),f=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,g=/[^-+\dA-Z]/g;return function(h,m,l){var k=l?l.days:c,r=l?l.months:d,q=l?l.shortDays:b,p=l?l.shortMonths:e;l="";var n=!1;h=h&&h.getTime?h:h?new Date(h):new Date;
if(isNaN(h))throw SyntaxError("invalid date");"UTC:"==m.slice(0,4)&&(m=m.slice(4),n=!0);l=n?"getUTC":"get";var u=h[l+"Date"](),s=h[l+"Day"](),t=h[l+"Month"](),v=h[l+"FullYear"](),x=h[l+"Hours"](),w=h[l+"Minutes"](),z=h[l+"Seconds"](),fa=h[l+"Milliseconds"](),A=n?0:h.getTimezoneOffset();return l=m.replace(a,function(a){switch(a){case "D":return u;case "DD":return F(u,2);case "DDD":return q[s];case "DDDD":return k[s];case "M":return t+1;case "MM":return F(t+1,2);case "MMM":return p[t];case "MMMM":return r[t];
case "Y":return parseInt(String(v).slice(-2));case "YY":return F(String(v).slice(-2),2);case "YYY":return F(String(v).slice(-3),3);case "YYYY":return F(v,4);case "h":return x%12||12;case "hh":return F(x%12||12,2);case "H":return x;case "HH":return F(x,2);case "m":return w;case "mm":return F(w,2);case "s":return z;case "ss":return F(z,2);case "f":return String(fa).slice(0,1);case "ff":return F(String(fa).slice(0,2),2);case "fff":return F(String(fa).slice(0,3),3);case "t":return 12>x?"a":"p";case "tt":return 12>
x?"am":"pm";case "T":return 12>x?"A":"P";case "TT":return 12>x?"AM":"PM";case "K":return n?"UTC":(String(h).match(f)||[""]).pop().replace(g,"");case "z":return(0<A?"-":"+")+Math.floor(Math.abs(A)/60);case "zz":return(0<A?"-":"+")+F(Math.floor(Math.abs(A)/60),2);case "zzz":return(0<A?"-":"+")+F(Math.floor(Math.abs(A)/60),2)+F(Math.abs(A)%60,2);default:return a.slice(1,a.length-1)}})}}(),ga=function(a,c,b){a=Number(a);var d=0>a?!0:!1;d&&(a*=-1);decimalSeparator=b?b.decimalSeparator:".";digitGroupSeparator=
b?b.digitGroupSeparator:",";var e="";c=String(c);for(var e=1,f=b="",g=-1,h=[],m=[],l=0,k=0,r=0,e=1,q=!1,p=0,f=c.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g),n=0;f&&n<f.length;n++)if(c=f[n],"."===c&&0>g)g=n;else{if("%"===c)e*=100;else if("\u2030"===c){e*=1E3;continue}else if(","===c[0]&&"."===c[c.length-1]){e/=Math.pow(1E3,c.length-1);g=n+c.length-1;continue}else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||(q=!0);0>g?(h.push(c),"#"===c||"0"===c?l++:","===c&&r++):(m.push(c),"#"!==c&&"0"!==
c||k++)}q&&(c=Math.floor(a),p=(0===c?"":String(c)).length-l,e/=Math.pow(10,p));0>g&&(g=n);e=(a*e).toFixed(k);c=e.split(".");a=(c[0]+"").split("");e=(c[1]+"").split("");a&&"0"===a[0]&&a.shift();for(n=q=f=k=g=0;0<h.length;)if(c=h.pop(),"#"===c||"0"===c)if(g++,g===l){var u=a;a=[];if("0"===c)for(c=l-k-(u?u.length:0);0<c;)u.unshift("0"),c--;for(;0<u.length;)b=u.pop()+b,n++,0===n%q&&(f===r&&0<u.length)&&(b=digitGroupSeparator+b);d&&(b="-"+b)}else 0<a.length?(b=a.pop()+b,k++,n++):"0"===c&&(b="0"+b,k++,n++),
0===n%q&&(f===r&&0<a.length)&&(b=digitGroupSeparator+b);else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?","===c?(f++,q=n,n=0,0<a.length&&(b=digitGroupSeparator+b)):b=1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?c.slice(1,c.length-1)+b:c+b:(c=0>p?c.replace("+","").replace("-",""):c.replace("-",""),b+=c.replace(/[0]+/,function(a){return F(p,a.length)}));for(d=0;0<m.length;)c=m.shift(),"#"===c||"0"===c?0<e.length&&0!==Number(e.join(""))?b+=
(0===d++?decimalSeparator:"")+e.shift():"0"===c&&(b+=(0===d++?decimalSeparator:"")+"0"):1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?b+=(0===d++?decimalSeparator:"")+c.slice(1,c.length-1):"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?b+=(0===d++?decimalSeparator:"")+c:(c=0>p?c.replace("+","").replace("-",""):c.replace("-",""),b+=c.replace(/[0]+/,function(a){return F(p,a.length)}));return b},pa=function(a){var c=0,b=0;a||(a=window.event);a.offsetX||
0===a.offsetX?(c=a.offsetX,b=a.offsetY):a.layerX||0==a.layerX?(c=a.layerX,b=a.layerY):(c=a.pageX-a.target.offsetLeft,b=a.pageY-a.target.offsetTop);return{x:c,y:b}},ka=!0,ba=window.devicePixelRatio||1,W=1,O=ka?ba/W:1;H.prototype.setOptions=function(a,c){if(na[this._defaultsKey]){var b=na[this._defaultsKey];for(prop in b)this[prop]=a&&prop in a?a[prop]:c&&prop in c?c[prop]:b[prop]}};H.prototype.trackChanges=function(a){this._options._oldOptions||(this._options._oldOptions={});this._options._oldOptions[a]=
this._options[a]};H.prototype.isBeingTracked=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]?!0:!1};H.prototype.hasOptionChanged=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]!==this._options[a]};N(w,H);w.prototype._initialize=function(){this._selectedColorSet="undefined"!==typeof U[this.colorSet]?U[this.colorSet]:U.colorSet1;this.ctx.clearRect(0,0,this.width,this.height);this.ctx.beginPath();
this.axisY2=this.axisY=this.axisX=null;this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};this.layoutManager.reset();this._cultureInfo=new ma(this,this._options.culture);this.data=[];for(var a=0,c=0;c<this._options.data.length;c++)if(a++,!this._options.data[c].type||0<=w._supportedChartTypes.indexOf(this._options.data[c].type)){var b=new M(this,this._options.data[c],this.theme,
a-1,++this._eventManager.lastObjectId);null===b.name&&(b.name="DataSeries "+a);null===b.color?1<this._options.data.length?(b._colorSet=[this._selectedColorSet[b.index%this._selectedColorSet.length]],b.color=this._selectedColorSet[b.index%this._selectedColorSet.length]):b._colorSet="line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"splineArea"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type?[this._selectedColorSet[0]]:this._selectedColorSet:b._colorSet=[b.color];
null===b.markerSize&&(("line"===b.type||"stepLine"===b.type||"spline"===b.type)&&b.dataPoints.length<this.width/16||"scatter"===b.type)&&(b.markerSize=8);"bubble"!==b.type&&"scatter"!==b.type||b.dataPoints.sort(ta);this.data.push(b);var d=b.axisPlacement,e;"normal"===d?"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement=
"normal"):"xySwapped"===d?"normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==d&&("normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+
'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(e&&window.console){window.console.log(e);return}}this._objectsInitialized=!0};w._supportedChartTypes="line stepLine spline column area splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 pie doughnut".split(" ");w._supportedChartTypes.indexOf||(w._supportedChartTypes.indexOf=function(a,c){var b=this.length>>>0,d=Number(c)||0,d=0>d?Math.ceil(d):
Math.floor(d);for(0>d&&(d+=b);d<b;d++)if(d in this&&this[d]===a)return d;return-1});w.prototype.render=function(){this._initialize();for(var a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.data[a].axisYType&&"primary"!==this.data[a].axisYType?"secondary"===this.data[a].axisYType&&(this.axisY2||("normal"===this.plotInfo.axisPlacement?this.axisY2=new A(this,this._options.axisY2,"axisY","right"):"xySwapped"===this.plotInfo.axisPlacement&&
(this.axisY2=new A(this,this._options.axisY2,"axisY","top"))),this.data[a].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this.axisY=new A(this,this._options.axisY,"axisY","left"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY=new A(this,this._options.axisY,"axisY","bottom"))),this.data[a].axisY=this.axisY),this.axisX||("normal"===this.plotInfo.axisPlacement?this.axisX=new A(this,this._options.axisX,"axisX","bottom"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisX=
new A(this,this._options.axisX,"axisX","left"))),this.data[a].axisX=this.axisX;this._processData();this._options.title&&(this._title=new T(this,this._options.title),this._title.render());this.legend=new Z(this,this._options.legend,this.theme);for(a=0;a<this.data.length;a++)this.data[a].showInLegend&&this.legend.dataSeries.push(this.data[a]);this.legend.render();if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.layoutManager.getFreeSpace(),A.setLayoutAndRender(this.axisX,
this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<this.plotInfo.plotTypes.length;a++)for(var c=this.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++){var d=c.plotUnits[b];"line"===d.type?this.renderLine(d):"stepLine"===d.type?this.renderStepLine(d):"spline"===d.type?this.renderSpline(d):"column"===d.type?this.renderColumn(d):"bar"===d.type?this.renderBar(d):"area"===d.type?
this.renderArea(d):"splineArea"===d.type?this.renderSplineArea(d):"stackedColumn"===d.type?this.renderStackedColumn(d):"stackedColumn100"===d.type?this.renderStackedColumn100(d):"stackedBar"===d.type?this.renderStackedBar(d):"stackedBar100"===d.type?this.renderStackedBar100(d):"stackedArea"===d.type?this.renderStackedArea(d):"stackedArea100"===d.type?this.renderStackedArea100(d):"bubble"===d.type?this.renderBubble(d):"scatter"===d.type?this.renderScatter(d):"pie"===d.type?this.renderPie(d):"doughnut"===
d.type&&this.renderPie(d);for(var e=0;e<d.dataSeriesIndexes.length;e++)this._dataInRenderedOrder.push(this.data[d.dataSeriesIndexes[e]])}0<this._indexLabels.length&&this.renderIndexLabels();this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||"none"===this._toolBar.style.display)||(this._toolBar.style.display="none");this._toolTip._updateToolTip();this.renderCount++};w.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,
mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};w.prototype.categoriseDataSeries=function(){for(var a="",c=0;c<this.data.length;c++)if(a=this.data[c],a.dataPoints&&0!==a.dataPoints.length&&0<=w._supportedChartTypes.indexOf(a.type)){for(var b=null,d=!1,e=null,f=!1,g=0;g<this.plotInfo.plotTypes.length;g++)if(this.plotInfo.plotTypes[g].type===a.type){d=!0;b=this.plotInfo.plotTypes[g];
break}d||(b={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(g=0;g<b.plotUnits.length;g++)if(b.plotUnits[g].axisYType===a.axisYType){f=!0;e=b.plotUnits[g];break}f||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisYType:a.axisYType,axisY:"primary"===a.axisYType?this.axisY:this.axisY2,axisX:this.axisX,dataSeriesIndexes:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(c)}for(c=0;c<this.plotInfo.plotTypes.length;c++)for(b=
this.plotInfo.plotTypes[c],g=a=0;g<b.plotUnits.length;g++)b.plotUnits[g].previousDataSeriesCount=a,a+=b.plotUnits[g].dataSeriesIndexes.length};w.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++)for(var c=this.data[a],b=c.dataPoints.length,d=0;d<b;d++)c.dataPointIds[d]=++this._eventManager.lastObjectId};w.prototype._processData=function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var c=this.plotInfo.plotTypes[a],
b=0;b<c.plotUnits.length;b++){var d=c.plotUnits[b];"line"===d.type||"stepLine"===d.type||"spline"===d.type||"column"===d.type||"area"===d.type||"splineArea"===d.type||"bar"===d.type||"bubble"===d.type||"scatter"===d.type?this._processMultiseriesPlotUnit(d):"stackedColumn"===d.type||"stackedBar"===d.type||"stackedArea"===d.type?this._processStackedPlotUnit(d):"stackedColumn100"!==d.type&&"stackedBar100"!==d.type&&"stackedArea100"!==d.type||this._processStacked100PlotUnit(d)}};w.prototype._processMultiseriesPlotUnit=
function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=0;g<a.dataSeriesIndexes.length;g++){var h=this.data[a.dataSeriesIndexes[g]],m=0,l=!1,k=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var r=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,q=this.sessionVariables.axisX.internalMaximum?
this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(h.dataPoints[m].x&&h.dataPoints[m].x.getTime||"dateTime"===h.xValueType)f=!0;for(m=0;m<h.dataPoints.length;m++){"undefined"===typeof h.dataPoints[m].x&&(h.dataPoints[m].x=m);h.dataPoints[m].x.getTime?(f=!0,d=h.dataPoints[m].x.getTime()):d=h.dataPoints[m].x;e=h.dataPoints[m].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);e<c.min&&(c.min=e);e>c.max&&(c.max=e);if(0<m){var p=d-
h.dataPoints[m-1].x;0>p&&(p*=-1);b.minDiff>p&&0!==p&&(b.minDiff=p)}if(!(d<r)||l){if(!l&&(l=!0,0<m)){m-=2;continue}if(d>q&&!k)k=!0;else if(d>q&&k)continue;h.dataPoints[m].label&&(a.axisX.labels[d]=h.dataPoints[m].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);e<c.viewPortMin&&(c.viewPortMin=e);e>c.viewPortMax&&(c.viewPortMax=e)}}this.plotInfo.axisXValueType=h.xValueType=f?"dateTime":"number"}};w.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>
a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=[],h=[],m=0;m<a.dataSeriesIndexes.length;m++){var l=this.data[a.dataSeriesIndexes[m]],k=0,r=!1,q=!1;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var p=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,n=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:
this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(l.dataPoints[k].x&&l.dataPoints[k].x.getTime||"dateTime"===l.xValueType)f=!0;for(k=0;k<l.dataPoints.length;k++){"undefined"===typeof l.dataPoints[k].x&&(l.dataPoints[k].x=k);l.dataPoints[k].x.getTime?(f=!0,d=l.dataPoints[k].x.getTime()):d=l.dataPoints[k].x;e=l.dataPoints[k].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);if(0<k){var u=d-l.dataPoints[k-1].x;0>u&&(u*=-1);b.minDiff>u&&0!==u&&(b.minDiff=u)}if(!(d<p)||r){if(!r&&
(r=!0,0<k)){k-=2;continue}if(d>n&&!q)q=!0;else if(d>n&&q)continue;l.dataPoints[k].label&&(a.axisX.labels[d]=l.dataPoints[k].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);0<=e?g[d]=g[d]?g[d]+e:e:h[d]=h[d]?h[d]+e:e}}this.plotInfo.axisXValueType=l.xValueType=f?"dateTime":"number"}for(k in g)isNaN(k)||(a=g[k],a<c.min&&(c.min=a),a>c.max&&(c.max=a),k<b.viewPortMin||k>b.viewPortMax||(a<c.viewPortMin&&(c.viewPortMin=a),a>c.viewPortMax&&(c.viewPortMax=a)));for(k in h)isNaN(k)||
(a=h[k],a<c.min&&(c.min=a),a>c.max&&(c.max=a),k<b.viewPortMin||k>b.viewPortMax||(a<c.viewPortMin&&(c.viewPortMin=a),a>c.viewPortMax&&(c.viewPortMax=a)))}};w.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,f=!1,g=!1,h=!1,m=[],l=0;l<a.dataSeriesIndexes.length;l++){var k=this.data[a.dataSeriesIndexes[l]],r=0,q=!1,p=!1;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var n=this.sessionVariables.axisX.internalMinimum?
this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,u=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(k.dataPoints[r].x&&k.dataPoints[r].x.getTime||"dateTime"===k.xValueType)f=!0;for(r=0;r<k.dataPoints.length;r++){"undefined"===typeof k.dataPoints[r].x&&(k.dataPoints[r].x=r);k.dataPoints[r].x.getTime?
(f=!0,d=k.dataPoints[r].x.getTime()):d=k.dataPoints[r].x;e=k.dataPoints[r].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);if(0<r){var s=d-k.dataPoints[r-1].x;0>s&&(s*=-1);b.minDiff>s&&0!==s&&(b.minDiff=s)}if(!(d<n)||q){if(!q&&(q=!0,0<r)){r-=2;continue}if(d>u&&!p)p=!0;else if(d>u&&p)continue;k.dataPoints[r].label&&(a.axisX.labels[d]=k.dataPoints[r].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);0<=e?g=!0:h=!0;m[d]=m[d]?m[d]+Math.abs(e):Math.abs(e)}}this.plotInfo.axisXValueType=
k.xValueType=f?"dateTime":"number"}g&&!h?(c.max=99,c.min=1):g&&h?(c.max=99,c.min=-99):!g&&h&&(c.max=-1,c.min=-99);c.viewPortMin=c.min;c.viewPortMax=c.max;a.dataPointYSums=m}};w.prototype.getDataPointAtXY=function(a,c,b){b=b||!1;for(var d=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var f=null;(f=this._dataInRenderedOrder[e].getDataPointAtXY(a,c,b))&&d.push(f)}a=null;c=!1;for(b=0;b<d.length;b++)if("line"===d[b].dataSeries.type||"stepLine"===d[b].dataSeries.type||"area"===d[b].dataSeries.type)if(e=
P("markerSize",d[b].dataPoint,d[b].dataSeries)||8,d[b].distance<=e/2){c=!0;break}for(b=0;b<d.length;b++)c&&"line"!==d[b].dataSeries.type&&"stepLine"!==d[b].dataSeries.type&&"area"!==d[b].dataSeries.type||(a?d[b].distance<=a.distance&&(a=d[b]):a=d[b]);return a};w.prototype.getAutoFontSize=function(a){a/=400;return Math.min(this.width,this.height)*a};w.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};w.prototype.attachEvent=function(a){this._events.push(a)};
w.prototype._touchEventHandler=function(a){if(a.changedTouches){var c=[];first=(c=a.changedTouches)?c[0]:a;switch(a.type){case "touchstart":case "MSPointerDown":c=["mousemove","mousedown"];break;case "touchmove":case "MSPointerMove":c=["mousemove"];break;case "touchend":case "MSPointerUp":c="touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;default:return}this._lastTouchEventType=a.type;for(var b=0;b<c.length;b++){var d=c[b],e=
document.createEvent("MouseEvent");e.initMouseEvent(d,!0,!0,window,1,first.screenX,first.screenY,first.clientX,first.clientY,!1,!1,!1,!1,0,null);first.target.dispatchEvent(e);a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault()}}};w.prototype._mouseEventHandler=function(a){a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault();"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var c=pa(a),b=a.type,d,e;a.which?e=3==a.which:
a.button&&(e=2==a.button);if(!e){if(w.capturedEventParam)d=w.capturedEventParam,"mouseup"===b&&(w.capturedEventParam=null,d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",d.chart._mouseEventHandler,!1)),d.hasOwnProperty(b)&&d[b].call(d.context,c.x,c.y);else if(this._events){for(e=0;e<this._events.length;e++)if(this._events[e].hasOwnProperty(b)){d=this._events[e];var f=d.bounds;if(c.x>=f.x1&&c.x<=f.x2&&c.y>=f.y1&&c.y<=f.y2){d[b].call(d.context,
c.x,c.y);"mousedown"===b&&!0===d.capture?(w.capturedEventParam=d,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.body.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===b&&(d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else d=null}a.target.style.cursor=d&&d.cursor?d.cursor:this._defaultCursor}this._toolTip&&this._toolTip.enabled&&(b=this.plotArea,
(c.x<b.x1||c.x>b.x2||c.y<b.y1||c.y>b.y2)&&this._toolTip.hide());this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};w.prototype._plotAreaMouseDown=function(a,c){this.isDrag=!0;this.dragStartPoint="none"!==this.plotInfo.axisPlacement?{x:a,y:c,xMinimum:this.axisX.minimum,xMaximum:this.axisX.maximum}:{x:a,y:c}};w.prototype._plotAreaMouseUp=function(a,c){var b,d;if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var e=
0,e=this.axisX.lineCoordinates,e="xySwapped"===this.plotInfo.axisPlacement?c-this.dragStartPoint.y:this.dragStartPoint.x-a;Math.abs(this.axisX.maximum-this.axisX.minimum);if(2<Math.abs(e)){if(this.panEnabled)e=!1,d=0,this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum?(d=this.axisX._absoluteMinimum-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=d,this.axisX.sessionVariables.internalMaximum+=d,e=!0):this.axisX.sessionVariables.internalMaximum>
this.axisX._absoluteMaximum&&(d=this.axisX.sessionVariables.internalMaximum-this.axisX._absoluteMaximum,this.axisX.sessionVariables.internalMaximum-=d,this.axisX.sessionVariables.internalMinimum-=d,e=!0),e&&this.render();else if(this.zoomEnabled){this.resetOverlayedCanvas();if(!this.dragStartPoint)return;"xySwapped"===this.plotInfo.axisPlacement?(b=Math.min(this.dragStartPoint.y,c),d=Math.max(this.dragStartPoint.y,c),1<Math.abs(b-d)&&(e=this.axisX.lineCoordinates,d=this.axisX.maximum-(this.axisX.maximum-
this.axisX.minimum)/e.height*(d-e.y1),e=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/e.height*(b-e.y1),d=Math.max(d,this.axisX.dataInfo.min),e=Math.min(e,this.axisX.dataInfo.max),Math.abs((e-d)/this.axisX.dataInfo.minDiff)>=0.008*this.height&&(this.axisX.sessionVariables.internalMinimum=d,this.axisX.sessionVariables.internalMaximum=e,this.render()))):"normal"===this.plotInfo.axisPlacement&&(d=Math.min(this.dragStartPoint.x,a),b=Math.max(this.dragStartPoint.x,a),1<Math.abs(d-b)&&(e=this.axisX.lineCoordinates,
d=(this.axisX.maximum-this.axisX.minimum)/e.width*(d-e.x1)+this.axisX.minimum,e=(this.axisX.maximum-this.axisX.minimum)/e.width*(b-e.x1)+this.axisX.minimum,d=Math.max(d,this.axisX.dataInfo.min),e=Math.min(e,this.axisX.dataInfo.max),Math.abs((e-d)/this.axisX.dataInfo.minDiff)>=0.01*this.width&&(this.axisX.sessionVariables.internalMinimum=d,this.axisX.sessionVariables.internalMaximum=e,this.render())))}this.zoomEnabled&&"none"===this._toolBar.style.display&&(this._toolBar.style.display="inline",this._zoomButton.innerHTML=
this._cultureInfo.panText,this._resetButton.innerHTML=this._cultureInfo.resetText)}}this.isDrag=!1};w.prototype._plotAreaMouseMove=function(a,c){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,d=0,d=this.axisX.lineCoordinates;"xySwapped"===this.plotInfo.axisPlacement?(b=c-this.dragStartPoint.y,d=Math.abs(this.axisX.maximum-this.axisX.minimum)/d.height*b):(b=this.dragStartPoint.x-a,d=Math.abs(this.axisX.maximum-this.axisX.minimum)/d.width*b);2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||
this.zoomEnabled)?this._toolTip.hide():!this._toolTip.enabled||(this.panEnabled||this.zoomEnabled)||this._toolTip.mouseMoveHandler(a,c);if(2<Math.abs(b)&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled){this.axisX.sessionVariables.internalMinimum=this.dragStartPoint.xMinimum+d;this.axisX.sessionVariables.internalMaximum=this.dragStartPoint.xMaximum+d;b=0;this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum-R(this.axisX.interval,this.axisX.intervalType)?(b=this.axisX._absoluteMinimum-
R(this.axisX.interval,this.axisX.intervalType)-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=b,this.axisX.sessionVariables.internalMaximum+=b):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum+R(this.axisX.interval,this.axisX.intervalType)&&(b=this.axisX.sessionVariables.internalMaximum-(this.axisX._absoluteMaximum+R(this.axisX.interval,this.axisX.intervalType)),this.axisX.sessionVariables.internalMaximum-=b,this.axisX.sessionVariables.internalMinimum-=
b);var e=this;clearTimeout(this._panTimerId);this._panTimerId=setTimeout(function(){e.render()},0)}else this.zoomEnabled&&(b=this.plotArea,this.resetOverlayedCanvas(),d=this.overlaidCanvasCtx.globalAlpha,this.overlaidCanvasCtx.globalAlpha=0.7,this.overlaidCanvasCtx.fillStyle="#A0ABB8","xySwapped"===this.plotInfo.axisPlacement?this.overlaidCanvasCtx.fillRect(b.x1,this.dragStartPoint.y,b.x2-b.x1,c-this.dragStartPoint.y):"normal"===this.plotInfo.axisPlacement&&this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x,
b.y1,a-this.dragStartPoint.x,b.y2-b.y1),this.overlaidCanvasCtx.globalAlpha=d)}else this._toolTip.enabled&&this._toolTip.mouseMoveHandler(a,c)};w.prototype.preparePlotArea=function(){var a=this.plotArea,c=this.axisY?this.axisY:this.axisY2;!t&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);this.axisX&&c?(a.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?this.axisX.lineCoordinates.x1:c.lineCoordinates.x1,a.y1=this.axisX.lineCoordinates.y1<c.lineCoordinates.y1?this.axisX.lineCoordinates.y1:
c.lineCoordinates.y1,a.x2=this.axisX.lineCoordinates.x2>c.lineCoordinates.x2?this.axisX.lineCoordinates.x2:c.lineCoordinates.x2,a.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:c.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1):(c=this.layoutManager.getFreeSpace(),a.x1=c.x1,a.x2=c.x2,a.y1=c.y1,a.y2=c.y2,a.width=c.width,a.height=c.height);t||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",
(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1))};w.prototype.getPixelCoordinatesOnPlotArea=function(a,c){return{x:this.axisX.getPixelCoordinatesOnAxis(a).x,y:this.axisY.getPixelCoordinatesOnAxis(c).y}};w.prototype.renderIndexLabels=function(){var a=this.plotArea.ctx;a.textBaseline="middle";for(var c=this.plotArea,b=0;b<this._indexLabels.length;b++){var d=this._indexLabels[b],e,f,g;a.fillStyle=P("indexLabelFontColor",d.dataPoint,d.dataSeries);g=a;var h=d.dataPoint,m=d.dataSeries,l="",l=l+(h.indexLabelFontStyle?
h.indexLabelFontStyle+" ":m&&m.indexLabelFontStyle?m.indexLabelFontStyle+" ":""),l=l+(h.indexLabelFontWeight?h.indexLabelFontWeight+" ":m&&m.indexLabelFontWeight?m.indexLabelFontWeight+" ":""),l=l+(h.indexLabelFontSize?h.indexLabelFontSize+"px ":m&&m.indexLabelFontSize?m.indexLabelFontSize+"px ":""),l=l+(h.indexLabelFontFamily?h.indexLabelFontFamily+" ":m&&m.indexLabelFontFamily?m.indexLabelFontFamily+" ":"");g.font=l;var h=this.replaceKeywordsWithValue(P("indexLabel",d.dataPoint,d.dataSeries),d.dataPoint,
d.dataSeries),m=a.measureText(h).width,l=P("indexLabelFontSize",d.dataPoint,d.dataSeries),k=P("indexLabelPlacement",d.dataPoint,d.dataSeries),r=P("indexLabelOrientation",d.dataPoint,d.dataSeries),q=g=0,p=0,n=0,u=0;d.point.x<c.x1||(d.point.x>c.x2||d.point.y<c.y1||d.point.y>c.y2)||("column"===d.chartType||"stackedColumn"===d.chartType||"stackedColumn100"===d.chartType||"bar"===d.chartType||"stackedBar"===d.chartType||"stackedBar100"===d.chartType?(Math.abs(d.bounds.x1,d.bounds.x2),Math.abs(d.bounds.y1,
d.bounds.y2),"normal"===this.plotInfo.axisPlacement?("outside"===k?(q=c.y1,p=c.y2):"inside"===k&&(q=d.bounds.y1,p=d.bounds.y2),"horizontal"===r?(e=d.point.x-m/2,f=0<=d.dataPoint.y?Math.min(Math.max(d.point.y-l/2-5,q+l/2+5),p-l/2-5):Math.max(Math.min(d.point.y+l/2+5,p-l/2),q+l/2+5)):"vertical"===r&&(e=d.point.x,f=0<=d.dataPoint.y?Math.min(Math.max(d.point.y-5,q+m+5),p):Math.max(Math.min(d.point.y+m+5,p-5),q),g=-90)):"xySwapped"===this.plotInfo.axisPlacement&&("outside"===k?(n=c.x1,u=c.x2):"inside"===
k&&(n=d.bounds.x1,u=d.bounds.x2),"horizontal"===r?(f=d.point.y,e=0<=d.dataPoint.y?Math.max(Math.min(d.point.x+5,u-m),n):Math.min(Math.max(d.point.x-m-5,n),u)):"vertical"===r&&(f=d.point.y+m/2,e=0<=d.dataPoint.y?Math.max(Math.min(d.point.x+l/2+5,u-l/2),n):Math.min(Math.max(d.point.x-l/2-5,n+l/2),u+l/2),g=-90))):"horizontal"===r?(e=d.point.x-m/2,f=0<=d.dataPoint.y?Math.max(d.point.y-l/2-5,c.y1+l/2):Math.min(d.point.y+l/2+5,c.y2-l/2)):"vertical"===r&&(e=d.point.x,f=0<=d.dataPoint.y?Math.max(d.point.y-
5,c.y1+m):Math.min(d.point.y+m+5,c.y2),g=-90),a.save(),a.translate(e,f),a.rotate(Math.PI/180*g),a.fillText(h,0,0),a.restore())}};w.prototype.renderLine=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];c.lineWidth=g.lineThickness;var h=g.dataPoints,m=g.id;this._eventManager.objectMap[m]=
{objectType:"dataSeries",dataSeriesIndex:f};m=B(m);b.strokeStyle=m;b.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):0;colorSet=g._colorSet;color=colorSet[0];c.strokeStyle=color;var m=!0,l=0,k,r;if(0<h.length){for(l=0;l<h.length;l++)if(k=h[l].getTime?h[l].x.getTime():h[l].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&"number"===typeof h[l].y){k=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(k-a.axisX.convertionParameters.minimum)+0.5<<
0;r=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(h[l].y-a.axisY.convertionParameters.minimum)+0.5<<0;var q=g.dataPointIds[l];this._eventManager.objectMap[q]={objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:l,x1:k,y1:r};m?(c.beginPath(),c.moveTo(k,r),t&&(b.beginPath(),b.moveTo(k,r)),m=!1):(c.lineTo(k,r),t&&b.lineTo(k,r),0==l%500&&(c.stroke(),c.beginPath(),c.moveTo(k,r),t&&(b.stroke(),b.beginPath(),b.moveTo(k,r))));if(0<h[l].markerSize||0<g.markerSize){var p=
g.getMarkerProperties(l,k,r,c);d.push(p);if(!g.maxWidthInX||p.size>g.maxWidthInX)g.maxWidthInX=p.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);q=B(q);t&&d.push({x:k,y:r,ctx:b,type:p.type,size:p.size,color:q,borderColor:q,borderThickness:p.borderThickness})}(h[l].indexLabel||g.indexLabel)&&this._indexLabels.push({chartType:"line",dataPoint:h[l],dataSeries:g,point:{x:k,y:r},color:color})}c.stroke();t&&b.stroke()}}I.drawMarkers(d);
c.restore();c.beginPath();t&&b.beginPath()}};w.prototype.renderStepLine=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];c.lineWidth=g.lineThickness;var h=g.dataPoints,m=g.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:f};m=B(m);b.strokeStyle=
m;b.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,4):0;colorSet=g._colorSet;color=colorSet[0];c.strokeStyle=color;var m=!0,l=0,k,r;if(0<h.length){for(l=0;l<h.length;l++)if(k=h[l].getTime?h[l].x.getTime():h[l].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&"number"===typeof h[l].y){var q=r;k=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(k-a.axisX.convertionParameters.minimum)+0.5<<0;r=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*
(h[l].y-a.axisY.convertionParameters.minimum)+0.5<<0;var p=g.dataPointIds[l];this._eventManager.objectMap[p]={objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:l,x1:k,y1:r};m?(c.beginPath(),c.moveTo(k,r),t&&(b.beginPath(),b.moveTo(k,r)),m=!1):(c.lineTo(k,q),t&&b.lineTo(k,q),c.lineTo(k,r),t&&b.lineTo(k,r),0==l%500&&(c.stroke(),c.beginPath(),c.moveTo(k,r),t&&(b.stroke(),b.beginPath(),b.moveTo(k,r))));if(0<h[l].markerSize||0<g.markerSize){q=g.getMarkerProperties(l,k,r,c);d.push(q);if(!g.maxWidthInX||
q.size>g.maxWidthInX)g.maxWidthInX=q.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);p=B(p);t&&d.push({x:k,y:r,ctx:b,type:q.type,size:q.size,color:p,borderColor:p,borderThickness:q.borderThickness})}(h[l].indexLabel||g.indexLabel)&&this._indexLabels.push({chartType:"stepLine",dataPoint:h[l],dataSeries:g,point:{x:k,y:r},color:color})}c.stroke();t&&b.stroke()}}I.drawMarkers(d);c.restore();c.beginPath();t&&b.beginPath()}};
w.prototype.renderSpline=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var f=a.dataSeriesIndexes[e],g=this.data[f];c.lineWidth=g.lineThickness;var h=g.dataPoints,m=g.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:f};m=B(m);b.strokeStyle=m;b.lineWidth=0<g.lineThickness?Math.max(g.lineThickness,
4):0;colorSet=g._colorSet;color=colorSet[0];c.strokeStyle=color;var m=0,l,k,r=[];if(0<h.length)for(m=0;m<h.length;m++)if(l=h[m].getTime?h[m].x.getTime():h[m].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&"number"===typeof h[m].y){l=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(l-a.axisX.convertionParameters.minimum)+0.5<<0;k=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(h[m].y-a.axisY.convertionParameters.minimum)+
0.5<<0;var q=g.dataPointIds[m];this._eventManager.objectMap[q]={objectType:"dataPoint",dataSeriesIndex:f,dataPointIndex:m,x1:l,y1:k};r[r.length]={x:l,y:k};if(0<h[m].markerSize||0<g.markerSize){var p=g.getMarkerProperties(m,l,k,c);d.push(p);if(!g.maxWidthInX||p.size>g.maxWidthInX)g.maxWidthInX=p.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);q=B(q);t&&d.push({x:l,y:k,ctx:b,type:p.type,size:p.size,color:q,borderColor:q,
borderThickness:p.borderThickness})}(h[m].indexLabel||g.indexLabel)&&this._indexLabels.push({chartType:"spline",dataPoint:h[m],dataSeries:g,point:{x:l,y:k},color:color})}f=la(r,2);if(0<f.length){c.beginPath();t&&b.beginPath();c.moveTo(f[0].x,f[0].y);t&&b.moveTo(f[0].x,f[0].y);for(m=0;m<f.length-3;m+=3)c.bezierCurveTo(f[m+1].x,f[m+1].y,f[m+2].x,f[m+2].y,f[m+3].x,f[m+3].y),t&&b.bezierCurveTo(f[m+1].x,f[m+1].y,f[m+2].x,f[m+2].y,f[m+3].x,f[m+3].y),0<m&&0===m%3E3&&(c.stroke(),c.beginPath(),c.moveTo(f[m+
3].x,f[m+3].y),t&&(b.stroke(),b.beginPath(),b.moveTo(f[m+3].x,f[m+3].y)));c.stroke();t&&b.stroke()}}I.drawMarkers(d);c.restore();c.beginPath();t&&b.beginPath()}};var J=function(a,c,b,d,e,f,g,h,m,l){var k=15<d-c&&15<e-b?8:0.35*Math.min(d-c,e-b);color2="rgba(255, 255, 255, .4)";color3="rgba(255, 255, 255, 0.1)";color1=f;a.beginPath();a.moveTo(c,b);a.save();a.fillStyle=color1;a.fillRect(c,b,d-c,e-b);a.restore();!0===g&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c+k,b+k),a.lineTo(d-k,b+k),a.lineTo(d,
b),a.closePath(),f=a.createLinearGradient((d+c)/2,b+k,(d+c)/2,b),f.addColorStop(0,color1),f.addColorStop(1,color2),a.fillStyle=f,a.fill(),a.restore());!0===h&&(a.save(),a.beginPath(),a.moveTo(c,e),a.lineTo(c+k,e-k),a.lineTo(d-k,e-k),a.lineTo(d,e),a.closePath(),f=a.createLinearGradient((d+c)/2,e-k,(d+c)/2,e),f.addColorStop(0,color1),f.addColorStop(1,color2),a.fillStyle=f,a.fill(),a.restore());!0===m&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c+k,b+k),a.lineTo(c+k,e-k),a.lineTo(c,e),a.closePath(),
f=a.createLinearGradient(c+k,(e+b)/2,c,(e+b)/2),f.addColorStop(0,color1),f.addColorStop(1,color3),a.fillStyle=f,a.fill(),a.restore());!0===l&&(a.save(),a.beginPath(),a.moveTo(d,b),a.lineTo(d-k,b+k),a.lineTo(d-k,e-k),a.lineTo(d,e),f=a.createLinearGradient(d-k,(e+b)/2,d,(e+b)/2),f.addColorStop(0,color1),f.addColorStop(1,color3),a.fillStyle=f,f.addColorStop(0,color1),f.addColorStop(1,color3),a.fillStyle=f,a.fill(),a.closePath(),a.restore())};w.prototype.renderColumn=function(a){var c=this.plotArea.ctx;
if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,l=0.15*this.width,e=a.axisX.dataInfo.minDiff,k=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(e)/a.plotType.totalDataSeries)<<0;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,
d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var r=a.dataSeriesIndexes[d],q=this.data[r],p=q.dataPoints;1==p.length&&(k=l);1>k?k=1:k>l&&(k=l);q.maxWidthInX=k/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<p.length)for(var n=5<k&&q.bevelEnabled?!0:!1,e=0;e<p.length;e++)if(p[e].getTime?h=p[e].x.getTime():h=p[e].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof p[e].y){f=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(h-a.axisX.convertionParameters.minimum)+0.5<<0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(p[e].y-a.axisY.convertionParameters.minimum)+0.5<<0;f=f-a.plotType.totalDataSeries*k/2+(a.previousDataSeriesCount+d)*k<<0;var u=f+k<<0,s;0<=p[e].y?s=m:(s=g,g=m);g>s&&(s=g=s);b=p[e].color?p[e].color:q._colorSet[e%q._colorSet.length];J(c,f,g,u,s,b,n&&0<=p[e].y,0>
p[e].y&&n,!1,!1);b=q.dataPointIds[e];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:e,x1:f,y1:g,x2:u,y2:s};b=B(b);t&&J(this._eventManager.ghostCtx,f,g,u,s,b,!1,!1,!1,!1);(p[e].indexLabel||q.indexLabel)&&this._indexLabels.push({chartType:"column",dataPoint:p[e],dataSeries:q,point:{x:f+(u-f)/2,y:0<=p[e].y?g:s},bounds:{x1:f,y1:Math.min(g,s),x2:u,y2:Math.max(g,s)},color:b})}}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedColumn=
function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,l=0.15*this.width,g=a.axisX.dataInfo.minDiff,k=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(g)/a.plotType.plotUnits.length)<<0;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,
d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var r=0;r<a.dataSeriesIndexes.length;r++){var q=a.dataSeriesIndexes[r],p=this.data[q],n=p.dataPoints;1==n.length&&(k=l);1>k?k=1:k>l&&(k=l);p.maxWidthInX=k/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<n.length){var u=5<k&&p.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(g=0;g<n.length;g++)if(b=n[g].x.getTime?n[g].x.getTime():n[g].x,!(b<a.axisX.dataInfo.viewPortMin||
b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[g].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+0.5<<0;h=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(n[g].y-a.axisY.convertionParameters.minimum)+0.5<<0;var s=d-a.plotType.plotUnits.length*k/2+a.index*k<<0,C=s+k<<0,v;if(0<=n[g].y){var x=e[b]?e[b]:0;h-=x;v=m-x;e[b]=x+(v-h)}else x=f[b]?f[b]:0,v=h+x,h=m+x,f[b]=x+(v-h);b=n[g].color?
n[g].color:p._colorSet[g%p._colorSet.length];J(c,s,h,C,v,b,u&&0<=n[g].y,0>n[g].y&&u,!1,!1);b=p.dataPointIds[g];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:g,x1:s,y1:h,x2:C,y2:v};b=B(b);t&&J(this._eventManager.ghostCtx,s,h,C,v,b,!1,!1,!1,!1);(n[g].indexLabel||p.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:n[g],dataSeries:p,point:{x:d,y:0<=n[g].y?h:v},bounds:{x1:s,y1:Math.min(h,v),x2:C,y2:Math.max(h,v)},color:b})}}}c.restore();
t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedColumn100=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,l=0.15*this.width,g=a.axisX.dataInfo.minDiff,k=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(g)/a.plotType.plotUnits.length)<<0;c.save();t&&this._eventManager.ghostCtx.save();
c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var r=0;r<a.dataSeriesIndexes.length;r++){var q=a.dataSeriesIndexes[r],p=this.data[q],n=p.dataPoints;1==n.length&&(k=l);1>k?k=1:k>l&&(k=l);p.maxWidthInX=k/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<n.length)for(var u=5<k&&p.bevelEnabled?!0:!1,g=
0;g<n.length;g++)if(b=n[g].x.getTime?n[g].x.getTime():n[g].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[g].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+0.5<<0;h=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*((0!==a.dataPointYSums[b]?100*(n[g].y/a.dataPointYSums[b]):0)-a.axisY.convertionParameters.minimum)+0.5<<0;var s=d-a.plotType.plotUnits.length*
k/2+a.index*k<<0,C=s+k<<0,v;if(0<=n[g].y){var x=e[b]?e[b]:0;h-=x;v=m-x;e[b]=x+(v-h)}else x=f[b]?f[b]:0,v=h+x,h=m+x,f[b]=x+(v-h);b=n[g].color?n[g].color:p._colorSet[g%p._colorSet.length];J(c,s,h,C,v,b,u&&0<=n[g].y,0>n[g].y&&u,!1,!1);b=p.dataPointIds[g];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:g,x1:s,y1:h,x2:C,y2:v};b=B(b);t&&J(this._eventManager.ghostCtx,s,h,C,v,b,!1,!1,!1,!1);(n[g].indexLabel||p.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn100",
dataPoint:n[g],dataSeries:p,point:{x:d,y:0<=n[g].y?h:v},bounds:{x1:s,y1:Math.min(h,v),x2:C,y2:Math.max(h,v)},color:b})}}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderBar=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,f,g,h,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,l=0.15*this.height,e=a.axisX.dataInfo.minDiff,k=0.9*(d.height/Math.abs(a.axisX.maximum-
a.axisX.minimum)*Math.abs(e)/a.plotType.totalDataSeries)<<0;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var r=a.dataSeriesIndexes[d],q=this.data[r],p=q.dataPoints;1==p.length&&(k=l);1>k?k=1:k>l&&(k=l);q.maxWidthInX=k/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-
1:a.axisX.convertionParameters.pixelPerUnit);if(0<p.length){var n=5<k&&q.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(e=0;e<p.length;e++)if(p[e].getTime?h=p[e].x.getTime():h=p[e].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[e].y){g=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(h-a.axisX.convertionParameters.minimum)+0.5<<0;f=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(p[e].y-a.axisY.convertionParameters.minimum)+
0.5<<0;g=g-a.plotType.totalDataSeries*k/2+(a.previousDataSeriesCount+d)*k<<0;var u=g+k<<0,s;0<=p[e].y?s=m:(s=f,f=m);b=p[e].color?p[e].color:q._colorSet[e%q._colorSet.length];J(c,s,g,f,u,b,n,!1,!1,!1);b=q.dataPointIds[e];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:e,x1:s,y1:g,x2:f,y2:u};b=B(b);t&&J(this._eventManager.ghostCtx,s,g,f,u,b,!1,!1,!1,!1);this._indexLabels.push({chartType:"bar",dataPoint:p[e],dataSeries:q,point:{x:0<=p[e].y?f:s,y:g+(u-g)/2},bounds:{x1:Math.min(s,
f),y1:g,x2:Math.max(s,f),y2:u},color:b})}}}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedBar=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,l=0.15*this.width,g=a.axisX.dataInfo.minDiff,k=0.9*(d.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(g)/a.plotType.plotUnits.length)<<
0;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var r=0;r<a.dataSeriesIndexes.length;r++){var q=a.dataSeriesIndexes[r],p=this.data[q],n=p.dataPoints;1==n.length&&(k=l);1>k?k=1:k>l&&(k=l);p.maxWidthInX=k/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<
n.length){var u=5<k&&p.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(g=0;g<n.length;g++)if(b=n[g].x.getTime?n[g].x.getTime():n[g].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[g].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+0.5<<0;h=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(n[g].y-a.axisY.convertionParameters.minimum)+0.5<<0;var s=d-
a.plotType.plotUnits.length*k/2+a.index*k<<0,C=s+k<<0,v;if(0<=n[g].y){var x=e[b]?e[b]:0;v=m+x;h+=x;e[b]=x+(h-v)}else x=f[b]?f[b]:0,v=h-x,h=m-x,f[b]=x+(h-v);b=n[g].color?n[g].color:p._colorSet[g%p._colorSet.length];J(c,v,s,h,C,b,u,!1,!1,!1);b=p.dataPointIds[g];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:g,x1:v,y1:s,x2:h,y2:C};b=B(b);t&&J(this._eventManager.ghostCtx,v,s,h,C,b,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar",dataPoint:n[g],dataSeries:p,
point:{x:0<=n[g].y?h:v,y:d},bounds:{x1:Math.min(v,h),y1:s,x2:Math.max(v,h),y2:C},color:b})}}}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedBar100=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=0,h,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,l=0.15*this.width,g=a.axisX.dataInfo.minDiff,k=0.9*(d.height/Math.abs(a.axisX.maximum-
a.axisX.minimum)*Math.abs(g)/a.plotType.plotUnits.length)<<0;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var r=0;r<a.dataSeriesIndexes.length;r++){var q=a.dataSeriesIndexes[r],p=this.data[q],n=p.dataPoints;1==n.length&&(k=l);1>k?k=1:k>l&&(k=l);p.maxWidthInX=k/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-
1:a.axisX.convertionParameters.pixelPerUnit);if(0<n.length){var u=5<k&&p.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(g=0;g<n.length;g++)if(b=n[g].x.getTime?n[g].x.getTime():n[g].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[g].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+0.5<<0;h=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*((0!==a.dataPointYSums[b]?
100*(n[g].y/a.dataPointYSums[b]):0)-a.axisY.convertionParameters.minimum)+0.5<<0;var s=d-a.plotType.plotUnits.length*k/2+a.index*k<<0,C=s+k<<0,v;if(0<=n[g].y){var x=e[b]?e[b]:0;v=m+x;h+=x;e[b]=x+(h-v)}else x=f[b]?f[b]:0,v=h-x,h=m-x,f[b]=x+(h-v);b=n[g].color?n[g].color:p._colorSet[g%p._colorSet.length];J(c,v,s,h,C,b,u,!1,!1,!1);b=p.dataPointIds[g];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:g,x1:v,y1:s,x2:h,y2:C};b=B(b);t&&J(this._eventManager.ghostCtx,
v,s,h,C,b,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar100",dataPoint:n[g],dataSeries:p,point:{x:0<=n[g].y?h:v,y:d},bounds:{x1:Math.min(v,h),y1:s,x2:Math.max(v,h),y2:C},color:b})}}}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderArea=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx,d=a.axisX.lineCoordinates,e=a.axisY.lineCoordinates,f=[],g=this.plotArea;c.save();t&&b.save();c.beginPath();c.rect(g.x1,g.y1,
g.width,g.height);c.clip();t&&(b.beginPath(),b.rect(g.x1,g.y1,g.width,g.height),b.clip());for(g=0;g<a.dataSeriesIndexes.length;g++){var h=a.dataSeriesIndexes[g],m=this.data[h],l=m.dataPoints,f=m.id;this._eventManager.objectMap[f]={objectType:"dataSeries",dataSeriesIndex:h};f=B(f);b.fillStyle=f;var f=[],k=!0,r=0,q,p,n=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)+0.5<<0,u,s=null;if(0<l.length){color=m._colorSet[r%m._colorSet.length];
for(c.fillStyle=color;r<l.length;r++)if(p=l[r].x.getTime?l[r].x.getTime():l[r].x,!(p<a.axisX.dataInfo.viewPortMin||p>a.axisX.dataInfo.viewPortMax)&&(q=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(p-a.axisX.convertionParameters.minimum)+0.5<<0,p=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l[r].y-a.axisY.convertionParameters.minimum)+0.5<<0,"number"===typeof l[r].y)){k?(c.beginPath(),c.moveTo(q,p),s={x:q,y:p},t&&(b.beginPath(),
b.moveTo(q,p)),k=!1):(c.lineTo(q,p),t&&b.lineTo(q,p),0==r%250&&(0>=a.axisY.minimum&&0<=a.axisY.maximum?u=n:0>a.axisY.maximum?u=e.y1:0<a.axisY.minimum&&(u=d.y2),c.lineTo(q,u),c.lineTo(s.x,u),c.closePath(),c.fill(),c.beginPath(),c.moveTo(q,p),t&&(b.lineTo(q,u),b.lineTo(s.x,u),b.closePath(),b.fill(),b.beginPath(),b.moveTo(q,p)),s={x:q,y:p}));var C=m.dataPointIds[r];this._eventManager.objectMap[C]={objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:r,x1:q,y1:p};if(0!==l[r].markerSize&&(0<l[r].markerSize||
0<m.markerSize)){var v=m.getMarkerProperties(r,q,p,c);f.push(v);if(!m.maxWidthInX||v.size>m.maxWidthInX)m.maxWidthInX=v.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=B(C);t&&f.push({x:q,y:p,ctx:b,type:v.type,size:v.size,color:markerColor,borderColor:markerColor,borderThickness:v.borderThickness})}(l[r].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"area",dataPoint:l[r],dataSeries:m,
point:{x:q,y:p},color:color})}0>=a.axisY.minimum&&0<=a.axisY.maximum?u=n:0>a.axisY.maximum?u=e.y1:0<a.axisY.minimum&&(u=d.y2);c.lineTo(q,u);c.lineTo(s.x,u);c.closePath();c.fill();t&&(b.lineTo(q,u),b.lineTo(s.x,u),b.closePath(),b.fill());I.drawMarkers(f)}}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderSplineArea=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx,d=a.axisX.lineCoordinates,e=a.axisY.lineCoordinates,f=[],
g=this.plotArea;c.save();t&&b.save();c.beginPath();c.rect(g.x1,g.y1,g.width,g.height);c.clip();t&&(b.beginPath(),b.rect(g.x1,g.y1,g.width,g.height),b.clip());for(g=0;g<a.dataSeriesIndexes.length;g++){var h=a.dataSeriesIndexes[g],m=this.data[h],l=m.dataPoints,f=m.id;this._eventManager.objectMap[f]={objectType:"dataSeries",dataSeriesIndex:h};f=B(f);b.fillStyle=f;var f=[],k=0,r,q,p=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)+
0.5<<0,n,u=null,u=[];if(0<l.length){color=m._colorSet[k%m._colorSet.length];for(c.fillStyle=color;k<l.length;k++)if(r=l[k].x.getTime?l[k].x.getTime():l[k].x,!(r<a.axisX.dataInfo.viewPortMin||r>a.axisX.dataInfo.viewPortMax)&&(r=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(r-a.axisX.convertionParameters.minimum)+0.5<<0,q=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l[k].y-a.axisY.convertionParameters.minimum)+0.5<<0,"number"===
typeof l[k].y)){var s=m.dataPointIds[k];this._eventManager.objectMap[s]={objectType:"dataPoint",dataSeriesIndex:h,dataPointIndex:k,x1:r,y1:q};u[u.length]={x:r,y:q};if(0!==l[k].markerSize&&(0<l[k].markerSize||0<m.markerSize)){var C=m.getMarkerProperties(k,r,q,c);f.push(C);if(!m.maxWidthInX||C.size>m.maxWidthInX)m.maxWidthInX=C.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=B(s);t&&f.push({x:r,y:q,
ctx:b,type:C.type,size:C.size,color:markerColor,borderColor:markerColor,borderThickness:C.borderThickness})}(l[k].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"splineArea",dataPoint:l[k],dataSeries:m,point:{x:r,y:q},color:color})}h=la(u,2);if(0<h.length){c.beginPath();c.moveTo(h[0].x,h[0].y);t&&(b.beginPath(),b.moveTo(h[0].x,h[0].y));for(k=0;k<h.length-3;k+=3)c.bezierCurveTo(h[k+1].x,h[k+1].y,h[k+2].x,h[k+2].y,h[k+3].x,h[k+3].y),t&&b.bezierCurveTo(h[k+1].x,h[k+1].y,h[k+2].x,h[k+2].y,
h[k+3].x,h[k+3].y);0>=a.axisY.minimum&&0<=a.axisY.maximum?n=p:0>a.axisY.maximum?n=e.y1:0<a.axisY.minimum&&(n=d.y2);u={x:h[0].x,y:h[0].y};c.lineTo(h[h.length-1].x,n);c.lineTo(u.x,n);c.closePath();c.fill();t&&(b.lineTo(h[h.length-1].x,n),b.lineTo(u.x,n),b.closePath(),b.fill())}I.drawMarkers(f)}}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderStackedArea=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=[],e=this.plotArea,f=[],g=[],h=0,m,l,
k,r=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,q=this._eventManager.ghostCtx;t&&q.beginPath();c.save();t&&q.save();c.beginPath();c.rect(e.x1,e.y1,e.width,e.height);c.clip();t&&(q.beginPath(),q.rect(e.x1,e.y1,e.width,e.height),q.clip());xValuePresent=[];for(e=0;e<a.dataSeriesIndexes.length;e++){var p=a.dataSeriesIndexes[e],n=this.data[p],u=n.dataPoints;n.dataPointIndexes=[];for(h=0;h<u.length;h++)p=u[h].x.getTime?u[h].x.getTime():
u[h].x,n.dataPointIndexes[p]=h,xValuePresent[p]||(g.push(p),xValuePresent[p]=!0);g.sort(ia)}for(e=0;e<a.dataSeriesIndexes.length;e++){var p=a.dataSeriesIndexes[e],n=this.data[p],u=n.dataPoints,s=!0,C=[],h=n.id;this._eventManager.objectMap[h]={objectType:"dataSeries",dataSeriesIndex:p};h=B(h);q.fillStyle=h;if(0<g.length){b=n._colorSet[0];c.fillStyle=b;for(h=0;h<g.length;h++){k=g[h];var v=null,v=0<=n.dataPointIndexes[k]?u[n.dataPointIndexes[k]]:{x:k,y:0};if(!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof v.y){m=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(k-a.axisX.convertionParameters.minimum)+0.5<<0;l=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(v.y-a.axisY.convertionParameters.minimum)+0.5<<0;var x=f[k]?f[k]:0;l-=x;C.push({x:m,y:r-x});f[k]=r-l;if(s)c.beginPath(),c.moveTo(m,l),t&&(q.beginPath(),q.moveTo(m,l)),s=!1;else if(c.lineTo(m,l),t&&q.lineTo(m,l),0==h%250){for(;0<C.length;){var w=C.pop();c.lineTo(w.x,
w.y);t&&q.lineTo(w.x,w.y)}c.closePath();c.fill();c.beginPath();c.moveTo(m,l);t&&(q.closePath(),q.fill(),q.beginPath(),q.moveTo(m,l));C.push({x:m,y:r-x})}if(0<=n.dataPointIndexes[k]){var z=n.dataPointIds[n.dataPointIndexes[k]];this._eventManager.objectMap[z]={objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:n.dataPointIndexes[k],x1:m,y1:l}}if(0<=n.dataPointIndexes[k]&&0!==v.markerSize&&(0<v.markerSize||0<n.markerSize)){k=n.getMarkerProperties(h,m,l,c);d.push(k);if(!n.maxWidthInX||k.size>n.maxWidthInX)n.maxWidthInX=
k.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=B(z);t&&d.push({x:m,y:l,ctx:q,type:k.type,size:k.size,color:markerColor,borderColor:markerColor,borderThickness:k.borderThickness})}(v.indexLabel||n.indexLabel)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:v,dataSeries:n,point:{x:m,y:l},color:b})}}for(;0<C.length;)w=C.pop(),c.lineTo(w.x,w.y),t&&q.lineTo(w.x,w.y);c.closePath();c.fill();
c.beginPath();c.moveTo(m,l);t&&(q.closePath(),q.fill(),q.beginPath(),q.moveTo(m,l))}delete n.dataPointIndexes}I.drawMarkers(d);c.restore();t&&q.restore()}};w.prototype.renderStackedArea100=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],f=[],g=[],h=0,m,l,k,r=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,q=0.15*this.width,p=a.axisX.dataInfo.minDiff,p=0.9*d.width/Math.abs(a.axisX.maximum-
a.axisX.minimum)*Math.abs(p)<<0,n=this._eventManager.ghostCtx;c.save();t&&n.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(n.beginPath(),n.rect(d.x1,d.y1,d.width,d.height),n.clip());xValuePresent=[];for(d=0;d<a.dataSeriesIndexes.length;d++){var u=a.dataSeriesIndexes[d],s=this.data[u],C=s.dataPoints;s.dataPointIndexes=[];for(h=0;h<C.length;h++)u=C[h].x.getTime?C[h].x.getTime():C[h].x,s.dataPointIndexes[u]=h,xValuePresent[u]||(g.push(u),xValuePresent[u]=!0);g.sort(ia)}for(d=0;d<
a.dataSeriesIndexes.length;d++){var u=a.dataSeriesIndexes[d],s=this.data[u],C=s.dataPoints,v=!0,b=s.id;this._eventManager.objectMap[b]={objectType:"dataSeries",dataSeriesIndex:u};b=B(b);n.fillStyle=b;1==C.length&&(p=q);1>p?p=1:p>q&&(p=q);var x=[];if(0<g.length){b=s._colorSet[h%s._colorSet.length];c.fillStyle=b;for(h=0;h<g.length;h++){k=g[h];var w=null,w=0<=s.dataPointIndexes[k]?C[s.dataPointIndexes[k]]:{x:k,y:0};if(!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&"number"===typeof w.y){l=
0!==a.dataPointYSums[k]?100*(w.y/a.dataPointYSums[k]):0;m=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(k-a.axisX.convertionParameters.minimum)+0.5<<0;l=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l-a.axisY.convertionParameters.minimum)+0.5<<0;var z=f[k]?f[k]:0;l-=z;x.push({x:m,y:r-z});f[k]=r-l;if(v)c.beginPath(),c.moveTo(m,l),t&&(n.beginPath(),n.moveTo(m,l)),v=!1;else if(c.lineTo(m,l),t&&n.lineTo(m,l),0==h%250){for(;0<x.length;){var A=
x.pop();c.lineTo(A.x,A.y);t&&n.lineTo(A.x,A.y)}c.closePath();c.fill();c.beginPath();c.moveTo(m,l);t&&(n.closePath(),n.fill(),n.beginPath(),n.moveTo(m,l));x.push({x:m,y:r-z})}if(0<=s.dataPointIndexes[k]){var D=s.dataPointIds[s.dataPointIndexes[k]];this._eventManager.objectMap[D]={objectType:"dataPoint",dataSeriesIndex:u,dataPointIndex:s.dataPointIndexes[k],x1:m,y1:l}}if(0<=s.dataPointIndexes[k]&&0!==w.markerSize&&(0<w.markerSize||0<s.markerSize)){k=s.getMarkerProperties(h,m,l,c);e.push(k);if(!s.maxWidthInX||
k.size>s.maxWidthInX)s.maxWidthInX=k.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=B(D);t&&e.push({x:m,y:l,ctx:n,type:k.type,size:k.size,color:markerColor,borderColor:markerColor,borderThickness:k.borderThickness})}(w.indexLabel||s.indexLabel)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:w,dataSeries:s,point:{x:m,y:l},color:b})}}for(;0<x.length;)A=x.pop(),c.lineTo(A.x,A.y),t&&n.lineTo(A.x,
A.y);c.closePath();c.fill();c.beginPath();c.moveTo(m,l);t&&(n.closePath(),n.fill(),n.beginPath(),n.moveTo(m,l))}delete s.dataPointIndexes}I.drawMarkers(e);c.restore();t&&n.restore()}};w.prototype.renderBubble=function(a){var c=this.plotArea.ctx,b=a.dataSeriesIndexes.length;if(!(0>=b)){var d=this.plotArea,e=0,f,g,h=0.15*this.width,e=a.axisX.dataInfo.minDiff,b=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(e)/b)<<0;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,
d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var m=-Infinity,l=Infinity,k=0;k<a.dataSeriesIndexes.length;k++)for(var r=a.dataSeriesIndexes[k],q=this.data[r],p=q.dataPoints,n=0,e=0;e<p.length;e++)f=p[e].getTime?f=p[e].x.getTime():f=p[e].x,f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax||"undefined"===typeof p[e].z||(n=p[e].z,n>m&&(m=n),n<l&&(l=n));for(var u=25*Math.PI,d=Math.max(Math.pow(0.25*
Math.min(d.height,d.width)/2,2)*Math.PI,u),k=0;k<a.dataSeriesIndexes.length;k++)if(r=a.dataSeriesIndexes[k],q=this.data[r],p=q.dataPoints,1==p.length&&(b=h),1>b?b=1:b>h&&(b=h),0<p.length)for(c.strokeStyle="#4572A7 ",e=0;e<p.length;e++)if(f=p[e].getTime?f=p[e].x.getTime():f=p[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[e].y){f=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(f-a.axisX.convertionParameters.minimum)+0.5<<
0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(p[e].y-a.axisY.convertionParameters.minimum)+0.5<<0;var n=p[e].z,s=2*Math.max(Math.sqrt((u+(d-u)/(m-l)*(n-l))/Math.PI)<<0,1),n=q.getMarkerProperties(e,c);n.size=s;I.drawMarker(f,g,c,n.type,n.size,n.color,n.borderColor,n.borderThickness);if(!q.maxWidthInX||n.size>q.maxWidthInX)q.maxWidthInX=n.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);
var w=q.dataPointIds[e];this._eventManager.objectMap[w]={objectType:"dataPoint",dataSeriesIndex:r,dataPointIndex:e,x1:f,y1:g,size:s};s=B(w);t&&I.drawMarker(f,g,this._eventManager.ghostCtx,n.type,n.size,s,s,n.borderThickness)}c.restore();t&&this._eventManager.ghostCtx.restore()}};w.prototype.renderScatter=function(a){var c=this.plotArea.ctx,b=a.dataSeriesIndexes.length;if(!(0>=b)){var d=this.plotArea,e=0,f,g,h=0.15*this.width,e=a.axisX.dataInfo.minDiff,b=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*
Math.abs(e)/b)<<0;c.save();t&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();t&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var m=0;m<a.dataSeriesIndexes.length;m++){var l=a.dataSeriesIndexes[m],k=this.data[l],r=k.dataPoints;1==r.length&&(b=h);1>b?b=1:b>h&&(b=h);if(0<r.length){c.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(d.height,d.width)/2,2);for(var q=0,p=0,e=0;e<r.length;e++)if(f=r[e].getTime?
f=r[e].x.getTime():f=r[e].x,!(f<a.axisX.dataInfo.viewPortMin||f>a.axisX.dataInfo.viewPortMax)&&"number"===typeof r[e].y){f=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(f-a.axisX.convertionParameters.minimum)+0.5<<0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(r[e].y-a.axisY.convertionParameters.minimum)+0.5<<0;var n=k.getMarkerProperties(e,f,g,c);I.drawMarker(n.x,n.y,n.ctx,n.type,n.size,n.color,n.color,n.thickness);if(!k.maxWidthInX||
n.size>k.maxWidthInX)k.maxWidthInX=n.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);Math.sqrt((q-f)*(q-f)+(p-g)*(p-g))<Math.min(n.size,5)||(q=k.dataPointIds[e],this._eventManager.objectMap[q]={objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:e,x1:f,y1:g},q=B(q),t&&I.drawMarker(n.x,n.y,this._eventManager.ghostCtx,n.type,n.size,q,q,n.borderThickness),q=f,p=g)}}}c.restore();t&&this._eventManager.ghostCtx.restore()}};
var Q=function(a,c,b,d,e,f,g){a.save();"pie"===e?(a.beginPath(),a.moveTo(c.x,c.y),a.arc(c.x,c.y,b,f,g,!1),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.stroke(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(c.x,c.y,b,f,g,!1),a.arc(c.x,c.y,0.6*b,g,f,!0),a.closePath(),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.stroke(),a.fill());a.restore()};w.prototype.renderPie=function(a){function c(){y.ctx.save();t&&y._eventManager.ghostCtx.save();y.ctx.translate(x.x,x.y);t&&y._eventManager.ghostCtx.translate(x.x,
x.y);y.ctx.clearRect(-v.width/2,-v.height/2,v.width,v.height);var a=!0===y.animationEnabled?60:1;if(null!=E&&E.frame<=a){E.isAnimating--;for(var d=m[0],h=E.maxAngle+2*Math.PI/a,k=!1,l=0;l<w;l++){var n=f.dataPoints[l].exploded,p=f.dataPoints[l].color?f.dataPoints[l].color:f.color?f.color:A[l%A.length],s=d,u=d=s+2*Math.PI/r*Math.abs(f.dataPoints[l].y);u>h&&(u=h);type=f.type;"outside"===f.indexLabelPlacement?(indexLineMinLength=Math.min(v.width,v.height)/14,q=indexLineMinLength<z?z-indexLineMinLength:
z-25):"inside"===f.indexLabelPlacement&&(q=(1-g)*0.5*Math.min(v.width,v.height));var B={x:0,y:0};k||Q(y.ctx,B,q,p,type,s,u);s=f.dataPointIds[l];y._eventManager.objectMap[s]={objectType:"dataPoint",dataSeriesIndex:0,dataPointIndex:l,center:{x:x.x,y:x.y},radius:q,color:p,startAngle:m[l],endAngle:m[l+1],currentlyExploded:!0===f.dataPoints[l].exploded?!0:!1,userSetExploded:n,pastExploded:!1};n=aa(s);t&&y._eventManager.ghostCtx.save();p="rgb("+n[0]+","+n[1]+","+n[2]+")";t&&(Q(y._eventManager.ghostCtx,
B,q,p,type,m[l],m[l+1]),y._eventManager.ghostCtx.restore());u===h&&(k=!0)}E.maxAngle=h;E.frame++;E.frame<=a?y.requestAnimFrame.call(window,c):(e(0,a),y.ctx.restore(),t&&y._eventManager.ghostCtx.restore(),setTimeout(function(){E.frame=0;E.isAnimating=t?20:4;b()},200))}y.renderCount++;y.ctx.restore();t&&y._eventManager.ghostCtx.restore()}function b(){y.ctx.save();t&&y._eventManager.ghostCtx.save();y.ctx.translate(x.x,x.y);t&&y._eventManager.ghostCtx.translate(x.x,x.y);var a=t?20:4;if(null!==E&&E.frame<
a){E.isAnimating--;y.ctx.fillStyle=y.backgroundColor?y.backgroundColor:"white";y.ctx.clearRect(-v.width/2,-v.height/2,v.width,v.height);for(var c=0;c<w;c++){var d=f.dataPoints[c].color?f.dataPoints[c].color:f.color?f.color:A[c%A.length],h={x:0,y:0},k=q*g*Math.cos(l[c]),n=q*g*Math.sin(l[c]),p=f.type,r=f.dataPointIds[c],s=y._eventManager.objectMap[r].currentlyExploded,u=y._eventManager.objectMap[r].pastExploded;!0===s&&!1===u?(h.x+=k/a*(E.frame+1),h.y+=n/a*(E.frame+1),E.frame+1===a&&(y._eventManager.objectMap[r].pastExploded=
!0)):!0===s&&!0===u&&(h.x+=k,h.y+=n);y._eventManager.objectMap[r].center.x=h.x+x.x;y._eventManager.objectMap[r].center.y=h.y+x.y;u!==s&&(k={},k.dataSeries=f,k.dataPoint=f.dataPoints[c],k.index=c,y._toolTip.highlightObjects([k]));Q(y.ctx,h,q,d,p,m[c],m[c+1]);E.frame===a-1&&(r=f.dataPointIds[c],d=aa(r),d="rgb("+d[0]+","+d[1]+","+d[2]+")",t&&(y._eventManager.ghostCtx.save(),Q(y._eventManager.ghostCtx,h,q,d,p,m[c],m[c+1]),y._eventManager.ghostCtx.restore()))}E.frame++;E.frame<a&&y.requestAnimFrame.call(window,
b)}e(E.frame,a);y.ctx.restore();t&&y._eventManager.ghostCtx.restore()}function d(){y.ctx.save();t&&y._eventManager.ghostCtx.save();y.ctx.translate(x.x,x.y);t&&y._eventManager.ghostCtx.translate(x.x,x.y);var a=t?20:4;if(null!==E&&0<E.frame){E.isAnimating--;y.ctx.clearRect(-v.width/2,-v.height/2,v.width,v.height);for(var b=0;b<w;b++){var c=f.dataPointIds[b],h=y._eventManager.objectMap[c].currentlyExploded,k=y._eventManager.objectMap[c].pastExploded,n=f.dataPoints[b].color?f.dataPoints[b].color:f.color?
f.color:A[b%A.length],p={x:0,y:0},r=f.type,h=y._eventManager.objectMap[c].currentlyExploded,s=q*g*Math.cos(l[b]),u=q*g*Math.sin(l[b]);!1===h&&!0===k?(p.x+=s/a*E.frame,p.y+=u/a*E.frame,1===E.frame&&(y._eventManager.objectMap[c].pastExploded=!1)):!0===h&&!0===k&&(p.x+=s,p.y+=u);y._eventManager.objectMap[c].center.x=p.x+x.x;y._eventManager.objectMap[c].center.y=p.y+x.y;k!==h&&(c={},c.dataSeries=f,c.dataPoint=f.dataPoints[b],c.index=b,y._toolTip.highlightObjects([c]));Q(y.ctx,p,q,n,r,m[b],m[b+1]);1===
E.frame&&(c=f.dataPointIds[b],n=aa(c),n="rgb("+n[0]+","+n[1]+","+n[2]+")",t&&(y._eventManager.ghostCtx.save(),Q(y._eventManager.ghostCtx,p,q,n,r,m[b],m[b+1]),y._eventManager.ghostCtx.restore()))}E.frame--;0<E.frame&&y.requestAnimFrame.call(window,d)}e(E.frame,a);y.ctx.restore();t&&y._eventManager.ghostCtx.restore()}function e(a,b){for(var c=0;c<f.dataPoints.length;c++){var d=f.dataPointIds[c],e=y.ctx,m=p[c],r=n[c],t=u[c],v=s[c],w=y._eventManager.objectMap[d].currentlyExploded,x=k[c],z=q,A=l[c],C=
f.dataPoints[c].indexLabelFontColor?f.dataPoints[c].indexLabelFontColor:f.indexLabelFontColor,B=f.indexLabelPlacement,E=f.dataPoints[c].indexLabelLineColor?f.dataPoints[c].indexLabelLineColor:f.indexLabelLineColor,D=f.dataPoints[c].indexLabelLineThickness?f.dataPoints[c].indexLabelLineThickness:f.indexLabelLineThickness,F=a,G=b,d=y._eventManager.objectMap[d].pastExploded,H=h[c],I=f.dataPoints[c].indexLabelFontStyle?f.dataPoints[c].indexLabelFontStyle:f.indexLabelFontStyle,J=f.dataPoints[c].indexLabelFontWeight?
f.dataPoints[c].indexLabelFontWeight:f.indexLabelFontWeight,K=f.dataPoints[c].indexLabelFontSize?f.dataPoints[c].indexLabelFontSize:f.indexLabelFontSize,L=f.dataPoints[c].indexLabelFontFamily?f.dataPoints[c].indexLabelFontFamily:f.indexLabelFontFamily,M=f.dataPoints[c].indexLabelBackgroundColor?f.dataPoints[c].indexLabelBackgroundColor:f.indexLabelBackgroundColor?f.indexLabelBackgroundColor:null,N=c;e.save();e.lineWidth=D;e.font=I+" "+J+" "+K+"px "+L;D="left";0>m&&"outside"===B?D="right":0<=m&&"outside"===
B?D="left":"inside"===B&&(D="center");e.textAlign=D;e.textBaseline="middle";e.beginPath();M&&(e.fillStyle=M,"outside"===B?0<=m?e.fillRect(m-2.5,t-2.5,r-m+5,v-t+5):e.fillRect(m+2.5,t-2.5,r-m-5,v-t+5):"inside"===B&&(0<=m?e.fillRect(m-H/2-2.5,t-2.5,r-m+5,v-t+5):e.fillRect(m+H/2+2.5,t-2.5,r-m-5,v-t+5)));e.fillStyle=C;e.fillText(x,m,(t+v)/2);"outside"===B&&h[N]&&(r=z*Math.cos(A),x=z*Math.sin(A),!0===w&&!0!==d?(r+=z*g*Math.cos(A)/G*F,x+=z*g*Math.sin(A)/G*F):!0===w&&!0===d?(r+=z*g*Math.cos(A),x+=z*g*Math.sin(A)):
!0!==w&&!0===d&&(r+=z*g*Math.cos(A)/G*F,x+=z*g*Math.sin(A)/G*F),e.moveTo(r,x),0<m?(e.lineTo(m-10,(t+v)/2),e.lineTo(m-2,(t+v)/2)):0>m&&(e.lineTo(m+10,(t+v)/2),e.lineTo(m+2,(t+v)/2)),e.strokeStyle=E,e.stroke());e.restore()}}if(!(0>=a.dataSeriesIndexes.length)){var f=this.data[a.dataSeriesIndexes[0]],g=0.07;ctx=this.plotArea.ctx;var h=[],m=[],l=[],k=[],r=0,q=0,p=[],n=[],u=[],s=[],w=f.dataPoints.length,v=this.plotArea;v.width=v.x2-v.x1;v.height=v.y2-v.y1;var x={x:(v.x2+v.x1)/2,y:(v.y2+v.y1)/2};a=f.startAngle?
f.startAngle:0;a=(a%360+360)%360*Math.PI/180;m.push(a);var A=this._selectedColorSet,z=0.5*Math.min(v.width,v.height);for(a=0;a<w;a++){var B=f.dataPoints[a].indexLabel?f.dataPoints[a].indexLabel:f.indexLabel?f.indexLabel:f.dataPoints[a].label?f.dataPoints[a].label:f.label?f.label:"",B=this.replaceKeywordsWithValue(B,f.dataPoints[a],f,a);k.push(B);var B=f.dataPoints[a].indexLabelFontStyle?f.dataPoints[a].indexLabelFontStyle:f.indexLabelFontStyle,D=f.dataPoints[a].indexLabelFontWeight?f.dataPoints[a].indexLabelFontWeight:
f.indexLabelFontWeight,G=f.dataPoints[a].indexLabelFontSize?f.dataPoints[a].indexLabelFontSize:f.indexLabelFontSize,F=f.dataPoints[a].indexLabelFontFamily?f.dataPoints[a].indexLabelFontFamily:f.indexLabelFontFamily;ctx.save();ctx.font=B+" "+D+" "+G+"px "+F;B=ctx.measureText(k[a]).width;ctx.restore();h.push(B);r+=Math.abs(f.dataPoints[a].y)}for(a=B=0;a<w;a++)D=Math.abs(f.dataPoints[a].y),D=2*Math.PI*(D/r),m.push(m[a]+D),D=D/2+m[a],l.push(D%(2*Math.PI)),B+=h[a];0===B&&(f.indexLabelPlacement="inside");
B=0;if("inside"===f.indexLabelPlacement)for(z*=0.8*(1-g),a=0;a<w;a++)G=z*Math.cos(l[a]),F=z*Math.sin(l[a]),p.push(G),0<G?n.push(p[a]+h[a]):n.push(p[a]-h[a]),u.push(F-f.indexLabelFontSize/2),s.push(F+f.indexLabelFontSize/2);else if("outside"===f.indexLabelPlacement)for(D=0;3>D;D++){for(a=0;a<w;a++)G=z*Math.cos(l[a]),F=z*Math.sin(l[a]),p.push(G),0<G?n.push(p[a]+h[a]):n.push(p[a]-h[a]),u.push(F-f.indexLabelFontSize/2),s.push(F+f.indexLabelFontSize/2);for(a=0;a<w;a++)l[a]<Math.PI/2&&(1<=a&&u[a]<s[a-1])&&
(G=s[a-1]-u[a],u[a]+=G+2,s[a]+=G+2,20>w&&(u[a]+=3,s[a]+=3)),l[a]<3*Math.PI/2&&l[a]>=Math.PI&&s[a]>u[a-1]&&(G=s[a]-u[a-1],u[a]-=G+2,s[a]-=G+2,20>w&&(u[a]-=3,s[a]-=3));for(a=w;0<=a;a--)l[a]<Math.PI&&l[a]>=Math.PI/2&&u[a]<s[a+1]&&(G=s[a+1]-u[a],u[a]+=G+2,s[a]+=G+2,20>w&&(u[a]+=3,s[a]+=3)),l[a]>=3*Math.PI/2&&s[a]>u[a+1]&&(G=s[a]-u[a+1],u[a]-=G,s[a]-=G,20>w&&(u[a]+=-3,s[a]+=-3));if(2>B){a=Math.min.apply(Math,u.concat(s));var G=Math.max.apply(Math,u.concat(s)),F=Math.max.apply(Math,n.concat(p)),I=Math.min.apply(Math,
n.concat(p)),H=[];Math.abs(a)>v.height/2&&H.push(Math.abs(a)-v.height/2);Math.abs(G)>v.height/2&&H.push(Math.abs(G)-v.height/2);Math.abs(F)>v.width/2&&H.push(Math.abs(F)-v.width/2);Math.abs(I)>v.width/2&&H.push(Math.abs(I)-v.width/2);p=[];n=[];u=[];s=[];H.length&&(z-=Math.max.apply(Math,H)+f.indexLabelFontSize/2+2,40>z&&(z=40));B++}}var y=this,E={frame:0,maxAngle:m[0],count:0};0!==y.renderCount&&(this.animationEnabled=!1);E.isAnimating=60;c();this.pieDoughnutClickHandler=function(a){if(0===E.isAnimating){a=
a.dataPointIndex;var c=f.dataPointIds[a];!0===y._eventManager.objectMap[c].currentlyExploded?(!0===y._eventManager.objectMap[c].userSetExploded&&(f.dataPoints[a].exploded=!1),y._eventManager.objectMap[c].currentlyExploded=!1,E.frame=t?20:4,E.isAnimating=t?20:4,d()):!1===y._eventManager.objectMap[c].currentlyExploded&&(!0===y._eventManager.objectMap[c].userSetExploded&&(f.dataPoints[a].exploded=!0),y._eventManager.objectMap[c].currentlyExploded=!0,E.isAnimating=t?20:4,E.frame=0,b())}}}};w.prototype.requestAnimFrame=
function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();S.prototype.registerSpace=function(a,c){"top"===a?this._topOccupied+=c.height:"bottom"===a?this._bottomOccupied+=c.height:"left"===a?this._leftOccupied+=c.width:"right"===a&&(this._rightOccupied+=c.width)};S.prototype.unRegisterSpace=function(a,c){"top"===a?this._topOccupied-=
c.height:"bottom"===a?this._bottomOccupied-=c.height:"left"===a?this._leftOccupied-=c.width:"right"===a&&(this._rightOccupied-=c.width)};S.prototype.getFreeSpace=function(){return{x1:this._leftOccupied,y1:this._topOccupied,x2:this.chart.width-this._rightOccupied,y2:this.chart.height-this._bottomOccupied,width:this.chart.width-this._rightOccupied-this._leftOccupied,height:this.chart.height-this._bottomOccupied-this._topOccupied}};S.prototype.reset=function(){this._topOccupied=0;this._bottomOccupied=
3;this._rightOccupied=this._leftOccupied=0};N(D,H);D.prototype.render=function(a){a&&this.ctx.save();var c=this.ctx.font;this.ctx.textBaseline=this.textBaseline;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var b=0,d=this.padding,e=null;if(0<this.borderThickness&&this.borderColor||this.backgroundColor)this.ctx.roundRect(0,0,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,
this.borderColor),"middle"===this.textBaseline&&(d+=this.fontSize/2);this.ctx.fillStyle=this.fontColor;for(var f=0;f<this._wrappedText.lines.length;f++)e=this._wrappedText.lines[f],"right"===this.horizontalAlign?b=this.width-e.width-this.padding:"left"===this.horizontalAlign?b=this.padding:"center"===this.horizontalAlign&&(b=(this.width-2*this.padding)/2-e.width/2+this.padding),this.ctx.fillText(e.text,b,d),d+=e.height;this.ctx.font=c;a&&this.ctx.restore()};D.prototype.setText=function(a){this.text=
a;this._isDirty=!0;this._wrappedText=null};D.prototype.measureText=function(){if(null===this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};D.prototype._getLineWithWidth=function(a,c,b){a=String(a);if(!a)return{text:"",width:0};var d=b=0,e=a.length-1,f=Infinity;for(this.ctx.font=this._getFontString();d<=e;){var f=Math.floor((d+e)/2),g=a.substr(0,f+1);b=this.ctx.measureText(g).width;if(b<c)d=f+1;else if(b>
c)e=f-1;else break}b>c&&1<g.length&&(g=g.substr(0,g.length-1),b=this.ctx.measureText(g).width);c=!0;if(g.length===a.length||" "===a[g.length])c=!1;c&&(a=g.split(" "),1<a.length&&a.pop(),g=a.join(" "),b=this.ctx.measureText(g).width);return{text:g,width:b}};D.prototype._wrapText=function(){text=new String($(this.text));var a=[],c=this.ctx.font,b=0,d=0;for(this.ctx.font=this._getFontString();0<text.length;){var e=this.maxHeight-2*this.padding,f=this._getLineWithWidth(text,this.maxWidth-2*this.padding,
!1);f.height=this.fontSize;a.push(f);d=Math.max(d,f.width);b+=f.height;text=$(text.slice(f.text.length,text.length));e&&b>e&&a.pop()}this._wrappedText={lines:a,width:d,height:b};this.width=d+2*this.padding;this.height=b+2*this.padding;this.ctx.font=c};D.prototype._getFontString=function(){return this.fontStyle+" "+this.fontWeight+" "+this.fontSize+"px "+this.fontFamily};N(T,H);T.prototype.render=function(){if(this.text){var a=this.chart.layoutManager.getFreeSpace(),c=0,b=0,d=0,e=0,f=0,g,h;"top"===
this.verticalAlign||"bottom"===this.verticalAlign?(e=a.width-2*this.margin,f=0.5*a.height-2*this.margin,d=0):"center"===this.verticalAlign&&("left"===this.horizontalAlign||"right"===this.horizontalAlign?(e=a.height-2*this.margin,f=0.5*a.width-2*this.margin):"center"===this.horizontalAlign&&(e=a.width-2*this.margin,f=0.5*a.height-2*this.margin));var f=new D(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,
verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,maxWidth:e,maxHeight:f,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:this.borderColor&&0<this.borderThickness?"middle":"top"}),m=f.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(b=this.margin,h="top"):"bottom"===this.verticalAlign&&(b=a.y2-this.margin-m.height,h="bottom"),"left"===
this.horizontalAlign?c=a.x1+this.margin:"center"===this.horizontalAlign?c=a.x1+(e/2-m.width/2)+this.margin:"right"===this.horizontalAlign&&(c=a.x2-this.margin-m.width),g=this.horizontalAlign,this.width=m.width,this.height=m.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(c=a.x1+this.margin,b=a.y2-this.margin-(e/2-m.width/2),d=-90,h="left",this.width=m.height,this.height=m.width):"right"===this.horizontalAlign?(c=a.x2-this.margin,b=a.y1+this.margin+(e/2-m.width/2),d=90,h="right",
this.width=m.height,this.height=m.width):"center"===this.horizontalAlign&&(b=a.y1+(a.height/2-m.height/2),c=a.x1+(a.width/2-m.width/2),h="center",this.width=m.width,this.height=m.height),g="center");f.x=c;f.y=b;f.angle=d;f.horizontalAlign=g;f.render(!0);this.chart.layoutManager.registerSpace(h,{width:this.width+2*this.margin,height:this.height+2*this.margin});this.bounds={x1:c,y1:b,x2:c+this.width,y2:b+this.height};this.ctx.textBaseline="top"}};N(Z,H);Z.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace(),
c=null,b=0,d=0,e=0,f=0,g=[],h=[];"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation="horizontal",c=this.verticalAlign,e=0.9*a.width,f=0.5*a.height):"center"===this.verticalAlign&&(this.orientation="vertical",c=this.horizontalAlign,e=0.5*a.width,f=0.9*a.height);for(var m=0;m<this.dataSeries.length;m++){var l=this.dataSeries[m],k=l.legendMarkerType?l.legendMarkerType:"line"!==
l.type&&"stepLine"!==l.type&&"spline"!==l.type&&"scatter"!==l.type&&"bubble"!==l.type||!l.markerType?M.getDefaultLegendMarker(l.type):l.markerType,r=l.legendText?l.legendText:l.name,q=l.legendMarkerColor?l.legendMarkerColor:l.markerColor?l.markerColor:l._colorSet[0],p=l.markerSize||"line"!==l.type&&"stepLine"!==l.type&&"spline"!==l.type?0.7*this.fontSize:0;if("pie"!==l.type&&"doughnut"!==l.type)k={markerType:k,markerColor:q,text:r,textBlock:null,chartType:l.type,markerSize:p,lineColor:l._colorSet[0]},
g.push(k);else for(var n=0;n<l.dataPoints.length;n++)p=l.dataPoints[n],k=p.legendMarkerType?p.legendMarkerType:l.legendMarkerType?l.legendMarkerType:M.getDefaultLegendMarker(l.type),r=p.legendText?p.legendText:l.legendText?l.legendText:p.name?p.name:"DataPoint: "+(n+1),q=p.markerColor?p.markerColor:l.markerColor?l.markerColor:p.color?p.color:l.color?l.color:l._colorSet[n%l._colorSet.length],p=0!==p.markerSize&&(0!==l.markerSize||p.markerSize)||"line"!==l.type&&"stepLine"!==l.type&&"spline"!==l.type?
0.7*this.fontSize:0,k={markerType:k,markerColor:q,text:r,textBlock:null,chartType:l.type,markerSize:p},g.push(k)}if(0<g.length){l=null;for(m=n=0;m<g.length;m++){k=g[m];if("horizontal"===this.orientation){if(k.textBlock=new D(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:this.fontSize,angle:0,text:k.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),k.textBlock.measureText(),!l||l.width+
k.textBlock.width+(0===l.width?0:this.horizontalSpacing)>e)l={entries:[],width:0},h.push(l),this.height=h.length*(this.fontSize+5)}else this.height+this.fontSize<f?(l={entries:[],width:0},h.push(l),this.height=h.length*this.fontSize):(l=h[n],n=(n+1)%h.length),k.textBlock=new D(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:this.fontSize,angle:0,text:k.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,
textBaseline:"top"}),k.textBlock.measureText();k.textBlock.x=l.width+(0===l.width?0:this.horizontalSpacing);k.textBlock.y=0;l.width+=k.textBlock.width+(this.fontSize+5)+(0===l.width?0:this.horizontalSpacing);l.entries.push(k);this.width=Math.max(l.width,this.width)}this.height=h.length*this.fontSize}"top"===this.verticalAlign?(d="left"===this.horizontalAlign?a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,b=a.y1):"center"===this.verticalAlign?(d="left"===this.horizontalAlign?
a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,b=a.y1+a.height/2-this.height/2):"bottom"===this.verticalAlign&&(d="left"===this.horizontalAlign?a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,b=a.y2-this.height-5);for(m=0;m<h.length;m++)for(l=h[m],a=0;a<l.entries.length;a++){k=l.entries[a];e=k.textBlock.x+d;f=b+m*this.fontSize;if("line"===k.chartType||"stepLine"===k.chartType||"spline"===k.chartType)this.ctx.strokeStyle=k.lineColor,
this.ctx.lineWidth=Math.ceil(this.fontSize/8),this.ctx.beginPath(),this.ctx.moveTo(e-2,f+this.fontSize/2),this.ctx.lineTo(e+2+this.fontSize,f+this.fontSize/2),this.ctx.stroke();I.drawMarker(e+this.fontSize/2,f+this.fontSize/2,this.ctx,k.markerType,p,k.markerColor,null,0);k.textBlock.x=e+this.fontSize+5;k.textBlock.y=f;k.textBlock.render(!0)}this.chart.layoutManager.registerSpace(c,{width:this.width,height:this.height+5+5});this.bounds={x1:d,y1:b,x2:d+this.width,y2:b+this.height}};N(da,H);da.prototype.render=
function(){var a=this.chart.layoutManager.getFreeSpace();this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};N(M,H);M.prototype.getDefaultAxisPlacement=function(){type=this.type;if("column"===type||"line"===type||"stepLine"===type||"spline"===type||"area"===type||"splineArea"===type||"stackedColumn"===type||"stackedLine"===type||"bubble"===type||"scatter"===type||"stackedArea"===type||"stackedColumn100"===type||"stackedLine100"===type||"stackedArea100"===type)return"normal";if("bar"===
type||"stackedBar"===type||"stackedBar100"===type)return"xySwapped";if("pie"===type||"doughnut"===type)return"none";window.console.log("Unknown Chart Type: "+type);return null};M.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a)return"circle";if("area"===
a||"splineArea"===a||"stackedArea"===a||"stackedArea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};M.prototype.getDataPointAtX=function(a,c){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},d=null,e=0,f=0,g=1,h=Infinity,m=0,l=0,k=0;"none"!==this.chart.plotInfo.axisPlacement&&(k=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,k=0<k?(this.dataPoints.length-1)/k*(a-this.dataPoints[0].x)>>
0:0);for(;;){f=0<g?k+e:k-e;if(0<=f&&f<this.dataPoints.length){var d=this.dataPoints[f],r=Math.abs(d.x-a);r<b.distance&&(b.dataPoint=d,b.distance=r,b.index=f);d=Math.abs(d.x-a);d<=h?h=d:0<g?m++:l++;if(1E3<m&&1E3<l)break}else if(0>k-e&&k+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}return c||b.dataPoint.x!==a?c&&null!==b.dataPoint?b:null:b};M.prototype.getDataPointAtXY=function(a,c,b){if(!this.dataPoints||0===this.dataPoints.length)return null;b=b||!1;var d=[],e=0,f=0,g=1,h=!1,m=Infinity,l=
0,k=0,r=0;"none"!==this.chart.plotInfo.axisPlacement&&(r=this.chart.axisX.getXValueAt({x:a,y:c}),f=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,r=0<f?(this.dataPoints.length-1)/f*(r-this.dataPoints[0].x)>>0:0);for(;;){f=0<g?r+e:r-e;if(0<=f&&f<this.dataPoints.length){var q=this.chart._eventManager.objectMap[this.dataPointIds[f]],p=this.dataPoints[f];if(q){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":a>=
q.x1&&(a<=q.x2&&c>=q.y1&&c<=q.y2)&&(d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:Math.min(Math.abs(q.x1-a),Math.abs(q.x2-a),Math.abs(q.y1-c),Math.abs(q.y2-c))}),h=!0);break;case "line":case "stepLine":case "spline":case "area":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var n=P("markerSize",p,this)||4,u=b?20:n,s=Math.sqrt(Math.pow(q.x1-a,2)+Math.pow(q.y1-c,2));s<=u&&d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:s});f=Math.abs(q.x1-a);
f<=m?m=f:0<g?l++:k++;s<=n/2&&(h=!0);break;case "bubble":n=q.size;s=Math.sqrt(Math.pow(q.x1-a,2)+Math.pow(q.y1-c,2));s<=n/2&&(d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:s}),h=!0);break;case "pie":case "doughnut":n=q.center,u="doughnut"===this.type?0.6*q.radius:0,s=Math.sqrt(Math.pow(n.x-a,2)+Math.pow(n.y-c,2)),s<q.radius&&s>u&&(s=Math.atan2(c-n.y,a-n.x),0>s&&(s+=2*Math.PI),s=(180*(s/Math.PI)%360+360)%360,n=(180*(q.startAngle/Math.PI)%360+360)%360,q=(180*(q.endAngle/Math.PI)%360+
360)%360,n>q&&(q+=360,s<n&&(s+=360)),s>n&&s<q&&(d.push({dataPoint:p,dataPointIndex:f,dataSeries:this,distance:0}),h=!0))}if(h||1E3<l&&1E3<k)break}}else if(0>r-e&&r+e>=this.dataPoints.length)break;-1===g?(e++,g=1):g=-1}a=null;for(c=0;c<d.length;c++)a?d[c].distance<=a.distance&&(a=d[c]):a=d[c];return a};M.prototype.getMarkerProperties=function(a,c,b,d){var e=this.dataPoints;return{x:c,y:b,ctx:d,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,
color:e[a].markerColor?e[a].markerColor:this.markerColor?this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};N(A,H);A.prototype.createLabels=function(){var a,c=0,b,d=0,e=0,c=0;if("bottom"===this._position||"top"===
this._position)c=this.lineCoordinates.width/Math.abs(this.maximum-this.minimum)*this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?0.9*c>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.7*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?0.5*this.chart.height>>0:this.labelFontSize;else if("left"===this._position||"right"===this._position)c=this.lineCoordinates.height/Math.abs(this.maximum-this.minimum)*
this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?0.3*this.chart.width>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.5*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?2*c>>0:this.labelFontSize;if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType)for(b=ha(new Date(this.maximum),this.interval,this.intervalType),c=this.intervalStartPosition;c<b;ha(c,this.interval,this.intervalType))a=
"axisX"===this.type&&this.labels[c]?this.labels[c]:oa(c,this.valueFormatString,this.chart._cultureInfo),a=new D(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:c.getTime(),textBlock:a,effectiveHeight:null});else{b=this.maximum;if(this.labels&&
this.labels.length){a=Math.ceil(this.interval);for(var f=Math.ceil(this.intervalStartPosition),g=!1,c=f;c<this.maximum;c+=a)if(this.labels[c])g=!0;else{g=!1;break}g&&(this.interval=a,this.intervalStartPosition=f)}for(c=this.intervalStartPosition;c<=b;c+=this.interval)a="axisX"===this.type&&this.labels[c]?this.labels[c]:ga(c,this.valueFormatString,this.chart._cultureInfo),a=new D(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,
fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:c,textBlock:a,effectiveHeight:null})}};A.prototype.createLabelsAndCalculateWidth=function(){var a=0;this._labels=[];if("left"===this._position||"right"===this._position)for(this.createLabels(),i=0;i<this._labels.length;i++){textBlock=this._labels[i].textBlock;var c=textBlock.measureText();labelEffectiveWidth=
0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+c.height/2*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<labelEffectiveWidth&&(a=labelEffectiveWidth);this._labels[i].effectiveWidth=labelEffectiveWidth}return(this.title?this.titleFontSize+5:0)+a+this.tickLength+10};A.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];var c,b=0;this.createLabels();if("bottom"===this._position||"top"===this._position)for(b=0;b<this._labels.length;b++){c=
this._labels[b].textBlock;c=c.measureText();var d=0,d=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+c.height/2*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<d&&(a=d);this._labels[b].effectiveHeight=d}return(this.title?this.titleFontSize+5:0)+a+this.tickLength};A.setLayoutAndRender=function(a,c,b,d,e){var f,g,h,m=a.chart,l=m.ctx;a.calculateAxisParameters();c&&c.calculateAxisParameters();b&&b.calculateAxisParameters();if(c&&b&&"undefined"===typeof c._options.maximum&&
"undefined"===typeof c._options.minimum&&"undefined"===typeof c._options.interval&&"undefined"===typeof b._options.maximum&&"undefined"===typeof b._options.minimum&&"undefined"===typeof b._options.interval){var k=(c.maximum-c.minimum)/c.interval,r=(b.maximum-b.minimum)/b.interval;k>r?b.maximum=b.interval*k+b.minimum:r>k&&(c.maximum=c.interval*r+c.minimum)}var q=c?c.lineThickness?c.lineThickness:0:0,p=b?b.lineThickness?b.lineThickness:0:0,k=c?c.gridThickness?c.gridThickness:0:0,r=b?b.gridThickness?
b.gridThickness:0:0,n=c?c.margin:0;if("normal"===d)a.lineCoordinates={},q=c?c.createLabelsAndCalculateWidth():0,f=e.x1+q+n,a.lineCoordinates.x1=f,n=b?b.createLabelsAndCalculateWidth():0,g=e.x2-n>a.chart.width-10?a.chart.width-10:e.x2-n,a.lineCoordinates.x2=g,a.lineCoordinates.width=Math.abs(g-f),p=a.createLabelsAndCalculateHeight(),d=e.y2-p-a.margin,h=e.y2-a.margin,a.lineCoordinates.y1=d,a.lineCoordinates.y2=d,a.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d},c&&(f=e.x1+c.margin,d=10>e.y1?
10:e.y1,g=e.x1+q+c.margin,h=e.y2-p-a.margin,c.lineCoordinates={x1:g,y1:d,x2:g,y2:h,height:Math.abs(h-d)},c.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d}),b&&(f=a.lineCoordinates.x2,d=10>e.y1?10:e.y1,g=f+n+b.margin,h=e.y2-p-a.margin,b.lineCoordinates={x1:f,y1:d,x2:f,y2:h,height:Math.abs(h-d)},b.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d}),a.calculateValueToPixelConvertionParameters(),c&&c.calculateValueToPixelConvertionParameters(),b&&b.calculateValueToPixelConvertionParameters(),
l.save(),l.rect(a.boundingRect.x1-40,a.boundingRect.y1,a.boundingRect.width+80,a.boundingRect.height),l.clip(),a.renderLabelsTicksAndTitle(),l.restore(),c&&c.renderLabelsTicksAndTitle(),b&&b.renderLabelsTicksAndTitle(),m.preparePlotArea(),e=a.chart.plotArea,l.save(),l.rect(e.x1,e.y1-Math.max(r,k)/2,Math.abs(e.x2-e.x1),Math.abs(e.y2-e.y1+Math.max(r,k)/2+Math.max(r,k,a.lineThickness)/2));else{var u=a.createLabelsAndCalculateWidth();c&&(c.lineCoordinates={},f=e.x1+u+a.margin+a.lineThickness/2,g=e.x2>
c.chart.width-10?c.chart.width-10:e.x2,c.lineCoordinates.x1=f,c.lineCoordinates.x2=g,c.lineCoordinates.width=Math.abs(g-f));b&&(b.lineCoordinates={},f=e.x1+u+a.margin+a.lineThickness/2,g=e.x2>b.chart.width-10?b.chart.width-10:e.x2,b.lineCoordinates.x1=f,b.lineCoordinates.x2=g,b.lineCoordinates.width=Math.abs(g-f));var s=c?c.createLabelsAndCalculateHeight():0,t=b?b.createLabelsAndCalculateHeight():0;c&&(d=e.y2-s-c.margin,h=e.y2-c.margin,c.lineCoordinates.y1=d,c.lineCoordinates.y2=d,c.boundingRect=
{x1:f,y1:d,x2:g,y2:h,width:g-f,height:s});b&&(d=e.y1+b.margin,h=e.y1+b.margin+t,b.lineCoordinates.y1=h,b.lineCoordinates.y2=h,b.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:t});f=e.x1+a.margin;d=10>e.y1+t+p/2?10:e.y1+t+p/2;g=e.x1+u+a.margin;h=e.y2-s-n-q/2;a.lineCoordinates={x1:g,y1:d,x2:g,y2:h,height:Math.abs(h-d)};a.boundingRect={x1:f,y1:d,x2:g,y2:h,width:g-f,height:h-d};a.calculateValueToPixelConvertionParameters();c&&c.calculateValueToPixelConvertionParameters();b&&b.calculateValueToPixelConvertionParameters();
l.save();c&&c.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle();a.renderLabelsTicksAndTitle();m.preparePlotArea();e=a.chart.plotArea;l.save();l.rect(e.x1-Math.max(a.lineThickness,k,r)/2,e.y1,Math.abs(e.x2-e.x1+Math.max(a.lineThickness,k,r)/2+Math.max(k,r)/2),Math.abs(e.y2-e.y1))}l.clip();a.renderInterlacedColors();c&&c.renderInterlacedColors();b&&b.renderInterlacedColors();l.restore();a.renderGrid();c&&c.renderGrid();b&&b.renderGrid();a.renderAxisLine();c&&c.renderAxisLine();b&&b.renderAxisLine()};
A.prototype.renderLabelsTicksAndTitle=function(){var a=!1,c=0,b=1,d=0;0!==this.labelAngle&&360!==this.labelAngle&&(b=1.2);if("undefined"===typeof this._options.interval){if("bottom"===this._position||"top"===this._position){for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||(f=f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.height*Math.sin(Math.PI/180*this.labelAngle),c+=f);c>this.lineCoordinates.width*b&&(a=!0)}if("left"===this._position||"right"===this._position){for(e=
0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||(f=f.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),c+=f);c>this.lineCoordinates.height*b&&(a=!0)}}if("bottom"===this._position){var e=0;this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(var f,e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&
(this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,c.y<<0),this.ctx.lineTo(c.x<<0,c.y+this.tickLength<<0),this.ctx.stroke()),a&&0!==d++%2||(0===f.textBlock.angle?(c.x-=f.textBlock.width/2,c.y+=this.tickLength+f.textBlock.fontSize/2):(c.x-=0>this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,c.y+=this.tickLength+Math.abs(0>this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)),f.textBlock.x=c.x,f.textBlock.y=c.y,f.textBlock.render(!0)));this.title&&(this._titleTextBlock=
new D(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y2-this.titleFontSize-5,maxWidth:this.lineCoordinates.width,maxHeight:this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/
2,this._titleTextBlock.render(!0))}else if("top"===this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,c.y<<0),this.ctx.lineTo(c.x<<0,c.y-this.tickLength<<0),this.ctx.stroke()),a&&0!==d++%2||(0===f.textBlock.angle?(c.x-=f.textBlock.width/2,c.y-=this.tickLength+
f.textBlock.height/2):(c.x-=0<this.labelAngle?f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,c.y-=this.tickLength+Math.abs(0<this.labelAngle?f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5)),f.textBlock.x=c.x,f.textBlock.y=c.y,f.textBlock.render(!0)));this.title&&(this._titleTextBlock=new D(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y1,maxWidth:this.lineCoordinates.width,maxHeight:this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,
fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("left"===this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||
f.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,c.y<<0),this.ctx.lineTo(c.x-this.tickLength<<0,c.y<<0),this.ctx.stroke()),a&&0!==d++%2||(f.textBlock.x=c.x-f.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5,f.textBlock.y=0===this.labelAngle?c.y-f.textBlock.height/2+this.labelFontSize/2:c.y-f.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),f.textBlock.render(!0)));this.title&&(this._titleTextBlock=
new D(this.ctx,{x:this.boundingRect.x1+5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:this.titleFontSize,angle:-90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}else if("right"===
this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)f=this._labels[e],f.position<this.minimum||f.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(f.position),this.tickThickness&&(this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,c.y<<0),this.ctx.lineTo(c.x+this.tickLength<<0,c.y<<0),this.ctx.stroke()),a&&0!==d++%2||(f.textBlock.x=c.x+this.tickLength+5,f.textBlock.y=0===this.labelAngle?c.y-f.textBlock.height/2+this.labelFontSize/
2:c.y,f.textBlock.render(!0)));this.title&&(this._titleTextBlock=new D(this.ctx,{x:this.boundingRect.x2-5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:this.titleFontSize,angle:90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/
2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}};A.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,c,b,d=this.chart.plotArea;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor){var e=0;a.fillStyle=this.interlacedColor;for(e=0;e<this._labels.length;e+=2)c=this.getPixelCoordinatesOnAxis(this._labels[e].position),b=e+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[e+
1].position),a.fillRect(c.x,d.y1,Math.abs(b.x-c.x),Math.abs(d.y1-d.y2))}else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e+=2)b=this.getPixelCoordinatesOnAxis(this._labels[e].position),c=e+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(d.x1,c.y,Math.abs(d.x1-d.x2),Math.abs(c.y-b.y))};A.prototype.renderGrid=function(){var a=
this.chart.ctx,c,b=this.chart.plotArea;if("bottom"===this._position||"top"===this._position){if(this.gridThickness&&0<this.gridThickness)for(a.lineWidth=this.gridThickness,a.strokeStyle=this.gridColor,a.beginPath(),d=0;d<this._labels.length;d++)this._labels[d].position<this.minimum||this._labels[d].position>this.maximum||(c=this.getPixelCoordinatesOnAxis(this._labels[d].position),a.moveTo(c.x<<0,b.y1<<0),a.lineTo(c.x<<0,b.y2<<0),a.stroke())}else if(("left"===this._position||"right"===this._position)&&
this.gridThickness&&0<this.gridThickness){a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.beginPath();for(var d=0;d<this._labels.length;d++)this._labels[d].position<this.minimum||this._labels[d].position>this.maximum||(c=this.getPixelCoordinatesOnAxis(this._labels[d].position),a.moveTo(b.x1<<0,c.y<<0),a.lineTo(b.x2<<0,c.y<<0),a.stroke())}};A.prototype.renderAxisLine=function(){var a=this.chart.ctx;"bottom"===this._position||"top"===this._position?this.lineThickness&&(a.lineWidth=this.lineThickness,
a.strokeStyle=this.lineColor?this.lineColor:"black",a.beginPath(),a.moveTo(this.lineCoordinates.x1,this.lineCoordinates.y1),a.lineTo(this.lineCoordinates.x2,this.lineCoordinates.y2),a.stroke()):"left"!==this._position&&"right"!==this._position||!this.lineThickness||(a.lineWidth=this.lineThickness,a.strokeStyle=this.lineColor,a.beginPath(),a.moveTo(this.lineCoordinates.x1,this.lineCoordinates.y1),a.lineTo(this.lineCoordinates.x2,this.lineCoordinates.y2),a.stroke())};A.prototype.getPixelCoordinatesOnAxis=
function(a){var c={},b=this.lineCoordinates.width,d=this.lineCoordinates.height;if("bottom"===this._position||"top"===this._position)b/=Math.abs(this.maximum-this.minimum),c.x=this.lineCoordinates.x1+b*(a-this.minimum),c.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)b=d/Math.abs(this.maximum-this.minimum),c.y=this.lineCoordinates.y2-b*(a-this.minimum),c.x=this.lineCoordinates.x2;return c};A.prototype.getXValueAt=function(a){if(!a)return null;var c=null;"left"===this._position?
c=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-a.y)+this.chart.axisX.minimum:"bottom"===this._position&&(c=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a.x-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum);return c};A.prototype.calculateValueToPixelConvertionParameters=function(a){a={pixelPerUnit:null,minimum:null,reference:null};var c=this.lineCoordinates.width,
b=this.lineCoordinates.height;a.minimum=this.minimum;if("bottom"===this._position||"top"===this._position)a.pixelPerUnit=c/Math.abs(this.maximum-this.minimum),a.reference=this.lineCoordinates.x1;if("left"===this._position||"right"===this._position)a.pixelPerUnit=-1*b/Math.abs(this.maximum-this.minimum),a.reference=this.lineCoordinates.y2;this.convertionParameters=a};A.prototype.calculateAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace();"bottom"===this._position||"top"===this._position?
(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?8:Math.max(6,Math.floor(this.maxWidth/62)):Math.floor(this.maxWidth/40),c,b,d,e;"axisX"===this.type?(c=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:this.dataInfo.viewPortMin,b=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:this.dataInfo.viewPortMax,0===b-c&&(b+=0.4,c-=0.4),d=Infinity!==
this.dataInfo.minDiff?this.dataInfo.minDiff:1):"axisY"===this.type&&(c="undefined"===typeof this._options.minimum?this.dataInfo.viewPortMin:this._options.minimum,b="undefined"===typeof this._options.maximum?this.dataInfo.viewPortMax:this._options.maximum,0===b-c?(b+=5,c-=5):(0!==b&&(b+=Math.abs(0.05)),0!==c&&(c-=Math.abs(0.05))),this.includeZero&&"undefined"===typeof this._options.minimum&&0<c&&(c=0),this.includeZero&&"undefined"===typeof this._options.maximum&&0>b&&(b=0));"axisX"===this.type&&"dateTime"===
this.chart.plotInfo.axisXValueType?(e=b-c,this.intervalType||(e/1<=a?(this.interval=1,this.intervalType="millisecond"):e/2<=a?(this.interval=2,this.intervalType="millisecond"):e/5<=a?(this.interval=5,this.intervalType="millisecond"):e/10<=a?(this.interval=10,this.intervalType="millisecond"):e/20<=a?(this.interval=20,this.intervalType="millisecond"):e/50<=a?(this.interval=50,this.intervalType="millisecond"):e/100<=a?(this.interval=100,this.intervalType="millisecond"):e/200<=a?(this.interval=200,this.intervalType=
"millisecond"):e/250<=a?(this.interval=250,this.intervalType="millisecond"):e/300<=a?(this.interval=300,this.intervalType="millisecond"):e/400<=a?(this.interval=400,this.intervalType="millisecond"):e/500<=a?(this.interval=500,this.intervalType="millisecond"):e/(1*z.secondDuration)<=a?(this.interval=1,this.intervalType="second"):e/(2*z.secondDuration)<=a?(this.interval=2,this.intervalType="second"):e/(5*z.secondDuration)<=a?(this.interval=5,this.intervalType="second"):e/(10*z.secondDuration)<=a?(this.interval=
10,this.intervalType="second"):e/(15*z.secondDuration)<=a?(this.interval=15,this.intervalType="second"):e/(20*z.secondDuration)<=a?(this.interval=20,this.intervalType="second"):e/(30*z.secondDuration)<=a?(this.interval=30,this.intervalType="second"):e/(1*z.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):e/(2*z.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):e/(5*z.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):e/(10*z.minuteDuration)<=a?(this.interval=
10,this.intervalType="minute"):e/(15*z.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):e/(20*z.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):e/(30*z.minuteDuration)<=a?(this.interval=30,this.intervalType="minute"):e/(1*z.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):e/(2*z.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):e/(3*z.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):e/(6*z.hourDuration)<=a?(this.interval=6,this.intervalType=
"hour"):e/(1*z.dayDuration)<=a?(this.interval=1,this.intervalType="day"):e/(2*z.dayDuration)<=a?(this.interval=2,this.intervalType="day"):e/(4*z.dayDuration)<=a?(this.interval=4,this.intervalType="day"):e/(1*z.weekDuration)<=a?(this.interval=1,this.intervalType="week"):e/(2*z.weekDuration)<=a?(this.interval=2,this.intervalType="week"):e/(3*z.weekDuration)<=a?(this.interval=3,this.intervalType="week"):e/(1*z.monthDuration)<=a?(this.interval=1,this.intervalType="month"):e/(2*z.monthDuration)<=a?(this.interval=
2,this.intervalType="month"):e/(3*z.monthDuration)<=a?(this.interval=3,this.intervalType="month"):e/(6*z.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=e/(1*z.yearDuration)<=a?1:e/(2*z.yearDuration)<=a?2:e/(4*z.yearDuration)<=a?4:Math.floor(A.getNiceNumber(e/(a-1),!0)/z.yearDuration),this.intervalType="year")),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:c-d/2,this.maximum=this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:
b+d/2,this.valueFormatString||("year"===this.intervalType?this.valueFormatString="YYYY":"month"===this.intervalType?this.valueFormatString="MMM YYYY":"week"===this.intervalType?this.valueFormatString="MMM DD YYYY":"day"===this.intervalType?this.valueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.valueFormatString="hh:mm TT":"minute"===this.intervalType?this.valueFormatString="hh:mm TT":"second"===this.intervalType?this.valueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&
(this.valueFormatString="fff'ms'")),this.intervalStartPosition=this.getLabelStartPoint(new Date(this.minimum),this.intervalType,this.interval)):(this.intervalType="number",e=A.getNiceNumber(b-c,!1),this.interval=this._options&&this._options.interval?this._options.interval:A.getNiceNumber(e/(a-1),!0),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:Math.floor(c/this.interval)*this.interval,this.maximum=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:
Math.ceil(b/this.interval)*this.interval,"axisX"===this.type?(null===this.sessionVariables.internalMinimum&&(this.minimum=c-d/2),this.sessionVariables.internalMaximum||(this.maximum=b+d/2),this.intervalStartPosition=Math.floor((this.minimum+this.interval)/this.interval)*this.interval):"axisY"===this.type&&(this.intervalStartPosition=this.minimum));"axisX"===this.type&&(this._absoluteMinimum=this._options&&"undefined"!==typeof this._options.minimum?this._options.minimum:this.dataInfo.min-d/2,this._absoluteMaximum=
this._options&&"undefined"!==typeof this._options.maximum?this._options.maximum:this.dataInfo.max+d/2);if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",e=Math.abs(this.maximum-this.minimum),1>e&&(c=Math.floor(Math.abs(Math.log(e)/Math.LN10))+2,2<c)))for(b=0;b<c-2;b++)this.valueFormatString+="#"};A.prototype._getFontString=function(){return this.labelFontStyle+" "+this.labelFontWeight+" "+this.labelFontSize+"px "+this.labelFontFamily};A.getNiceNumber=function(a,c){var b=Math.floor(Math.log(a)/
Math.LN10),d=a/Math.pow(10,b);return(c?1.5>d?1:3>d?2:7>d?5:10:1>=d?1:2>=d?2:5>=d?5:10)*Math.pow(10,b)};A.prototype.getLabelStartPoint=function(){var a=R(this.interval,this.intervalType),a=new Date(Math.floor(this.minimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),
a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||
0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&
(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};N(L,H);L.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.style.position="absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';
a+="line-height: 20px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: 400;";a+="font-style: italic;";a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+="text-align: left;";a+="border: 2px solid gray;";a+=t?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 10px;";t||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;this.chart._canvasJSContainer.appendChild(this.container)}};L.prototype.mouseMoveHandler=function(a,c){this._lastUpdated&&40>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(a,c))};L.prototype._updateToolTip=function(a,c){if(this.enabled){if("undefined"===typeof a||"undefined"===typeof c){if(isNaN(this._prevX)||
isNaN(this._prevY))return;a=this._prevX;c=this._prevY}else this._prevX=a,this._prevY=c;var b=null,d=null,e=[],f=0;if(this.shared&&"none"!==this.chart.plotInfo.axisPlacement){f="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-c)+this.chart.axisX.minimum:(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+
this.chart.axisX.minimum;b=[];for(d=0;d<this.chart.data.length;d++){var g=this.chart.data[d].getDataPointAtX(f,!0);g&&0<=g.index&&(g.dataSeries=this.chart.data[d],b.push(g))}if(0===b.length)return;b.sort(function(a,b){return a.distance-b.distance});f=b[0];for(d=0;d<b.length;d++)b[d].dataPoint.x.valueOf()===f.dataPoint.x.valueOf()&&e.push(b[d]);b=null}else if((g=this.chart.getDataPointAtXY(a,c,!0))?(this.currentDataPointIndex=g.dataPointIndex,this.currentSeriesIndex=g.dataSeries.index):t?(g=ja(a,c,
this.chart._eventManager.ghostCtx),0<g&&"undefined"!==typeof this.chart._eventManager.objectMap[g]?(eventObject=this.chart._eventManager.objectMap[g],this.currentSeriesIndex=eventObject.dataSeriesIndex,this.currentDataPointIndex=0<=eventObject.dataPointIndex?eventObject.dataPointIndex:-1):this.currentDataPointIndex=-1):this.currentDataPointIndex=-1,0<=this.currentSeriesIndex){d=this.chart.data[this.currentSeriesIndex];g={};if(0<=this.currentDataPointIndex)b=d.dataPoints[this.currentDataPointIndex],
g.dataSeries=d,g.dataPoint=b,g.index=this.currentDataPointIndex,g.distance=Math.abs(b.x-f);else if("line"===d.type||"stepLine"===d.type||"spline"===d.type||"area"===d.type||"splineArea"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type)f=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum.valueOf(),g=d.getDataPointAtX(f,!0),g.dataSeries=d,this.currentDataPointIndex=g.index,b=g.dataPoint;
else return;e.push(g)}if(0<e.length){this.highlightObjects(e);f="";f=this.getToolTipInnerHTML({entries:e});this.contentDiv.innerHTML=f;this.contentDiv.innerHTML=f;f=!1;"none"===this.container.style.display&&(f=!0,this.container.style.display="block");try{this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.borderColor?this.borderColor:e[0].dataPoint.color?e[0].dataPoint.color:e[0].dataSeries.color?e[0].dataSeries.color:e[0].dataSeries._colorSet[e[0].index%
e[0].dataSeries._colorSet.length]}catch(h){}"pie"===e[0].dataSeries.type||"doughnut"===e[0].dataSeries.type||"bar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?toolTipLeft=a-10-this.container.clientWidth:(toolTipLeft=this.chart.axisX.lineCoordinates.width/Math.abs(this.chart.axisX.maximum-this.chart.axisX.minimum)*Math.abs(e[0].dataPoint.x-this.chart.axisX.minimum)+this.chart.axisX.lineCoordinates.x1+0.5-this.container.clientWidth<<0,toolTipLeft-=
10);toolTipLeft=0<toolTipLeft?toolTipLeft+"px":toolTipLeft+this.container.clientWidth+20+"px";e=1!==e.length||this.shared||"line"!==e[0].dataSeries.type&&"stepLine"!==e[0].dataSeries.type&&"spline"!==e[0].dataSeries.type&&"area"!==e[0].dataSeries.type&&"splineArea"!==e[0].dataSeries.type&&"stackedArea"!==e[0].dataSeries.type&&"stackedArea100"!==e[0].dataSeries.type?"bar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?e[0].dataSeries.axisX.lineCoordinates.y2-
e[0].dataSeries.axisX.lineCoordinates.height/Math.abs(e[0].dataSeries.axisX.maximum-e[0].dataSeries.axisX.minimum)*Math.abs(e[0].dataPoint.x-e[0].dataSeries.axisX.minimum)+0.5<<0:c:e[0].dataSeries.axisY.lineCoordinates.y2-e[0].dataSeries.axisY.lineCoordinates.height/Math.abs(e[0].dataSeries.axisY.maximum-e[0].dataSeries.axisY.minimum)*Math.abs(e[0].dataPoint.y-e[0].dataSeries.axisY.minimum)+0.5<<0;e=-e+10;0<e+this.container.clientHeight+5&&(e-=e+this.container.clientHeight+5-0);this.container.style.left=
toolTipLeft;this.container.style.bottom=e+"px";!this.animationEnabled||f?this.disableAnimation():this.enableAnimation()}}};L.prototype.highlightObjects=function(a){if(this.enabled){var c=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();c.save();var b=this.chart.plotArea;c.rect(b.x1,b.y1,b.width,b.height);c.clip();c.beginPath();for(b=0;b<a.length;b++){var d=a[b];if((d=this.chart._eventManager.objectMap[d.dataSeries.dataPointIds[d.index]])&&d.objectType&&"dataPoint"===d.objectType){var e=
this.chart.data[d.dataSeriesIndex],f=d.dataPointIndex;if("line"===e.type||"stepLine"===e.type||"spline"===e.type||"scatter"===e.type||"area"===e.type||"splineArea"===e.type||"stackedArea"===e.type||"stackedArea100"===e.type)e=e.getMarkerProperties(f,d.x1,d.y1,this.chart.overlaidCanvasCtx),e.size=Math.max(1.5*e.size<<0,10),e.borderColor=e.borderColor||"#FFFFFF",e.borderThickness=e.borderThickness||Math.ceil(0.1*e.size),I.drawMarkers([e]);else if("bubble"===e.type)e=e.getMarkerProperties(f,d.x1,d.y1,
this.chart.overlaidCanvasCtx),e.size=d.size,e.color="white",e.borderColor="white",c.globalAlpha=0.3,I.drawMarkers([e]),c.globalAlpha=1;else if("column"===e.type||"stackedColumn"===e.type||"stackedColumn100"===e.type||"bar"===e.type||"stackedBar"===e.type||"stackedBar100"===e.type)c.globalAlpha=0.3,J(c,d.x1,d.y1,d.x2,d.y2,"white",!1,!1,!1,!1),c.globalAlpha=1;else if("pie"===e.type||"doughnut"===e.type)c.globalAlpha=0.3,Q(c,d.center,d.radius,"white",e.type,d.startAngle,d.endAngle),c.globalAlpha=1}}c.globalAlpha=
1;c.restore()}};L.prototype.getToolTipInnerHTML=function(a){a=a.entries;for(var c="",b=null,d=null,e=0,f="",g=!0,h=0;h<a.length;h++)if(a[h].dataSeries.toolTipContent||a[h].dataPoint.toolTipContent){g=!1;break}if(g&&this.content&&"function"===typeof this.content)c=this.content({entries:a});else if(1<a.length)for(h=0;h<a.length;h++){b=a[h].dataSeries;d=a[h].dataPoint;e=a[h].index;f="";0===h&&(g&&!this.content)&&(f+="undefined"!==typeof this.chart.axisX.labels[d.x]?this.chart.axisX.labels[d.x]:"{x}",
f+="</br>");if("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";
else if("bubble"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===b.type||"doughnut"===b.type)f+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"&nbsp;&nbsp;{y}";c+=this.chart.replaceKeywordsWithValue(f,d,b,e);h<a.length-1&&(c+="</br>")}else{b=
a[0].dataSeries;d=a[0].dataPoint;e=a[0].index;if("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+
(d.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===b.type||"doughnut"===b.type)f=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:(d.name?"{name}:&nbsp;&nbsp;":
d.label?"{label}:&nbsp;&nbsp;":"")+"{y}";c+=this.chart.replaceKeywordsWithValue(f,d,b,e)}return c};L.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};L.prototype.disableAnimation=
function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};L.prototype.hide=function(){this.enabled&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,this.chart.resetOverlayedCanvas())};w.prototype.replaceKeywordsWithValue=function(a,c,b,d){var e=this;return a.replace(/\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g,function(a){if('"'===
a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=$(a.slice(1,a.length-1));var g=null;if("color"===a)return c.color?c.color:b.color?b.color:b._colorSet[d%b._colorSet.length];if(c.hasOwnProperty(a))g=c;else if(b.hasOwnProperty(a))g=b;else return"";return"x"===a?e.axisX&&"dateTime"===e.plotInfo.axisXValueType?oa(g[a],c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:e.axisX&&e.axisX.valueFormatString?e.axisX.valueFormatString:
"DD MMM YY",e._cultureInfo):ga(g[a],c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:"#,##0.########",e._cultureInfo):"y"===a?ga(g[a],c.yValueFormatString?c.yValueFormatString:b.yValueFormatString?b.yValueFormatString:"#,##0.########",e._cultureInfo):g[a]})};Y.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;t&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),
this.ghostCtx.beginPath())};Y.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};Y.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var c=null,b=null,d=null,e=-1,f=!1,g=!1,h=pa(a),d=b=null;(d=this.chart.getDataPointAtXY(h.x,h.y,!1))?b=d.dataSeries.dataPointIds[d.dataPointIndex]:t&&(b=ja(h.x,h.y,this.ghostCtx));d=this.chart.plotArea;if(b&&h.x>d.x1&&h.x<d.x2&&h.y>d.y1&&h.y<d.y2)if("undefined"!==typeof this.objectMap[b]&&"dataPoint"===this.objectMap[b].objectType){c=
this.objectMap[b];b=this.chart.data[c.dataSeriesIndex];d=b.dataPoints[c.dataPointIndex];e=c.dataPointIndex;if(null===this.previousDataPointEventObject||this.previousDataPointEventObject.dataSeriesIndex!==c.dataSeriesIndex||this.previousDataPointEventObject.dataPointIndex!==c.dataPointIndex)this.previousDataPointEventObject&&(f=!0),d.mouseover&&d.mouseover.call(d,{x:h.x,y:h.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),!b.mouseover||null!==this.previousDataPointEventObject&&this.previousDataPointEventObject.dataSeriesIndex===
c.dataSeriesIndex||(b.mouseover&&b.mouseover.call(b,{x:h.x,y:h.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),this.previousDataPointEventObject&&(g=!0));"mousemove"===a.type?(d.cursor&&d.cursor!==a.target.style.cursor?a.target.style.cursor=d.cursor:b.cursor&&b.cursor!==a.target.style.cursor&&(a.target.style.cursor=b.cursor),d.mousemove&&d.mousemove.call(d,{x:h.x,y:h.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),b.mousemove&&b.mousemove.call(b,{x:h.x,y:h.y,dataPoint:d,dataSeries:b,dataPointIndex:e})):
"click"===a.type&&5>Math.sqrt(Math.pow(this.chart.dragStartPoint.x-h.x,2)+Math.pow(this.chart.dragStartPoint.y-h.y,2))&&(d.click&&d.click.call(d,{x:h.x,y:h.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),b.click&&b.click.call(b,{x:h.x,y:h.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),this.chart.pieDoughnutClickHandler&&this.chart.pieDoughnutClickHandler.call(b,{x:h.x,y:h.y,dataPoint:d,dataSeries:b,dataPointIndex:e}))}else this.previousDataPointEventObject&&(g=f=!0);else this.previousDataPointEventObject&&
(g=f=!0);if(f||g)a.target.style.cursor=this.chart._defaultCursor,a=this.chart.data[this.previousDataPointEventObject.dataSeriesIndex],b=a.dataPoints[this.previousDataPointEventObject.dataPointIndex],d=this.previousDataPointEventObject.dataPointIndex,f&&b.mouseout&&b.mouseout.call(b,{x:h.x,y:h.y,dataPoint:b,dataSeries:a,dataPointIndex:d}),g&&a.mouseout&&a.mouseout.call(a,{x:h.x,y:h.y,dataPoint:b,dataSeries:a,dataPointIndex:d});this.previousDataPointEventObject=c}};N(ma,H);var I={drawMarker:function(a,
c,b,d,e,f,g,h){if(b){var m=1;b.fillStyle=f?f:"#000000";b.strokeStyle=g?g:"#000000";b.lineWidth=h?h:0;"circle"===d?(b.moveTo(a,c),b.beginPath(),b.arc(a,c,e/2,0,2*Math.PI,!1),f&&b.fill(),h&&(g?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m))):"square"===d?(b.beginPath(),b.rect(a-e/2,c-e/2,e,e),f&&b.fill(),h&&(g?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m))):"triangle"===d?(b.beginPath(),b.moveTo(a-e/
2,c+e/2),b.lineTo(a+e/2,c+e/2),b.lineTo(a,c-e/2),b.closePath(),f&&b.fill(),h&&(g?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m)),b.beginPath()):"cross"===d&&(b.strokeStyle=f,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,c-e/2),b.lineTo(a+e/2,c+e/2),b.stroke(),b.moveTo(a+e/2,c-e/2),b.lineTo(a-e/2,c+e/2),b.stroke())}},drawMarkers:function(a){for(var c=0;c<a.length;c++){var b=a[c];I.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}},
qa={Chart:function(a,c){var b=new w(a,c,this);this.render=function(){b.render()};this.options=b._options},addColorSet:function(a,c){U[a]=c},addCultureInfo:function(a,c){ea[a]=c}};qa.Chart.version="1.3.0 Beta 3";window.CanvasJS=qa})();
/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext||function(){function V(){return this.context_||(this.context_=new C(this))}function W(a,b,c){var g=M.call(arguments,2);return function(){return a.apply(b,g.concat(M.call(arguments)))}}function N(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function O(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");
a.styleSheets.ex_canvas_||(a=a.createStyleSheet(),a.owningElement.id="ex_canvas_",a.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")}function X(a){var b=a.srcElement;switch(a.propertyName){case "width":b.getContext().clearRect();b.style.width=b.attributes.width.nodeValue+"px";b.firstChild.style.width=b.clientWidth+"px";break;case "height":b.getContext().clearRect(),b.style.height=b.attributes.height.nodeValue+"px",b.firstChild.style.height=b.clientHeight+
"px"}}function Y(a){a=a.srcElement;a.firstChild&&(a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function D(){return[[1,0,0],[0,1,0],[0,0,1]]}function t(a,b){for(var c=D(),g=0;3>g;g++)for(var e=0;3>e;e++){for(var f=0,d=0;3>d;d++)f+=a[g][d]*b[d][e];c[g][e]=f}return c}function P(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=
a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY;b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.font=a.font;b.textAlign=a.textAlign;b.textBaseline=a.textBaseline;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function Q(a){var b=a.indexOf("(",3),c=a.indexOf(")",b+1),b=a.substring(b+1,c).split(",");if(4!=b.length||"a"!=a.charAt(3))b[3]=1;return b}function E(a,b,c){return Math.min(c,Math.max(b,a))}function F(a,b,c){0>c&&c++;1<c&&c--;return 1>6*c?a+6*(b-a)*c:
1>2*c?b:2>3*c?a+6*(b-a)*(2/3-c):a}function G(a){if(a in H)return H[a];var b,c=1;a=String(a);if("#"==a.charAt(0))b=a;else if(/^rgb/.test(a)){c=Q(a);b="#";for(var g,e=0;3>e;e++)g=-1!=c[e].indexOf("%")?Math.floor(255*(parseFloat(c[e])/100)):+c[e],b+=v[E(g,0,255)];c=+c[3]}else if(/^hsl/.test(a)){e=c=Q(a);b=parseFloat(e[0])/360%360;0>b&&b++;g=E(parseFloat(e[1])/100,0,1);e=E(parseFloat(e[2])/100,0,1);if(0==g)g=e=b=e;else{var f=0.5>e?e*(1+g):e+g-e*g,d=2*e-f;g=F(d,f,b+1/3);e=F(d,f,b);b=F(d,f,b-1/3)}b="#"+
v[Math.floor(255*g)]+v[Math.floor(255*e)]+v[Math.floor(255*b)];c=c[3]}else b=Z[a]||a;return H[a]={color:b,alpha:c}}function C(a){this.m_=D();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*q;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=a;var b="width:"+a.clientWidth+"px;height:"+a.clientHeight+"px;overflow:hidden;position:absolute",
c=a.ownerDocument.createElement("div");c.style.cssText=b;a.appendChild(c);b=c.cloneNode(!1);b.style.backgroundColor="red";b.style.filter="alpha(opacity=0)";a.appendChild(b);this.element_=c;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function R(a,b,c,g){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:g.x,y:g.y});a.currentX_=g.x;a.currentY_=g.y}function S(a,b){var c=G(a.strokeStyle),g=c.color,c=c.alpha*a.globalAlpha,e=a.lineScale_*a.lineWidth;1>e&&(c*=e);b.push("<g_vml_:stroke",
' opacity="',c,'"',' joinstyle="',a.lineJoin,'"',' miterlimit="',a.miterLimit,'"',' endcap="',$[a.lineCap]||"square",'"',' weight="',e,'px"',' color="',g,'" />')}function T(a,b,c,g){var e=a.fillStyle,f=a.arcScaleX_,d=a.arcScaleY_,k=g.x-c.x,n=g.y-c.y;if(e instanceof w){var h=0,l=g=0,u=0,m=1;if("gradient"==e.type_){h=e.x1_/f;c=e.y1_/d;var p=s(a,e.x0_/f,e.y0_/d),h=s(a,h,c),h=180*Math.atan2(h.x-p.x,h.y-p.y)/Math.PI;0>h&&(h+=360);1E-6>h&&(h=0)}else p=s(a,e.x0_,e.y0_),g=(p.x-c.x)/k,l=(p.y-c.y)/n,k/=f*q,
n/=d*q,m=x.max(k,n),u=2*e.r0_/m,m=2*e.r1_/m-u;f=e.colors_;f.sort(function(a,b){return a.offset-b.offset});d=f.length;p=f[0].color;c=f[d-1].color;k=f[0].alpha*a.globalAlpha;a=f[d-1].alpha*a.globalAlpha;for(var n=[],r=0;r<d;r++){var t=f[r];n.push(t.offset*m+u+" "+t.color)}b.push('<g_vml_:fill type="',e.type_,'"',' method="none" focus="100%"',' color="',p,'"',' color2="',c,'"',' colors="',n.join(","),'"',' opacity="',a,'"',' g_o_:opacity2="',k,'"',' angle="',h,'"',' focusposition="',g,",",l,'" />')}else e instanceof
I?k&&n&&b.push("<g_vml_:fill",' position="',-c.x/k*f*f,",",-c.y/n*d*d,'"',' type="tile"',' src="',e.src_,'" />'):(e=G(a.fillStyle),b.push('<g_vml_:fill color="',e.color,'" opacity="',e.alpha*a.globalAlpha,'" />'))}function s(a,b,c){a=a.m_;return{x:q*(b*a[0][0]+c*a[1][0]+a[2][0])-r,y:q*(b*a[0][1]+c*a[1][1]+a[2][1])-r}}function z(a,b,c){isFinite(b[0][0])&&(isFinite(b[0][1])&&isFinite(b[1][0])&&isFinite(b[1][1])&&isFinite(b[2][0])&&isFinite(b[2][1]))&&(a.m_=b,c&&(a.lineScale_=aa(ba(b[0][0]*b[1][1]-b[0][1]*
b[1][0]))))}function w(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function I(a,b){if(!a||1!=a.nodeType||"IMG"!=a.tagName)throw new A("TYPE_MISMATCH_ERR");if("complete"!=a.readyState)throw new A("INVALID_STATE_ERR");switch(b){case "repeat":case null:case "":this.repetition_="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":this.repetition_=b;break;default:throw new A("SYNTAX_ERR");}this.src_=a.src;this.width_=a.width;this.height_=a.height}
function A(a){this.code=this[a];this.message=a+": DOM Exception "+this.code}var x=Math,k=x.round,J=x.sin,K=x.cos,ba=x.abs,aa=x.sqrt,q=10,r=q/2;navigator.userAgent.match(/MSIE ([\d.]+)?/);var M=Array.prototype.slice;O(document);var U={init:function(a){a=a||document;a.createElement("canvas");a.attachEvent("onreadystatechange",W(this.init_,this,a))},init_:function(a){a=a.getElementsByTagName("canvas");for(var b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=
V;O(a.ownerDocument);a.innerHTML="";a.attachEvent("onpropertychange",X);a.attachEvent("onresize",Y);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};U.init();for(var v=[],d=0;16>d;d++)for(var B=0;16>B;B++)v[16*d+B]=d.toString(16)+B.toString(16);var Z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",
bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",
darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",
ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",
mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",
peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"},
H={},L={},$={butt:"flat",round:"round"},d=C.prototype;d.clearRect=function(){this.textMeasureEl_&&(this.textMeasureEl_.removeNode(!0),this.textMeasureEl_=null);this.element_.innerHTML=""};d.beginPath=function(){this.currentPath_=[]};d.moveTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.lineTo=function(a,b){var c=s(this,a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};d.bezierCurveTo=
function(a,b,c,g,e,f){e=s(this,e,f);a=s(this,a,b);c=s(this,c,g);R(this,a,c,e)};d.quadraticCurveTo=function(a,b,c,g){a=s(this,a,b);c=s(this,c,g);g={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};R(this,g,{x:g.x+(c.x-this.currentX_)/3,y:g.y+(c.y-this.currentY_)/3},c)};d.arc=function(a,b,c,g,e,f){c*=q;var d=f?"at":"wa",k=a+K(g)*c-r,n=b+J(g)*c-r;g=a+K(e)*c-r;e=b+J(e)*c-r;k!=g||f||(k+=0.125);a=s(this,a,b);k=s(this,k,n);g=s(this,g,e);this.currentPath_.push({type:d,
x:a.x,y:a.y,radius:c,xStart:k.x,yStart:k.y,xEnd:g.x,yEnd:g.y})};d.rect=function(a,b,c,g){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath()};d.strokeRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+g);this.lineTo(a,b+g);this.closePath();this.stroke();this.currentPath_=e};d.fillRect=function(a,b,c,g){var e=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+
c,b+g);this.lineTo(a,b+g);this.closePath();this.fill();this.currentPath_=e};d.createLinearGradient=function(a,b,c,g){var e=new w("gradient");e.x0_=a;e.y0_=b;e.x1_=c;e.y1_=g;return e};d.createRadialGradient=function(a,b,c,g,e,f){var d=new w("gradientradial");d.x0_=a;d.y0_=b;d.r0_=c;d.x1_=g;d.y1_=e;d.r1_=f;return d};d.drawImage=function(a,b){var c,g,e,d,r,y,n,h;e=a.runtimeStyle.width;d=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,u=a.height;a.runtimeStyle.width=
e;a.runtimeStyle.height=d;if(3==arguments.length)c=arguments[1],g=arguments[2],r=y=0,n=e=l,h=d=u;else if(5==arguments.length)c=arguments[1],g=arguments[2],e=arguments[3],d=arguments[4],r=y=0,n=l,h=u;else if(9==arguments.length)r=arguments[1],y=arguments[2],n=arguments[3],h=arguments[4],c=arguments[5],g=arguments[6],e=arguments[7],d=arguments[8];else throw Error("Invalid number of arguments");var m=s(this,c,g),p=[];p.push(" <g_vml_:group",' coordsize="',10*q,",",10*q,'"',' coordorigin="0,0"',' style="width:',
10,"px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]||1!=this.m_[1][1]||this.m_[1][0]){var t=[];t.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",k(m.x/q),",","Dy=",k(m.y/q),"");var v=s(this,c+e,g),w=s(this,c,g+d);c=s(this,c+e,g+d);m.x=x.max(m.x,v.x,w.x,c.x);m.y=x.max(m.y,v.y,w.y,c.y);p.push("padding:0 ",k(m.x/q),"px ",k(m.y/q),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",t.join(""),", sizingmethod='clip');")}else p.push("top:",
k(m.y/q),"px;left:",k(m.x/q),"px;");p.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',q*e,"px;"," height:",q*d,'px"',' cropleft="',r/l,'"',' croptop="',y/u,'"',' cropright="',(l-r-n)/l,'"',' cropbottom="',(u-y-h)/u,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",p.join(""))};d.stroke=function(a){var b=[];b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0,0"',' coordsize="',10*q,",",10*q,'"',
' stroked="',!a,'"',' path="');for(var c={x:null,y:null},d={x:null,y:null},e=0;e<this.currentPath_.length;e++){var f=this.currentPath_[e];switch(f.type){case "moveTo":b.push(" m ",k(f.x),",",k(f.y));break;case "lineTo":b.push(" l ",k(f.x),",",k(f.y));break;case "close":b.push(" x ");f=null;break;case "bezierCurveTo":b.push(" c ",k(f.cp1x),",",k(f.cp1y),",",k(f.cp2x),",",k(f.cp2y),",",k(f.x),",",k(f.y));break;case "at":case "wa":b.push(" ",f.type," ",k(f.x-this.arcScaleX_*f.radius),",",k(f.y-this.arcScaleY_*
f.radius)," ",k(f.x+this.arcScaleX_*f.radius),",",k(f.y+this.arcScaleY_*f.radius)," ",k(f.xStart),",",k(f.yStart)," ",k(f.xEnd),",",k(f.yEnd))}if(f){if(null==c.x||f.x<c.x)c.x=f.x;if(null==d.x||f.x>d.x)d.x=f.x;if(null==c.y||f.y<c.y)c.y=f.y;if(null==d.y||f.y>d.y)d.y=f.y}}b.push(' ">');a?T(this,b,c,d):S(this,b);b.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};d.fill=function(){this.stroke(!0)};d.closePath=function(){this.currentPath_.push({type:"close"})};d.save=function(){var a=
{};P(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=t(D(),this.m_)};d.restore=function(){this.aStack_.length&&(P(this.aStack_.pop(),this),this.m_=this.mStack_.pop())};d.translate=function(a,b){z(this,t([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)};d.rotate=function(a){var b=K(a);a=J(a);z(this,t([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};d.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;z(this,t([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};d.transform=function(a,b,c,d,e,f){z(this,t([[a,
b,0],[c,d,0],[e,f,1]],this.m_),!0)};d.setTransform=function(a,b,c,d,e,f){z(this,[[a,b,0],[c,d,0],[e,f,1]],!0)};d.drawText_=function(a,b,c,d,e){var f=this.m_;d=0;var r=1E3,t=0,n=[],h;h=this.font;if(L[h])h=L[h];else{var l=document.createElement("div").style;try{l.font=h}catch(u){}h=L[h]={style:l.fontStyle||"normal",variant:l.fontVariant||"normal",weight:l.fontWeight||"normal",size:l.fontSize||10,family:l.fontFamily||"sans-serif"}}var l=h,m=this.element_;h={};for(var p in l)h[p]=l[p];p=parseFloat(m.currentStyle.fontSize);
m=parseFloat(l.size);"number"==typeof l.size?h.size=l.size:-1!=l.size.indexOf("px")?h.size=m:-1!=l.size.indexOf("em")?h.size=p*m:-1!=l.size.indexOf("%")?h.size=p/100*m:-1!=l.size.indexOf("pt")?h.size=m/0.75:h.size=p;h.size*=0.981;p=h.style+" "+h.variant+" "+h.weight+" "+h.size+"px "+h.family;m=this.element_.currentStyle;l=this.textAlign.toLowerCase();switch(l){case "left":case "center":case "right":break;case "end":l="ltr"==m.direction?"right":"left";break;case "start":l="rtl"==m.direction?"right":
"left";break;default:l="left"}switch(this.textBaseline){case "hanging":case "top":t=h.size/1.75;break;case "middle":break;default:case null:case "alphabetic":case "ideographic":case "bottom":t=-h.size/2.25}switch(l){case "right":d=1E3;r=0.05;break;case "center":d=r=500}b=s(this,b+0,c+t);n.push('<g_vml_:line from="',-d,' 0" to="',r,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!e,'" stroked="',!!e,'" style="position:absolute;width:1px;height:1px;">');e?S(this,n):T(this,n,{x:-d,y:0},
{x:r,y:h.size});e=f[0][0].toFixed(3)+","+f[1][0].toFixed(3)+","+f[0][1].toFixed(3)+","+f[1][1].toFixed(3)+",0,0";b=k(b.x/q)+","+k(b.y/q);n.push('<g_vml_:skew on="t" matrix="',e,'" ',' offset="',b,'" origin="',d,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',N(a),'" style="v-text-align:',l,";font:",N(p),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",n.join(""))};d.fillText=function(a,b,c,d){this.drawText_(a,b,c,d,!1)};d.strokeText=function(a,
b,c,d){this.drawText_(a,b,c,d,!0)};d.measureText=function(a){this.textMeasureEl_||(this.element_.insertAdjacentHTML("beforeEnd",'<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'),this.textMeasureEl_=this.element_.lastChild);var b=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(b.createTextNode(a));return{width:this.textMeasureEl_.offsetWidth}};d.clip=function(){};
d.arcTo=function(){};d.createPattern=function(a,b){return new I(a,b)};w.prototype.addColorStop=function(a,b){b=G(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};d=A.prototype=Error();d.INDEX_SIZE_ERR=1;d.DOMSTRING_SIZE_ERR=2;d.HIERARCHY_REQUEST_ERR=3;d.WRONG_DOCUMENT_ERR=4;d.INVALID_CHARACTER_ERR=5;d.NO_DATA_ALLOWED_ERR=6;d.NO_MODIFICATION_ALLOWED_ERR=7;d.NOT_FOUND_ERR=8;d.NOT_SUPPORTED_ERR=9;d.INUSE_ATTRIBUTE_ERR=10;d.INVALID_STATE_ERR=11;d.SYNTAX_ERR=12;d.INVALID_MODIFICATION_ERR=
13;d.NAMESPACE_ERR=14;d.INVALID_ACCESS_ERR=15;d.VALIDATION_ERR=16;d.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=U;CanvasRenderingContext2D=C;CanvasGradient=w;CanvasPattern=I;DOMException=A}();
;// Chosen, a Select Box Enhancer for jQuery and Prototype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 1.0.0
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `grunt build`, do not edit it by hand.
(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;

      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;

      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;

    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;

      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.result_single_selected = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;

      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;

      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, _i, _len, _ref;

      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(data.text);
          }
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, style;

      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
      return "<li class=\"" + (classes.join(' ')) + "\"" + style + " data-option-array-index=\"" + option.array_index + "\">" + option.search_text + "</li>";
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      return "<li class=\"group-result\">" + group.search_text + "</li>";
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.result_single_selected = null;
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;

      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regexAnchor = this.search_contains ? "" : "^";
      regex = new RegExp(regexAnchor + escapedSearchText, 'i');
      zregex = new RegExp(escapedSearchText, 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          if (!(option.group && !this.group_search)) {
            option.search_text = option.group ? option.label : option.html;
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;

      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;

      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;

      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.browser_is_supported = function() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;

        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy' && chosen) {
          chosen.destroy();
        } else if (!chosen) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;

      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      this.set_label_behavior();
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;

      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(document).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(document).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta, _ref1, _ref2;

      delta = -((_ref1 = evt.originalEvent) != null ? _ref1.wheelDelta : void 0) || ((_ref2 = evt.originialEvent) != null ? _ref2.detail : void 0);
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(document).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      if (this.container.is($(evt.target).closest('.chosen-container'))) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;

      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      return this.winnow_results();
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;

      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;

      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;

      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;

      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;

      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + item.html + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.form_field.options[0].selected = true;
      this.selected_option_count = null;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item, selected_index;

      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          if (this.result_single_selected) {
            this.result_single_selected.removeClass("result-selected");
            selected_index = this.result_single_selected[0].getAttribute('data-option-array-index');
            this.results_data[selected_index].selected = false;
          }
          this.result_single_selected = high;
        }
        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(item.text);
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").text(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;

      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      if (this.search_field.val() === this.default_text) {
        return "";
      } else {
        return $('<div/>').text($.trim(this.search_field.val())).html();
      }
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;

      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;

      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      return this.search_results.append(no_results_html);
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;

      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;

      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;

      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;

      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          evt.preventDefault();
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;

      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);
;/**
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
});;/**
*
* Sliding Responsive Menu
*
**/

$('.toggle-menu').on('click touchstart', function(e){
	$('body').toggleClass('menu-active');
	e.preventDefault();
});