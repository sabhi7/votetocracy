var width;
var height;
window.onload=function(){
	width=document.documentElement.clientWidth;
	height=document.documentElement.clientHeight;
	console.log(height,width);
	var n=document.getElementsByClassName('bills');
	for(var i=0;i<n.length;i++){
		n[i].onmouseover=display;
	}
	document.onclick=function(){
		hideFrames();
		removeClassActive();
	};
};

function display(){
	hideFrames();
	removeClassActive();
	var p=this.getBoundingClientRect();
	pleft=p.left;
	pright=p.right;
	ptop=p.top;
	pbottom=p.bottom;
	var myclass=myposition(pleft,pright,ptop,pbottom);
	addClass(this,myclass);
	addClass(this,'active');
	for(var i=0;i<this.childNodes.length;i++){
		if(this.childNodes[i].nodeName=='IFRAME'){
			removeClass(this.childNodes[i],'iframeH');
		}
	}
}

/*function myposition(pleft,pright,ptop,pbottom){
	var position;
	if((width-pleft)>600){
		return ('i-right');
	}
	else{
		return("i-left");
	}
}*/

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
    var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    ele.className=ele.className.replace(reg,' ');
  }
}

/*test code*/
function myposition(pleft,pright,ptop,pbottom){
	var position;
	if((width-pright)>600){
		if(topBottom(ptop,pbottom)){
			return ('i-right-top');
		}
		else{
			return ('i-right');
		}	
	}
	else if(topBottom(ptop,pbottom)){
		return ('i-left-top');
		}
		else{
		return("i-left");
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
