	/*
	 the author of this code is Greg Smith (http://incompl.com).
	 You can find the code for the mouse trailing here: https://codepen.io/incompl/pen/skpGa
	*/
	window.addEventListener('mousemove', function(e) {[1, .9, .8, .5, .1].forEach(function(i) {
    var j = (1 - i) * 200;
    var elem = document.createElement('div');
    var size = Math.ceil(Math.random() * 15 * i) + 'px';
    elem.style.position = 'absolute';
    elem.style.zIndex = '-1';
    elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
    elem.style.width = size;
    elem.style.height = size;
    elem.style.background = 'hsla(' + (Math.round(Math.random() * 100)+200) + ', ' + '100%, ' + '50%, ' + i + ')';
    elem.style.borderRadius = size;
    elem.style.pointerEvents = 'none';
    document.body.appendChild(elem);

  });
}, false);