$(document).ready(function(){ 
	function resize(){
		$('#theInput').
			css("font-size", $(window).height() + "px");
		$('#theInput').
			css("line-height", $(window).height() + "px");
	}	


	$(window).resize(function(){
	  console.log("The orientation has changed!");
	  resize();
	});
	resize();
});

