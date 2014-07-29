var width;
var height;
window.onload=init;
window.onresize=function () { 
	a=document.getElementsByClassName('active')[0];
	if(a !='undefined'){
		display.apply(a); 
	}
}

function init(){
	var n=document.getElementsByClassName('bills');
	for(var i=0;i<n.length;i++){
		n[i].onmouseover=display;
		n[i].onclick=display;
	}
	document.onclick=function(){
		hideFrames();
		removeClassActive();
	};
};

function display(event){
	//event.stopPropagation();
	hideFrames();
	removeClassActive();
	var p=this.getBoundingClientRect();
	pleft=p.left;
	pright=p.right;
	ptop=p.top;
	pbottom=p.bottom;
	var myclass=myposition(pleft,pright,ptop,pbottom);
	removeClass(this,'i\\-.*');
	addClass(this,myclass);
	addClass(this,'active');
	for(var i=0;i<this.childNodes.length;i++){
		if(this.childNodes[i].nodeName=='IFRAME'){
			removeClass(this.childNodes[i],'iframeH');
		}
	}
}

function myposition(pleft,pright,ptop,pbottom){
	width=document.documentElement.clientWidth;
	height=document.documentElement.clientHeight;
	if((width-pright)>510){
		if(topBottom(ptop,pbottom)){
			return ("i-right-top");
		}
		else{
			return ("i-right");
		}	
	}
	else if(pleft>510){
		if(topBottom(ptop,pbottom)){
		return ("i-left-top");
		}
		else{
		return("i-left");
		}
	}
	else{
		if(pleft<(width/2)){
			if(pleft<(width/4)){
				return "i-bottom i-leftxs";
			}
			else{
				return "i-bottom i-leftsm";
			} 
		}
		else{
			if((width-pright)<(width/4)){
				return "i-bottom i-rightxs";
			}
			else{
				return "i-bottom i-rightsm";
			}
		}	 
	} 
}

function topBottom(ptop,pbottom){
	if((height-pbottom)<400 && ptop>400 ){
			return true;
		}
		else{
			return false;
		}	
}

function hideFrames(){
	var frames=document.getElementsByClassName('iframe');
	for(var i=0;i<frames.length;i++){
		addClass(frames[i],'iframeH');
	}
}

function removeClassActive(){
	var bills=document.getElementsByClassName('bills');
	for(var i=0;i<bills.length;i++){
		removeClass(bills[i],'active');
	}
}

function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
  if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
  if (hasClass(ele,cls)) {
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)', 'g');
    ele.className=ele.className.replace(reg,' ');
  }
}

/*test code*/

