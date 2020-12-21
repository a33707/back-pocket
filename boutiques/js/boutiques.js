$(document).ready( function() {
// 모바일 메뉴 여닫기
	$(".btn_drawer").click(function(){
		$(".gnb_wrap").show();
		$(".overlay").show();
	});
	$(".overlay").click(function(){
		$(this).hide();
		$(".gnb_wrap").hide();
	});

// 고개센터 접기펴기
	$(".menus .item.pare").click(function(){
		if ($(".menus .item.chil").css("display") === "none") {
			$(".menus .item.chil").show();
		} else {
			$(".menus .item.chil").hide();
		};
	});

	$(".menus .item").click(function(){
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
		} else {
			$(this).addClass("on");
		};
	});

	$(".head_fn_btns > button").hover(function(){
		$(this).find($(".ttip")).toggle();
	});

	$(".btns_lang .sel_lang").click(function(){
		$(".btns_lang .sel_lang").removeClass("on");
		$(this).addClass("on");
	});

});


////// 반응형
	var desMobile = function (){
	  var width_size = $(window).width();
		if (width_size <= 640) {
			// Mobile	
			$(".gnb_wrap").hide();
			$(".overlay").hide();			
		} else {
			// PC
			$(".gnb_wrap").show();
			$(".overlay").hide();
		};
	};
	$(window).resize(desMobile);
	$(document).ready(desMobile);