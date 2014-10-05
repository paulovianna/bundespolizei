var content = $('#content');
var menu_toggle = $('#menu-toggle');
var menu = $('#menu');
var menu_active = false;

menu_toggle.on('click', function(event){
	menu.toggleClass('sidebar-hidden');
	content.toggleClass('content-push');
	event.preventDefault();
});

/*
 CanvasJS HTML5 & JavaScript Charts - v1.3.0 GA - http://canvasjs.com/ 
 Copyright 2013 fenopix
*/
(function(){function N(a,c){a.prototype=ta(c.prototype);a.prototype.constructor=a;a.parent=c.prototype}function ta(a){function c(){}c.prototype=a;return new c}function ha(a,c,b){"millisecond"===b?a.setMilliseconds(a.getMilliseconds()+1*c):"second"===b?a.setSeconds(a.getSeconds()+1*c):"minute"===b?a.setMinutes(a.getMinutes()+1*c):"hour"===b?a.setHours(a.getHours()+1*c):"day"===b?a.setDate(a.getDate()+1*c):"week"===b?a.setDate(a.getDate()+7*c):"month"===b?a.setMonth(a.getMonth()+1*c):"year"===b&&a.setFullYear(a.getFullYear()+
1*c);return a}function R(a,c){return w[c+"Duration"]*a}function G(a,c){var b=!1;0>a&&(b=!0,a*=-1);a=""+a;for(c=c?c:1;a.length<c;)a="0"+a;return b?"-"+a:a}function aa(a){a=a.replace(/^\s\s*/,"");for(var c=/\s/,b=a.length;c.test(a.charAt(--b)););return a.slice(0,b+1)}function ua(a){a.roundRect=function(a,b,d,e,g,f,k,m){k&&(this.fillStyle=k);m&&(this.strokeStyle=m);"undefined"==typeof stroke&&(stroke=!0);"undefined"===typeof g&&(g=5);this.lineWidth=f;this.beginPath();this.moveTo(a+g,b);this.lineTo(a+
d-g,b);this.quadraticCurveTo(a+d,b,a+d,b+g);this.lineTo(a+d,b+e-g);this.quadraticCurveTo(a+d,b+e,a+d-g,b+e);this.lineTo(a+g,b+e);this.quadraticCurveTo(a,b+e,a,b+e-g);this.lineTo(a,b+g);this.quadraticCurveTo(a,b,a+g,b);this.closePath();k&&this.fill();m&&0<f&&this.stroke()}}function ia(a,c){return a-c}function va(a,c){return a.x-c.x}function z(a){var c=((a&16711680)>>16).toString(16),b=((a&65280)>>8).toString(16);a=((a&255)>>0).toString(16);c=2>c.length?"0"+c:c;b=2>b.length?"0"+b:b;a=2>a.length?"0"+
a:a;return"#"+c+b+a}function V(a,c,b){b=b||"normal";var d=a+"_"+c+"_"+b,e=ja[d];if(isNaN(e)){try{a="position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:"+a+"; font-size:"+c+"px; font-weight:"+b+";";if(!O){var g=document.body;O=document.createElement("span");O.innerHTML="";var f=document.createTextNode("Mpgyi");O.appendChild(f);g.appendChild(O)}O.style.display="";O.setAttribute("style",a);e=Math.round(O.offsetHeight);O.style.display=
"none"}catch(k){e=Math.ceil(1.1*c)}e=Math.max(e,c);ja[d]=e}return e}function K(a,c,b,d){if(a.addEventListener)a.addEventListener(c,b,d||!1);else if(a.attachEvent)a.attachEvent("on"+c,function(c){c=c||window.event;c.preventDefault=c.preventDefault||function(){c.returnValue=!1};c.stopPropagation=c.stopPropagation||function(){c.cancelBubble=!0};b.call(a,c)});else return!1}function ka(a,c,b){a*=P;c*=P;a=b.getImageData(a,c,2,2).data;c=!0;for(b=0;4>b;b++)if(a[b]!==a[b+4]|a[b]!==a[b+8]|a[b]!==a[b+12]){c=
!1;break}return c?a[0]<<16|a[1]<<8|a[2]:0}function la(a,c,b){var d;d=a?a+"FontStyle":"fontStyle";var e=a?a+"FontWeight":"fontWeight",g=a?a+"FontSize":"fontSize";a=a?a+"FontFamily":"fontFamily";d=""+(c[d]?c[d]+" ":b&&b[d]?b[d]+" ":"");d+=c[e]?c[e]+" ":b&&b[e]?b[e]+" ":"";d+=c[g]?c[g]+"px ":b&&b[g]?b[g]+"px ":"";c=c[a]?c[a]+"":b&&b[a]?b[a]+"":"";!u&&c&&(c=c.split(",")[0],"'"!==c[0]&&'"'!==c[0]&&(c="'"+c+"'"));return d+=c}function Q(a,c,b){return a in c?c[a]:b[a]}function W(a,c,b){if(u&&ma){var d=a.getContext("2d");
X=d.webkitBackingStorePixelRatio||d.mozBackingStorePixelRatio||d.msBackingStorePixelRatio||d.oBackingStorePixelRatio||d.backingStorePixelRatio||1;P=ba/X;a.width=c*P;a.height=b*P;ba!==X&&(a.style.width=c+"px",a.style.height=b+"px",d.scale(P,P))}else a.width=c,a.height=b}function Y(a,c){var b=document.createElement("canvas");b.setAttribute("class","canvasjs-chart-canvas");W(b,a,c);u||"undefined"===typeof G_vmlCanvasManager||G_vmlCanvasManager.initElement(b);return b}function I(a,c,b){this._defaultsKey=
a;currentTheme={};b&&(ca[b]&&ca[b][a])&&(currentTheme=ca[b][a]);this._options=c?c:{};this.setOptions(this._options,currentTheme)}function x(a,c){c=c||{};x.parent.constructor.call(this,"Chart",c,c.theme?c.theme:"theme1");var b=this;this._containerId=a;this._objectsInitialized=!1;this.overlaidCanvasCtx=this.ctx=null;this._indexLabels=[];this._panTimerId=0;this._lastTouchEventType="";this.panEnabled=!1;this._defaultCursor="default";this.plotArea={canvas:null,ctx:null,x1:0,y1:0,x2:0,y2:0,width:0,height:0};
this._dataInRenderedOrder=[];if(this._container=document.getElementById(this._containerId)){this._container.innerHTML="";var d=0,e=0,d=this._options.width?this.width:0<this._container.clientWidth?this._container.clientWidth:this.width,e=this._options.height?this.height:0<this._container.clientHeight?this._container.clientHeight:this.height;this.width=d;this.height=e;this._canvasJSContainer=document.createElement("div");this._canvasJSContainer.setAttribute("class","canvasjs-chart-container");this._canvasJSContainer.style.position=
"relative";u||(this._canvasJSContainer.style.height="0px");this._container.appendChild(this._canvasJSContainer);this.canvas=Y(d,e);this.canvas.style.position="absolute";if(this.canvas.getContext){try{this.canvas.style.background=this.backgroundColor}catch(g){}this._canvasJSContainer.appendChild(this.canvas);this.ctx=this.canvas.getContext("2d");this.ctx.textBaseline="top";ua(this.ctx);u?this.plotArea.ctx=this.ctx:(this.plotArea.canvas=Y(d,e),this.plotArea.canvas.style.position="absolute",this.plotArea.canvas.setAttribute("class",
"plotAreaCanvas"),this._canvasJSContainer.appendChild(this.plotArea.canvas),this.plotArea.ctx=this.plotArea.canvas.getContext("2d"));this.overlaidCanvas=Y(d,e);this.overlaidCanvas.style.position="absolute";this._canvasJSContainer.appendChild(this.overlaidCanvas);this.overlaidCanvasCtx=this.overlaidCanvas.getContext("2d");this.overlaidCanvasCtx.textBaseline="top";this._eventManager=new Z(this);this._toolBar=document.createElement("div");this._toolBar.setAttribute("class","canvasjs-chart-toolbar");
this._toolBar.style.position="absolute";this._toolBar.style.top="0px";this._toolBar.style.right="0px";this._canvasJSContainer.appendChild(this._toolBar);this.zoomEnabled&&(this._zoomButton=document.createElement("button"),this._zoomButton.appendChild(document.createTextNode("Pan")),this._toolBar.appendChild(this._zoomButton),K(this._zoomButton,"click",function(){b.zoomEnabled?(b.zoomEnabled=!1,b.panEnabled=!0,b._zoomButton.innerHTML=b._cultureInfo.zoomText):(b.zoomEnabled=!0,b.panEnabled=!1,b._zoomButton.innerHTML=
b._cultureInfo.panText);b.render()}));this.zoomEnabled&&(this._resetButton=document.createElement("button"),this._resetButton.appendChild(document.createTextNode("Reset")),this._toolBar.appendChild(this._resetButton),this.zoomEnabled=this._options.zoomEnabled?!0:!1,this.panEnabled=!1,this.overlaidCanvas.style.cursor=b._defaultCursor,K(this._resetButton,"click",function(){b._toolTip.hide();b.zoomEnabled||b.panEnabled?(b.zoomEnabled=!0,b.panEnabled=!1,b._zoomButton.innerHTML=b._cultureInfo.panText,
b._defaultCursor="default",b.overlaidCanvas.style.cursor=b._defaultCursor):(b.zoomEnabled=!1,b.panEnabled=!1);b.sessionVariables.axisX.internalMinimum=b._options.axisX&&b._options.axisX.minimum?b._options.axisX.minimum:null;b.sessionVariables.axisX.internalMaximum=b._options.axisX&&b._options.axisX.maximum?b._options.axisX.maximum:null;b.resetOverlayedCanvas();b._toolBar.style.display="none";b.render()}));K(window,"resize",function(){var a=0,c=0;b._options.width?a=b.width:b.width=a=0<b._container.clientWidth?
b._container.clientWidth:b.width;b._options.height?c=b.height:b.height=c=0<b._container.clientHeight?b._container.clientHeight:b.height;if(b.canvas.width!==a*P||b.canvas.height!==c*P)W(b.canvas,a,c),W(b.overlaidCanvas,a,c),W(b._eventManager.ghostCanvas,a,c),b.render()});this._toolBar.style.display="none";this.bounds={x1:0,y1:0,x2:this.width,y2:this.height};b=this;K(this.overlaidCanvas,"click",function(a){b._mouseEventHandler(a)});K(this.overlaidCanvas,"mousemove",function(a){b._mouseEventHandler(a)});
K(this.overlaidCanvas,"mouseup",function(a){b._mouseEventHandler(a)});K(this.overlaidCanvas,"mousedown",function(a){b._mouseEventHandler(a)});K(this.overlaidCanvas,"mouseout",function(a){b._mouseEventHandler(a)});K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerDown":"touchstart",function(a){b._touchEventHandler(a)});K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerMove":"touchmove",function(a){b._touchEventHandler(a)});K(this.overlaidCanvas,window.navigator.msPointerEnabled?
"MSPointerUp":"touchend",function(a){b._touchEventHandler(a)});K(this.overlaidCanvas,window.navigator.msPointerEnabled?"MSPointerCancel":"touchcancel",function(a){b._touchEventHandler(a)});this._toolTip=new L(this,this._options.toolTip,this.theme);this.layoutManager=new S(this);this.axisY2=this.axisY=this.axisX=this.data=null;this.renderCount=0;this.creditText&&this.creditHref&&(this._creditLink=document.createElement("a"),this._creditLink.setAttribute("class","canvasjs-chart-credit"),this._creditLink.setAttribute("style",
"outline:none;margin:0px;position:absolute;right:3px;top:"+(e-14)+"px;color:dimgrey;text-decoration:none;font-size:10px;font-family:Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),this._creditLink.setAttribute("tabIndex",-1),this._creditLink.setAttribute("href",this.creditHref),this._creditLink.innerHTML=this.creditText,this._creditLink.setAttribute("target","_blank"),this._canvasJSContainer.appendChild(this._creditLink));this.sessionVariables={axisX:{internalMinimum:null,internalMaximum:null},
axisY:{internalMinimum:null,internalMaximum:null},axisY2:{internalMinimum:null,internalMaximum:null}}}}else window.console&&window.console.log('CanvasJS Error: Chart Container with id "'+this._containerId+'" was not found')}function na(a,c){for(var b=[],d=0;d<a.length;d++)if(0==d)b.push(a[0]);else{var e,g,f;f=d-1;e=0===f?0:f-1;g=f===a.length-1?f:f+1;b[b.length]={x:a[f].x+(a[g].x-a[e].x)/c/3,y:a[f].y+(a[g].y-a[e].y)/c/3};f=d;e=0===f?0:f-1;g=f===a.length-1?f:f+1;b[b.length]={x:a[f].x-(a[g].x-a[e].x)/
c/3,y:a[f].y-(a[g].y-a[e].y)/c/3};b[b.length]=a[d]}return b}function S(a){this._rightOccupied=this._leftOccupied=this._bottomOccupied=this._topOccupied=0;this.chart=a}function E(a,c){E.parent.constructor.call(this,"TextBlock",c);this.ctx=a;this._isDirty=!0;this._wrappedText=null;this._lineHeight=V(this.fontFamily,this.fontSize,this.fontWeight)}function T(a,c){T.parent.constructor.call(this,"Title",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;"undefined"===typeof this._options.fontSize&&
(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.height=this.width=null;this.bounds={x1:null,y1:null,x2:null,y2:null}}function $(a,c,b){$.parent.constructor.call(this,"Legend",c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.height=this.width=0;this.orientation=null;this.horizontalSpacing=10;this.dataSeries=[];this.bounds={x1:null,y1:null,x2:null,y2:null};"undefined"===typeof this._options.fontSize&&(this.fontSize=this.chart.getAutoFontSize(this.fontSize));this.lineHeight=
V(this.fontFamily,this.fontSize,this.fontWeight)}function da(a,c){da.parent.constructor.call(this,c);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}function M(a,c,b,d,e){M.parent.constructor.call(this,"DataSeries",c,b);this.chart=a;this.canvas=a.canvas;this._ctx=a.canvas.ctx;this.index=d;this.maxWidthInX=this.noDataPointsInPlotArea=0;this.id=e;this.dataPointIds=[];this.axisY=this.axisX=null;this.axisPlacement=this.getDefaultAxisPlacement();"undefined"===typeof this._options.indexLabelFontSize&&
(this.indexLabelFontSize=this.chart.getAutoFontSize(this.indexLabelFontSize))}function B(a,c,b,d){B.parent.constructor.call(this,"Axis",c,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=a.ctx;this.intervalStartPosition=this.maxHeight=this.maxWidth=0;this.labels=[];this._labels=null;this.dataInfo={min:Infinity,max:-Infinity,viewPortMin:Infinity,viewPortMax:-Infinity,minDiff:Infinity};"axisX"===b?(this.sessionVariables=this.chart.sessionVariables[b],this._options.interval||(this.intervalType=null)):
this.sessionVariables="left"===d||"top"===d?this.chart.sessionVariables.axisY:this.chart.sessionVariables.axisY2;"undefined"===typeof this._options.titleFontSize&&(this.titleFontSize=this.chart.getAutoFontSize(this.titleFontSize));"undefined"===typeof this._options.labelFontSize&&(this.labelFontSize=this.chart.getAutoFontSize(this.labelFontSize));this.type=b;"axisX"!==b||c&&"undefined"!==typeof c.gridThickness||(this.gridThickness=0);this._position=d;this.lineCoordinates={x1:null,y1:null,x2:null,
y2:null,width:null};this.labelAngle=(this.labelAngle%360+360)%360;90<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:180<this.labelAngle&&270>=this.labelAngle?this.labelAngle-=180:270<this.labelAngle&&360>=this.labelAngle&&(this.labelAngle-=360);this._absoluteMaximum=this._absoluteMinimum=this._titleTextBlock=null;this.hasOptionChanged("minimum")&&(this.sessionVariables.internalMinimum=this.minimum);this.hasOptionChanged("maximum")&&(this.sessionVariables.internalMaximum=this.maximum);
this.trackChanges("minimum");this.trackChanges("maximum")}function L(a,c,b){L.parent.constructor.call(this,"ToolTip",c,b);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx;this.currentDataPointIndex=this.currentSeriesIndex=-1;this._timerId=0;this._prevY=this._prevX=NaN;this._initialize()}function Z(a){this.chart=a;this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;this.ghostCanvas=Y(this.chart.width,this.chart.height);this.ghostCtx=
this.ghostCanvas.getContext("2d")}function oa(a,c){var b;c&&ea[c]&&(b=ea[c]);T.parent.constructor.call(this,"CultureInfo",b,a.theme);this.chart=a;this.canvas=a.canvas;this.ctx=this.chart.ctx}var u=!!document.createElement("canvas").getContext,pa={Chart:{width:500,height:400,zoomEnabled:!1,backgroundColor:"white",theme:"theme1",animationEnabled:u?!0:!1,colorSet:"colorSet1",culture:"en",creditHref:"http://canvasjs.com/",creditText:"CanvasJS.com"},CultureInfo:{decimalSeparator:".",digitGroupSeparator:",",
zoomText:"Zoom",panText:"Pan",resetText:"Reset",days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")},Title:{padding:0,text:null,verticalAlign:"top",horizontalAlign:"center",fontSize:20,fontFamily:"Calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",
borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,margin:5},DataSeries:{name:null,dataPoints:null,label:"",bevelEnabled:!1,cursor:null,indexLabel:"",indexLabelPlacement:"outside",indexLabelOrientation:"horizontal",indexLabelFontColor:"black",indexLabelFontSize:12,indexLabelFontStyle:"normal",indexLabelFontFamily:"Arial",indexLabelFontWeight:"normal",indexLabelBackgroundColor:null,indexLabelLineColor:null,indexLabelLineThickness:1,indexLabelMaxWidth:null,indexLabelWrap:!0,lineThickness:2,
color:null,startAngle:0,type:"column",xValueType:"number",axisYType:"primary",xValueFormatString:null,yValueFormatString:null,showInLegend:null,legendMarkerType:null,legendMarkerColor:null,legendText:null,markerType:"circle",markerColor:null,markerSize:null,markerBorderColor:null,markerBorderThickness:null,mouseover:null,mouseout:null,mousemove:null,click:null,toolTipContent:null},Axis:{minimum:null,maximum:null,interval:null,intervalType:null,title:null,titleFontColor:"black",titleFontSize:20,titleFontFamily:"arial",
titleFontWeight:"normal",titleFontStyle:"normal",labelAngle:0,labelFontFamily:"arial",labelFontColor:"black",labelFontSize:12,labelFontWeight:"normal",labelFontStyle:"normal",labelAutoFit:!1,labelWrap:!0,labelMaxWidth:null,prefix:"",suffix:"",includeZero:!0,tickLength:5,tickColor:"black",tickThickness:1,lineColor:"black",lineThickness:1,gridColor:"A0A0A0",gridThickness:0,interlacedColor:null,valueFormatString:null,margin:2},Legend:{name:null,borderThickness:0,borderColor:"black",cornerRadius:0,verticalAlign:"center",
horizontalAlign:"right",fontSize:14,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal"},ToolTip:{enabled:!0,borderColor:null,shared:!1,animationEnabled:!0,content:null},TextBlock:{x:0,y:0,width:null,height:null,maxWidth:null,maxHeight:null,padding:0,angle:0,text:"",horizontalAlign:"center",fontSize:12,fontFamily:"calibri",fontWeight:"normal",fontColor:"black",fontStyle:"normal",borderThickness:0,borderColor:"black",cornerRadius:0,backgroundColor:null,textBaseline:"top"}},
ea={en:{}},U={colorSet1:"#369EAD #C24642 #7F6084 #86B402 #A2D1CF #C8B631 #6DBCEB #52514E #4F81BC #A064A1 #F79647".split(" "),colorSet2:"#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #33558B".split(" "),colorSet3:"#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")},ca={theme1:{Chart:{colorSet:U[0]},Title:{fontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",fontSize:33,fontColor:"#3A3A3A",fontWeight:"bold",
verticalAlign:"top",margin:10},Axis:{titleFontSize:26,titleFontColor:"#666666",titleFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"#BBBBBB",tickThickness:2,gridThickness:2,gridColor:"#BBBBBB",lineThickness:2,lineColor:"#BBBBBB"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:u?"monospace, sans-serif,arial black":"calibri"},
DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineThickness:1}},theme2:{Chart:{colorSet:"colorSet2"},Title:{fontFamily:"impact, charcoal, arial black, sans-serif",fontSize:32,fontColor:"#333333",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:u?"monospace, sans-serif,arial black":"arial",titleFontWeight:"bold",labelFontFamily:u?"monospace, Courier New, Courier":
"arial",labelFontSize:16,labelFontColor:"grey",labelFontWeight:"bold",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",lineThickness:0},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:u?"monospace, sans-serif,arial black":"arial"},DataSeries:{indexLabelFontColor:"grey",indexLabelFontFamily:u?"Courier New, Courier, monospace":"arial",indexLabelFontWeight:"bold",indexLabelFontSize:18,indexLabelLineThickness:1}},theme3:{Chart:{colorSet:"colorSet1"},Title:{fontFamily:u?
"Candara, Optima, Trebuchet MS, Helvetica Neue, Helvetica, Trebuchet MS, serif":"calibri",fontSize:32,fontColor:"rgb(68,78,58)",fontColor:"#3A3A3A",fontWeight:"bold",verticalAlign:"top",margin:10},Axis:{titleFontSize:22,titleFontColor:"rgb(98,98,98)",titleFontFamily:u?"Verdana, Geneva, Calibri, sans-serif":"calibri",labelFontFamily:u?"Calibri, Optima, Candara, Verdana, Geneva, sans-serif":"calibri",labelFontSize:18,labelFontColor:"grey",tickColor:"grey",tickThickness:2,gridThickness:2,gridColor:"grey",
lineThickness:2,lineColor:"grey"},Legend:{verticalAlign:"bottom",horizontalAlign:"center",fontFamily:u?"monospace, sans-serif,arial black":"calibri"},DataSeries:{bevelEnabled:!0,indexLabelFontColor:"grey",indexLabelFontFamily:u?"Candara, Optima, Calibri, Verdana, Geneva, sans-serif":"calibri",indexLabelFontSize:18,indexLabelLineColor:"lightgrey",indexLabelLineThickness:2}}},w={numberDuration:1,yearDuration:314496E5,monthDuration:2592E6,weekDuration:6048E5,dayDuration:864E5,hourDuration:36E5,minuteDuration:6E4,
secondDuration:1E3,millisecondDuration:1,dayOfWeekFromInt:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")},ja={},O=null,qa=function(){var a=/D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,c="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),b="Sun Mon Tue Wed Thu Fri Sat".split(" "),d="January February March April May June July August September October November December".split(" "),e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
g=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,f=/[^-+\dA-Z]/g;return function(k,m,l){var h=l?l.days:c,q=l?l.months:d,n=l?l.shortDays:b,p=l?l.shortMonths:e;l="";var r=!1;k=k&&k.getTime?k:k?new Date(k):new Date;if(isNaN(k))throw SyntaxError("invalid date");"UTC:"==m.slice(0,4)&&(m=m.slice(4),r=!0);l=r?"getUTC":"get";var t=k[l+"Date"](),s=k[l+"Day"](),u=k[l+"Month"](),y=k[l+"FullYear"](),x=k[l+"Hours"](),w=k[l+
"Minutes"](),C=k[l+"Seconds"](),D=k[l+"Milliseconds"](),F=r?0:k.getTimezoneOffset();return l=m.replace(a,function(a){switch(a){case "D":return t;case "DD":return G(t,2);case "DDD":return n[s];case "DDDD":return h[s];case "M":return u+1;case "MM":return G(u+1,2);case "MMM":return p[u];case "MMMM":return q[u];case "Y":return parseInt(String(y).slice(-2));case "YY":return G(String(y).slice(-2),2);case "YYY":return G(String(y).slice(-3),3);case "YYYY":return G(y,4);case "h":return x%12||12;case "hh":return G(x%
12||12,2);case "H":return x;case "HH":return G(x,2);case "m":return w;case "mm":return G(w,2);case "s":return C;case "ss":return G(C,2);case "f":return String(D).slice(0,1);case "ff":return G(String(D).slice(0,2),2);case "fff":return G(String(D).slice(0,3),3);case "t":return 12>x?"a":"p";case "tt":return 12>x?"am":"pm";case "T":return 12>x?"A":"P";case "TT":return 12>x?"AM":"PM";case "K":return r?"UTC":(String(k).match(g)||[""]).pop().replace(f,"");case "z":return(0<F?"-":"+")+Math.floor(Math.abs(F)/
60);case "zz":return(0<F?"-":"+")+G(Math.floor(Math.abs(F)/60),2);case "zzz":return(0<F?"-":"+")+G(Math.floor(Math.abs(F)/60),2)+G(Math.abs(F)%60,2);default:return a.slice(1,a.length-1)}})}}(),fa=function(a,c,b){a=Number(a);var d=0>a?!0:!1;d&&(a*=-1);decimalSeparator=b?b.decimalSeparator:".";digitGroupSeparator=b?b.digitGroupSeparator:",";var e="";c=String(c);for(var e=1,g=b="",f=-1,k=[],m=[],l=0,h=0,q=0,e=1,n=!1,p=0,g=c.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g),r=0;g&&r<g.length;r++)if(c=
g[r],"."===c&&0>f)f=r;else{if("%"===c)e*=100;else if("\u2030"===c){e*=1E3;continue}else if(","===c[0]&&"."===c[c.length-1]){e/=Math.pow(1E3,c.length-1);f=r+c.length-1;continue}else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||(n=!0);0>f?(k.push(c),"#"===c||"0"===c?l++:","===c&&q++):(m.push(c),"#"!==c&&"0"!==c||h++)}n&&(c=Math.floor(a),p=(0===c?"":String(c)).length-l,e/=Math.pow(10,p));0>f&&(f=r);e=(a*e).toFixed(h);c=e.split(".");a=(c[0]+"").split("");e=(c[1]+"").split("");a&&"0"===a[0]&&a.shift();
for(r=n=g=h=f=0;0<k.length;)if(c=k.pop(),"#"===c||"0"===c)if(f++,f===l){var t=a;a=[];if("0"===c)for(c=l-h-(t?t.length:0);0<c;)t.unshift("0"),c--;for(;0<t.length;)b=t.pop()+b,r++,0===r%n&&(g===q&&0<t.length)&&(b=digitGroupSeparator+b);d&&(b="-"+b)}else 0<a.length?(b=a.pop()+b,h++,r++):"0"===c&&(b="0"+b,h++,r++),0===r%n&&(g===q&&0<a.length)&&(b=digitGroupSeparator+b);else"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?","===c?(g++,n=r,r=0,0<a.length&&(b=digitGroupSeparator+b)):
b=1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?c.slice(1,c.length-1)+b:c+b:(c=0>p?c.replace("+","").replace("-",""):c.replace("-",""),b+=c.replace(/[0]+/,function(a){return G(p,a.length)}));for(d=0;0<m.length;)c=m.shift(),"#"===c||"0"===c?0<e.length&&0!==Number(e.join(""))?b+=(0===d++?decimalSeparator:"")+e.shift():"0"===c&&(b+=(0===d++?decimalSeparator:"")+"0"):1<c.length&&('"'===c[0]&&'"'===c[c.length-1]||"'"===c[0]&&"'"===c[c.length-1])?b+=(0===d++?decimalSeparator:
"")+c.slice(1,c.length-1):"E"!==c[0]&&"e"!==c[0]||"0"!==c[c.length-1]||!/[eE][+-]*[0]+/.test(c)?b+=(0===d++?decimalSeparator:"")+c:(c=0>p?c.replace("+","").replace("-",""):c.replace("-",""),b+=c.replace(/[0]+/,function(a){return G(p,a.length)}));return b},ra=function(a){var c=0,b=0;a||(a=window.event);a.offsetX||0===a.offsetX?(c=a.offsetX,b=a.offsetY):a.layerX||0==a.layerX?(c=a.layerX,b=a.layerY):(c=a.pageX-a.target.offsetLeft,b=a.pageY-a.target.offsetTop);return{x:c,y:b}},ma=!0,ba=window.devicePixelRatio||
1,X=1,P=ma?ba/X:1;I.prototype.setOptions=function(a,c){if(pa[this._defaultsKey]){var b=pa[this._defaultsKey];for(prop in b)this[prop]=a&&prop in a?a[prop]:c&&prop in c?c[prop]:b[prop]}};I.prototype.trackChanges=function(a){this._options._oldOptions||(this._options._oldOptions={});this._options._oldOptions[a]=this._options[a]};I.prototype.isBeingTracked=function(a){this._options._oldOptions||(this._options._oldOptions={});return this._options._oldOptions[a]?!0:!1};I.prototype.hasOptionChanged=function(a){this._options._oldOptions||
(this._options._oldOptions={});return this._options._oldOptions[a]!==this._options[a]};N(x,I);x.prototype._initialize=function(){this._selectedColorSet="undefined"!==typeof U[this.colorSet]?U[this.colorSet]:U.colorSet1;this.ctx.clearRect(0,0,this.width,this.height);this.ctx.beginPath();this.axisY2=this.axisY=this.axisX=null;this._indexLabels=[];this._dataInRenderedOrder=[];this._events=[];this._eventManager&&this._eventManager.reset();this.plotInfo={axisPlacement:null,axisXValueType:null,plotTypes:[]};
this.layoutManager.reset();this._cultureInfo=new oa(this,this._options.culture);this.data=[];for(var a=0,c=0;c<this._options.data.length;c++)if(a++,!this._options.data[c].type||0<=x._supportedChartTypes.indexOf(this._options.data[c].type)){var b=new M(this,this._options.data[c],this.theme,a-1,++this._eventManager.lastObjectId);null===b.name&&(b.name="DataSeries "+a);null===b.color?1<this._options.data.length?(b._colorSet=[this._selectedColorSet[b.index%this._selectedColorSet.length]],b.color=this._selectedColorSet[b.index%
this._selectedColorSet.length]):b._colorSet="line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type?[this._selectedColorSet[0]]:this._selectedColorSet:b._colorSet=[b.color];null===b.markerSize&&(("line"===b.type||"stepLine"===b.type||"spline"===b.type)&&b.dataPoints&&b.dataPoints.length<this.width/16||"scatter"===b.type)&&(b.markerSize=8);"bubble"!==b.type&&"scatter"!==b.type||!b.dataPoints||
b.dataPoints.sort(va);this.data.push(b);var d=b.axisPlacement,e;"normal"===d?"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with bar chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="normal"):"xySwapped"===d?"normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or pie chart':"none"===this.plotInfo.axisPlacement?e='You cannot combine "'+
b.type+'" with pie chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="xySwapped"):"none"==d&&("normal"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with line, area, column or bar chart':"xySwapped"===this.plotInfo.axisPlacement?e='You cannot combine "'+b.type+'" with bar chart':null===this.plotInfo.axisPlacement&&(this.plotInfo.axisPlacement="none"));if(e&&window.console){window.console.log(e);return}}this._objectsInitialized=!0};x._supportedChartTypes="line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 pie doughnut".split(" ");
x._supportedChartTypes.indexOf||(x._supportedChartTypes.indexOf=function(a,c){var b=this.length>>>0,d=Number(c)||0,d=0>d?Math.ceil(d):Math.floor(d);for(0>d&&(d+=b);d<b;d++)if(d in this&&this[d]===a)return d;return-1});x.prototype.render=function(){this._initialize();for(var a=0;a<this.data.length;a++)if("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)this.data[a].axisYType&&"primary"!==this.data[a].axisYType?"secondary"===this.data[a].axisYType&&(this.axisY2||("normal"===
this.plotInfo.axisPlacement?this.axisY2=new B(this,this._options.axisY2,"axisY","right"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY2=new B(this,this._options.axisY2,"axisY","top"))),this.data[a].axisY=this.axisY2):(this.axisY||("normal"===this.plotInfo.axisPlacement?this.axisY=new B(this,this._options.axisY,"axisY","left"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisY=new B(this,this._options.axisY,"axisY","bottom"))),this.data[a].axisY=this.axisY),this.axisX||("normal"===this.plotInfo.axisPlacement?
this.axisX=new B(this,this._options.axisX,"axisX","bottom"):"xySwapped"===this.plotInfo.axisPlacement&&(this.axisX=new B(this,this._options.axisX,"axisX","left"))),this.data[a].axisX=this.axisX;this._processData();this._options.title&&(this._title=new T(this,this._options.title),this._title.render());this.legend=new $(this,this._options.legend,this.theme);for(a=0;a<this.data.length;a++)this.data[a].showInLegend&&this.legend.dataSeries.push(this.data[a]);this.legend.render();if("normal"===this.plotInfo.axisPlacement||
"xySwapped"===this.plotInfo.axisPlacement)this.layoutManager.getFreeSpace(),B.setLayoutAndRender(this.axisX,this.axisY,this.axisY2,this.plotInfo.axisPlacement,this.layoutManager.getFreeSpace());else if("none"===this.plotInfo.axisPlacement)this.preparePlotArea();else return;for(a=0;a<this.plotInfo.plotTypes.length;a++)for(var c=this.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++){var d=c.plotUnits[b];"line"===d.type?this.renderLine(d):"stepLine"===d.type?this.renderStepLine(d):"spline"===d.type?
this.renderSpline(d):"column"===d.type?this.renderColumn(d):"bar"===d.type?this.renderBar(d):"area"===d.type?this.renderArea(d):"stepArea"===d.type?this.renderStepArea(d):"splineArea"===d.type?this.renderSplineArea(d):"stackedColumn"===d.type?this.renderStackedColumn(d):"stackedColumn100"===d.type?this.renderStackedColumn100(d):"stackedBar"===d.type?this.renderStackedBar(d):"stackedBar100"===d.type?this.renderStackedBar100(d):"stackedArea"===d.type?this.renderStackedArea(d):"stackedArea100"===d.type?
this.renderStackedArea100(d):"bubble"===d.type?this.renderBubble(d):"scatter"===d.type?this.renderScatter(d):"pie"===d.type?this.renderPie(d):"doughnut"===d.type&&this.renderPie(d);for(var e=0;e<d.dataSeriesIndexes.length;e++)this._dataInRenderedOrder.push(this.data[d.dataSeriesIndexes[e]])}0<this._indexLabels.length&&this.renderIndexLabels();this.attachPlotAreaEventHandlers();this.zoomEnabled||(this.panEnabled||"none"===this._toolBar.style.display)||(this._toolBar.style.display="none");this._toolTip._updateToolTip();
this.renderCount++};x.prototype.attachPlotAreaEventHandlers=function(){this.attachEvent({context:this,chart:this,mousedown:this._plotAreaMouseDown,mouseup:this._plotAreaMouseUp,mousemove:this._plotAreaMouseMove,cursor:this.zoomEnabled?"col-resize":"move",cursor:this.panEnabled?"move":"default",capture:!0,bounds:this.plotArea})};x.prototype.categoriseDataSeries=function(){for(var a="",c=0;c<this.data.length;c++)if(a=this.data[c],a.dataPoints&&0!==a.dataPoints.length&&0<=x._supportedChartTypes.indexOf(a.type)){for(var b=
null,d=!1,e=null,g=!1,f=0;f<this.plotInfo.plotTypes.length;f++)if(this.plotInfo.plotTypes[f].type===a.type){d=!0;b=this.plotInfo.plotTypes[f];break}d||(b={type:a.type,totalDataSeries:0,plotUnits:[]},this.plotInfo.plotTypes.push(b));for(f=0;f<b.plotUnits.length;f++)if(b.plotUnits[f].axisYType===a.axisYType){g=!0;e=b.plotUnits[f];break}g||(e={type:a.type,previousDataSeriesCount:0,index:b.plotUnits.length,plotType:b,axisYType:a.axisYType,axisY:"primary"===a.axisYType?this.axisY:this.axisY2,axisX:this.axisX,
dataSeriesIndexes:[]},b.plotUnits.push(e));b.totalDataSeries++;e.dataSeriesIndexes.push(c)}for(c=0;c<this.plotInfo.plotTypes.length;c++)for(b=this.plotInfo.plotTypes[c],f=a=0;f<b.plotUnits.length;f++)b.plotUnits[f].previousDataSeriesCount=a,a+=b.plotUnits[f].dataSeriesIndexes.length};x.prototype.assignIdToDataPoints=function(){for(var a=0;a<this.data.length;a++){var c=this.data[a];if(c.dataPoints)for(var b=c.dataPoints.length,d=0;d<b;d++)c.dataPointIds[d]=++this._eventManager.lastObjectId}};x.prototype._processData=
function(){this.assignIdToDataPoints();this.categoriseDataSeries();for(var a=0;a<this.plotInfo.plotTypes.length;a++)for(var c=this.plotInfo.plotTypes[a],b=0;b<c.plotUnits.length;b++){var d=c.plotUnits[b];"line"===d.type||"stepLine"===d.type||"spline"===d.type||"column"===d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"bar"===d.type||"bubble"===d.type||"scatter"===d.type?this._processMultiseriesPlotUnit(d):"stackedColumn"===d.type||"stackedBar"===d.type||"stackedArea"===d.type?
this._processStackedPlotUnit(d):"stackedColumn100"!==d.type&&"stackedBar100"!==d.type&&"stackedArea100"!==d.type||this._processStacked100PlotUnit(d)}};x.prototype._processMultiseriesPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length))for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,g=!1,f=0;f<a.dataSeriesIndexes.length;f++){var k=this.data[a.dataSeriesIndexes[f]],m=0,l=!1,h=!1;if("normal"===k.axisPlacement||"xySwapped"===k.axisPlacement)var q=this.sessionVariables.axisX.internalMinimum?
this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,n=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(k.dataPoints[m].x&&k.dataPoints[m].x.getTime||"dateTime"===k.xValueType)g=!0;for(m=0;m<k.dataPoints.length;m++){"undefined"===typeof k.dataPoints[m].x&&(k.dataPoints[m].x=m);k.dataPoints[m].x.getTime?
(g=!0,d=k.dataPoints[m].x.getTime()):d=k.dataPoints[m].x;e=k.dataPoints[m].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);e<c.min&&(c.min=e);e>c.max&&(c.max=e);if(0<m){var p=d-k.dataPoints[m-1].x;0>p&&(p*=-1);b.minDiff>p&&0!==p&&(b.minDiff=p)}if(!(d<q)||l){if(!l&&(l=!0,0<m)){m-=2;continue}if(d>n&&!h)h=!0;else if(d>n&&h)continue;k.dataPoints[m].label&&(a.axisX.labels[d]=k.dataPoints[m].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);e<c.viewPortMin&&(c.viewPortMin=e);e>c.viewPortMax&&
(c.viewPortMax=e)}}this.plotInfo.axisXValueType=k.xValueType=g?"dateTime":"number"}};x.prototype._processStackedPlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,g=!1,f=[],k=[],m=0;m<a.dataSeriesIndexes.length;m++){var l=this.data[a.dataSeriesIndexes[m]],h=0,q=!1,n=!1;if("normal"===l.axisPlacement||"xySwapped"===l.axisPlacement)var p=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:
this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,r=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:Infinity;if(l.dataPoints[h].x&&l.dataPoints[h].x.getTime||"dateTime"===l.xValueType)g=!0;for(h=0;h<l.dataPoints.length;h++){"undefined"===typeof l.dataPoints[h].x&&(l.dataPoints[h].x=h);l.dataPoints[h].x.getTime?(g=!0,d=l.dataPoints[h].x.getTime()):
d=l.dataPoints[h].x;e=l.dataPoints[h].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);if(0<h){var t=d-l.dataPoints[h-1].x;0>t&&(t*=-1);b.minDiff>t&&0!==t&&(b.minDiff=t)}if(!(d<p)||q){if(!q&&(q=!0,0<h)){h-=2;continue}if(d>r&&!n)n=!0;else if(d>r&&n)continue;l.dataPoints[h].label&&(a.axisX.labels[d]=l.dataPoints[h].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);0<=e?f[d]=f[d]?f[d]+e:e:k[d]=k[d]?k[d]+e:e}}this.plotInfo.axisXValueType=l.xValueType=g?"dateTime":"number"}for(h in f)isNaN(h)||
(a=f[h],a<c.min&&(c.min=a),a>c.max&&(c.max=a),h<b.viewPortMin||h>b.viewPortMax||(a<c.viewPortMin&&(c.viewPortMin=a),a>c.viewPortMax&&(c.viewPortMax=a)));for(h in k)isNaN(h)||(a=k[h],a<c.min&&(c.min=a),a>c.max&&(c.max=a),h<b.viewPortMin||h>b.viewPortMax||(a<c.viewPortMin&&(c.viewPortMin=a),a>c.viewPortMax&&(c.viewPortMax=a)))}};x.prototype._processStacked100PlotUnit=function(a){if(a.dataSeriesIndexes&&!(1>a.dataSeriesIndexes.length)){for(var c=a.axisY.dataInfo,b=a.axisX.dataInfo,d,e,g=!1,f=!1,k=!1,
m=[],l=0;l<a.dataSeriesIndexes.length;l++){var h=this.data[a.dataSeriesIndexes[l]],q=0,n=!1,p=!1;if("normal"===h.axisPlacement||"xySwapped"===h.axisPlacement)var r=this.sessionVariables.axisX.internalMinimum?this.sessionVariables.axisX.internalMinimum:this._options.axisX&&this._options.axisX.minimum?this._options.axisX.minimum:-Infinity,t=this.sessionVariables.axisX.internalMaximum?this.sessionVariables.axisX.internalMaximum:this._options.axisX&&this._options.axisX.maximum?this._options.axisX.maximum:
Infinity;if(h.dataPoints[q].x&&h.dataPoints[q].x.getTime||"dateTime"===h.xValueType)g=!0;for(q=0;q<h.dataPoints.length;q++){"undefined"===typeof h.dataPoints[q].x&&(h.dataPoints[q].x=q);h.dataPoints[q].x.getTime?(g=!0,d=h.dataPoints[q].x.getTime()):d=h.dataPoints[q].x;e=h.dataPoints[q].y;d<b.min&&(b.min=d);d>b.max&&(b.max=d);if(0<q){var s=d-h.dataPoints[q-1].x;0>s&&(s*=-1);b.minDiff>s&&0!==s&&(b.minDiff=s)}if(!(d<r)||n){if(!n&&(n=!0,0<q)){q-=2;continue}if(d>t&&!p)p=!0;else if(d>t&&p)continue;h.dataPoints[q].label&&
(a.axisX.labels[d]=h.dataPoints[q].label);d<b.viewPortMin&&(b.viewPortMin=d);d>b.viewPortMax&&(b.viewPortMax=d);0<=e?f=!0:k=!0;m[d]=m[d]?m[d]+Math.abs(e):Math.abs(e)}}this.plotInfo.axisXValueType=h.xValueType=g?"dateTime":"number"}f&&!k?(c.max=99,c.min=1):f&&k?(c.max=99,c.min=-99):!f&&k&&(c.max=-1,c.min=-99);c.viewPortMin=c.min;c.viewPortMax=c.max;a.dataPointYSums=m}};x.prototype.getDataPointAtXY=function(a,c,b){b=b||!1;for(var d=[],e=this._dataInRenderedOrder.length-1;0<=e;e--){var g=null;(g=this._dataInRenderedOrder[e].getDataPointAtXY(a,
c,b))&&d.push(g)}a=null;c=!1;for(b=0;b<d.length;b++)if("line"===d[b].dataSeries.type||"stepLine"===d[b].dataSeries.type||"area"===d[b].dataSeries.type||"stepArea"===d[b].dataSeries.type)if(e=Q("markerSize",d[b].dataPoint,d[b].dataSeries)||8,d[b].distance<=e/2){c=!0;break}for(b=0;b<d.length;b++)c&&"line"!==d[b].dataSeries.type&&"stepLine"!==d[b].dataSeries.type&&"area"!==d[b].dataSeries.type&&"stepArea"!==d[b].dataSeries.type||(a?d[b].distance<=a.distance&&(a=d[b]):a=d[b]);return a};x.prototype.getAutoFontSize=
function(a,c,b){a/=400;return Math.round(Math.min(this.width,this.height)*a)};x.prototype.resetOverlayedCanvas=function(){this.overlaidCanvasCtx.clearRect(0,0,this.width,this.height)};x.prototype.attachEvent=function(a){this._events.push(a)};x.prototype._touchEventHandler=function(a){if(a.changedTouches){var c=[];first=(c=a.changedTouches)?c[0]:a;switch(a.type){case "touchstart":case "MSPointerDown":c=["mousemove","mousedown"];break;case "touchmove":case "MSPointerMove":c=["mousemove"];break;case "touchend":case "MSPointerUp":c=
"touchstart"===this._lastTouchEventType||"MSPointerDown"===this._lastTouchEventType?["mouseup","click"]:["mouseup"];break;default:return}this._lastTouchEventType=a.type;for(var b=0;b<c.length;b++){var d=c[b],e=document.createEvent("MouseEvent");e.initMouseEvent(d,!0,!0,window,1,first.screenX,first.screenY,first.clientX,first.clientY,!1,!1,!1,!1,0,null);first.target.dispatchEvent(e);a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault()}}};x.prototype._mouseEventHandler=
function(a){a.preventManipulation&&a.preventManipulation();a.preventDefault&&a.preventDefault();"undefined"===typeof a.target&&a.srcElement&&(a.target=a.srcElement);var c=ra(a),b=a.type,d,e;a.which?e=3==a.which:a.button&&(e=2==a.button);if(!e){if(x.capturedEventParam)d=x.capturedEventParam,"mouseup"===b&&(x.capturedEventParam=null,d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():document.body.removeEventListener("mouseup",d.chart._mouseEventHandler,!1)),d.hasOwnProperty(b)&&
d[b].call(d.context,c.x,c.y);else if(this._events){for(e=0;e<this._events.length;e++)if(this._events[e].hasOwnProperty(b)){d=this._events[e];var g=d.bounds;if(c.x>=g.x1&&c.x<=g.x2&&c.y>=g.y1&&c.y<=g.y2){d[b].call(d.context,c.x,c.y);"mousedown"===b&&!0===d.capture?(x.capturedEventParam=d,this.overlaidCanvas.setCapture?this.overlaidCanvas.setCapture():document.body.addEventListener("mouseup",this._mouseEventHandler,!1)):"mouseup"===b&&(d.chart.overlaidCanvas.releaseCapture?d.chart.overlaidCanvas.releaseCapture():
document.body.removeEventListener("mouseup",this._mouseEventHandler,!1));break}else d=null}a.target.style.cursor=d&&d.cursor?d.cursor:this._defaultCursor}this._toolTip&&this._toolTip.enabled&&(b=this.plotArea,(c.x<b.x1||c.x>b.x2||c.y<b.y1||c.y>b.y2)&&this._toolTip.hide());this.isDrag&&this.zoomEnabled||!this._eventManager||this._eventManager.mouseEventHandler(a)}};x.prototype._plotAreaMouseDown=function(a,c){this.isDrag=!0;this.dragStartPoint="none"!==this.plotInfo.axisPlacement?{x:a,y:c,xMinimum:this.axisX.minimum,
xMaximum:this.axisX.maximum}:{x:a,y:c}};x.prototype._plotAreaMouseUp=function(a,c){var b,d;if(("normal"===this.plotInfo.axisPlacement||"xySwapped"===this.plotInfo.axisPlacement)&&this.isDrag){var e=0,e=this.axisX.lineCoordinates,e="xySwapped"===this.plotInfo.axisPlacement?c-this.dragStartPoint.y:this.dragStartPoint.x-a;Math.abs(this.axisX.maximum-this.axisX.minimum);if(2<Math.abs(e)){if(this.panEnabled)e=!1,d=0,this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum?(d=this.axisX._absoluteMinimum-
this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=d,this.axisX.sessionVariables.internalMaximum+=d,e=!0):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum&&(d=this.axisX.sessionVariables.internalMaximum-this.axisX._absoluteMaximum,this.axisX.sessionVariables.internalMaximum-=d,this.axisX.sessionVariables.internalMinimum-=d,e=!0),e&&this.render();else if(this.zoomEnabled){this.resetOverlayedCanvas();if(!this.dragStartPoint)return;"xySwapped"===
this.plotInfo.axisPlacement?(b=Math.min(this.dragStartPoint.y,c),d=Math.max(this.dragStartPoint.y,c),1<Math.abs(b-d)&&(e=this.axisX.lineCoordinates,d=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/e.height*(d-e.y1),e=this.axisX.maximum-(this.axisX.maximum-this.axisX.minimum)/e.height*(b-e.y1),d=Math.max(d,this.axisX.dataInfo.min),e=Math.min(e,this.axisX.dataInfo.max),Math.abs((e-d)/this.axisX.dataInfo.minDiff)>=0.008*this.height&&(this.axisX.sessionVariables.internalMinimum=d,this.axisX.sessionVariables.internalMaximum=
e,this.render()))):"normal"===this.plotInfo.axisPlacement&&(d=Math.min(this.dragStartPoint.x,a),b=Math.max(this.dragStartPoint.x,a),1<Math.abs(d-b)&&(e=this.axisX.lineCoordinates,d=(this.axisX.maximum-this.axisX.minimum)/e.width*(d-e.x1)+this.axisX.minimum,e=(this.axisX.maximum-this.axisX.minimum)/e.width*(b-e.x1)+this.axisX.minimum,d=Math.max(d,this.axisX.dataInfo.min),e=Math.min(e,this.axisX.dataInfo.max),Math.abs((e-d)/this.axisX.dataInfo.minDiff)>=0.01*this.width&&(this.axisX.sessionVariables.internalMinimum=
d,this.axisX.sessionVariables.internalMaximum=e,this.render())))}this.zoomEnabled&&"none"===this._toolBar.style.display&&(this._toolBar.style.display="inline",this._zoomButton.innerHTML=this._cultureInfo.panText,this._resetButton.innerHTML=this._cultureInfo.resetText)}}this.isDrag=!1};x.prototype._plotAreaMouseMove=function(a,c){if(this.isDrag&&"none"!==this.plotInfo.axisPlacement){var b=0,d=0,d=this.axisX.lineCoordinates;"xySwapped"===this.plotInfo.axisPlacement?(b=c-this.dragStartPoint.y,d=Math.abs(this.axisX.maximum-
this.axisX.minimum)/d.height*b):(b=this.dragStartPoint.x-a,d=Math.abs(this.axisX.maximum-this.axisX.minimum)/d.width*b);2<Math.abs(b)&&8>Math.abs(b)&&(this.panEnabled||this.zoomEnabled)?this._toolTip.hide():!this._toolTip.enabled||(this.panEnabled||this.zoomEnabled)||this._toolTip.mouseMoveHandler(a,c);if(2<Math.abs(b)&&(this.panEnabled||this.zoomEnabled))if(this.panEnabled){this.axisX.sessionVariables.internalMinimum=this.dragStartPoint.xMinimum+d;this.axisX.sessionVariables.internalMaximum=this.dragStartPoint.xMaximum+
d;b=0;this.axisX.sessionVariables.internalMinimum<this.axisX._absoluteMinimum-R(this.axisX.interval,this.axisX.intervalType)?(b=this.axisX._absoluteMinimum-R(this.axisX.interval,this.axisX.intervalType)-this.axisX.sessionVariables.internalMinimum,this.axisX.sessionVariables.internalMinimum+=b,this.axisX.sessionVariables.internalMaximum+=b):this.axisX.sessionVariables.internalMaximum>this.axisX._absoluteMaximum+R(this.axisX.interval,this.axisX.intervalType)&&(b=this.axisX.sessionVariables.internalMaximum-
(this.axisX._absoluteMaximum+R(this.axisX.interval,this.axisX.intervalType)),this.axisX.sessionVariables.internalMaximum-=b,this.axisX.sessionVariables.internalMinimum-=b);var e=this;clearTimeout(this._panTimerId);this._panTimerId=setTimeout(function(){e.render()},0)}else this.zoomEnabled&&(b=this.plotArea,this.resetOverlayedCanvas(),d=this.overlaidCanvasCtx.globalAlpha,this.overlaidCanvasCtx.globalAlpha=0.7,this.overlaidCanvasCtx.fillStyle="#A0ABB8","xySwapped"===this.plotInfo.axisPlacement?this.overlaidCanvasCtx.fillRect(b.x1,
this.dragStartPoint.y,b.x2-b.x1,c-this.dragStartPoint.y):"normal"===this.plotInfo.axisPlacement&&this.overlaidCanvasCtx.fillRect(this.dragStartPoint.x,b.y1,a-this.dragStartPoint.x,b.y2-b.y1),this.overlaidCanvasCtx.globalAlpha=d)}else this._toolTip.enabled&&this._toolTip.mouseMoveHandler(a,c)};x.prototype.preparePlotArea=function(){var a=this.plotArea,c=this.axisY?this.axisY:this.axisY2;!u&&(0<a.x1||0<a.y1)&&a.ctx.translate(a.x1,a.y1);this.axisX&&c?(a.x1=this.axisX.lineCoordinates.x1<this.axisX.lineCoordinates.x2?
this.axisX.lineCoordinates.x1:c.lineCoordinates.x1,a.y1=this.axisX.lineCoordinates.y1<c.lineCoordinates.y1?this.axisX.lineCoordinates.y1:c.lineCoordinates.y1,a.x2=this.axisX.lineCoordinates.x2>c.lineCoordinates.x2?this.axisX.lineCoordinates.x2:c.lineCoordinates.x2,a.y2=this.axisX.lineCoordinates.y2>this.axisX.lineCoordinates.y1?this.axisX.lineCoordinates.y2:c.lineCoordinates.y2,a.width=a.x2-a.x1,a.height=a.y2-a.y1):(c=this.layoutManager.getFreeSpace(),a.x1=c.x1,a.x2=c.x2,a.y1=c.y1,a.y2=c.y2,a.width=
c.width,a.height=c.height);u||(a.canvas.width=a.width,a.canvas.height=a.height,a.canvas.style.left=a.x1+"px",a.canvas.style.top=a.y1+"px",(0<a.x1||0<a.y1)&&a.ctx.translate(-a.x1,-a.y1))};x.prototype.getPixelCoordinatesOnPlotArea=function(a,c){return{x:this.axisX.getPixelCoordinatesOnAxis(a).x,y:this.axisY.getPixelCoordinatesOnAxis(c).y}};x.prototype.renderIndexLabels=function(){var a=this.plotArea.ctx;a.textBaseline="middle";for(var c=this.plotArea,b=0;b<this._indexLabels.length;b++){var d=this._indexLabels[b],
e,g,f;a.fillStyle=Q("indexLabelFontColor",d.dataPoint,d.dataSeries);a.font=la("indexLabel",d.dataPoint,d.dataSeries);var k=this.replaceKeywordsWithValue(Q("indexLabel",d.dataPoint,d.dataSeries),d.dataPoint,d.dataSeries),m=a.measureText(k).width,l=Q("indexLabelFontSize",d.dataPoint,d.dataSeries),h=Q("indexLabelPlacement",d.dataPoint,d.dataSeries),q=Q("indexLabelOrientation",d.dataPoint,d.dataSeries),n=f=0,p=0,r=0,t=0;d.point.x<c.x1||(d.point.x>c.x2||d.point.y<c.y1||d.point.y>c.y2)||("column"===d.chartType||
"stackedColumn"===d.chartType||"stackedColumn100"===d.chartType||"bar"===d.chartType||"stackedBar"===d.chartType||"stackedBar100"===d.chartType?(Math.abs(d.bounds.x1,d.bounds.x2),Math.abs(d.bounds.y1,d.bounds.y2),"normal"===this.plotInfo.axisPlacement?("outside"===h?(n=c.y1,p=c.y2):"inside"===h&&(n=d.bounds.y1,p=d.bounds.y2),"horizontal"===q?(e=d.point.x-m/2,g=0<=d.dataPoint.y?Math.min(Math.max(d.point.y-l/2-5,n+l/2+5),p-l/2-5):Math.max(Math.min(d.point.y+l/2+5,p-l/2),n+l/2+5)):"vertical"===q&&(e=
d.point.x,g=0<=d.dataPoint.y?Math.min(Math.max(d.point.y-5,n+m+5),p):Math.max(Math.min(d.point.y+m+5,p-5),n),f=-90)):"xySwapped"===this.plotInfo.axisPlacement&&("outside"===h?(r=c.x1,t=c.x2):"inside"===h&&(r=d.bounds.x1,t=d.bounds.x2),"horizontal"===q?(g=d.point.y,e=0<=d.dataPoint.y?Math.max(Math.min(d.point.x+5,t-m),r):Math.min(Math.max(d.point.x-m-5,r),t)):"vertical"===q&&(g=d.point.y+m/2,e=0<=d.dataPoint.y?Math.max(Math.min(d.point.x+l/2+5,t-l/2),r):Math.min(Math.max(d.point.x-l/2-5,r+l/2),t+l/
2),f=-90))):"horizontal"===q?(e=d.point.x-m/2,g=0<=d.dataPoint.y?Math.max(d.point.y-l/2-5,c.y1+l/2):Math.min(d.point.y+l/2+5,c.y2-l/2)):"vertical"===q&&(e=d.point.x,g=0<=d.dataPoint.y?Math.max(d.point.y-5,c.y1+m):Math.min(d.point.y+m+5,c.y2),f=-90),a.save(),a.translate(e,g),a.rotate(Math.PI/180*f),a.fillText(k,0,0),a.restore())}};x.prototype.renderLine=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();
c.rect(d.x1,d.y1,d.width,d.height);c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var g=a.dataSeriesIndexes[e],f=this.data[g];c.lineWidth=f.lineThickness;var k=f.dataPoints,m=f.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:g};m=z(m);b.strokeStyle=m;b.lineWidth=0<f.lineThickness?Math.max(f.lineThickness,4):0;colorSet=f._colorSet;color=colorSet[0];c.strokeStyle=color;var m=!0,l=0,h,q;if(0<k.length){for(l=0;l<k.length;l++)if(h=k[l].getTime?k[l].x.getTime():
k[l].x,!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof k[l].y){h=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(h-a.axisX.convertionParameters.minimum)+0.5<<0;q=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(k[l].y-a.axisY.convertionParameters.minimum)+0.5<<0;var n=f.dataPointIds[l];this._eventManager.objectMap[n]={objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:l,x1:h,y1:q};m?(c.beginPath(),
c.moveTo(h,q),u&&(b.beginPath(),b.moveTo(h,q)),m=!1):(c.lineTo(h,q),u&&b.lineTo(h,q),0==l%500&&(c.stroke(),c.beginPath(),c.moveTo(h,q),u&&(b.stroke(),b.beginPath(),b.moveTo(h,q))));if(0<k[l].markerSize||0<f.markerSize){var p=f.getMarkerProperties(l,h,q,c);d.push(p);if(!f.maxWidthInX||p.size>f.maxWidthInX)f.maxWidthInX=p.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);n=z(n);u&&d.push({x:h,y:q,ctx:b,type:p.type,
size:p.size,color:n,borderColor:n,borderThickness:p.borderThickness})}(k[l].indexLabel||f.indexLabel)&&this._indexLabels.push({chartType:"line",dataPoint:k[l],dataSeries:f,point:{x:h,y:q},color:color})}c.stroke();u&&b.stroke()}}H.drawMarkers(d);c.restore();c.beginPath();u&&b.beginPath()}};x.prototype.renderStepLine=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);
c.clip();for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var g=a.dataSeriesIndexes[e],f=this.data[g];c.lineWidth=f.lineThickness;var k=f.dataPoints,m=f.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:g};m=z(m);b.strokeStyle=m;b.lineWidth=0<f.lineThickness?Math.max(f.lineThickness,4):0;colorSet=f._colorSet;color=colorSet[0];c.strokeStyle=color;var m=!0,l=0,h,q;if(0<k.length){for(l=0;l<k.length;l++)if(h=k[l].getTime?k[l].x.getTime():k[l].x,!(h<a.axisX.dataInfo.viewPortMin||
h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof k[l].y){var n=q;h=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(h-a.axisX.convertionParameters.minimum)+0.5<<0;q=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(k[l].y-a.axisY.convertionParameters.minimum)+0.5<<0;var p=f.dataPointIds[l];this._eventManager.objectMap[p]={objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:l,x1:h,y1:q};m?(c.beginPath(),c.moveTo(h,q),u&&(b.beginPath(),
b.moveTo(h,q)),m=!1):(c.lineTo(h,n),u&&b.lineTo(h,n),c.lineTo(h,q),u&&b.lineTo(h,q),0==l%500&&(c.stroke(),c.beginPath(),c.moveTo(h,q),u&&(b.stroke(),b.beginPath(),b.moveTo(h,q))));if(0<k[l].markerSize||0<f.markerSize){n=f.getMarkerProperties(l,h,q,c);d.push(n);if(!f.maxWidthInX||n.size>f.maxWidthInX)f.maxWidthInX=n.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);p=z(p);u&&d.push({x:h,y:q,ctx:b,type:n.type,size:n.size,
color:p,borderColor:p,borderThickness:n.borderThickness})}(k[l].indexLabel||f.indexLabel)&&this._indexLabels.push({chartType:"stepLine",dataPoint:k[l],dataSeries:f,point:{x:h,y:q},color:color})}c.stroke();u&&b.stroke()}}H.drawMarkers(d);c.restore();c.beginPath();u&&b.beginPath()}};x.prototype.renderSpline=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx;c.save();var d=this.plotArea;c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();
for(var d=[],e=0;e<a.dataSeriesIndexes.length;e++){var g=a.dataSeriesIndexes[e],f=this.data[g];c.lineWidth=f.lineThickness;var k=f.dataPoints,m=f.id;this._eventManager.objectMap[m]={objectType:"dataSeries",dataSeriesIndex:g};m=z(m);b.strokeStyle=m;b.lineWidth=0<f.lineThickness?Math.max(f.lineThickness,4):0;colorSet=f._colorSet;color=colorSet[0];c.strokeStyle=color;var m=0,l,h,q=[];if(0<k.length)for(m=0;m<k.length;m++)if(l=k[m].getTime?k[m].x.getTime():k[m].x,!(l<a.axisX.dataInfo.viewPortMin||l>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof k[m].y){l=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(l-a.axisX.convertionParameters.minimum)+0.5<<0;h=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(k[m].y-a.axisY.convertionParameters.minimum)+0.5<<0;var n=f.dataPointIds[m];this._eventManager.objectMap[n]={objectType:"dataPoint",dataSeriesIndex:g,dataPointIndex:m,x1:l,y1:h};q[q.length]={x:l,y:h};if(0<k[m].markerSize||0<f.markerSize){var p=f.getMarkerProperties(m,
l,h,c);d.push(p);if(!f.maxWidthInX||p.size>f.maxWidthInX)f.maxWidthInX=p.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);n=z(n);u&&d.push({x:l,y:h,ctx:b,type:p.type,size:p.size,color:n,borderColor:n,borderThickness:p.borderThickness})}(k[m].indexLabel||f.indexLabel)&&this._indexLabels.push({chartType:"spline",dataPoint:k[m],dataSeries:f,point:{x:l,y:h},color:color})}g=na(q,2);if(0<g.length){c.beginPath();u&&b.beginPath();
c.moveTo(g[0].x,g[0].y);u&&b.moveTo(g[0].x,g[0].y);for(m=0;m<g.length-3;m+=3)c.bezierCurveTo(g[m+1].x,g[m+1].y,g[m+2].x,g[m+2].y,g[m+3].x,g[m+3].y),u&&b.bezierCurveTo(g[m+1].x,g[m+1].y,g[m+2].x,g[m+2].y,g[m+3].x,g[m+3].y),0<m&&0===m%3E3&&(c.stroke(),c.beginPath(),c.moveTo(g[m+3].x,g[m+3].y),u&&(b.stroke(),b.beginPath(),b.moveTo(g[m+3].x,g[m+3].y)));c.stroke();u&&b.stroke()}}H.drawMarkers(d);c.restore();c.beginPath();u&&b.beginPath()}};var J=function(a,c,b,d,e,g,f,k,m,l){var h=15<d-c&&15<e-b?8:0.35*
Math.min(d-c,e-b);color2="rgba(255, 255, 255, .4)";color3="rgba(255, 255, 255, 0.1)";color1=g;a.beginPath();a.moveTo(c,b);a.save();a.fillStyle=color1;a.fillRect(c,b,d-c,e-b);a.restore();!0===f&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c+h,b+h),a.lineTo(d-h,b+h),a.lineTo(d,b),a.closePath(),g=a.createLinearGradient((d+c)/2,b+h,(d+c)/2,b),g.addColorStop(0,color1),g.addColorStop(1,color2),a.fillStyle=g,a.fill(),a.restore());!0===k&&(a.save(),a.beginPath(),a.moveTo(c,e),a.lineTo(c+h,e-h),a.lineTo(d-
h,e-h),a.lineTo(d,e),a.closePath(),g=a.createLinearGradient((d+c)/2,e-h,(d+c)/2,e),g.addColorStop(0,color1),g.addColorStop(1,color2),a.fillStyle=g,a.fill(),a.restore());!0===m&&(a.save(),a.beginPath(),a.moveTo(c,b),a.lineTo(c+h,b+h),a.lineTo(c+h,e-h),a.lineTo(c,e),a.closePath(),g=a.createLinearGradient(c+h,(e+b)/2,c,(e+b)/2),g.addColorStop(0,color1),g.addColorStop(1,color3),a.fillStyle=g,a.fill(),a.restore());!0===l&&(a.save(),a.beginPath(),a.moveTo(d,b),a.lineTo(d-h,b+h),a.lineTo(d-h,e-h),a.lineTo(d,
e),g=a.createLinearGradient(d-h,(e+b)/2,d,(e+b)/2),g.addColorStop(0,color1),g.addColorStop(1,color3),a.fillStyle=g,g.addColorStop(0,color1),g.addColorStop(1,color3),a.fillStyle=g,a.fill(),a.closePath(),a.restore())};x.prototype.renderColumn=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=0,g,f,k,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,e=0.15*this.width,l=a.axisX.dataInfo.minDiff,
h=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(l)/a.plotType.totalDataSeries)<<0;h>e?h=e:Infinity===l?h=e:1>h&&(h=1);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var l=a.dataSeriesIndexes[d],q=this.data[l],n=q.dataPoints;q.maxWidthInX=h/(1<a.axisX.convertionParameters.pixelPerUnit?
a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<n.length)for(var p=5<h&&q.bevelEnabled?!0:!1,e=0;e<n.length;e++)if(n[e].getTime?k=n[e].x.getTime():k=n[e].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&"number"===typeof n[e].y){g=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(k-a.axisX.convertionParameters.minimum)+0.5<<0;f=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*
(n[e].y-a.axisY.convertionParameters.minimum)+0.5<<0;g=g-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+d)*h<<0;var r=g+h<<0,t;0<=n[e].y?t=m:(t=f,f=m);f>t&&(t=f=t);b=n[e].color?n[e].color:q._colorSet[e%q._colorSet.length];J(c,g,f,r,t,b,p&&0<=n[e].y,0>n[e].y&&p,!1,!1);b=q.dataPointIds[e];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:e,x1:g,y1:f,x2:r,y2:t};b=z(b);u&&J(this._eventManager.ghostCtx,g,f,r,t,b,!1,!1,!1,!1);(n[e].indexLabel||q.indexLabel)&&
this._indexLabels.push({chartType:"column",dataPoint:n[e],dataSeries:q,point:{x:g+(r-g)/2,y:0<=n[e].y?f:t},bounds:{x1:g,y1:Math.min(f,t),x2:r,y2:Math.max(f,t)},color:b})}}c.restore();u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderStackedColumn=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],g=[],f=0,k,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,
f=0.15*this.width,l=a.axisX.dataInfo.minDiff,h=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(l)/a.plotType.plotUnits.length)<<0;h>f?h=f:Infinity===l?h=f:1>h&&(h=1);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(l=0;l<a.dataSeriesIndexes.length;l++){var q=a.dataSeriesIndexes[l],n=this.data[q],p=n.dataPoints;n.maxWidthInX=
h/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<p.length){var r=5<h&&n.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(f=0;f<p.length;f++)if(b=p[f].x.getTime?p[f].x.getTime():p[f].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[f].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+0.5<<0;k=a.axisY.convertionParameters.reference+
a.axisY.convertionParameters.pixelPerUnit*(p[f].y-a.axisY.convertionParameters.minimum)+0.5<<0;var t=d-a.plotType.plotUnits.length*h/2+a.index*h<<0,s=t+h<<0,v;if(0<=p[f].y){var y=e[b]?e[b]:0;k-=y;v=m-y;e[b]=y+(v-k)}else y=g[b]?g[b]:0,v=k+y,k=m+y,g[b]=y+(v-k);b=p[f].color?p[f].color:n._colorSet[f%n._colorSet.length];J(c,t,k,s,v,b,r&&0<=p[f].y,0>p[f].y&&r,!1,!1);b=n.dataPointIds[f];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:f,x1:t,y1:k,x2:s,y2:v};b=z(b);
u&&J(this._eventManager.ghostCtx,t,k,s,v,b,!1,!1,!1,!1);(p[f].indexLabel||n.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn",dataPoint:p[f],dataSeries:n,point:{x:d,y:0<=p[f].y?k:v},bounds:{x1:t,y1:Math.min(k,v),x2:s,y2:Math.max(k,v)},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderStackedColumn100=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],g=[],f=0,k,m=a.axisY.convertionParameters.reference+
a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,f=0.15*this.width,l=a.axisX.dataInfo.minDiff,h=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(l)/a.plotType.plotUnits.length)<<0;h>f?h=f:Infinity===l?h=f:1>h&&(h=1);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(l=0;l<a.dataSeriesIndexes.length;l++){var q=
a.dataSeriesIndexes[l],n=this.data[q],p=n.dataPoints;n.maxWidthInX=h/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<p.length)for(var r=5<h&&n.bevelEnabled?!0:!1,f=0;f<p.length;f++)if(b=p[f].x.getTime?p[f].x.getTime():p[f].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[f].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+
0.5<<0;k=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*((0!==a.dataPointYSums[b]?100*(p[f].y/a.dataPointYSums[b]):0)-a.axisY.convertionParameters.minimum)+0.5<<0;var t=d-a.plotType.plotUnits.length*h/2+a.index*h<<0,s=t+h<<0,v;if(0<=p[f].y){var y=e[b]?e[b]:0;k-=y;v=m-y;e[b]=y+(v-k)}else y=g[b]?g[b]:0,v=k+y,k=m+y,g[b]=y+(v-k);b=p[f].color?p[f].color:n._colorSet[f%n._colorSet.length];J(c,t,k,s,v,b,r&&0<=p[f].y,0>p[f].y&&r,!1,!1);b=n.dataPointIds[f];this._eventManager.objectMap[b]=
{objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:f,x1:t,y1:k,x2:s,y2:v};b=z(b);u&&J(this._eventManager.ghostCtx,t,k,s,v,b,!1,!1,!1,!1);(p[f].indexLabel||n.indexLabel)&&this._indexLabels.push({chartType:"stackedColumn100",dataPoint:p[f],dataSeries:n,point:{x:d,y:0<=p[f].y?k:v},bounds:{x1:t,y1:Math.min(k,v),x2:s,y2:Math.max(k,v)},color:b})}}c.restore();u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderBar=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=
null,d=this.plotArea,e=0,g,f,k,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,e=0.15*this.height,l=a.axisX.dataInfo.minDiff,h=0.9*(d.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(l)/a.plotType.totalDataSeries)<<0;h>e?h=e:Infinity===l?h=e:1>h&&(h=1);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,
d.height),this._eventManager.ghostCtx.clip());for(d=0;d<a.dataSeriesIndexes.length;d++){var l=a.dataSeriesIndexes[d],q=this.data[l],n=q.dataPoints;q.maxWidthInX=h/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<n.length){var p=5<h&&q.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(e=0;e<n.length;e++)if(n[e].getTime?k=n[e].x.getTime():k=n[e].x,!(k<a.axisX.dataInfo.viewPortMin||k>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof n[e].y){f=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(k-a.axisX.convertionParameters.minimum)+0.5<<0;g=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(n[e].y-a.axisY.convertionParameters.minimum)+0.5<<0;f=f-a.plotType.totalDataSeries*h/2+(a.previousDataSeriesCount+d)*h<<0;var r=f+h<<0,t;0<=n[e].y?t=m:(t=g,g=m);b=n[e].color?n[e].color:q._colorSet[e%q._colorSet.length];J(c,t,f,g,r,b,p,!1,!1,!1);b=q.dataPointIds[e];
this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:e,x1:t,y1:f,x2:g,y2:r};b=z(b);u&&J(this._eventManager.ghostCtx,t,f,g,r,b,!1,!1,!1,!1);this._indexLabels.push({chartType:"bar",dataPoint:n[e],dataSeries:q,point:{x:0<=n[e].y?g:t,y:f+(r-f)/2},bounds:{x1:Math.min(t,g),y1:f,x2:Math.max(t,g),y2:r},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderStackedBar=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=
null,d=this.plotArea,e=[],g=[],f=0,k,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,f=0.15*this.width,l=a.axisX.dataInfo.minDiff,h=0.9*(d.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(l)/a.plotType.plotUnits.length)<<0;h>f?h=f:Infinity===l?h=f:1>h&&(h=1);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,
d.height),this._eventManager.ghostCtx.clip());for(l=0;l<a.dataSeriesIndexes.length;l++){var q=a.dataSeriesIndexes[l],n=this.data[q],p=n.dataPoints;n.maxWidthInX=h/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<p.length){var r=5<h&&n.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(f=0;f<p.length;f++)if(b=p[f].x.getTime?p[f].x.getTime():p[f].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof p[f].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+0.5<<0;k=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(p[f].y-a.axisY.convertionParameters.minimum)+0.5<<0;var t=d-a.plotType.plotUnits.length*h/2+a.index*h<<0,s=t+h<<0,v;if(0<=p[f].y){var y=e[b]?e[b]:0;v=m+y;k+=y;e[b]=y+(k-v)}else y=g[b]?g[b]:0,v=k-y,k=m-y,g[b]=y+(k-v);b=p[f].color?p[f].color:n._colorSet[f%n._colorSet.length];
J(c,v,t,k,s,b,r,!1,!1,!1);b=n.dataPointIds[f];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:f,x1:v,y1:t,x2:k,y2:s};b=z(b);u&&J(this._eventManager.ghostCtx,v,t,k,s,b,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar",dataPoint:p[f],dataSeries:n,point:{x:0<=p[f].y?k:v,y:d},bounds:{x1:Math.min(v,k),y1:t,x2:Math.max(v,k),y2:s},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderStackedBar100=function(a){var c=this.plotArea.ctx;
if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=this.plotArea,e=[],g=[],f=0,k,m=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,f=0.15*this.width,l=a.axisX.dataInfo.minDiff,h=0.9*(d.height/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(l)/a.plotType.plotUnits.length)<<0;h>f?h=f:Infinity===l?h=f:1>h&&(h=1);c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,
d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(l=0;l<a.dataSeriesIndexes.length;l++){var q=a.dataSeriesIndexes[l],n=this.data[q],p=n.dataPoints;n.maxWidthInX=h/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);if(0<p.length){var r=5<h&&n.bevelEnabled?!0:!1;c.strokeStyle="#4572A7 ";for(f=0;f<p.length;f++)if(b=p[f].x.getTime?p[f].x.getTime():p[f].x,!(b<a.axisX.dataInfo.viewPortMin||b>a.axisX.dataInfo.viewPortMax)&&
"number"===typeof p[f].y){d=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(b-a.axisX.convertionParameters.minimum)+0.5<<0;k=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*((0!==a.dataPointYSums[b]?100*(p[f].y/a.dataPointYSums[b]):0)-a.axisY.convertionParameters.minimum)+0.5<<0;var t=d-a.plotType.plotUnits.length*h/2+a.index*h<<0,s=t+h<<0,v;if(0<=p[f].y){var y=e[b]?e[b]:0;v=m+y;k+=y;e[b]=y+(k-v)}else y=g[b]?g[b]:0,v=k-y,k=m-y,g[b]=
y+(k-v);b=p[f].color?p[f].color:n._colorSet[f%n._colorSet.length];J(c,v,t,k,s,b,r,!1,!1,!1);b=n.dataPointIds[f];this._eventManager.objectMap[b]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:f,x1:v,y1:t,x2:k,y2:s};b=z(b);u&&J(this._eventManager.ghostCtx,v,t,k,s,b,!1,!1,!1,!1);this._indexLabels.push({chartType:"stackedBar100",dataPoint:p[f],dataSeries:n,point:{x:0<=p[f].y?k:v,y:d},bounds:{x1:Math.min(v,k),y1:t,x2:Math.max(v,k),y2:s},color:b})}}}c.restore();u&&this._eventManager.ghostCtx.restore()}};
x.prototype.renderArea=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx,d=a.axisX.lineCoordinates,e=a.axisY.lineCoordinates,g=[],f=this.plotArea;c.save();u&&b.save();c.beginPath();c.rect(f.x1,f.y1,f.width,f.height);c.clip();u&&(b.beginPath(),b.rect(f.x1,f.y1,f.width,f.height),b.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var k=a.dataSeriesIndexes[f],m=this.data[k],l=m.dataPoints,g=m.id;this._eventManager.objectMap[g]={objectType:"dataSeries",
dataSeriesIndex:k};g=z(g);b.fillStyle=g;var g=[],h=!0,q=0,n,p,r=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)+0.5<<0,t,s=null;if(0<l.length){color=m._colorSet[q%m._colorSet.length];for(c.fillStyle=color;q<l.length;q++)if(p=l[q].x.getTime?l[q].x.getTime():l[q].x,!(p<a.axisX.dataInfo.viewPortMin||p>a.axisX.dataInfo.viewPortMax)&&(n=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(p-a.axisX.convertionParameters.minimum)+
0.5<<0,p=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l[q].y-a.axisY.convertionParameters.minimum)+0.5<<0,"number"===typeof l[q].y)){h?(c.beginPath(),c.moveTo(n,p),s={x:n,y:p},u&&(b.beginPath(),b.moveTo(n,p)),h=!1):(c.lineTo(n,p),u&&b.lineTo(n,p),0==q%250&&(0>=a.axisY.minimum&&0<=a.axisY.maximum?t=r:0>a.axisY.maximum?t=e.y1:0<a.axisY.minimum&&(t=d.y2),c.lineTo(n,t),c.lineTo(s.x,t),c.closePath(),c.fill(),c.beginPath(),c.moveTo(n,p),u&&(b.lineTo(n,t),b.lineTo(s.x,
t),b.closePath(),b.fill(),b.beginPath(),b.moveTo(n,p)),s={x:n,y:p}));var v=m.dataPointIds[q];this._eventManager.objectMap[v]={objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:q,x1:n,y1:p};if(0!==l[q].markerSize&&(0<l[q].markerSize||0<m.markerSize)){var y=m.getMarkerProperties(q,n,p,c);g.push(y);if(!m.maxWidthInX||y.size>m.maxWidthInX)m.maxWidthInX=y.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=
z(v);u&&g.push({x:n,y:p,ctx:b,type:y.type,size:y.size,color:markerColor,borderColor:markerColor,borderThickness:y.borderThickness})}(l[q].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"area",dataPoint:l[q],dataSeries:m,point:{x:n,y:p},color:color})}0>=a.axisY.minimum&&0<=a.axisY.maximum?t=r:0>a.axisY.maximum?t=e.y1:0<a.axisY.minimum&&(t=d.y2);c.lineTo(n,t);c.lineTo(s.x,t);c.closePath();c.fill();u&&(b.lineTo(n,t),b.lineTo(s.x,t),b.closePath(),b.fill());H.drawMarkers(g)}}c.restore();
u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderSplineArea=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx,d=a.axisX.lineCoordinates,e=a.axisY.lineCoordinates,g=[],f=this.plotArea;c.save();u&&b.save();c.beginPath();c.rect(f.x1,f.y1,f.width,f.height);c.clip();u&&(b.beginPath(),b.rect(f.x1,f.y1,f.width,f.height),b.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var k=a.dataSeriesIndexes[f],m=this.data[k],l=m.dataPoints,g=m.id;
this._eventManager.objectMap[g]={objectType:"dataSeries",dataSeriesIndex:k};g=z(g);b.fillStyle=g;var g=[],h=0,q,n,p=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)+0.5<<0,r,t=null,t=[];if(0<l.length){color=m._colorSet[h%m._colorSet.length];for(c.fillStyle=color;h<l.length;h++)if(q=l[h].x.getTime?l[h].x.getTime():l[h].x,!(q<a.axisX.dataInfo.viewPortMin||q>a.axisX.dataInfo.viewPortMax)&&(q=a.axisX.convertionParameters.reference+
a.axisX.convertionParameters.pixelPerUnit*(q-a.axisX.convertionParameters.minimum)+0.5<<0,n=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l[h].y-a.axisY.convertionParameters.minimum)+0.5<<0,"number"===typeof l[h].y)){var s=m.dataPointIds[h];this._eventManager.objectMap[s]={objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:h,x1:q,y1:n};t[t.length]={x:q,y:n};if(0!==l[h].markerSize&&(0<l[h].markerSize||0<m.markerSize)){var v=m.getMarkerProperties(h,q,n,c);g.push(v);
if(!m.maxWidthInX||v.size>m.maxWidthInX)m.maxWidthInX=v.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=z(s);u&&g.push({x:q,y:n,ctx:b,type:v.type,size:v.size,color:markerColor,borderColor:markerColor,borderThickness:v.borderThickness})}(l[h].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"splineArea",dataPoint:l[h],dataSeries:m,point:{x:q,y:n},color:color})}k=na(t,2);if(0<k.length){c.beginPath();
c.moveTo(k[0].x,k[0].y);u&&(b.beginPath(),b.moveTo(k[0].x,k[0].y));for(h=0;h<k.length-3;h+=3)c.bezierCurveTo(k[h+1].x,k[h+1].y,k[h+2].x,k[h+2].y,k[h+3].x,k[h+3].y),u&&b.bezierCurveTo(k[h+1].x,k[h+1].y,k[h+2].x,k[h+2].y,k[h+3].x,k[h+3].y);0>=a.axisY.minimum&&0<=a.axisY.maximum?r=p:0>a.axisY.maximum?r=e.y1:0<a.axisY.minimum&&(r=d.y2);t={x:k[0].x,y:k[0].y};c.lineTo(k[k.length-1].x,r);c.lineTo(t.x,r);c.closePath();c.fill();u&&(b.lineTo(k[k.length-1].x,r),b.lineTo(t.x,r),b.closePath(),b.fill())}H.drawMarkers(g)}}c.restore();
u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderStepArea=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=this._eventManager.ghostCtx,d=a.axisX.lineCoordinates,e=a.axisY.lineCoordinates,g=[],f=this.plotArea;c.save();u&&b.save();c.beginPath();c.rect(f.x1,f.y1,f.width,f.height);c.clip();u&&(b.beginPath(),b.rect(f.x1,f.y1,f.width,f.height),b.clip());for(f=0;f<a.dataSeriesIndexes.length;f++){var k=a.dataSeriesIndexes[f],m=this.data[k],l=m.dataPoints,g=m.id;this._eventManager.objectMap[g]=
{objectType:"dataSeries",dataSeriesIndex:k};g=z(g);b.fillStyle=g;var g=[],h=!0,q=0,n,p,r,t=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)+0.5<<0,s,v=null;if(0<l.length){color=m._colorSet[q%m._colorSet.length];for(c.fillStyle=color;q<l.length;q++)if(r=l[q].x.getTime?l[q].x.getTime():l[q].x,!(r<a.axisX.dataInfo.viewPortMin||r>a.axisX.dataInfo.viewPortMax)){var y=p;n=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*
(r-a.axisX.convertionParameters.minimum)+0.5<<0;p=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(l[q].y-a.axisY.convertionParameters.minimum)+0.5<<0;if("number"===typeof l[q].y){h?(c.beginPath(),c.moveTo(n,p),v={x:n,y:p},u&&(b.beginPath(),b.moveTo(n,p)),h=!1):(c.lineTo(n,y),u&&b.lineTo(n,y),c.lineTo(n,p),u&&b.lineTo(n,p),0==q%250&&(0>=a.axisY.minimum&&0<=a.axisY.maximum?s=t:0>a.axisY.maximum?s=e.y1:0<a.axisY.minimum&&(s=d.y2),c.lineTo(n,s),c.lineTo(v.x,s),c.closePath(),
c.fill(),c.beginPath(),c.moveTo(n,p),u&&(b.lineTo(n,s),b.lineTo(v.x,s),b.closePath(),b.fill(),b.beginPath(),b.moveTo(n,p)),v={x:n,y:p}));r=m.dataPointIds[q];this._eventManager.objectMap[r]={objectType:"dataPoint",dataSeriesIndex:k,dataPointIndex:q,x1:n,y1:p};if(0!==l[q].markerSize&&(0<l[q].markerSize||0<m.markerSize)){y=m.getMarkerProperties(q,n,p,c);g.push(y);if(!m.maxWidthInX||y.size>m.maxWidthInX)m.maxWidthInX=y.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-
1:a.axisX.convertionParameters.pixelPerUnit);markerColor=z(r);u&&g.push({x:n,y:p,ctx:b,type:y.type,size:y.size,color:markerColor,borderColor:markerColor,borderThickness:y.borderThickness})}(l[q].indexLabel||m.indexLabel)&&this._indexLabels.push({chartType:"stepArea",dataPoint:l[q],dataSeries:m,point:{x:n,y:p},color:color})}}0>=a.axisY.minimum&&0<=a.axisY.maximum?s=t:0>a.axisY.maximum?s=e.y1:0<a.axisY.minimum&&(s=d.y2);c.lineTo(n,s);c.lineTo(v.x,s);c.closePath();c.fill();u&&(b.lineTo(n,s),b.lineTo(v.x,
s),b.closePath(),b.fill());H.drawMarkers(g)}}c.restore();u&&this._eventManager.ghostCtx.restore()}};x.prototype.renderStackedArea=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=null,d=[],e=this.plotArea,g=[],f=[],k=0,m,l,h,q=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,n=this._eventManager.ghostCtx;u&&n.beginPath();c.save();u&&n.save();c.beginPath();c.rect(e.x1,e.y1,e.width,e.height);c.clip();
u&&(n.beginPath(),n.rect(e.x1,e.y1,e.width,e.height),n.clip());xValuePresent=[];for(e=0;e<a.dataSeriesIndexes.length;e++){var p=a.dataSeriesIndexes[e],r=this.data[p],t=r.dataPoints;r.dataPointIndexes=[];for(k=0;k<t.length;k++)p=t[k].x.getTime?t[k].x.getTime():t[k].x,r.dataPointIndexes[p]=k,xValuePresent[p]||(f.push(p),xValuePresent[p]=!0);f.sort(ia)}for(e=0;e<a.dataSeriesIndexes.length;e++){var p=a.dataSeriesIndexes[e],r=this.data[p],t=r.dataPoints,s=!0,v=[],k=r.id;this._eventManager.objectMap[k]=
{objectType:"dataSeries",dataSeriesIndex:p};k=z(k);n.fillStyle=k;if(0<f.length){b=r._colorSet[0];c.fillStyle=b;for(k=0;k<f.length;k++){h=f[k];var y=null,y=0<=r.dataPointIndexes[h]?t[r.dataPointIndexes[h]]:{x:h,y:0};if(!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof y.y){m=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(h-a.axisX.convertionParameters.minimum)+0.5<<0;l=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*
(y.y-a.axisY.convertionParameters.minimum)+0.5<<0;var x=g[h]?g[h]:0;l-=x;v.push({x:m,y:q-x});g[h]=q-l;if(s)c.beginPath(),c.moveTo(m,l),u&&(n.beginPath(),n.moveTo(m,l)),s=!1;else if(c.lineTo(m,l),u&&n.lineTo(m,l),0==k%250){for(;0<v.length;){var w=v.pop();c.lineTo(w.x,w.y);u&&n.lineTo(w.x,w.y)}c.closePath();c.fill();c.beginPath();c.moveTo(m,l);u&&(n.closePath(),n.fill(),n.beginPath(),n.moveTo(m,l));v.push({x:m,y:q-x})}if(0<=r.dataPointIndexes[h]){var C=r.dataPointIds[r.dataPointIndexes[h]];this._eventManager.objectMap[C]=
{objectType:"dataPoint",dataSeriesIndex:p,dataPointIndex:r.dataPointIndexes[h],x1:m,y1:l}}if(0<=r.dataPointIndexes[h]&&0!==y.markerSize&&(0<y.markerSize||0<r.markerSize)){h=r.getMarkerProperties(k,m,l,c);d.push(h);if(!r.maxWidthInX||h.size>r.maxWidthInX)r.maxWidthInX=h.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=z(C);u&&d.push({x:m,y:l,ctx:n,type:h.type,size:h.size,color:markerColor,borderColor:markerColor,
borderThickness:h.borderThickness})}(y.indexLabel||r.indexLabel)&&this._indexLabels.push({chartType:"stackedArea",dataPoint:y,dataSeries:r,point:{x:m,y:l},color:b})}}for(;0<v.length;)w=v.pop(),c.lineTo(w.x,w.y),u&&n.lineTo(w.x,w.y);c.closePath();c.fill();c.beginPath();c.moveTo(m,l);u&&(n.closePath(),n.fill(),n.beginPath(),n.moveTo(m,l))}delete r.dataPointIndexes}H.drawMarkers(d);c.restore();u&&n.restore()}};x.prototype.renderStackedArea100=function(a){var c=this.plotArea.ctx;if(!(0>=a.dataSeriesIndexes.length)){var b=
null,d=this.plotArea,e=[],g=[],f=[],k=0,m,l,h,q=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(0-a.axisY.convertionParameters.minimum)<<0,n=0.15*this.width,p=a.axisX.dataInfo.minDiff,p=0.9*d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(p)<<0,r=this._eventManager.ghostCtx;c.save();u&&r.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(r.beginPath(),r.rect(d.x1,d.y1,d.width,d.height),r.clip());xValuePresent=[];for(d=0;d<a.dataSeriesIndexes.length;d++){var t=
a.dataSeriesIndexes[d],s=this.data[t],v=s.dataPoints;s.dataPointIndexes=[];for(k=0;k<v.length;k++)t=v[k].x.getTime?v[k].x.getTime():v[k].x,s.dataPointIndexes[t]=k,xValuePresent[t]||(f.push(t),xValuePresent[t]=!0);f.sort(ia)}for(d=0;d<a.dataSeriesIndexes.length;d++){var t=a.dataSeriesIndexes[d],s=this.data[t],v=s.dataPoints,y=!0,b=s.id;this._eventManager.objectMap[b]={objectType:"dataSeries",dataSeriesIndex:t};b=z(b);r.fillStyle=b;1==v.length&&(p=n);1>p?p=1:p>n&&(p=n);var x=[];if(0<f.length){b=s._colorSet[k%
s._colorSet.length];c.fillStyle=b;for(k=0;k<f.length;k++){h=f[k];var w=null,w=0<=s.dataPointIndexes[h]?v[s.dataPointIndexes[h]]:{x:h,y:0};if(!(h<a.axisX.dataInfo.viewPortMin||h>a.axisX.dataInfo.viewPortMax)&&"number"===typeof w.y){l=0!==a.dataPointYSums[h]?100*(w.y/a.dataPointYSums[h]):0;m=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(h-a.axisX.convertionParameters.minimum)+0.5<<0;l=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*
(l-a.axisY.convertionParameters.minimum)+0.5<<0;var C=g[h]?g[h]:0;l-=C;x.push({x:m,y:q-C});g[h]=q-l;if(y)c.beginPath(),c.moveTo(m,l),u&&(r.beginPath(),r.moveTo(m,l)),y=!1;else if(c.lineTo(m,l),u&&r.lineTo(m,l),0==k%250){for(;0<x.length;){var D=x.pop();c.lineTo(D.x,D.y);u&&r.lineTo(D.x,D.y)}c.closePath();c.fill();c.beginPath();c.moveTo(m,l);u&&(r.closePath(),r.fill(),r.beginPath(),r.moveTo(m,l));x.push({x:m,y:q-C})}if(0<=s.dataPointIndexes[h]){var F=s.dataPointIds[s.dataPointIndexes[h]];this._eventManager.objectMap[F]=
{objectType:"dataPoint",dataSeriesIndex:t,dataPointIndex:s.dataPointIndexes[h],x1:m,y1:l}}if(0<=s.dataPointIndexes[h]&&0!==w.markerSize&&(0<w.markerSize||0<s.markerSize)){h=s.getMarkerProperties(k,m,l,c);e.push(h);if(!s.maxWidthInX||h.size>s.maxWidthInX)s.maxWidthInX=h.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);markerColor=z(F);u&&e.push({x:m,y:l,ctx:r,type:h.type,size:h.size,color:markerColor,borderColor:markerColor,
borderThickness:h.borderThickness})}(w.indexLabel||s.indexLabel)&&this._indexLabels.push({chartType:"stackedArea100",dataPoint:w,dataSeries:s,point:{x:m,y:l},color:b})}}for(;0<x.length;)D=x.pop(),c.lineTo(D.x,D.y),u&&r.lineTo(D.x,D.y);c.closePath();c.fill();c.beginPath();c.moveTo(m,l);u&&(r.closePath(),r.fill(),r.beginPath(),r.moveTo(m,l))}delete s.dataPointIndexes}H.drawMarkers(e);c.restore();u&&r.restore()}};x.prototype.renderBubble=function(a){var c=this.plotArea.ctx,b=a.dataSeriesIndexes.length;
if(!(0>=b)){var d=this.plotArea,e=0,g,f,k=0.15*this.width,e=a.axisX.dataInfo.minDiff,b=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(e)/b)<<0;c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var m=-Infinity,l=Infinity,h=0;h<a.dataSeriesIndexes.length;h++)for(var q=a.dataSeriesIndexes[h],n=this.data[q],p=n.dataPoints,r=0,
e=0;e<p.length;e++)g=p[e].getTime?g=p[e].x.getTime():g=p[e].x,g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax||"undefined"===typeof p[e].z||(r=p[e].z,r>m&&(m=r),r<l&&(l=r));for(var t=25*Math.PI,d=Math.max(Math.pow(0.25*Math.min(d.height,d.width)/2,2)*Math.PI,t),h=0;h<a.dataSeriesIndexes.length;h++)if(q=a.dataSeriesIndexes[h],n=this.data[q],p=n.dataPoints,1==p.length&&(b=k),1>b?b=1:b>k&&(b=k),0<p.length)for(c.strokeStyle="#4572A7 ",e=0;e<p.length;e++)if(g=p[e].getTime?g=p[e].x.getTime():
g=p[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof p[e].y){g=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(g-a.axisX.convertionParameters.minimum)+0.5<<0;f=a.axisY.convertionParameters.reference+a.axisY.convertionParameters.pixelPerUnit*(p[e].y-a.axisY.convertionParameters.minimum)+0.5<<0;var r=p[e].z,s=2*Math.max(Math.sqrt((t+(d-t)/(m-l)*(r-l))/Math.PI)<<0,1),r=n.getMarkerProperties(e,c);r.size=s;H.drawMarker(g,f,c,r.type,
r.size,r.color,r.borderColor,r.borderThickness);if(!n.maxWidthInX||r.size>n.maxWidthInX)n.maxWidthInX=r.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);var v=n.dataPointIds[e];this._eventManager.objectMap[v]={objectType:"dataPoint",dataSeriesIndex:q,dataPointIndex:e,x1:g,y1:f,size:s};s=z(v);u&&H.drawMarker(g,f,this._eventManager.ghostCtx,r.type,r.size,s,s,r.borderThickness)}c.restore();u&&this._eventManager.ghostCtx.restore()}};
x.prototype.renderScatter=function(a){var c=this.plotArea.ctx,b=a.dataSeriesIndexes.length;if(!(0>=b)){var d=this.plotArea,e=0,g,f,k=0.15*this.width,e=a.axisX.dataInfo.minDiff,b=0.9*(d.width/Math.abs(a.axisX.maximum-a.axisX.minimum)*Math.abs(e)/b)<<0;c.save();u&&this._eventManager.ghostCtx.save();c.beginPath();c.rect(d.x1,d.y1,d.width,d.height);c.clip();u&&(this._eventManager.ghostCtx.rect(d.x1,d.y1,d.width,d.height),this._eventManager.ghostCtx.clip());for(var m=0;m<a.dataSeriesIndexes.length;m++){var l=
a.dataSeriesIndexes[m],h=this.data[l],q=h.dataPoints;1==q.length&&(b=k);1>b?b=1:b>k&&(b=k);if(0<q.length){c.strokeStyle="#4572A7 ";Math.pow(0.3*Math.min(d.height,d.width)/2,2);for(var n=0,p=0,e=0;e<q.length;e++)if(g=q[e].getTime?g=q[e].x.getTime():g=q[e].x,!(g<a.axisX.dataInfo.viewPortMin||g>a.axisX.dataInfo.viewPortMax)&&"number"===typeof q[e].y){g=a.axisX.convertionParameters.reference+a.axisX.convertionParameters.pixelPerUnit*(g-a.axisX.convertionParameters.minimum)+0.5<<0;f=a.axisY.convertionParameters.reference+
a.axisY.convertionParameters.pixelPerUnit*(q[e].y-a.axisY.convertionParameters.minimum)+0.5<<0;var r=h.getMarkerProperties(e,g,f,c);H.drawMarker(r.x,r.y,r.ctx,r.type,r.size,r.color,r.color,r.thickness);if(!h.maxWidthInX||r.size>h.maxWidthInX)h.maxWidthInX=r.size/(1<a.axisX.convertionParameters.pixelPerUnit?a.axisX.convertionParameters.pixelPerUnit-1:a.axisX.convertionParameters.pixelPerUnit);Math.sqrt((n-g)*(n-g)+(p-f)*(p-f))<Math.min(r.size,5)||(n=h.dataPointIds[e],this._eventManager.objectMap[n]=
{objectType:"dataPoint",dataSeriesIndex:l,dataPointIndex:e,x1:g,y1:f},n=z(n),u&&H.drawMarker(r.x,r.y,this._eventManager.ghostCtx,r.type,r.size,n,n,r.borderThickness),n=g,p=f)}}}c.restore();u&&this._eventManager.ghostCtx.restore()}};var ga=function(a,c,b,d,e,g,f){a.save();"pie"===e?(a.beginPath(),a.moveTo(c.x,c.y),a.arc(c.x,c.y,b,g,f,!1),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.closePath(),a.stroke(),a.fill()):"doughnut"===e&&(a.beginPath(),a.arc(c.x,c.y,b,g,f,!1),a.arc(c.x,c.y,0.6*b,f,
g,!0),a.closePath(),a.fillStyle=d,a.strokeStyle="white",a.lineWidth=2,a.stroke(),a.fill());a.restore()};x.prototype.renderPie=function(a){function c(a){t.frame=0;t.maxFrames=a||1}function b(){if(h&&q){for(var a=0,b=0;b<q.length;b++)a+=Math.abs(q[b].y);for(var c=0,d=0,e=0,g=0,b=0;b<q.length;b++){var f=q[b],k={objectType:"dataPoint",dataPointIndex:b,dataSeriesIndex:0};s.push(k);var m=f.indexLabel?f.indexLabel:h.indexLabel?h.indexLabel:f.label?f.label:h.label?h.label:"";l._eventManager.objectMap[h.dataPointIds[b]]=
k;k.center={x:C.x,y:C.y};k.y=f.y;k.radius=D;k.indexLabelText=l.replaceKeywordsWithValue(m,f,h,b);k.indexLabelPlacement=h.indexLabelPlacement;k.indexLabelLineColor=f.indexLabelLineColor?f.indexLabelLineColor:h.indexLabelLineColor?h.indexLabelLineColor:f.color?f.color:h._colorSet[b%h._colorSet.length];k.indexLabelLineThickness=f.indexLabelLineThickness?f.indexLabelLineThickness:h.indexLabelLineThickness;k.indexLabelFontColor=f.indexLabelFontColor?f.indexLabelFontColor:h.indexLabelFontColor;k.indexLabelFontStyle=
f.indexLabelFontStyle?f.indexLabelFontStyle:h.indexLabelFontStyle;k.indexLabelFontWeight=f.indexLabelFontWeight?f.indexLabelFontWeight:h.indexLabelFontWeight;k.indexLabelFontSize=f.indexLabelFontSize?f.indexLabelFontSize:h.indexLabelFontSize;k.indexLabelFontFamily=f.indexLabelFontFamily?f.indexLabelFontFamily:h.indexLabelFontFamily;k.indexLabelBackgroundColor=f.indexLabelBackgroundColor?f.indexLabelBackgroundColor:h.indexLabelBackgroundColor?h.indexLabelBackgroundColor:null;k.indexLabelMaxWidth=f.indexLabelMaxWidth?
f.indexLabelMaxWidth:h.indexLabelMaxWidth?h.indexLabelMaxWidth:0.33*p.width;k.indexLabelWrap=f.indexLabelWrap?f.indexLabelWrap:h.indexLabelWrap;k.startAngle=0===b?h.startAngle?h.startAngle/180*Math.PI:0:s[b-1].endAngle;k.startAngle=(k.startAngle+2*Math.PI)%(2*Math.PI);k.endAngle=k.startAngle+2*Math.PI/a*Math.abs(f.y);f=(k.endAngle+k.startAngle)/2;f=(f+2*Math.PI)%(2*Math.PI);k.midAngle=f;if(k.midAngle>Math.PI/2-w&&k.midAngle<Math.PI/2+w){if(0===c||s[e].midAngle>k.midAngle)e=b;c++}else if(k.midAngle>
3*Math.PI/2-w&&k.midAngle<3*Math.PI/2+w){if(0===d||s[g].midAngle>k.midAngle)g=b;d++}k.hemisphere=f>Math.PI/2&&f<=3*Math.PI/2?"left":"right";k.indexLabelTextBlock=new E(l.plotArea.ctx,{fontSize:k.indexLabelFontSize,fontFamily:k.indexLabelFontFamily,fontColor:k.indexLabelFontColor,fontStyle:k.indexLabelFontStyle,fontWeight:k.indexLabelFontWeight,horizontalAlign:"left",backgroundColor:k.indexLabelBackgroundColor,maxWidth:k.indexLabelMaxWidth,maxHeight:k.indexLabelWrap?5*k.indexLabelFontSize:1.5*k.indexLabelFontSize,
text:k.indexLabelText,padding:0,textBaseline:k.indexLabelBackgroundColor?"middle":"top"});k.indexLabelTextBlock.measureText()}f=a=0;m=!1;for(b=0;b<q.length;b++)k=s[(e+b)%q.length],1<c&&(k.midAngle>Math.PI/2-w&&k.midAngle<Math.PI/2+w)&&(a<=c/2&&!m?(k.hemisphere="right",a++):(k.hemisphere="left",m=!0));m=!1;for(b=0;b<q.length;b++)k=s[(g+b)%q.length],1<d&&(k.midAngle>3*Math.PI/2-w&&k.midAngle<3*Math.PI/2+w)&&(f<=d/2&&!m?(k.hemisphere="left",f++):(k.hemisphere="right",m=!0))}}function d(){var a=l.plotArea.ctx;
if(null!==t&&t.frame<t.maxFrames){0===t.frame&&(t.prevMaxAngle=s[0].startAngle);a.clearRect(p.x1,p.y1,p.width,p.height);for(var a=t.prevMaxAngle+2*Math.PI/t.maxFrames,b=0;b<q.length;b++){var g=0===b?s[b].startAngle:f,f=g+(s[b].endAngle-s[b].startAngle),k=!1;f>a&&(f=a,k=!0);var m=q[b].color?q[b].color:h._colorSet[b%h._colorSet.length];f>g&&ga(l.plotArea.ctx,s[b].center,s[b].radius,m,h.type,g,f);if(k)break}t.frame++;t.prevMaxAngle=a;t.frame<t.maxFrames?l.requestAnimFrame.call(window,d):(c(u?15:4),e())}}
function e(){var a=l.plotArea.ctx;if(null!==t&&t.frame<t.maxFrames){a.clearRect(p.x1,p.y1,p.width,p.height);for(a=0;a<q.length;a++){var b=s[a].startAngle,c=s[a].endAngle;if(c>b){var d=0.07*D*Math.cos(s[a].midAngle),g=0.07*D*Math.sin(s[a].midAngle),f=!1;if(q[a].exploded){if(Math.abs(s[a].center.x-(C.x+d))>Math.abs(0.5*d/t.maxFrames)||Math.abs(s[a].center.y-(C.y+g))>Math.abs(0.5*g/t.maxFrames))s[a].center.x+=d/t.maxFrames,s[a].center.y+=g/t.maxFrames,f=!0}else if(Math.abs(s[a].center.x-C.x)>=Math.abs(0.5*
d/t.maxFrames)||Math.abs(s[a].center.y-C.y)>=Math.abs(0.5*g/t.maxFrames))s[a].center.x-=d/t.maxFrames,s[a].center.y-=g/t.maxFrames,f=!0;f&&(d={},d.dataSeries=h,d.dataPoint=h.dataPoints[a],d.index=a,l._toolTip.highlightObjects([d]));ga(l.plotArea.ctx,s[a].center,s[a].radius,q[a].color?q[a].color:h._colorSet[a%h._colorSet.length],h.type,b,c)}}t.frame++;a=l.plotArea.ctx;a.fillStyle="black";a.strokeStyle="grey";a.textBaseline="middle";a.lineJoin="round";for(b=b=0;b<q.length;b++)c=s[b],c.indexLabelText&&
(c.indexLabelTextBlock.y-=c.indexLabelTextBlock.height/2,d=0,d="left"===c.hemisphere?"outside"===h.indexLabelPlacement?-(c.indexLabelTextBlock.width+n):-c.indexLabelTextBlock.width/2:"outside"===h.indexLabelPlacement?n:-c.indexLabelTextBlock.width/2,c.indexLabelTextBlock.x+=d,c.indexLabelTextBlock.render(!0),c.indexLabelTextBlock.x-=d,c.indexLabelTextBlock.y+=c.indexLabelTextBlock.height/2,"outside"===c.indexLabelPlacement&&(d=c.center.x+D*Math.cos(c.midAngle),g=c.center.y+D*Math.sin(c.midAngle),
a.strokeStyle=c.indexLabelLineColor,a.lineWidth=c.indexLabelLineThickness,a.beginPath(),a.moveTo(d,g),a.lineTo(c.indexLabelTextBlock.x,c.indexLabelTextBlock.y),a.lineTo(c.indexLabelTextBlock.x+("left"===c.hemisphere?-n:n),c.indexLabelTextBlock.y),a.stroke()),a.lineJoin="miter");t.frame<t.maxFrames&&l.requestAnimFrame.call(window,e)}}function g(a,b){var c=0,c=a.indexLabelTextBlock.y-a.indexLabelTextBlock.height/2,d=a.indexLabelTextBlock.y+a.indexLabelTextBlock.height/2,e=b.indexLabelTextBlock.y-b.indexLabelTextBlock.height/
2,g=b.indexLabelTextBlock.y+b.indexLabelTextBlock.height/2;return c=b.indexLabelTextBlock.y>a.indexLabelTextBlock.y?e-d:c-g}function f(a){for(var b=null,c=1;c<q.length;c++)if(b=(a+c+s.length)%s.length,s[b].hemisphere!==s[a].hemisphere){b=null;break}else if(s[b].indexLabelText&&b!==a&&(0>g(s[b],s[a])||("right"===s[a].hemisphere?s[b].indexLabelTextBlock.y>=s[a].indexLabelTextBlock.y:s[b].indexLabelTextBlock.y<=s[a].indexLabelTextBlock.y)))break;else b=null;return b}function k(a,b){b=b||0;var c=0,d=
C.y-1*F,e=C.y+1*F;if(0<=a&&a<q.length){var h=s[a];if(0>b&&h.indexLabelTextBlock.y<d||0<b&&h.indexLabelTextBlock.y>e)return 0;var l=b,m=0,n=0,n=m=m=0;0>l?h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2>d&&h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2+l<d&&(l=-(d-(h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2+l))):h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2<d&&h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2+l>e&&(l=h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/
2+l-e);l=h.indexLabelTextBlock.y+l;d=0;d="right"===h.hemisphere?C.x+Math.sqrt(Math.pow(F,2)-Math.pow(l-C.y,2)):C.x-Math.sqrt(Math.pow(F,2)-Math.pow(l-C.y,2));n=C.x+D*Math.cos(h.midAngle);m=C.y+D*Math.sin(h.midAngle);m=Math.sqrt(Math.pow(d-n,2)+Math.pow(l-m,2));n=Math.acos(D/F);m=Math.acos((F*F+D*D-m*m)/(2*D*F));l=m<n?l-h.indexLabelTextBlock.y:0;d=null;for(e=1;e<q.length;e++)if(d=(a-e+s.length)%s.length,s[d].hemisphere!==s[a].hemisphere){d=null;break}else if(s[d].indexLabelText&&s[d].hemisphere===
s[a].hemisphere&&d!==a&&(0>g(s[d],s[a])||("right"===s[a].hemisphere?s[d].indexLabelTextBlock.y<=s[a].indexLabelTextBlock.y:s[d].indexLabelTextBlock.y>=s[a].indexLabelTextBlock.y)))break;else d=null;n=d;m=f(a);e=d=0;0>l?(e="right"===h.hemisphere?n:m,c=l,null!==e&&(n=-l,l=h.indexLabelTextBlock.y-h.indexLabelTextBlock.height/2-(s[e].indexLabelTextBlock.y+s[e].indexLabelTextBlock.height/2),l-n<v&&(d=-n,r++,e=k(e,d),+e.toFixed(B)>+d.toFixed(B)&&(c=l>v?-(l-v):-(n-(e-d)))))):0<l&&(e="right"===h.hemisphere?
m:n,c=l,null!==e&&(n=l,l=s[e].indexLabelTextBlock.y-s[e].indexLabelTextBlock.height/2-(h.indexLabelTextBlock.y+h.indexLabelTextBlock.height/2),l-n<v&&(d=n,r++,e=k(e,d),+e.toFixed(B)<+d.toFixed(B)&&(c=l>v?l-v:n-(d-e)))));c&&(l=h.indexLabelTextBlock.y+c,d=0,d="right"===h.hemisphere?C.x+Math.sqrt(Math.pow(F,2)-Math.pow(l-C.y,2)):C.x-Math.sqrt(Math.pow(F,2)-Math.pow(l-C.y,2)),h.midAngle>Math.PI/2-w&&h.midAngle<Math.PI/2+w?(e=(a-1+s.length)%s.length,e=s[e],n=s[(a+1+s.length)%s.length],"left"===h.hemisphere&&
"right"===e.hemisphere&&d>e.indexLabelTextBlock.x?d=e.indexLabelTextBlock.x-15:"right"===h.hemisphere&&("left"===n.hemisphere&&d<n.indexLabelTextBlock.x)&&(d=n.indexLabelTextBlock.x+15)):h.midAngle>3*Math.PI/2-w&&h.midAngle<3*Math.PI/2+w&&(e=(a-1+s.length)%s.length,e=s[e],n=s[(a+1+s.length)%s.length],"right"===h.hemisphere&&"left"===e.hemisphere&&d<e.indexLabelTextBlock.x?d=e.indexLabelTextBlock.x+15:"left"===h.hemisphere&&("right"===n.hemisphere&&d>n.indexLabelTextBlock.x)&&(d=n.indexLabelTextBlock.x-
15)),h.indexLabelTextBlock.y=l,h.indexLabelTextBlock.x=d,h.indexLabelAngle=Math.atan2(h.indexLabelTextBlock.y-C.y,h.indexLabelTextBlock.x-C.x))}return c}function m(){var a=l.plotArea.ctx;a.fillStyle="grey";a.strokeStyle="grey";a.font="16px Arial";a.textBaseline="middle";for(var b=0,e=a=0,a=0;10>a&&(1>a||0<e);a++){D-=e;e=0;if("outside"===h.indexLabelPlacement){F=D*x;for(b=0;b<q.length;b++){var m=s[b];m.indexLabelTextBlock.x=C.x+F*Math.cos(m.midAngle);m.indexLabelTextBlock.y=C.y+F*Math.sin(m.midAngle);
m.indexLabelAngle=m.midAngle;m.radius=D}for(var r,t,b=0;b<q.length;b++){var m=s[b],w=f(b);if(null!==w){r=s[b];t=s[w];var A=0,A=g(r,t)-v;if(0>A){for(var z=t=r=0;z<q.length;z++)z!==b&&s[z].hemisphere===m.hemisphere&&(s[z].indexLabelTextBlock.y<m.indexLabelTextBlock.y?r++:t++);z=A/(r+t||1)*t;r=-1*(A-z);var E=t=0;"right"===m.hemisphere?(t=k(b,z),r=-1*(A-t),E=k(w,r),+E.toFixed(B)<+r.toFixed(B)&&+t.toFixed(B)<=+z.toFixed(B)&&k(b,-(r-E))):(t=k(w,z),r=-1*(A-t),E=k(b,r),+E.toFixed(B)<+r.toFixed(B)&&+t.toFixed(B)<=
+z.toFixed(B)&&k(w,-(r-E)))}}}}else for(b=0;b<q.length;b++)m=s[b],F="pie"===h.type?0.7*D:0.8*D,A=C.x+F*Math.cos(m.midAngle),z=C.y+F*Math.sin(m.midAngle),m.indexLabelTextBlock.x=A,m.indexLabelTextBlock.y=z;for(b=0;b<q.length;b++)m=s[b],m.indexLabelTextBlock.measureText(),A=A=0,"right"===m.hemisphere?(A=p.x2-(m.indexLabelTextBlock.x+m.indexLabelTextBlock.width+n),A*=-1):A=p.x1-(m.indexLabelTextBlock.x-m.indexLabelTextBlock.width-n),0<A&&(Math.abs(m.indexLabelTextBlock.y-m.indexLabelTextBlock.height/
2-C.y)<D||Math.abs(m.indexLabelTextBlock.y+m.indexLabelTextBlock.height/2-C.y)<D)&&(A/=Math.abs(Math.cos(m.indexLabelAngle)),9<A&&(A*=0.3),A>e&&(e=A)),A=A=0,0<m.indexLabelAngle&&m.indexLabelAngle<Math.PI?(A=p.y2-(m.indexLabelTextBlock.y+m.indexLabelTextBlock.height/2+5),A*=-1):A=p.y1-(m.indexLabelTextBlock.y-m.indexLabelTextBlock.height/2-5),0<A&&Math.abs(m.indexLabelTextBlock.x-C.x)<D&&(A/=Math.abs(Math.sin(m.indexLabelAngle)),9<A&&(A*=0.3),A>e&&(e=A));b=function(a,b,c){for(var d=[],e=0;d.push(s[b]),
b!==c;b=(b+1+q.length)%q.length);d.sort(function(a,b){return a.y-b.y});for(b=0;b<d.length;b++)if(c=d[b],e<a)e+=c.indexLabelTextBlock.height,c.indexLabelTextBlock.text="",c.indexLabelText="",c.indexLabelTextBlock.measureText();else break};w=m=-1;for(z=E=0;z<q.length;z++)if(r=s[z],r.indexLabelText){var G=f(z);null!==G&&(t=s[G],A=0,A=g(r,t),0>A?(0>m&&(m=z),G!==m&&(w=G),E+=-A):0<E&&(b(E,m,w),w=m=-1,E=0))}0<E&&b(E,m,w)}c(l.animationEnabled&&0===l.renderCount?u?60:30:1);d()}var l=this;if(!(0>=a.dataSeriesIndexes.length)){var h=
this.data[a.dataSeriesIndexes[0]],q=h.dataPoints,n=10,p=this.plotArea,r=0,t={frame:0,maxFrames:1},s=[],v=2,x=1.3,w=20/180*Math.PI,B=6,C={x:(p.x2+p.x1)/2,y:(p.y2+p.y1)/2},D="inside"===h.indexLabelPlacement?0.95*Math.min(p.width,p.height)/2:0.8*Math.min(p.width,p.height)/2,F=D*x;this.pieDoughnutClickHandler=function(a){t.frame===t.maxFrames&&(a=a.dataPoint,a.exploded=a.exploded?!1:!0,c(u?15:4),e())};b();m()}};x.prototype.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();S.prototype.registerSpace=function(a,c){"top"===a?this._topOccupied+=c.height:"bottom"===a?this._bottomOccupied+=c.height:"left"===a?this._leftOccupied+=c.width:"right"===a&&(this._rightOccupied+=c.width)};S.prototype.unRegisterSpace=function(a,c){"top"===a?this._topOccupied-=c.height:"bottom"===a?this._bottomOccupied-=c.height:"left"===a?this._leftOccupied-=
c.width:"right"===a&&(this._rightOccupied-=c.width)};S.prototype.getFreeSpace=function(){return{x1:this._leftOccupied,y1:this._topOccupied,x2:this.chart.width-this._rightOccupied,y2:this.chart.height-this._bottomOccupied,width:this.chart.width-this._rightOccupied-this._leftOccupied,height:this.chart.height-this._bottomOccupied-this._topOccupied}};S.prototype.reset=function(){this._topOccupied=0;this._bottomOccupied=3;this._rightOccupied=this._leftOccupied=0};N(E,I);E.prototype.render=function(a){a&&
this.ctx.save();var c=this.ctx.font;this.ctx.textBaseline=this.textBaseline;this._isDirty&&this.measureText(this.ctx);this.ctx.translate(this.x,this.y);this.ctx.font=this._getFontString();this.ctx.rotate(Math.PI/180*this.angle);var b=0,d=this.padding,e=null;if(0<this.borderThickness&&this.borderColor||this.backgroundColor)this.ctx.roundRect(0,0,this.width,this.height,this.cornerRadius,this.borderThickness,this.backgroundColor,this.borderColor),"middle"===this.textBaseline&&(d+=this.fontSize/2);this.ctx.fillStyle=
this.fontColor;for(var g=0;g<this._wrappedText.lines.length;g++)e=this._wrappedText.lines[g],"right"===this.horizontalAlign?b=this.width-e.width-this.padding:"left"===this.horizontalAlign?b=this.padding:"center"===this.horizontalAlign&&(b=(this.width-2*this.padding)/2-e.width/2+this.padding),this.ctx.fillText(e.text,b,d),d+=e.height;this.ctx.font=c;a&&this.ctx.restore()};E.prototype.setText=function(a){this.text=a;this._isDirty=!0;this._wrappedText=null};E.prototype.measureText=function(){if(null===
this.maxWidth)throw"Please set maxWidth and height for TextBlock";this._wrapText(this.ctx);this._isDirty=!1;return{width:this.width,height:this.height}};E.prototype._getLineWithWidth=function(a,c,b){a=String(a);if(!a)return{text:"",width:0};var d=b=0,e=a.length-1,g=Infinity;for(this.ctx.font=this._getFontString();d<=e;){var g=Math.floor((d+e)/2),f=a.substr(0,g+1);b=this.ctx.measureText(f).width;if(b<c)d=g+1;else if(b>c)e=g-1;else break}b>c&&1<f.length&&(f=f.substr(0,f.length-1),b=this.ctx.measureText(f).width);
c=!0;if(f.length===a.length||" "===a[f.length])c=!1;c&&(a=f.split(" "),1<a.length&&a.pop(),f=a.join(" "),b=this.ctx.measureText(f).width);return{text:f,width:b}};E.prototype._wrapText=function(){text=new String(aa(this.text));var a=[],c=this.ctx.font,b=0,d=0;for(this.ctx.font=this._getFontString();0<text.length;){var e=this.maxHeight-2*this.padding,g=this._getLineWithWidth(text,this.maxWidth-2*this.padding,!1);g.height=this._lineHeight;a.push(g);d=Math.max(d,g.width);b+=g.height;text=aa(text.slice(g.text.length,
text.length));e&&b>e&&(g=a.pop(),b-=g.height)}this._wrappedText={lines:a,width:d,height:b};this.width=d+2*this.padding;this.height=b+2*this.padding;this.ctx.font=c};E.prototype._getFontString=function(){return la("",this,null)};N(T,I);T.prototype.render=function(){if(this.text){var a=this.chart.layoutManager.getFreeSpace(),c=0,b=0,d=0,e=0,g=0,f,k;"top"===this.verticalAlign||"bottom"===this.verticalAlign?(e=a.width-2*this.margin,g=0.5*a.height-2*this.margin,d=0):"center"===this.verticalAlign&&("left"===
this.horizontalAlign||"right"===this.horizontalAlign?(e=a.height-2*this.margin,g=0.5*a.width-2*this.margin):"center"===this.horizontalAlign&&(e=a.width-2*this.margin,g=0.5*a.height-2*this.margin));var g=new E(this.ctx,{fontSize:this.fontSize,fontFamily:this.fontFamily,fontColor:this.fontColor,fontStyle:this.fontStyle,fontWeight:this.fontWeight,horizontalAlign:this.horizontalAlign,verticalAlign:this.verticalAlign,borderColor:this.borderColor,borderThickness:this.borderThickness,backgroundColor:this.backgroundColor,
maxWidth:e,maxHeight:g,cornerRadius:this.cornerRadius,text:this.text,padding:this.padding,textBaseline:this.borderColor&&0<this.borderThickness?"middle":"top"}),m=g.measureText();"top"===this.verticalAlign||"bottom"===this.verticalAlign?("top"===this.verticalAlign?(b=this.margin,k="top"):"bottom"===this.verticalAlign&&(b=a.y2-this.margin-m.height,k="bottom"),"left"===this.horizontalAlign?c=a.x1+this.margin:"center"===this.horizontalAlign?c=a.x1+(e/2-m.width/2)+this.margin:"right"===this.horizontalAlign&&
(c=a.x2-this.margin-m.width),f=this.horizontalAlign,this.width=m.width,this.height=m.height):"center"===this.verticalAlign&&("left"===this.horizontalAlign?(c=a.x1+this.margin,b=a.y2-this.margin-(e/2-m.width/2),d=-90,k="left",this.width=m.height,this.height=m.width):"right"===this.horizontalAlign?(c=a.x2-this.margin,b=a.y1+this.margin+(e/2-m.width/2),d=90,k="right",this.width=m.height,this.height=m.width):"center"===this.horizontalAlign&&(b=a.y1+(a.height/2-m.height/2),c=a.x1+(a.width/2-m.width/2),
k="center",this.width=m.width,this.height=m.height),f="center");g.x=c;g.y=b;g.angle=d;g.horizontalAlign=f;g.render(!0);this.chart.layoutManager.registerSpace(k,{width:this.width+2*this.margin,height:this.height+2*this.margin});this.bounds={x1:c,y1:b,x2:c+this.width,y2:b+this.height};this.ctx.textBaseline="top"}};N($,I);$.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace(),c=null,b=0,d=0,e=0,g=0,f=[],k=[];"top"===this.verticalAlign||"bottom"===this.verticalAlign?(this.orientation=
"horizontal",c=this.verticalAlign,e=0.9*a.width,g=0.5*a.height):"center"===this.verticalAlign&&(this.orientation="vertical",c=this.horizontalAlign,e=0.5*a.width,g=0.9*a.height);for(var m=0;m<this.dataSeries.length;m++){var l=this.dataSeries[m],h=l.legendMarkerType?l.legendMarkerType:"line"!==l.type&&"stepLine"!==l.type&&"spline"!==l.type&&"scatter"!==l.type&&"bubble"!==l.type||!l.markerType?M.getDefaultLegendMarker(l.type):l.markerType,q=l.legendText?l.legendText:l.name,n=l.legendMarkerColor?l.legendMarkerColor:
l.markerColor?l.markerColor:l._colorSet[0],p=l.markerSize||"line"!==l.type&&"stepLine"!==l.type&&"spline"!==l.type?0.6*this.lineHeight:0;if("pie"!==l.type&&"doughnut"!==l.type)h={markerType:h,markerColor:n,text:q,textBlock:null,chartType:l.type,markerSize:p,lineColor:l._colorSet[0]},f.push(h);else for(var r=0;r<l.dataPoints.length;r++)p=l.dataPoints[r],h=p.legendMarkerType?p.legendMarkerType:l.legendMarkerType?l.legendMarkerType:M.getDefaultLegendMarker(l.type),q=p.legendText?p.legendText:l.legendText?
l.legendText:p.name?p.name:"DataPoint: "+(r+1),n=p.markerColor?p.markerColor:l.markerColor?l.markerColor:p.color?p.color:l.color?l.color:l._colorSet[r%l._colorSet.length],p=0!==p.markerSize&&(0!==l.markerSize||p.markerSize)||"line"!==l.type&&"stepLine"!==l.type&&"spline"!==l.type?0.6*this.lineHeight:0,h={markerType:h,markerColor:n,text:q,textBlock:null,chartType:l.type,markerSize:p},f.push(h)}if(0<f.length){l=null;for(m=r=0;m<f.length;m++){h=f[m];if("horizontal"===this.orientation){h.textBlock=new E(this.ctx,
{x:0,y:0,maxWidth:e,maxHeight:this.lineHeight,angle:0,text:h.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"});h.textBlock.measureText();if(!l||l.width+h.textBlock.width+(0===l.width?0:this.horizontalSpacing)>e)l={entries:[],width:0},k.push(l),this.height=k.length*(h.textBlock.height+5);h.textBlock.x=l.width;h.textBlock.y=0;l.width+=Math.round(h.textBlock.width+h.textBlock._lineHeight+
(0===l.width?0:0.5*h.textBlock._lineHeight))}else this.height+this.lineHeight<g?(l={entries:[],width:0},k.push(l),this.height=k.length*this.lineHeight):(l=k[r],r=(r+1)%k.length),h.textBlock=new E(this.ctx,{x:0,y:0,maxWidth:e,maxHeight:1.5*this.fontSize,angle:0,text:h.text,horizontalAlign:"left",fontSize:this.fontSize,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontColor:this.fontColor,fontStyle:this.fontStyle,textBaseline:"top"}),h.textBlock.measureText(),h.textBlock.x=l.width,h.textBlock.y=
0,l.width+=h.textBlock.width+h.textBlock._lineHeight+(0===l.width?0:0.5*h.textBlock._lineHeight);l.entries.push(h);this.width=Math.max(l.width,this.width)}this.height=k.length*this.lineHeight}"top"===this.verticalAlign?(d="left"===this.horizontalAlign?a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,b=a.y1):"center"===this.verticalAlign?(d="left"===this.horizontalAlign?a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,b=a.y1+a.height/
2-this.height/2):"bottom"===this.verticalAlign&&(d="left"===this.horizontalAlign?a.x1+2:"right"===this.horizontalAlign?a.x2-this.width-2:a.x1+a.width/2-this.width/2,b=a.y2-this.height-5);for(m=0;m<k.length;m++)for(l=k[m],a=0;a<l.entries.length;a++){h=l.entries[a];e=h.textBlock.x+d+(0===a?0.2*p:0.4*this.lineHeight+0.2*p);g=b+m*this.lineHeight;if("line"===h.chartType||"stepLine"===h.chartType||"spline"===h.chartType)this.ctx.strokeStyle=h.lineColor,this.ctx.lineWidth=Math.ceil(this.lineHeight/8),this.ctx.beginPath(),
this.ctx.moveTo(e-0.1*this.lineHeight,g+this.lineHeight/2),this.ctx.lineTo(e+0.7*this.lineHeight,g+this.lineHeight/2),this.ctx.stroke();H.drawMarker(e+p/2,g+this.lineHeight/2,this.ctx,h.markerType,p,h.markerColor,null,0);h.textBlock.x=e+Math.round(0.9*this.lineHeight);h.textBlock.y=g;h.textBlock.render(!0)}this.chart.layoutManager.registerSpace(c,{width:this.width+2+2,height:this.height+5+5});this.bounds={x1:d,y1:b,x2:d+this.width,y2:b+this.height}};N(da,I);da.prototype.render=function(){var a=this.chart.layoutManager.getFreeSpace();
this.ctx.fillStyle="red";this.ctx.fillRect(a.x1,a.y1,a.x2,a.y2)};N(M,I);M.prototype.getDefaultAxisPlacement=function(){type=this.type;if("column"===type||"line"===type||"stepLine"===type||"spline"===type||"area"===type||"stepArea"===type||"splineArea"===type||"stackedColumn"===type||"stackedLine"===type||"bubble"===type||"scatter"===type||"stackedArea"===type||"stackedColumn100"===type||"stackedLine100"===type||"stackedArea100"===type)return"normal";if("bar"===type||"stackedBar"===type||"stackedBar100"===
type)return"xySwapped";if("pie"===type||"doughnut"===type)return"none";window.console.log("Unknown Chart Type: "+type);return null};M.getDefaultLegendMarker=function(a){if("column"===a||"stackedColumn"===a||"stackedLine"===a||"bar"===a||"stackedBar"===a||"stackedBar100"===a||"bubble"===a||"scatter"===a||"stackedColumn100"===a||"stackedLine100"===a||"stepArea"===a)return"square";if("line"===a||"stepLine"===a||"spline"===a||"pie"===a||"doughnut"===a)return"circle";if("area"===a||"splineArea"===a||"stackedArea"===
a||"stackedArea100"===a)return"triangle";window.console.log("Unknown Chart Type: "+a);return null};M.prototype.getDataPointAtX=function(a,c){if(!this.dataPoints||0===this.dataPoints.length)return null;var b={dataPoint:null,distance:Infinity,index:NaN},d=null,e=0,g=0,f=1,k=Infinity,m=0,l=0,h=0;"none"!==this.chart.plotInfo.axisPlacement&&(h=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,h=0<h?(this.dataPoints.length-1)/h*(a-this.dataPoints[0].x)>>0:0);for(;;){g=0<f?h+e:h-e;if(0<=g&&
g<this.dataPoints.length){var d=this.dataPoints[g],q=Math.abs(d.x-a);q<b.distance&&(b.dataPoint=d,b.distance=q,b.index=g);d=Math.abs(d.x-a);d<=k?k=d:0<f?m++:l++;if(1E3<m&&1E3<l)break}else if(0>h-e&&h+e>=this.dataPoints.length)break;-1===f?(e++,f=1):f=-1}return c||b.dataPoint.x!==a?c&&null!==b.dataPoint?b:null:b};M.prototype.getDataPointAtXY=function(a,c,b){if(!this.dataPoints||0===this.dataPoints.length)return null;b=b||!1;var d=[],e=0,g=0,f=1,k=!1,m=Infinity,l=0,h=0,q=0;"none"!==this.chart.plotInfo.axisPlacement&&
(q=this.chart.axisX.getXValueAt({x:a,y:c}),g=this.dataPoints[this.dataPoints.length-1].x-this.dataPoints[0].x,q=0<g?(this.dataPoints.length-1)/g*(q-this.dataPoints[0].x)>>0:0);for(;;){g=0<f?q+e:q-e;if(0<=g&&g<this.dataPoints.length){var n=this.chart._eventManager.objectMap[this.dataPointIds[g]],p=this.dataPoints[g];if(n){switch(this.type){case "column":case "stackedColumn":case "stackedColumn100":case "bar":case "stackedBar":case "stackedBar100":a>=n.x1&&(a<=n.x2&&c>=n.y1&&c<=n.y2)&&(d.push({dataPoint:p,
dataPointIndex:g,dataSeries:this,distance:Math.min(Math.abs(n.x1-a),Math.abs(n.x2-a),Math.abs(n.y1-c),Math.abs(n.y2-c))}),k=!0);break;case "line":case "stepLine":case "spline":case "area":case "stepArea":case "stackedArea":case "stackedArea100":case "splineArea":case "scatter":var r=Q("markerSize",p,this)||4,t=b?20:r,s=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-c,2));s<=t&&d.push({dataPoint:p,dataPointIndex:g,dataSeries:this,distance:s});g=Math.abs(n.x1-a);g<=m?m=g:0<f?l++:h++;s<=r/2&&(k=!0);break;
case "bubble":r=n.size;s=Math.sqrt(Math.pow(n.x1-a,2)+Math.pow(n.y1-c,2));s<=r/2&&(d.push({dataPoint:p,dataPointIndex:g,dataSeries:this,distance:s}),k=!0);break;case "pie":case "doughnut":r=n.center,t="doughnut"===this.type?0.6*n.radius:0,s=Math.sqrt(Math.pow(r.x-a,2)+Math.pow(r.y-c,2)),s<n.radius&&s>t&&(s=Math.atan2(c-r.y,a-r.x),0>s&&(s+=2*Math.PI),s=(180*(s/Math.PI)%360+360)%360,r=(180*(n.startAngle/Math.PI)%360+360)%360,n=(180*(n.endAngle/Math.PI)%360+360)%360,r>n&&(n+=360,s<r&&(s+=360)),s>r&&
s<n&&(d.push({dataPoint:p,dataPointIndex:g,dataSeries:this,distance:0}),k=!0))}if(k||1E3<l&&1E3<h)break}}else if(0>q-e&&q+e>=this.dataPoints.length)break;-1===f?(e++,f=1):f=-1}a=null;for(c=0;c<d.length;c++)a?d[c].distance<=a.distance&&(a=d[c]):a=d[c];return a};M.prototype.getMarkerProperties=function(a,c,b,d){var e=this.dataPoints;return{x:c,y:b,ctx:d,type:e[a].markerType?e[a].markerType:this.markerType,size:e[a].markerSize?e[a].markerSize:this.markerSize,color:e[a].markerColor?e[a].markerColor:this.markerColor?
this.markerColor:e[a].color?e[a].color:this.color?this.color:this._colorSet[a%this._colorSet.length],borderColor:e[a].markerBorderColor?e[a].markerBorderColor:this.markerBorderColor?this.markerBorderColor:null,borderThickness:e[a].markerBorderThickness?e[a].markerBorderThickness:this.markerBorderThickness?this.markerBorderThickness:null}};N(B,I);B.prototype.createLabels=function(){var a,c=0,b,d=0,e=0,c=0;if("bottom"===this._position||"top"===this._position)c=this.lineCoordinates.width/Math.abs(this.maximum-
this.minimum)*this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?0.9*c>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.7*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?0.5*this.chart.height>>0:1.5*this.labelFontSize;else if("left"===this._position||"right"===this._position)c=this.lineCoordinates.height/Math.abs(this.maximum-this.minimum)*this.interval,d=this.labelAutoFit?"undefined"===typeof this._options.labelMaxWidth?
0.3*this.chart.width>>0:this.labelMaxWidth:"undefined"===typeof this._options.labelMaxWidth?0.5*this.chart.width>>0:this.labelMaxWidth,e="undefined"===typeof this._options.labelWrap||this.labelWrap?2*c>>0:1.5*this.labelFontSize;if("axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType)for(b=ha(new Date(this.maximum),this.interval,this.intervalType),c=this.intervalStartPosition;c<b;ha(c,this.interval,this.intervalType))a="axisX"===this.type&&this.labels[c]?this.labels[c]:qa(c,this.valueFormatString,
this.chart._cultureInfo),a=new E(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,fontStyle:this.labelFontStyle,textBaseline:"middle"}),this._labels.push({position:c.getTime(),textBlock:a,effectiveHeight:null});else{b=this.maximum;if(this.labels&&this.labels.length){a=Math.ceil(this.interval);for(var g=Math.ceil(this.intervalStartPosition),
f=!1,c=g;c<this.maximum;c+=a)if(this.labels[c])f=!0;else{f=!1;break}f&&(this.interval=a,this.intervalStartPosition=g)}for(c=this.intervalStartPosition;c<=b;c+=this.interval)a="axisX"===this.type&&this.labels[c]?this.labels[c]:fa(c,this.valueFormatString,this.chart._cultureInfo),a=new E(this.ctx,{x:0,y:0,maxWidth:d,maxHeight:e,angle:this.labelAngle,text:this.prefix+a+this.suffix,horizontalAlign:"left",fontSize:this.labelFontSize,fontFamily:this.labelFontFamily,fontWeight:this.labelFontWeight,fontColor:this.labelFontColor,
fontStyle:this.labelFontStyle,textBaseline:"middle",borderThickness:0}),this._labels.push({position:c,textBlock:a,effectiveHeight:null})}};B.prototype.createLabelsAndCalculateWidth=function(){var a=0;this._labels=[];if("left"===this._position||"right"===this._position)for(this.createLabels(),i=0;i<this._labels.length;i++){textBlock=this._labels[i].textBlock;var c=textBlock.measureText();labelEffectiveWidth=0===this.labelAngle?c.width:c.width*Math.cos(Math.PI/180*Math.abs(this.labelAngle))+c.height/
2*Math.sin(Math.PI/180*Math.abs(this.labelAngle));a<labelEffectiveWidth&&(a=labelEffectiveWidth);this._labels[i].effectiveWidth=labelEffectiveWidth}return(this.title?V(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+a+this.tickLength+10};B.prototype.createLabelsAndCalculateHeight=function(){var a=0;this._labels=[];var c,b=0;this.createLabels();if("bottom"===this._position||"top"===this._position)for(b=0;b<this._labels.length;b++){c=this._labels[b].textBlock;c=c.measureText();var d=
0,d=0===this.labelAngle?c.height:c.width*Math.sin(Math.PI/180*Math.abs(this.labelAngle))+c.height/2*Math.cos(Math.PI/180*Math.abs(this.labelAngle));a<d&&(a=d);this._labels[b].effectiveHeight=d}return(this.title?V(this.titleFontFamily,this.titleFontSize,this.titleFontWeight)+2:0)+a+this.tickLength};B.setLayoutAndRender=function(a,c,b,d,e){var g,f,k,m=a.chart,l=m.ctx;a.calculateAxisParameters();c&&c.calculateAxisParameters();b&&b.calculateAxisParameters();if(c&&b&&"undefined"===typeof c._options.maximum&&
"undefined"===typeof c._options.minimum&&"undefined"===typeof c._options.interval&&"undefined"===typeof b._options.maximum&&"undefined"===typeof b._options.minimum&&"undefined"===typeof b._options.interval){var h=(c.maximum-c.minimum)/c.interval,q=(b.maximum-b.minimum)/b.interval;h>q?b.maximum=b.interval*h+b.minimum:q>h&&(c.maximum=c.interval*q+c.minimum)}var h=c?c.gridThickness?c.gridThickness:0:0,q=b?b.gridThickness?b.gridThickness:0:0,n=c?c.margin:0;if("normal"===d){a.lineCoordinates={};var p=
Math.ceil(c?c.createLabelsAndCalculateWidth():0);g=Math.round(e.x1+p+n);a.lineCoordinates.x1=g;n=Math.ceil(b?b.createLabelsAndCalculateWidth():0);f=Math.round(e.x2-n>a.chart.width-10?a.chart.width-10:e.x2-n);a.lineCoordinates.x2=f;a.lineCoordinates.width=Math.abs(f-g);var r=Math.ceil(a.createLabelsAndCalculateHeight());d=Math.round(e.y2-r-a.margin);k=Math.round(e.y2-a.margin);a.lineCoordinates.y1=d;a.lineCoordinates.y2=d;a.boundingRect={x1:g,y1:d,x2:f,y2:k,width:f-g,height:k-d};c&&(g=Math.round(e.x1+
c.margin),d=Math.round(10>e.y1?10:e.y1),f=Math.round(e.x1+p+c.margin),k=Math.round(e.y2-r-a.margin),c.lineCoordinates={x1:f,y1:d,x2:f,y2:k,height:Math.abs(k-d)},c.boundingRect={x1:g,y1:d,x2:f,y2:k,width:f-g,height:k-d});b&&(g=Math.round(a.lineCoordinates.x2),d=Math.round(10>e.y1?10:e.y1),f=Math.round(g+n+b.margin),k=Math.round(e.y2-r-a.margin),b.lineCoordinates={x1:g,y1:d,x2:g,y2:k,height:Math.abs(k-d)},b.boundingRect={x1:g,y1:d,x2:f,y2:k,width:f-g,height:k-d});a.calculateValueToPixelConvertionParameters();
c&&c.calculateValueToPixelConvertionParameters();b&&b.calculateValueToPixelConvertionParameters();l.save();l.rect(a.boundingRect.x1-40,a.boundingRect.y1,a.boundingRect.width+80,a.boundingRect.height);l.clip();a.renderLabelsTicksAndTitle();l.restore();c&&c.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle();m.preparePlotArea();e=a.chart.plotArea;l.save();l.rect(e.x1,e.y1-Math.max(q,h)/2,Math.abs(e.x2-e.x1),Math.abs(e.y2-e.y1+Math.max(q,h)/2+Math.max(q,h,a.lineThickness)/2))}else{p=Math.ceil(a.createLabelsAndCalculateWidth());
c&&(c.lineCoordinates={},g=Math.round(e.x1+p+a.margin),f=Math.round(e.x2>c.chart.width-10?c.chart.width-10:e.x2),c.lineCoordinates.x1=g,c.lineCoordinates.x2=f,c.lineCoordinates.width=Math.abs(f-g));b&&(b.lineCoordinates={},g=Math.round(e.x1+p+a.margin),f=Math.round(e.x2>b.chart.width-10?b.chart.width-10:e.x2),b.lineCoordinates.x1=g,b.lineCoordinates.x2=f,b.lineCoordinates.width=Math.abs(f-g));var r=Math.ceil(c?c.createLabelsAndCalculateHeight():0),t=Math.ceil(b?b.createLabelsAndCalculateHeight():
0);c&&(d=Math.round(e.y2-r-c.margin),k=Math.round(e.y2-n>c.chart.height-10?c.chart.height-10:e.y2-n),c.lineCoordinates.y1=d,c.lineCoordinates.y2=d,c.boundingRect={x1:g,y1:d,x2:f,y2:k,width:f-g,height:r});b&&(d=Math.round(e.y1+b.margin),k=e.y1+b.margin+t,b.lineCoordinates.y1=k,b.lineCoordinates.y2=k,b.boundingRect={x1:g,y1:d,x2:f,y2:k,width:f-g,height:t});g=Math.round(e.x1+a.margin);d=Math.round(b?b.lineCoordinates.y2:10>e.y1?10:e.y1);f=Math.round(e.x1+p+a.margin);k=Math.round(c?c.lineCoordinates.y1:
e.y2-n>a.chart.height-10?a.chart.height-10:e.y2-n);a.lineCoordinates={x1:f,y1:d,x2:f,y2:k,height:Math.abs(k-d)};a.boundingRect={x1:g,y1:d,x2:f,y2:k,width:f-g,height:k-d};a.calculateValueToPixelConvertionParameters();c&&c.calculateValueToPixelConvertionParameters();b&&b.calculateValueToPixelConvertionParameters();c&&c.renderLabelsTicksAndTitle();b&&b.renderLabelsTicksAndTitle();a.renderLabelsTicksAndTitle();m.preparePlotArea();e=a.chart.plotArea;l.save();l.rect(e.x1-Math.max(a.lineThickness,h,q)/2,
e.y1,Math.abs(e.x2-e.x1+Math.max(a.lineThickness,h,q)/2+Math.max(h,q)/2),Math.abs(e.y2-e.y1))}l.clip();a.renderInterlacedColors();c&&c.renderInterlacedColors();b&&b.renderInterlacedColors();l.restore();a.renderGrid();c&&c.renderGrid();b&&b.renderGrid();a.renderAxisLine();c&&c.renderAxisLine();b&&b.renderAxisLine()};B.prototype.renderLabelsTicksAndTitle=function(){var a=!1,c=0,b=1,d=0;0!==this.labelAngle&&360!==this.labelAngle&&(b=1.2);if("undefined"===typeof this._options.interval){if("bottom"===
this._position||"top"===this._position){for(e=0;e<this._labels.length;e++)g=this._labels[e],g.position<this.minimum||(g=g.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)+g.textBlock.height*Math.sin(Math.PI/180*this.labelAngle),c+=g);c>this.lineCoordinates.width*b&&(a=!0)}if("left"===this._position||"right"===this._position){for(e=0;e<this._labels.length;e++)g=this._labels[e],g.position<this.minimum||(g=g.textBlock.height*Math.cos(Math.PI/180*this.labelAngle)+g.textBlock.width*Math.sin(Math.PI/
180*this.labelAngle),c+=g);c>this.lineCoordinates.height*b&&(a=!0)}}if("bottom"===this._position){var e=0;this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(var g,e=0;e<this._labels.length;e++)g=this._labels[e],g.position<this.minimum||g.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(g.position),this.tickThickness&&(b=1===this.tickThickness%2?(c.x<<0)+0.5:c.x<<0,this.ctx.beginPath(),this.ctx.moveTo(b,c.y<<0),this.ctx.lineTo(b,c.y+this.tickLength<<0),this.ctx.stroke()),
a&&0!==d++%2||(0===g.textBlock.angle?(c.x-=g.textBlock.width/2,c.y+=this.tickLength+g.textBlock.fontSize/2):(c.x-=0>this.labelAngle?g.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,c.y+=this.tickLength+Math.abs(0>this.labelAngle?g.textBlock.width*Math.sin(Math.PI/180*this.labelAngle):0)),g.textBlock.x=c.x,g.textBlock.y=c.y,g.textBlock.render(!0)));this.title&&(this._titleTextBlock=new E(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y2-this.titleFontSize-5,maxWidth:this.lineCoordinates.width,
maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.y=this.boundingRect.y2-this._titleTextBlock.height-2,this._titleTextBlock.render(!0))}else if("top"===
this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)g=this._labels[e],g.position<this.minimum||g.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(g.position),this.tickThickness&&(b=1===this.tickThickness%2?(c.x<<0)+0.5:c.x<<0,this.ctx.beginPath(),this.ctx.moveTo(b,c.y<<0),this.ctx.lineTo(b,c.y-this.tickLength<<0),this.ctx.stroke()),a&&0!==d++%2||(0===g.textBlock.angle?(c.x-=g.textBlock.width/2,c.y-=this.tickLength+g.textBlock.height/
2):(c.x-=0<this.labelAngle?g.textBlock.width*Math.cos(Math.PI/180*this.labelAngle):0,c.y-=this.tickLength+Math.abs(0<this.labelAngle?g.textBlock.width*Math.sin(Math.PI/180*this.labelAngle)+5:5)),g.textBlock.x=c.x,g.textBlock.y=c.y,g.textBlock.render(!0)));this.title&&(this._titleTextBlock=new E(this.ctx,{x:this.lineCoordinates.x1,y:this.boundingRect.y1,maxWidth:this.lineCoordinates.width,maxHeight:1.5*this.titleFontSize,angle:0,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,
fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.x=this.lineCoordinates.x1+this.lineCoordinates.width/2-this._titleTextBlock.width/2,this._titleTextBlock.render(!0))}else if("left"===this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)g=this._labels[e],g.position<this.minimum||
g.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(g.position),this.tickThickness&&(b=1===this.tickThickness%2?(c.y<<0)+0.5:c.y<<0,this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,b),this.ctx.lineTo(c.x-this.tickLength<<0,b),this.ctx.stroke()),a&&0!==d++%2||(g.textBlock.x=c.x-g.textBlock.width*Math.cos(Math.PI/180*this.labelAngle)-this.tickLength-5,g.textBlock.y=0===this.labelAngle?c.y-g.textBlock.height/2+this.labelFontSize/2:c.y-g.textBlock.width*Math.sin(Math.PI/180*this.labelAngle),g.textBlock.render(!0)));
this.title&&(this._titleTextBlock=new E(this.ctx,{x:this.boundingRect.x1+5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:-90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2+this._titleTextBlock.width/
2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}else if("right"===this._position){this.ctx.lineWidth=this.tickThickness;this.ctx.strokeStyle=this.tickColor;for(e=0;e<this._labels.length;e++)g=this._labels[e],g.position<this.minimum||g.position>this.maximum||(c=this.getPixelCoordinatesOnAxis(g.position),this.tickThickness&&(b=1===this.tickThickness%2?(c.y<<0)+0.5:c.y<<0,this.ctx.beginPath(),this.ctx.moveTo(c.x<<0,b),this.ctx.lineTo(c.x+this.tickLength<<0,b),this.ctx.stroke()),a&&0!==d++%
2||(g.textBlock.x=c.x+this.tickLength+5,g.textBlock.y=0===this.labelAngle?c.y-g.textBlock.height/2+this.labelFontSize/2:c.y,g.textBlock.render(!0)));this.title&&(this._titleTextBlock=new E(this.ctx,{x:this.boundingRect.x2-5,y:this.lineCoordinates.y2,maxWidth:this.lineCoordinates.height,maxHeight:1.5*this.titleFontSize,angle:90,text:this.title,horizontalAlign:"center",fontSize:this.titleFontSize,fontFamily:this.titleFontFamily,fontWeight:this.titleFontWeight,fontColor:this.titleFontColor,fontStyle:this.titleFontStyle,
textBaseline:"top"}),this._titleTextBlock.measureText(),this._titleTextBlock.y=this.lineCoordinates.height/2-this._titleTextBlock.width/2+this.lineCoordinates.y1,this._titleTextBlock.render(!0))}};B.prototype.renderInterlacedColors=function(){var a=this.chart.plotArea.ctx,c,b,d=this.chart.plotArea;if(("bottom"===this._position||"top"===this._position)&&this.interlacedColor){var e=0;a.fillStyle=this.interlacedColor;for(e=0;e<this._labels.length;e+=2)c=this.getPixelCoordinatesOnAxis(this._labels[e].position),
b=e+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[e+1].position),a.fillRect(c.x,d.y1,Math.abs(b.x-c.x),Math.abs(d.y1-d.y2))}else if(("left"===this._position||"right"===this._position)&&this.interlacedColor)for(a.fillStyle=this.interlacedColor,e=0;e<this._labels.length;e+=2)b=this.getPixelCoordinatesOnAxis(this._labels[e].position),c=e+1>=this._labels.length?this.getPixelCoordinatesOnAxis(this.maximum):this.getPixelCoordinatesOnAxis(this._labels[e+
1].position),a.fillRect(d.x1,c.y,Math.abs(d.x1-d.x2),Math.abs(c.y-b.y))};B.prototype.renderGrid=function(){var a=this.chart.ctx,c,b=this.chart.plotArea;if("bottom"===this._position||"top"===this._position){if(this.gridThickness&&0<this.gridThickness)for(a.lineWidth=this.gridThickness,a.strokeStyle=this.gridColor,a.beginPath(),d=0;d<this._labels.length;d++)this._labels[d].position<this.minimum||this._labels[d].position>this.maximum||(c=this.getPixelCoordinatesOnAxis(this._labels[d].position),c=1===
this.gridThickness%2?(c.x<<0)+0.5:c.x<<0,a.moveTo(c,b.y1<<0),a.lineTo(c,b.y2<<0),a.stroke())}else if(("left"===this._position||"right"===this._position)&&this.gridThickness&&0<this.gridThickness){a.lineWidth=this.gridThickness;a.strokeStyle=this.gridColor;a.beginPath();for(var d=0;d<this._labels.length;d++)this._labels[d].position<this.minimum||this._labels[d].position>this.maximum||(c=this.getPixelCoordinatesOnAxis(this._labels[d].position),c=1===this.gridThickness%2?(c.y<<0)+0.5:c.y<<0,a.moveTo(b.x1<<
0,c),a.lineTo(b.x2<<0,c),a.stroke())}};B.prototype.renderAxisLine=function(){var a=this.chart.ctx;if("bottom"===this._position||"top"===this._position){if(this.lineThickness){a.lineWidth=this.lineThickness;a.strokeStyle=this.lineColor?this.lineColor:"black";var c=1===this.lineThickness%2?(this.lineCoordinates.y1<<0)+0.5:this.lineCoordinates.y1<<0;a.beginPath();a.moveTo(this.lineCoordinates.x1,c);a.lineTo(this.lineCoordinates.x2,c);a.stroke()}}else"left"!==this._position&&"right"!==this._position||
!this.lineThickness||(a.lineWidth=this.lineThickness,a.strokeStyle=this.lineColor,c=1===this.lineThickness%2?(this.lineCoordinates.x1<<0)+0.5:this.lineCoordinates.x1<<0,a.beginPath(),a.moveTo(c,this.lineCoordinates.y1),a.lineTo(c,this.lineCoordinates.y2),a.stroke())};B.prototype.getPixelCoordinatesOnAxis=function(a){var c={},b=this.lineCoordinates.width,d=this.lineCoordinates.height;if("bottom"===this._position||"top"===this._position)b/=Math.abs(this.maximum-this.minimum),c.x=this.lineCoordinates.x1+
b*(a-this.minimum),c.y=this.lineCoordinates.y1;if("left"===this._position||"right"===this._position)b=d/Math.abs(this.maximum-this.minimum),c.y=this.lineCoordinates.y2-b*(a-this.minimum),c.x=this.lineCoordinates.x2;return c};B.prototype.getXValueAt=function(a){if(!a)return null;var c=null;"left"===this._position?c=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-a.y)+this.chart.axisX.minimum:"bottom"===this._position&&
(c=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a.x-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum);return c};B.prototype.calculateValueToPixelConvertionParameters=function(a){a={pixelPerUnit:null,minimum:null,reference:null};var c=this.lineCoordinates.width,b=this.lineCoordinates.height;a.minimum=this.minimum;if("bottom"===this._position||"top"===this._position)a.pixelPerUnit=c/Math.abs(this.maximum-this.minimum),a.reference=this.lineCoordinates.x1;
if("left"===this._position||"right"===this._position)a.pixelPerUnit=-1*b/Math.abs(this.maximum-this.minimum),a.reference=this.lineCoordinates.y2;this.convertionParameters=a};B.prototype.calculateAxisParameters=function(){var a=this.chart.layoutManager.getFreeSpace();"bottom"===this._position||"top"===this._position?(this.maxWidth=a.width,this.maxHeight=a.height):(this.maxWidth=a.height,this.maxHeight=a.width);var a="axisX"===this.type?500>this.maxWidth?8:Math.max(6,Math.floor(this.maxWidth/62)):Math.floor(this.maxWidth/
40),c,b,d,e;"axisX"===this.type?(c=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:this.dataInfo.viewPortMin,b=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:this.dataInfo.viewPortMax,0===b-c&&(b+=0.4,c-=0.4),d=Infinity!==this.dataInfo.minDiff?this.dataInfo.minDiff:1):"axisY"===this.type&&(c="undefined"===typeof this._options.minimum?this.dataInfo.viewPortMin:this._options.minimum,b="undefined"===typeof this._options.maximum?this.dataInfo.viewPortMax:
this._options.maximum,0===b-c?(b+=5,c-=5):(0!==b&&(b+=Math.abs(0.05)),0!==c&&(c-=Math.abs(0.05))),this.includeZero&&"undefined"===typeof this._options.minimum&&0<c&&(c=0),this.includeZero&&"undefined"===typeof this._options.maximum&&0>b&&(b=0));"axisX"===this.type&&"dateTime"===this.chart.plotInfo.axisXValueType?(e=b-c,this.intervalType||(e/1<=a?(this.interval=1,this.intervalType="millisecond"):e/2<=a?(this.interval=2,this.intervalType="millisecond"):e/5<=a?(this.interval=5,this.intervalType="millisecond"):
e/10<=a?(this.interval=10,this.intervalType="millisecond"):e/20<=a?(this.interval=20,this.intervalType="millisecond"):e/50<=a?(this.interval=50,this.intervalType="millisecond"):e/100<=a?(this.interval=100,this.intervalType="millisecond"):e/200<=a?(this.interval=200,this.intervalType="millisecond"):e/250<=a?(this.interval=250,this.intervalType="millisecond"):e/300<=a?(this.interval=300,this.intervalType="millisecond"):e/400<=a?(this.interval=400,this.intervalType="millisecond"):e/500<=a?(this.interval=
500,this.intervalType="millisecond"):e/(1*w.secondDuration)<=a?(this.interval=1,this.intervalType="second"):e/(2*w.secondDuration)<=a?(this.interval=2,this.intervalType="second"):e/(5*w.secondDuration)<=a?(this.interval=5,this.intervalType="second"):e/(10*w.secondDuration)<=a?(this.interval=10,this.intervalType="second"):e/(15*w.secondDuration)<=a?(this.interval=15,this.intervalType="second"):e/(20*w.secondDuration)<=a?(this.interval=20,this.intervalType="second"):e/(30*w.secondDuration)<=a?(this.interval=
30,this.intervalType="second"):e/(1*w.minuteDuration)<=a?(this.interval=1,this.intervalType="minute"):e/(2*w.minuteDuration)<=a?(this.interval=2,this.intervalType="minute"):e/(5*w.minuteDuration)<=a?(this.interval=5,this.intervalType="minute"):e/(10*w.minuteDuration)<=a?(this.interval=10,this.intervalType="minute"):e/(15*w.minuteDuration)<=a?(this.interval=15,this.intervalType="minute"):e/(20*w.minuteDuration)<=a?(this.interval=20,this.intervalType="minute"):e/(30*w.minuteDuration)<=a?(this.interval=
30,this.intervalType="minute"):e/(1*w.hourDuration)<=a?(this.interval=1,this.intervalType="hour"):e/(2*w.hourDuration)<=a?(this.interval=2,this.intervalType="hour"):e/(3*w.hourDuration)<=a?(this.interval=3,this.intervalType="hour"):e/(6*w.hourDuration)<=a?(this.interval=6,this.intervalType="hour"):e/(1*w.dayDuration)<=a?(this.interval=1,this.intervalType="day"):e/(2*w.dayDuration)<=a?(this.interval=2,this.intervalType="day"):e/(4*w.dayDuration)<=a?(this.interval=4,this.intervalType="day"):e/(1*w.weekDuration)<=
a?(this.interval=1,this.intervalType="week"):e/(2*w.weekDuration)<=a?(this.interval=2,this.intervalType="week"):e/(3*w.weekDuration)<=a?(this.interval=3,this.intervalType="week"):e/(1*w.monthDuration)<=a?(this.interval=1,this.intervalType="month"):e/(2*w.monthDuration)<=a?(this.interval=2,this.intervalType="month"):e/(3*w.monthDuration)<=a?(this.interval=3,this.intervalType="month"):e/(6*w.monthDuration)<=a?(this.interval=6,this.intervalType="month"):(this.interval=e/(1*w.yearDuration)<=a?1:e/(2*
w.yearDuration)<=a?2:e/(4*w.yearDuration)<=a?4:Math.floor(B.getNiceNumber(e/(a-1),!0)/w.yearDuration),this.intervalType="year")),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:c-d/2,this.maximum=this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:b+d/2,this.valueFormatString||("year"===this.intervalType?this.valueFormatString="YYYY":"month"===this.intervalType?this.valueFormatString="MMM YYYY":"week"===this.intervalType?this.valueFormatString=
"MMM DD YYYY":"day"===this.intervalType?this.valueFormatString="MMM DD YYYY":"hour"===this.intervalType?this.valueFormatString="hh:mm TT":"minute"===this.intervalType?this.valueFormatString="hh:mm TT":"second"===this.intervalType?this.valueFormatString="hh:mm:ss TT":"millisecond"===this.intervalType&&(this.valueFormatString="fff'ms'")),this.intervalStartPosition=this.getLabelStartPoint(new Date(this.minimum),this.intervalType,this.interval)):(this.intervalType="number",e=B.getNiceNumber(b-c,!1),this.interval=
this._options&&this._options.interval?this._options.interval:B.getNiceNumber(e/(a-1),!0),this.minimum=null!==this.sessionVariables.internalMinimum?this.sessionVariables.internalMinimum:Math.floor(c/this.interval)*this.interval,this.maximum=null!==this.sessionVariables.internalMaximum?this.sessionVariables.internalMaximum:Math.ceil(b/this.interval)*this.interval,"axisX"===this.type?(null===this.sessionVariables.internalMinimum&&(this.minimum=c-d/2),this.sessionVariables.internalMaximum||(this.maximum=
b+d/2),this.intervalStartPosition=Math.floor((this.minimum+0.2*this.interval)/this.interval)*this.interval):"axisY"===this.type&&(this.intervalStartPosition=this.minimum));"axisX"===this.type&&(this._absoluteMinimum=this._options&&"undefined"!==typeof this._options.minimum?this._options.minimum:this.dataInfo.min-d/2,this._absoluteMaximum=this._options&&"undefined"!==typeof this._options.maximum?this._options.maximum:this.dataInfo.max+d/2);if(!this.valueFormatString&&(this.valueFormatString="#,##0.##",
e=Math.abs(this.maximum-this.minimum),1>e&&(c=Math.floor(Math.abs(Math.log(e)/Math.LN10))+2,2<c)))for(b=0;b<c-2;b++)this.valueFormatString+="#"};B.getNiceNumber=function(a,c){var b=Math.floor(Math.log(a)/Math.LN10),d=a/Math.pow(10,b);return(c?1.5>d?1:3>d?2:7>d?5:10:1>=d?1:2>=d?2:5>=d?5:10)*Math.pow(10,b)};B.prototype.getLabelStartPoint=function(){var a=R(this.interval,this.intervalType),a=new Date(Math.floor(this.minimum/a)*a);if("millisecond"!==this.intervalType)if("second"===this.intervalType)0<
a.getMilliseconds()&&(a.setSeconds(a.getSeconds()+1),a.setMilliseconds(0));else if("minute"===this.intervalType){if(0<a.getSeconds()||0<a.getMilliseconds())a.setMinutes(a.getMinutes()+1),a.setSeconds(0),a.setMilliseconds(0)}else if("hour"===this.intervalType){if(0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setHours(a.getHours()+1),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("day"===this.intervalType){if(0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+
1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("week"===this.intervalType){if(0<a.getDay()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setDate(a.getDate()+(7-a.getDay())),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)}else if("month"===this.intervalType){if(1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())a.setMonth(a.getMonth()+1),a.setDate(1),a.setHours(0),a.setMinutes(0),
a.setSeconds(0),a.setMilliseconds(0)}else"year"===this.intervalType&&(0<a.getMonth()||1<a.getDate()||0<a.getHours()||0<a.getMinutes()||0<a.getSeconds()||0<a.getMilliseconds())&&(a.setFullYear(a.getFullYear()+1),a.setMonth(0),a.setDate(1),a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0));return a};N(L,I);L.prototype._initialize=function(){if(this.enabled){this.container=document.createElement("div");this.container.setAttribute("class","canvasjs-chart-tooltip");this.container.style.position=
"absolute";this.container.style.height="auto";this.container.style.boxShadow="1px 1px 2px 2px rgba(0,0,0,0.1)";this.container.style.zIndex="1000";this.container.style.display="none";var a;a='<div style=" width: auto;height: auto;min-width: 50px;';a+="line-height: 20px;";a+="padding: 5px;";a+="font-family: Calibri, Arial, Georgia, serif;";a+="font-weight: 400;";a+="font-style: "+(u?"italic;":"normal;");a+="font-size: 14px;";a+="color: #000000;";a+="text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";a+=
"text-align: left;";a+="border: 2px solid gray;";a+=u?"background: rgba(255,255,255,.9);":"background: rgb(255,255,255);";a+="text-indent: 0px;";a+="white-space: nowrap;";a+="border-radius: 10px;";u||(a+="filter: alpha(opacity = 90);",a+="filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");a+='} "> Sample Tooltip</div>';this.container.innerHTML=a;this.contentDiv=this.container.firstChild;this.container.style.borderRadius=this.contentDiv.style.borderRadius;
this.chart._canvasJSContainer.appendChild(this.container)}};L.prototype.mouseMoveHandler=function(a,c){this._lastUpdated&&40>(new Date).getTime()-this._lastUpdated||(this._lastUpdated=(new Date).getTime(),this._updateToolTip(a,c))};L.prototype._updateToolTip=function(a,c){if(this.enabled){if("undefined"===typeof a||"undefined"===typeof c){if(isNaN(this._prevX)||isNaN(this._prevY))return;a=this._prevX;c=this._prevY}else this._prevX=a,this._prevY=c;var b=null,d=null,e=[],g=0;if(this.shared&&"none"!==
this.chart.plotInfo.axisPlacement){g="xySwapped"===this.chart.plotInfo.axisPlacement?(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.height*(this.chart.axisX.lineCoordinates.y2-c)+this.chart.axisX.minimum:(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum;b=[];for(d=0;d<this.chart.data.length;d++){var f=this.chart.data[d].getDataPointAtX(g,!0);f&&0<=f.index&&
(f.dataSeries=this.chart.data[d],b.push(f))}if(0===b.length)return;b.sort(function(a,b){return a.distance-b.distance});g=b[0];for(d=0;d<b.length;d++)b[d].dataPoint.x.valueOf()===g.dataPoint.x.valueOf()&&e.push(b[d]);b=null}else if((f=this.chart.getDataPointAtXY(a,c,!0))?(this.currentDataPointIndex=f.dataPointIndex,this.currentSeriesIndex=f.dataSeries.index):u?(f=ka(a,c,this.chart._eventManager.ghostCtx),0<f&&"undefined"!==typeof this.chart._eventManager.objectMap[f]?(eventObject=this.chart._eventManager.objectMap[f],
this.currentSeriesIndex=eventObject.dataSeriesIndex,this.currentDataPointIndex=0<=eventObject.dataPointIndex?eventObject.dataPointIndex:-1):this.currentDataPointIndex=-1):this.currentDataPointIndex=-1,0<=this.currentSeriesIndex){d=this.chart.data[this.currentSeriesIndex];f={};if(0<=this.currentDataPointIndex)b=d.dataPoints[this.currentDataPointIndex],f.dataSeries=d,f.dataPoint=b,f.index=this.currentDataPointIndex,f.distance=Math.abs(b.x-g);else if("line"===d.type||"stepLine"===d.type||"spline"===
d.type||"area"===d.type||"stepArea"===d.type||"splineArea"===d.type||"stackedArea"===d.type||"stackedArea100"===d.type)g=(this.chart.axisX.maximum-this.chart.axisX.minimum)/this.chart.axisX.lineCoordinates.width*(a-this.chart.axisX.lineCoordinates.x1)+this.chart.axisX.minimum.valueOf(),f=d.getDataPointAtX(g,!0),f.dataSeries=d,this.currentDataPointIndex=f.index,b=f.dataPoint;else return;e.push(f)}if(0<e.length){this.highlightObjects(e);g="";g=this.getToolTipInnerHTML({entries:e});this.contentDiv.innerHTML=
g;this.contentDiv.innerHTML=g;g=!1;"none"===this.container.style.display&&(g=!0,this.container.style.display="block");try{this.contentDiv.style.borderRightColor=this.contentDiv.style.borderLeftColor=this.contentDiv.style.borderColor=this.borderColor?this.borderColor:e[0].dataPoint.color?e[0].dataPoint.color:e[0].dataSeries.color?e[0].dataSeries.color:e[0].dataSeries._colorSet[e[0].index%e[0].dataSeries._colorSet.length]}catch(k){}"pie"===e[0].dataSeries.type||"doughnut"===e[0].dataSeries.type||"bar"===
e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?toolTipLeft=a-10-this.container.clientWidth:(toolTipLeft=this.chart.axisX.lineCoordinates.width/Math.abs(this.chart.axisX.maximum-this.chart.axisX.minimum)*Math.abs(e[0].dataPoint.x-this.chart.axisX.minimum)+this.chart.axisX.lineCoordinates.x1+0.5-this.container.clientWidth<<0,toolTipLeft-=10);toolTipLeft=0<toolTipLeft?toolTipLeft+"px":toolTipLeft+this.container.clientWidth+20+"px";e=1!==e.length||this.shared||
"line"!==e[0].dataSeries.type&&"stepLine"!==e[0].dataSeries.type&&"spline"!==e[0].dataSeries.type&&"area"!==e[0].dataSeries.type&&"stepArea"!==e[0].dataSeries.type&&"splineArea"!==e[0].dataSeries.type&&"stackedArea"!==e[0].dataSeries.type&&"stackedArea100"!==e[0].dataSeries.type?"bar"===e[0].dataSeries.type||"stackedBar"===e[0].dataSeries.type||"stackedBar100"===e[0].dataSeries.type?e[0].dataSeries.axisX.lineCoordinates.y2-e[0].dataSeries.axisX.lineCoordinates.height/Math.abs(e[0].dataSeries.axisX.maximum-
e[0].dataSeries.axisX.minimum)*Math.abs(e[0].dataPoint.x-e[0].dataSeries.axisX.minimum)+0.5<<0:c:e[0].dataSeries.axisY.lineCoordinates.y2-e[0].dataSeries.axisY.lineCoordinates.height/Math.abs(e[0].dataSeries.axisY.maximum-e[0].dataSeries.axisY.minimum)*Math.abs(e[0].dataPoint.y-e[0].dataSeries.axisY.minimum)+0.5<<0;e=-e+10;0<e+this.container.clientHeight+5&&(e-=e+this.container.clientHeight+5-0);this.container.style.left=toolTipLeft;this.container.style.bottom=e+"px";!this.animationEnabled||g?this.disableAnimation():
this.enableAnimation()}}};L.prototype.highlightObjects=function(a){if(this.enabled){var c=this.chart.overlaidCanvasCtx;this.chart.resetOverlayedCanvas();c.save();var b=this.chart.plotArea;c.rect(b.x1,b.y1,b.width,b.height);c.clip();c.beginPath();for(b=0;b<a.length;b++){var d=a[b];if((d=this.chart._eventManager.objectMap[d.dataSeries.dataPointIds[d.index]])&&d.objectType&&"dataPoint"===d.objectType){var e=this.chart.data[d.dataSeriesIndex],g=d.dataPointIndex;if("line"===e.type||"stepLine"===e.type||
"spline"===e.type||"scatter"===e.type||"area"===e.type||"stepArea"===e.type||"splineArea"===e.type||"stackedArea"===e.type||"stackedArea100"===e.type)e=e.getMarkerProperties(g,d.x1,d.y1,this.chart.overlaidCanvasCtx),e.size=Math.max(1.5*e.size<<0,10),e.borderColor=e.borderColor||"#FFFFFF",e.borderThickness=e.borderThickness||Math.ceil(0.1*e.size),H.drawMarkers([e]);else if("bubble"===e.type)e=e.getMarkerProperties(g,d.x1,d.y1,this.chart.overlaidCanvasCtx),e.size=d.size,e.color="white",e.borderColor=
"white",c.globalAlpha=0.3,H.drawMarkers([e]),c.globalAlpha=1;else if("column"===e.type||"stackedColumn"===e.type||"stackedColumn100"===e.type||"bar"===e.type||"stackedBar"===e.type||"stackedBar100"===e.type)c.globalAlpha=0.3,J(c,d.x1,d.y1,d.x2,d.y2,"white",!1,!1,!1,!1),c.globalAlpha=1;else if("pie"===e.type||"doughnut"===e.type)c.globalAlpha=0.3,ga(c,d.center,d.radius,"white",e.type,d.startAngle,d.endAngle),c.globalAlpha=1}}c.globalAlpha=1;c.restore()}};L.prototype.getToolTipInnerHTML=function(a){a=
a.entries;for(var c="",b=null,d=null,e=0,g="",f=!0,k=0;k<a.length;k++)if(a[k].dataSeries.toolTipContent||a[k].dataPoint.toolTipContent){f=!1;break}if(f&&this.content&&"function"===typeof this.content)c=this.content({entries:a});else if(1<a.length)for(k=0;k<a.length;k++){b=a[k].dataSeries;d=a[k].dataPoint;e=a[k].index;g="";0===k&&(f&&!this.content)&&(g+="undefined"!==typeof this.chart.axisX.labels[d.x]?this.chart.axisX.labels[d.x]:"{x}",g+="</br>");if("line"===b.type||"stepLine"===b.type||"spline"===
b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)g+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)g+=
d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===b.type||"doughnut"===b.type)g+=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"&nbsp;&nbsp;{y}";c+=this.chart.replaceKeywordsWithValue(g,d,b,e);k<a.length-1&&(c+="</br>")}else{b=a[0].dataSeries;
d=a[0].dataPoint;e=a[0].index;if("line"===b.type||"stepLine"===b.type||"spline"===b.type||"area"===b.type||"stepArea"===b.type||"splineArea"===b.type||"column"===b.type||"bar"===b.type||"scatter"===b.type||"stackedColumn"===b.type||"stackedColumn100"===b.type||"stackedBar"===b.type||"stackedBar100"===b.type||"stackedArea"===b.type||"stackedArea100"===b.type)g=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+
(d.label?"{label}":"{x}")+" :</span>&nbsp;&nbsp;{y}";else if("bubble"===b.type)g=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:"<span style='\"'color:{color};'\"'>"+(d.label?"{label}":"{x}")+":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}";else if("pie"===b.type||"doughnut"===b.type)g=d.toolTipContent?d.toolTipContent:b.toolTipContent?b.toolTipContent:this.content&&"function"!==typeof this.content?this.content:(d.name?"{name}:&nbsp;&nbsp;":
d.label?"{label}:&nbsp;&nbsp;":"")+"{y}";c+=this.chart.replaceKeywordsWithValue(g,d,b,e)}return c};L.prototype.enableAnimation=function(){this.container.style.WebkitTransition||(this.container.style.WebkitTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MozTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.MsTransition="left .2s ease-out, bottom .2s ease-out",this.container.style.transition="left .2s ease-out, bottom .2s ease-out")};L.prototype.disableAnimation=
function(){this.container.style.WebkitTransition&&(this.container.style.WebkitTransition="",this.container.style.MozTransition="",this.container.style.MsTransition="",this.container.style.transition="")};L.prototype.hide=function(){this.enabled&&(this.container.style.display="none",this.currentSeriesIndex=-1,this._prevY=this._prevX=NaN,this.chart.resetOverlayedCanvas())};x.prototype.replaceKeywordsWithValue=function(a,c,b,d){var e=this;return a.replace(/\{\s*[a-zA-Z]+\s*\}|"[^"]*"|'[^']*'/g,function(a){if('"'===
a[0]&&'"'===a[a.length-1]||"'"===a[0]&&"'"===a[a.length-1])return a.slice(1,a.length-1);a=aa(a.slice(1,a.length-1));var f=null;if("color"===a)return c.color?c.color:b.color?b.color:b._colorSet[d%b._colorSet.length];if(c.hasOwnProperty(a))f=c;else if(b.hasOwnProperty(a))f=b;else return"";return"x"===a?e.axisX&&"dateTime"===e.plotInfo.axisXValueType?qa(f[a],c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:e.axisX&&e.axisX.valueFormatString?e.axisX.valueFormatString:
"DD MMM YY",e._cultureInfo):fa(f[a],c.xValueFormatString?c.xValueFormatString:b.xValueFormatString?b.xValueFormatString:"#,##0.########",e._cultureInfo):"y"===a?fa(f[a],c.yValueFormatString?c.yValueFormatString:b.yValueFormatString?b.yValueFormatString:"#,##0.########",e._cultureInfo):f[a]})};Z.prototype.reset=function(){this.lastObjectId=0;this.objectMap=[];this.rectangularRegionEventSubscriptions=[];this.previousDataPointEventObject=null;u&&(this.ghostCtx.clearRect(0,0,this.chart.width,this.chart.height),
this.ghostCtx.beginPath())};Z.prototype.getNewObjectTrackingId=function(){return++this.lastObjectId};Z.prototype.mouseEventHandler=function(a){if("mousemove"===a.type||"click"===a.type){var c=null,b=null,d=null,e=-1,g=!1,f=!1,k=ra(a),d=b=null;(d=this.chart.getDataPointAtXY(k.x,k.y,!1))?b=d.dataSeries.dataPointIds[d.dataPointIndex]:u&&(b=ka(k.x,k.y,this.ghostCtx));d=this.chart.plotArea;if(b&&k.x>d.x1&&k.x<d.x2&&k.y>d.y1&&k.y<d.y2)if("undefined"!==typeof this.objectMap[b]&&"dataPoint"===this.objectMap[b].objectType){c=
this.objectMap[b];b=this.chart.data[c.dataSeriesIndex];d=b.dataPoints[c.dataPointIndex];e=c.dataPointIndex;if(null===this.previousDataPointEventObject||this.previousDataPointEventObject.dataSeriesIndex!==c.dataSeriesIndex||this.previousDataPointEventObject.dataPointIndex!==c.dataPointIndex)this.previousDataPointEventObject&&(g=!0),d.mouseover&&d.mouseover.call(d,{x:k.x,y:k.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),!b.mouseover||null!==this.previousDataPointEventObject&&this.previousDataPointEventObject.dataSeriesIndex===
c.dataSeriesIndex||(b.mouseover&&b.mouseover.call(b,{x:k.x,y:k.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),this.previousDataPointEventObject&&(f=!0));"mousemove"===a.type?(d.cursor&&d.cursor!==a.target.style.cursor?a.target.style.cursor=d.cursor:b.cursor&&b.cursor!==a.target.style.cursor&&(a.target.style.cursor=b.cursor),d.mousemove&&d.mousemove.call(d,{x:k.x,y:k.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),b.mousemove&&b.mousemove.call(b,{x:k.x,y:k.y,dataPoint:d,dataSeries:b,dataPointIndex:e})):
"click"===a.type&&5>Math.sqrt(Math.pow(this.chart.dragStartPoint.x-k.x,2)+Math.pow(this.chart.dragStartPoint.y-k.y,2))&&(d.click&&d.click.call(d,{x:k.x,y:k.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),b.click&&b.click.call(b,{x:k.x,y:k.y,dataPoint:d,dataSeries:b,dataPointIndex:e}),this.chart.pieDoughnutClickHandler&&this.chart.pieDoughnutClickHandler.call(b,{x:k.x,y:k.y,dataPoint:d,dataSeries:b,dataPointIndex:e}))}else this.previousDataPointEventObject&&(f=g=!0);else this.previousDataPointEventObject&&
(f=g=!0);if(g||f)a.target.style.cursor=this.chart._defaultCursor,a=this.chart.data[this.previousDataPointEventObject.dataSeriesIndex],b=a.dataPoints[this.previousDataPointEventObject.dataPointIndex],d=this.previousDataPointEventObject.dataPointIndex,g&&b.mouseout&&b.mouseout.call(b,{x:k.x,y:k.y,dataPoint:b,dataSeries:a,dataPointIndex:d}),f&&a.mouseout&&a.mouseout.call(a,{x:k.x,y:k.y,dataPoint:b,dataSeries:a,dataPointIndex:d});this.previousDataPointEventObject=c}};N(oa,I);var H={drawMarker:function(a,
c,b,d,e,g,f,k){if(b){var m=1;b.fillStyle=g?g:"#000000";b.strokeStyle=f?f:"#000000";b.lineWidth=k?k:0;"circle"===d?(b.moveTo(a,c),b.beginPath(),b.arc(a,c,e/2,0,2*Math.PI,!1),g&&b.fill(),k&&(f?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m))):"square"===d?(b.beginPath(),b.rect(a-e/2,c-e/2,e,e),g&&b.fill(),k&&(f?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m))):"triangle"===d?(b.beginPath(),b.moveTo(a-e/
2,c+e/2),b.lineTo(a+e/2,c+e/2),b.lineTo(a,c-e/2),b.closePath(),g&&b.fill(),k&&(f?b.stroke():(m=b.globalAlpha,b.globalAlpha=0.15,b.strokeStyle="black",b.stroke(),b.globalAlpha=m)),b.beginPath()):"cross"===d&&(b.strokeStyle=g,b.lineWidth=e/4,b.beginPath(),b.moveTo(a-e/2,c-e/2),b.lineTo(a+e/2,c+e/2),b.stroke(),b.moveTo(a+e/2,c-e/2),b.lineTo(a-e/2,c+e/2),b.stroke())}},drawMarkers:function(a){for(var c=0;c<a.length;c++){var b=a[c];H.drawMarker(b.x,b.y,b.ctx,b.type,b.size,b.color,b.borderColor,b.borderThickness)}}},
sa={Chart:function(a,c){var b=new x(a,c,this);this.render=function(){b.render()};this.options=b._options},addColorSet:function(a,c){U[a]=c},addCultureInfo:function(a,c){ea[a]=c}};sa.Chart.version="1.3.0 GA";window.CanvasJS=sa})();
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

/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('sifter', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(data[fields[0]], token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(data[fields[i]], token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field  = function(name, result) {
			if (name === '$score') return result.score;
			return self.items[result.id][name];
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = String(a || '').toLowerCase();
		b = String(b || '').toLowerCase();
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || ($ && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aÀÁÂÃÄÅàáâãäåĀā]',
		'c': '[cÇçćĆčČ]',
		'd': '[dđĐďĎ]',
		'e': '[eÈÉÊËèéêëěĚĒē]',
		'i': '[iÌÍÎÏìíîïĪī]',
		'n': '[nÑñňŇ]',
		'o': '[oÒÓÔÕÕÖØòóôõöøŌō]',
		'r': '[rřŘ]',
		's': '[sŠš]',
		't': '[tťŤ]',
		'u': '[uÙÚÛÜùúûüůŮŪū]',
		'y': '[yŸÿýÝ]',
		'z': '[zŽž]'
	};

	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('microplugin', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/**
 * selectize.js (v0.11.2)
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('selectize', ['jquery','sifter','microplugin'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
	} else {
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
	}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
	
		var highlight = function(node) {
			var skip = 0;
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};
	
		return $element.each(function() {
			highlight(this);
		});
	};
	
	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];
	
			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};
	
	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};
	
	var IS_MAC        = /Mac/.test(navigator.userAgent);
	
	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;
	
	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;
	
	
	var isset = function(object) {
		return typeof object !== 'undefined';
	};
	
	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return null;
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};
	
	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};
	
	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};
	
	var hook = {};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};
	
	/**
	 * Builds a hash table out of an array of
	 * objects, using the specified `key` within
	 * each object.
	 *
	 * @param {string} key
	 * @param {mixed} objects
	 */
	var build_hash_table = function(key, objects) {
		if (!$.isArray(objects)) return objects;
		var i, n, table = {};
		for (i = 0, n = objects.length; i < n; i++) {
			if (objects[i].hasOwnProperty(key)) {
				table[objects[i][key]] = objects[i];
			}
		}
		return table;
	};
	
	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};
	
	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};
	
		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};
	
		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;
	
		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};
	
	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};
	
	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};
	
	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};
	
	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}
	
		var $test = $('<test>').css({
			position: 'absolute',
			top: -99999,
			left: -99999,
			width: 'auto',
			padding: 0,
			whiteSpace: 'pre'
		}).text(str).appendTo('body');
	
		transferStyles($parent, $test, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);
	
		var width = $test.width();
		$test.remove();
	
		return width;
	};
	
	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;
	
		var update = function(e, options) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
			options = options || {};
	
			if (e.metaKey || e.altKey) return;
			if (!options.force && $input.data('grow') === false) return;
	
			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
					(keyCode >= 97 && keyCode <= 122) || // a-z
					(keyCode >= 65 && keyCode <= 90)  || // A-Z
					(keyCode >= 48 && keyCode <= 57)  || // 0-9
					keyCode === 32 // space
				);
	
				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}
	
			placeholder = $input.attr('placeholder');
			if (!value && placeholder) {
				value = placeholder;
			}
	
			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};
	
		$input.on('keydown keyup update blur', update);
		update();
	};
	
	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;
	
		// detect rtl environment
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';
	
		// setup default state
		$.extend(self, {
			settings         : settings,
			$input           : $input,
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),
	
			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreBlur       : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},
	
			$activeOption    : null,
			$activeItems     : [],
	
			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});
	
		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
	
		// build options table
		$.extend(self.options, build_hash_table(settings.valueField, settings.options));
		delete self.settings.options;
	
		// build optgroup table
		$.extend(self.optgroups, build_hash_table(settings.optgroupValueField, settings.optgroups));
		delete self.settings.optgroups;
	
		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}
	
		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};
	
	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	MicroEvent.mixin(Selectize);
	MicroPlugin.mixin(Selectize);
	
	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	$.extend(Selectize.prototype, {
	
		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
			var $input    = self.$input;
	
			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var tab_index;
			var classes;
			var classes_plugins;
	
			inputMode         = self.settings.mode;
			tab_index         = $input.attr('tabindex') || '';
			classes           = $input.attr('class') || '';
	
			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', tab_index);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
	
			if(self.settings.copyClassesToDropdown) {
				$dropdown.addClass(classes);
			}
	
			$wrapper.css({
				width: $input[0].style.width
			});
	
			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}
	
			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				$input.attr('multiple', 'multiple');
			}
	
			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}
	
			if ($input.attr('autocorrect')) {
				$control_input.attr('autocorrect', $input.attr('autocorrect'));
			}
	
			if ($input.attr('autocapitalize')) {
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
			}
	
			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;
	
			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);
	
			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});
	
			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
				paste     : function() { return self.onPaste.apply(self, arguments); }
			});
	
			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});
	
			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});
	
			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur();
					}
				}
			});
	
			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});
	
			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : $input.children().detach(),
				tabindex  : $input.attr('tabindex')
			};
	
			$input.attr('tabindex', -1).hide().after(self.$wrapper);
	
			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}
	
			// feature detect for the validation API
			if ($input[0].validity) {
				$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}
	
			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;
	
			if ($input.is(':disabled')) {
				self.disable();
			}
	
			self.on('change', this.onChange);
	
			$input.data('selectize', self);
			$input.addClass('selectized');
			self.trigger('initialize');
	
			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}
	
		},
	
		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;
	
			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};
	
			self.settings.render = $.extend({}, templates, self.settings.render);
		},
	
		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'     : 'onInitialize',
				'change'         : 'onChange',
				'item_add'       : 'onItemAdd',
				'item_remove'    : 'onItemRemove',
				'clear'          : 'onClear',
				'option_add'     : 'onOptionAdd',
				'option_remove'  : 'onOptionRemove',
				'option_clear'   : 'onOptionClear',
				'dropdown_open'  : 'onDropdownOpen',
				'dropdown_close' : 'onDropdownClose',
				'type'           : 'onType',
				'load'           : 'onLoad'
			};
	
			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;
	
			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
			if (!self.isFocused) {
				self.focus();
				e.preventDefault();
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);
	
			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},
	
		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},
	
	
		/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onPaste: function(e) {
			var self = this;
			if (self.isFull() || self.isInputHidden || self.isLocked) {
				e.preventDefault();
			}
		},
	
		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},
	
		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;
	
			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}
	
			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					self.close();
					return;
				case KEY_N:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
					}
					e.preventDefault();
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
						e.preventDefault();
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}
	
			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
				e.preventDefault();
				return;
			}
		},
	
		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;
	
			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},
	
		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadDelay` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},
	
		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
	
			self.isFocused = true;
			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}
	
			if (self.ignoreFocus) return;
			if (self.settings.preload === 'focus') self.onSearchChange('');
	
			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}
	
			self.refreshState();
		},
	
		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onBlur: function(e) {
			var self = this;
			self.isFocused = false;
			if (self.ignoreFocus) return;
	
			// necessary to prevent IE closing the dropdown when the scrollbar is clicked
			if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
				self.ignoreBlur = true;
				self.onFocus(e);
	
				return;
			}
	
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(false);
			}
	
			self.close();
			self.setTextboxValue('');
			self.setActiveItem(null);
			self.setActiveOption(null);
			self.setCaret(self.items.length);
			self.refreshState();
		},
	
		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},
	
		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;
	
			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}
	
			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem();
			} else {
				value = $target.attr('data-value');
				if (typeof value !== 'undefined') {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},
	
		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;
	
			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},
	
		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass('loading');
	
			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass('loading');
				}
				self.trigger('load', results);
			}]);
		},
	
		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			var $input = this.$control_input;
			var changed = $input.val() !== value;
			if (changed) {
				$input.val(value).triggerHandler('update');
				this.lastValue = value;
			}
		},
	
		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},
	
		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value) {
			debounce_events(this, ['change'], function() {
				this.clear();
				this.addItems(value);
			});
		},
	
		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;
	
			if (self.settings.mode === 'single') return;
			$item = $($item);
	
			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}
	
			// modify selection
			eventName = e && e.type.toLowerCase();
	
			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}
	
			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},
	
		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;
	
			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;
	
			$option = $($option);
			if (!$option.length) return;
	
			self.$activeOption = $option.addClass('active');
	
			if (scroll || !isset(scroll)) {
	
				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;
	
				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}
	
			}
		},
	
		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;
	
			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},
	
		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;
	
			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},
	
		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},
	
		/**
		 * Gives the control focus. If "trigger" is falsy,
		 * focus handlers won't be fired--causing the focus
		 * to happen silently in the background.
		 *
		 * @param {boolean} trigger
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;
	
			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},
	
		/**
		 * Forces the control out of focus.
		 */
		blur: function() {
			this.$control_input.trigger('blur');
		},
	
		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},
	
		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = {field: sort};
			}
	
			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort
			};
		},
	
		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();
	
			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}
	
			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}
	
			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}
	
			return result;
		},
	
		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var self              = this;
			var query             = $.trim(self.$control_input.val());
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
	
			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}
	
			// render and group available options individually
			groups = {};
	
			if (self.settings.optgroupOrder) {
				groups_order = self.settings.optgroupOrder;
				for (i = 0; i < groups_order.length; i++) {
					groups[groups_order[i]] = [];
				}
			} else {
				groups_order = [];
			}
	
			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
	
				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = [];
						groups_order.push(optgroup);
					}
					groups[optgroup].push(option_html);
				}
			}
	
			// render optgroup headers & join groups
			html = [];
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = self.render('optgroup_header', self.optgroups[optgroup]) || '';
					html_children += groups[optgroup].join('');
					html.push(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: html_children
					})));
				} else {
					html.push(groups[optgroup].join(''));
				}
			}
	
			$dropdown_content.html(html.join(''));
	
			// highlight matching terms inline
			if (self.settings.highlight && results.query.length && results.tokens.length) {
				for (i = 0, n = results.tokens.length; i < n; i++) {
					highlight($dropdown_content, results.tokens[i].regex);
				}
			}
	
			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}
	
			// add create option
			has_create_option = self.canCreate(query);
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}
	
			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},
	
		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object} data
		 */
		addOption: function(data) {
			var i, n, optgroup, value, self = this;
	
			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}
	
			value = hash_key(data[self.settings.valueField]);
			if (typeof value !== 'string' || self.options.hasOwnProperty(value)) return;
	
			self.userOptions[value] = true;
			self.options[value] = data;
			self.lastQuery = null;
			self.trigger('option_add', value, data);
		},
	
		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			this.optgroups[id] = data;
			this.trigger('optgroup_add', id, data);
		},
	
		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options;
	
			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);
	
			// sanity checks
			if (value === null) return;
			if (!self.options.hasOwnProperty(value)) return;
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
	
			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			self.options[value_new] = data;
	
			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];
	
			if (cache_items) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (cache_options) {
				delete cache_options[value];
				delete cache_options[value_new];
			}
	
			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}
	
			//invalidate last query because we might have updated the sortField
			self.lastQuery = null;
	
			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},
	
		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 */
		removeOption: function(value) {
			var self = this;
			value = hash_key(value);
	
			var cache_items = self.renderCache['item'];
			var cache_options = self.renderCache['option'];
			if (cache_items) delete cache_items[value];
			if (cache_options) delete cache_options[value];
	
			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value);
		},
	
		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;
	
			self.loadedSearches = {};
			self.userOptions = {};
			self.renderCache = {};
			self.options = self.sifter.items = {};
			self.lastQuery = null;
			self.trigger('option_clear');
			self.clear();
		},
	
		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},
	
		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},
	
		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);
	
			if (typeof value !== 'undefined' && value !== null) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}
	
			return $();
		},
	
		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},
	
		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 */
		addItems: function(values) {
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i]);
			}
		},
	
		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 */
		addItem: function(value) {
			debounce_events(this, ['change'], function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next, wasFull;
				value = hash_key(value);
	
				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}
	
				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear();
				if (inputMode === 'multi' && self.isFull()) return;
	
				$item = $(self.render('item', self.options[value]));
				wasFull = self.isFull();
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				if (!self.isPending || (!wasFull && self.isFull())) {
					self.refreshState();
				}
	
				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');
	
					// update menu / remove the option (if this is not one item being added as part of series)
					if (!self.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}
	
					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || self.isFull()) {
						self.close();
					} else {
						self.positionDropdown();
					}
	
					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
					self.updateOriginalInput();
				}
			});
		},
	
		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value) {
			var self = this;
			var $item, i, idx;
	
			$item = (typeof value === 'object') ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);
	
			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}
	
				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value);
				}
	
				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}
	
				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput();
				self.positionDropdown();
				self.trigger('item_remove', value);
			}
		},
	
		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @return {boolean}
		 */
		createItem: function(triggerDropdown) {
			var self  = this;
			var input = $.trim(self.$control_input.val() || '');
			var caret = self.caretPos;
			if (!self.canCreate(input)) return false;
			self.lock();
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};
	
			var create = once(function(data) {
				self.unlock();
	
				if (!data || typeof data !== 'object') return;
				var value = hash_key(data[self.settings.valueField]);
				if (typeof value !== 'string') return;
	
				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
			});
	
			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}
	
			return true;
		},
	
		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;
	
			if (this.isSetup) {
				for (var i = 0; i < this.items.length; i++) {
					this.addItem(this.items);
				}
			}
	
			this.refreshState();
			this.updateOriginalInput();
		},
	
		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			var invalid, self = this;
			if (self.isRequired) {
				if (self.items.length) self.isInvalid = false;
				self.$control_input.prop('required', invalid);
			}
			self.refreshClasses();
		},
	
		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;
	
			self.$wrapper
				.toggleClass('rtl', self.rtl);
	
			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);
	
			self.$control_input.data('grow', !isFull && !isLocked);
		},
	
		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},
	
		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function() {
			var i, n, options, self = this;
	
			if (self.tagType === TAG_SELECT) {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected"></option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
				self.$input.attr('value',self.$input.val());
			}
	
			if (self.isSetup) {
				self.trigger('change', self.$input.val());
			}
		},
	
		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;
	
			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update', {force: true});
		},
	
		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;
	
			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},
	
		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;
	
			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
			}
	
			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();
	
			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},
	
		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);
	
			this.$dropdown.css({
				width : $control.outerWidth(),
				top   : offset.top,
				left  : offset.left
			});
		},
	
		/**
		 * Resets / clears all selected items
		 * from the control.
		 */
		clear: function() {
			var self = this;
	
			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.lastQuery = null;
			self.setCaret(0);
			self.setActiveItem(null);
			self.updatePlaceholder();
			self.updateOriginalInput();
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},
	
		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			if (caret === 0) {
				this.$control.prepend($el);
			} else {
				$(this.$control[0].childNodes[caret]).before($el);
			}
			this.setCaret(caret + 1);
		},
	
		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;
	
			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);
	
			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}
	
			// determine items that will be removed
			values = [];
	
			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }
	
				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}
	
			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}
	
			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}
	
			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);
	
			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}
	
			return true;
		},
	
		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;
	
			if (direction === 0) return;
			if (self.rtl) direction *= -1;
	
			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);
	
			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;
	
				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},
	
		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;
	
			if (direction === 0) return;
	
			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},
	
		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;
	
			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}
	
			if(!self.isPending) {
				// the input must be moved by leaving it in place and moving the
				// siblings, due to the fact that focus cannot be restored once lost
				// on mobile webkit devices
				var j, n, fn, $children, $child;
				$children = self.$control.children(':not(input)');
				for (j = 0, n = $children.length; j < n; j++) {
					$child = $($children[j]).detach();
					if (j <  i) {
						self.$control_input.before($child);
					} else {
						self.$control.append($child);
					}
				}
			}
	
			self.caretPos = i;
		},
	
		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},
	
		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},
	
		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.isDisabled = true;
			self.lock();
		},
	
		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.isDisabled = false;
			self.unlock();
		},
	
		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;
	
			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();
	
			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.removeClass('selectized')
				.attr({tabindex: revertSettings.tabindex})
				.show();
	
			self.$control_input.removeData('grow');
			self.$input.removeData('selectize');
	
			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);
	
			delete self.$input[0].selectize;
		},
	
		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
	
			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}
	
			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}
	
			// render markup
			html = self.settings.render[templateName].apply(this, [data, escape_html]);
	
			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				html = html.replace(regex_tag, '<$1 data-selectable');
			}
			if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html = html.replace(regex_tag, '<$1 data-group="' + escape_replace(escape_html(id)) + '"');
			}
			if (templateName === 'option' || templateName === 'item') {
				html = html.replace(regex_tag, '<$1 data-value="' + escape_replace(escape_html(value || '')) + '"');
			}
	
			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html;
			}
	
			return html;
		},
	
		/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */
		clearCache: function(templateName) {
			var self = this;
			if (typeof templateName === 'undefined') {
				self.renderCache = {};
			} else {
				delete self.renderCache[templateName];
			}
		},
	
		/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */
		canCreate: function(input) {
			var self = this;
			if (!self.settings.create) return false;
			var filter = self.settings.createFilter;
			return input.length
				&& (typeof filter !== 'function' || filter.apply(self, [input]))
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))
				&& (!(filter instanceof RegExp) || filter.test(input));
		}
	
	});
	
	
	Selectize.count = 0;
	Selectize.defaults = {
		plugins: [],
		delimiter: ',',
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		createFilter: null,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		selectOnTab: false,
		preload: false,
		allowEmptyOption: false,
	
		scrollDuration: 60,
		loadThrottle: 300,
	
		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		optgroupOrder: null,
	
		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',
	
		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',
	
		dropdownParent: null,
	
		copyClassesToDropdown: true,
	
		/*
		load            : null, // function(query, callback) { ... }
		score           : null, // function(search) { ... }
		onInitialize    : null, // function() { ... }
		onChange        : null, // function(value) { ... }
		onItemAdd       : null, // function(value, $item) { ... }
		onItemRemove    : null, // function(value) { ... }
		onClear         : null, // function() { ... }
		onOptionAdd     : null, // function(value, data) { ... }
		onOptionRemove  : null, // function(value) { ... }
		onOptionClear   : null, // function() { ... }
		onDropdownOpen  : null, // function($dropdown) { ... }
		onDropdownClose : null, // function($dropdown) { ... }
		onType          : null, // function(str) { ... }
		onDelete        : null, // function(values) { ... }
		*/
	
		render: {
			/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/
		}
	};
	
	
	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;
	
		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option, value = $.trim($input.val() || '');
			if (!settings.allowEmptyOption && !value.length) return;
	
			values = value.split(settings.delimiter);
			for (i = 0, n = values.length; i < n; i++) {
				option = {};
				option[field_label] = values[i];
				option[field_value] = values[i];
	
				settings_element.options[values[i]] = option;
			}
	
			settings_element.items = values;
		};
	
		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;
	
			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};
	
			var addOption = function($option, group) {
				var value, option;
	
				$option = $($option);
	
				value = $option.attr('value') || '';
				if (!value.length && !settings.allowEmptyOption) return;
	
				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (options.hasOwnProperty(value)) {
					if (group) {
						if (!options[value].optgroup) {
							options[value].optgroup = group;
						} else if (!$.isArray(options[value].optgroup)) {
							options[value].optgroup = [options[value].optgroup, group];
						} else {
							options[value].optgroup.push(group);
						}
					}
					return;
				}
	
				option                 = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_optgroup] = option[field_optgroup] || group;
	
				option.$order = ++order;
				options[value] = option;
	
				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};
	
			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;
	
				$optgroup = $($optgroup);
				id = $optgroup.attr('label');
	
				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					settings_element.optgroups[id] = optgroup;
				}
	
				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};
	
			settings_element.maxItems = $input.attr('multiple') ? null : 1;
	
			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};
	
		return this.each(function() {
			if (this.selectize) return;
	
			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
			if (!placeholder && !settings.allowEmptyOption) {
				placeholder = $input.children('option[value=""]').text();
			}
	
			var settings_element = {
				'placeholder' : placeholder,
				'options'     : {},
				'optgroups'   : {},
				'items'       : []
			};
	
			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}
	
			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
		});
	};
	
	$.fn.selectize.defaults = Selectize.defaults;
	
	
	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;
	
		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();
	
		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);
	
				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();
	
	});
	
	Selectize.define('dropdown_header', function(options) {
		var self = this;
	
		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',
	
			html: function(data) {
				return (
					'<div class="' + data.headerClass + '">' +
						'<div class="' + data.titleRowClass + '">' +
							'<span class="' + data.labelClass + '">' + data.title + '</span>' +
							'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
						'</div>' +
					'</div>'
				);
			}
		}, options);
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();
	
	});
	
	Selectize.define('optgroup_columns', function(options) {
		var self = this;
	
		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);
	
		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;
	
				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);
	
					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}
	
					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}
	
				return original.apply(this, arguments);
			};
		})();
	
		var getScrollbarWidth = function() {
			var div;
			var width = getScrollbarWidth.width;
			var doc = document;
	
			if (typeof width === 'undefined') {
				div = doc.createElement('div');
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;
				doc.body.appendChild(div);
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
				doc.body.removeChild(div);
			}
			return width;
		};
	
		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;
	
			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;
	
			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}
	
			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};
	
		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}
	
	
	});
	
	Selectize.define('remove_button', function(options) {
		if (this.settings.mode === 'single') return;
	
		options = $.extend({
			label     : '&times;',
			title     : 'Remove',
			className : 'remove',
			append    : true
		}, options);
	
		var self = this;
		var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
		/**
		 * Appends an element as a child (with raw HTML).
		 *
		 * @param {string} html_container
		 * @param {string} html_element
		 * @return {string}
		 */
		var append = function(html_container, html_element) {
			var pos = html_container.search(/(<\/[^>]+>\s*)$/);
			return html_container.substring(0, pos) + html_element + html_container.substring(pos);
		};
	
		this.setup = (function() {
			var original = self.setup;
			return function() {
				// override the item rendering method to add the button to each
				if (options.append) {
					var render_item = self.settings.render.item;
					self.settings.render.item = function(data) {
						return append(render_item.apply(this, arguments), html);
					};
				}
	
				original.apply(this, arguments);
	
				// add event listener
				this.$control.on('click', '.' + options.className, function(e) {
					e.preventDefault();
					if (self.isLocked) return;
	
					var $item = $(e.currentTarget).parent();
					self.setActiveItem($item);
					if (self.deleteSelection()) {
						self.setCaret(self.items.length);
					}
				});
	
			};
		})();
	
	});
	
	Selectize.define('restore_on_backspace', function(options) {
		var self = this;
	
		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};
	
		this.onKeyDown = (function(e) {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});

	return Selectize;
}));