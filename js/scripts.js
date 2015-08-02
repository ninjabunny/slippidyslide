$(document).ready(function(){ 
	function resize(){
		$('#theInput').
			css("font-size", Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + "px");
		$('#theInput').
			css("line-height", Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + "px");
	}	


	$(window).resize(function(){
	  console.log("The orientation has changed!");
	  resize();
	});
	resize();
});

