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
	this.classList.add(myclass);
	this.classList.add("active");
	for(var i=0;i<this.childNodes.length;i++){
		if(this.childNodes[i].nodeName=='IFRAME'){
			this.childNodes[i].classList.remove("iframeH");
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
		frames[i].classList.add('iframeH');
	}
}
function removeClassActive(){
	var bills=document.getElementsByClassName('bills');
	for(var i=0;i<bills.length;i++){
		bills[i].classList.remove("active");
	}
}
/*document.getElementById('bill').onmouseover=display;

function display(event){
	event.stopPropagation();
	this.style.position="relative";
	this.classList.add('active');
	document.getElementById('iframe').className="iframeS";
	/*var rect=	this.getBoundingClientRect();
	console.log(rect.top,rect.bottom,rect.left,rect.right);
}

document.onclick=function(){
	document.getElementById('iframe').className="iframeH";
	document.getElementById('bill').classList.remove('active');
};*/




/*test code*/
/*this.className=this.className + "active";*/