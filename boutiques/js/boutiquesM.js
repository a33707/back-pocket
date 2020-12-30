$(document).ready(function(){

////// 반응형
var countItemlist = $(".wrap_boxes.board_history .list .content .item").size();
var countGradulist = $(".box_container .wrap_boxes.graduated .box_item .wrap_list li").size();

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
$(".title_txt_page .txt").after($(".wrap_currency"));
});