$(document).ready(function(){ 
	function resize(){
		$('#theInput').
			css("font-size", $(window).height() * 0.9 + "px");
		$('#theInput').
			css("line-height", $(window).height() * 0.9 + "px");
	}	


	$(window).resize(function(){
	  console.log("The orientation has changed!");
	  resize();
	});
	resize();
});

