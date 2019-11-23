console.log('got here');

var el = ".floater"


$(document).ready(function(){
	$(window).mousemove(function(evt){

	    $("el").css({
	        "left": -(evt.clientX * 0.05),
	        "top": -(evt.clientY * 0.05)
	    });

	});
});
