$(document).ready(function(){
	$(".up").click(function(){
        scrollUp();
	});
	$(".down").click(function(){
		scrollDown();
	});
	$(document).keydown(function(e) {
    	switch(e.which) {
	        case 37:
	        scrollUp();
	        break;

	        case 38:
	        scrollUp();
	        break;

	        case 39:
	        scrollDown();
	        break;

	        case 40:
	        scrollDown();
	        break;

	        default: return; // exit this handler for other keys
		}
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
});
function scrollUp() {
	var height = $(window).height();
	$('html, body').animate({
      scrollTop: '-='+height
    }, 1000);
}
function scrollDown() {
	var height = $(window).height();
	$('html, body').animate({
      scrollTop: '+='+height
    }, 1000);
}