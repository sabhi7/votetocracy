var width;
var height;
window.onload=function(){
	width=document.documentElement.clientWidth;
	height=document.documentElement.clientHeight;
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
	//this.classList.add(myclass);
	addClass(this,myclass);
	//this.classList.add("active");
	addClass(this,'active');
	for(var i=0;i<this.childNodes.length;i++){
		if(this.childNodes[i].nodeName=='IFRAME'){
			//this.childNodes[i].classList.remove("iframeH");
			removeClass(this.childNodes[i],'iframeH');
		}
	}
}
function myposition(pleft,pright,ptop,pbottom){
	var position;
	if((width-pleft)>600){
		return ('i-right');
	}
	else{
		return("i-left");
	}
}
function hideFrames(){
	var frames=document.getElementsByClassName('iframe');
	for(var i=0;i<frames.length;i++){
		//frames[i].classList.add('iframeH');
		addClass(frames[i],'iframeH');
	}
}
function removeClassActive(){
	var bills=document.getElementsByClassName('bills');
	for(var i=0;i<bills.length;i++){
		//bills[i].classList.remove("active");
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

