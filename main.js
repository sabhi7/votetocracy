var width;
var height;
window.onload=function(){
	width=document.documentElement.clientWidth;
	height=document.documentElement.clientHeight;
};

document.getElementById('bill').onmouseover=display;

function display(event){
	event.stopPropagation();
	this.style.position="relative";
	this.classList.add('active');
	document.getElementById('iframe').className="iframeS";
	/*var rect=	this.getBoundingClientRect();
	console.log(rect.top,rect.bottom,rect.left,rect.right);*/
}

document.onclick=function(){
	document.getElementById('iframe').className="iframeH";
	document.getElementById('bill').classList.remove('active');
};




/*test code*/
/*this.className=this.className + "active";*/