var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
$(document).ready( function() {
if(!isMobile) {
	alert("PC");
} else {
	alert("Mobile");
};

// 모바일 메뉴 여닫기
	$(".btn_drawer").click(function(){
		$(".gnb_wrap").show();
		$(".overlay").show();
		$("body").css("overflow-y", "hidden");
	});
	$(".overlay").click(function(){
		$(this).hide();
		$(".gnb_wrap").hide();
		$("body").css("overflow-y", "auto");
	});

	// 고객센터 접기펴기
	$(".menus .item.pare").click(function(){
		var imgRoot = $(this).find($(".ic_fold")).attr("src");
		var turnOpen = imgRoot.replace("closed", "opened");
		var turnClose = imgRoot.replace("opened", "closed");
		if ($(".menus .item.chil").css("display") === "none") {
			$(".menus .item.chil").show();
			$(this).find($(".ic_fold")).attr("src", turnOpen);
		} else {
			$(".menus .item.chil").hide();
			$(this).find($(".ic_fold")).attr("src", turnClose);
		};
	});

	// 메뉴 클릭
	$(".menus .item").click(function(){
		if (!$(this).hasClass("chil")) {
			var imgRoot = $(this).find($(".ic_menu_item")).attr("src");
			var turnOn = imgRoot.replace("off", "on");
			var turnOff = imgRoot.replace("on", "off");
			if ($(this).hasClass("on")) {
				$(this).removeClass("on");
				$(this).find($(".ic_menu_item")).attr("src", turnOff);
			} else {
				$(this).addClass("on");
				$(this).find($(".ic_menu_item")).attr("src", turnOn);
			};
		} else {
			if ($(this).hasClass("on")) {
				$(this).removeClass("on");
			} else{
				$(this).addClass("on");
			};
		};

	});

	$(".head_fn_btns > button").hover(function(){
		$(this).find($(".ttip")).toggle();
	});

	$(".btns_lang .sel_lang").click(function(){
		$(".btns_lang .sel_lang").removeClass("on");
		$(this).addClass("on");
	});
	
	// 탭버튼
	$(".wrap_btns_tab > button").click(function(){
		$(".wrap_btns_tab > button").removeClass("on");
		$(this).addClass("on");
		if ($(".tbtn_prod_normal").hasClass("on")) {
			$(".wrap_boxes .box_item.prod_normal").show();
			$(".wrap_boxes .box_item.prod_advanced").hide();
			$(".wrap_boxes .box_item.prod_vip").hide();
		};
		if ($(".tbtn_prod_advanced").hasClass("on")) {
			$(".wrap_boxes .box_item.prod_normal").hide();
			$(".wrap_boxes .box_item.prod_advanced").show();
			$(".wrap_boxes .box_item.prod_vip").hide();
		};
		if ($(".tbtn_prod_vip").hasClass("on")) {
			$(".wrap_boxes .box_item.prod_normal").hide();
			$(".wrap_boxes .box_item.prod_advanced").hide();
			$(".wrap_boxes .box_item.prod_vip").show();
		};
	});

	// FAQ
	$(".wrap_boxes.faq .box_item .list_board .item").click(function(){
		var imgRoot = $(this).find($(".img_fold")).attr("src");
		var turnOpen = imgRoot.replace("closed", "opened");
		var turnClose = imgRoot.replace("opened", "closed");
		if ($(this).find($(".desc")).css("display") === "none") {
			$(this).addClass("on");
			$(this).find($(".desc")).show();
			$(this).find($(".img_fold")).attr("src", turnOpen);
		} else {
			$(this).removeClass("on");
			$(this).find($(".desc")).hide();
			$(this).find($(".img_fold")).attr("src", turnClose);
		}
		
	});

	var selectTarget = $('.selectbox select');
	selectTarget.change(function(){
		var select_name = $(this).children('option:selected').text();
		$(this).siblings('label').text(select_name);
	});

	// 가입신청 스크롤
	$(".btn_goto_subs").click(function(){
		var total = ($(document).height() - $(window).height())
		$("html").animate( { scrollTop : total }, 600);
	});

  // $("#layerPopup").hide();
  $(".btn_popup_open").click(function(){
    $(".btn_popup_open").blur();
    $("#layerPopup").show();
    $("#layerPopup a").focus();
    return false;
  });
  $(".btn_popup_open").keydown(function(e){
    if(e.shiftKey && e.keyCode == 9){ // Shift + Tab 키를 의미합니다.
      $(".btn_popup_open").focus();
      $("#layerPopup").hide();
      return false;
    }
  });  
  $("#layerPopup .btn_cancel").click(function(){
    $(".btn_popup_open").focus();
    $("#layerPopup").hide();
  });

});

////// 반응형
	var desMobile = function (){
	  var width_size = $(window).width();
	  var countItemlist = $(".wrap_boxes.board_history .list .content .item").size();
	  var countGradulist = $(".box_container .wrap_boxes.graduated .box_item .wrap_list li").size();
		if (width_size <= 640) {
			// Mobile	
			$(".gnb_wrap").hide();
			$(".overlay").hide();
			$(".wrap_boxes.product .wrap_btns_tab").prependTo(".wrap_boxes.product");
			$(".wrap_boxes.product .box_item.prod_advanced").hide();
			$(".wrap_boxes.product .box_item.prod_vip").hide();
			for(i = 0; i < countItemlist ; i++){
				var thisitemlist = $(".wrap_boxes.board_history .list .content .item").eq(i);
				thisitemlist.find(".point").before(thisitemlist.find(".date"));
			};
			for(i = 0; i < countGradulist ; i++){
				var thisGradulist = $(".box_container .wrap_boxes.graduated .box_item .wrap_list li").eq(i);
				thisGradulist.find(".wrap_prod").before(thisGradulist.find(".wrap_date"));
			};
			$(".wrap_boxes.subscription .wrap_subs .wrap_btns_tab").prependTo(".wrap_boxes.subscription .wrap_subs");
			$(".wrap_boxes.subscription .wrap_subs .box_item.prod_advanced").hide();
			$(".wrap_boxes.subscription .wrap_subs .box_item.prod_vip").hide();
		} else {
			// PC
			$(".gnb_wrap").show();
			$(".overlay").hide();
			$("body").css("overflow-y", "auto");
			$(".wrap_boxes.product .wrap_btns_tab").appendTo(".wrap_boxes.product");
			$(".wrap_boxes.product .box_item").show();
	    for(i = 0; i < countItemlist ; i++){
	      var thisitemlist = $(".wrap_boxes.board_history .list .content .item").eq(i);
	      thisitemlist.find(".date").before(thisitemlist.find(".point"));
	    };
			for(i = 0; i < countGradulist ; i++){
				var thisGradulist = $(".box_container .wrap_boxes.graduated .box_item .wrap_list li").eq(i);
				thisGradulist.find(".wrap_amount").after(thisGradulist.find(".wrap_date"));
			};
	    $(".wrap_boxes.subscription .wrap_subs .wrap_btns_tab").appendTo(".wrap_boxes.subscription .wrap_subs");
	    $(".wrap_boxes.subscription .wrap_subs .box_item").show();
		};
	};
	// $(window).resize(desMobile);
	$(document).ready(desMobile);




