(function(){
	var width,height;
	
	/* initalization */
	addEvent('DOMContentLoaded',document,function(){
		
		vtcparent=document.getElementsByClassName('vtc-bills');
		vtciframes=document.getElementsByClassName('vtc-iframe');
		
		for(var i=0;i<vtcparent.length;i++){
			addEvent('mouseover',vtcparent[i],display);
			addEvent('click',vtcparent[i],display);
		}	
	});
	
	 addEvent('click', document, function() {
     hideFrames();
    });

	function addEvent(event, el, fn){
		if (el.addEventListener){
			el.addEventListener(event, fn, false);
		} else if (el.attachEvent){
			el.attachEvent('on' + event, fn);
		} else {
			el[event]=fn;
		}
	}

	function hasClass(ele, cls) {
      return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }

  function addClass(ele, cls) {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
  }

  function removeClass(ele, cls) {
    if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)', 'g');
      ele.className = ele.className.replace(reg, ' ');
    }
  }
  /*display iframe next to the active bill*/	
  function display(){
  	hideFrames();
  	var rel=this.getAttribute('data-vtctarget');
  	for(var i=0;i<vtciframes.length;i++){
  		if(vtciframes[i].getAttribute('data-vtcparent') == rel){
  			addClass(vtciframes[i],myposition(this,vtciframes[i]));
  			removeClass(vtciframes[i],'vtc-iframeH');
  		}
  	}
  }	

  function myposition(ele,iframe){
  	var p = ele.getBoundingClientRect();
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    var left=ele.offsetLeft;
    var right=ele.offsetLeft + ele.offsetWidth;
    var top=ele.offsetTop;
    var bottom=ele.offsetTop + ele.offsetHeight;
    resetFrame(iframe);
    if ((width-p.right) > 510) {
    		/*dispaly on right and towards the top*/
      if (topBottom(p.top,p.bottom)) {
      	iframe.style.bottom=height-bottom-70 +"px";
      	iframe.style.left=right+25 +"px";
      }
      	/*dispaly  on right */
      else{
      	iframe.style.top=top-50 +"px";
      	iframe.style.left=right+25 +"px";
      }
      return ("vtc-i-right");
	  }
    if (p.left > 510) {
    		/*display on the left and towards top*/
      if(topBottom(p.top,p.bottom)) {
      	iframe.style.bottom=height-bottom-70 +"px";
      	iframe.style.right=width-left+25 +"px";
      }
      else{
      	/*displays on left*/
      	iframe.style.top=top-50 +"px";
      	iframe.style.right=width-left+25 +"px";
      }
      return("vtc-i-left");
 		}
    if (p.left < (width/2)) {
    		/*display on the bottom towards left*/
	    if (p.left < (width/4)){
	    	iframe.style.top=bottom+25 +"px";
	    	iframe.style.left=left-30 +"px";
	    } 
	    else{
	    	iframe.style.top=bottom+25 +"px";
	    	iframe.style.left=left-150 +"px";
	    }
	    return "vtc-i-bottom"; 
    }
    if ((width-p.right) < (width/4)){
    	iframe.style.top=bottom+25 +"px";
	    iframe.style.right=width-right-30 +"px";
     } 
    else{
    	iframe.style.top=bottom+25 +"px";
	    iframe.style.left=left-150 +"px";
    } 
    return "vtc-i-bottom";
  }
   
  function topBottom(ptop, pbottom) {
    return ((height-pbottom) < 400 && ptop > 400);
  }

  function resetFrame(iframe){
  	iframe.style.top="";
  	iframe.style.bottom="";
  	iframe.style.left="";
  	iframe.style.right="";
  }

  function hideFrames() {
    for(var i=0; i<vtciframes.length; i++) {
      addClass(vtciframes[i], 'vtc-iframeH');
    }
  }
})();









/*function getAllElementsWithAttribute(attribute)
{
  var matchingElements = [];
  var allElements = document.getElementsByTagName('iframe');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute))
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}
function getOffsetLeft( elem )
{
    var offsetLeft = 0;
    do {
      if ( !isNaN( elem.offsetLeft ) )
      {
          offsetLeft += elem.offsetLeft;
      }
    } while( elem = elem.offsetParent );
    return offsetLeft;
}

*/