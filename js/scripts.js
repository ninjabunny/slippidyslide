
function resize(){
	$('#theInput').
		css("font-size", Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.90 + "px");
	$('#theInput').
		css("line-height", Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + "px");
}	
resize();

$(document).ready(function(){ 
	$(window).resize(function(){
	  resize();
	});
});

