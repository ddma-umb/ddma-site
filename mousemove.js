$(document).ready(function(){
	$(window).mousemove(function(evt){

	    $(".floater").css({
	        "left": -(evt.clientX * 0.05),
	        "top": -(evt.clientY * 0.05),
	    });

	});
});
