// document.getElementById("container").style.height = 
// 	Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + "px";
function f(){
	document.getElementById("theInput").style.fontSize = 
		Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 1.7 + "px";
	document.getElementById("theInput").style.lineHeight = 
		Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + "px";	

}
f();


$(document).ready(function(){
	// $('#theInput').text("  " + $('#theInput').text());  
	$(window).on("orientationchange",function(){
	  alert("The orientation has changed!");
	  f();
	});
});

