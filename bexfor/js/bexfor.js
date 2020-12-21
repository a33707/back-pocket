$(document).ready( function() {
	$('#openMenu').click(function(){
		$('#menu').show();
		$('#menu').animate({
		  left: "0px",
		  opacity: 1
		}, 400);
	});
});