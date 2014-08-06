// Event Listeners, kickoff app
addEvent('DOMContentLoaded', document, function() {
  var ele = document.getElementsByTagName('a');

  for(var i=0; i<ele.length; i++) {
    if (ele[i].getAttribute('data-toggle') == 'collapse') {
      addEvent('click', ele[i], toggleMe);
    }
  }
});

addEvent('message', window, function(event) {
  var container = document.getElementsByClassName('container')[0];
  var width = container.offsetWidth;
  var height = container.offsetHeight;
  window.top.postMessage({width:width, height:height, iframe_id:event.data}, '*');
});

// Functions
function addEvent(event, el, fn) {
  if (el.addEventListener) {
    el.addEventListener(event, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, fn);
  } else {
    el[event] = fn;
  }
}

function toggleMe() {
	var t = this.getAttribute('data-target');
	var ele = document.getElementById(t);

    if (ele.className.match(/hide/)) {
		ele.className = ele.className.replace('hide','show');
	} else {
		ele.className = ele.className.replace('show','hide');
	}
}