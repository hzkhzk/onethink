$(function(){
	var win = $(window);
	var gototopHtml = '<div id="topcontrol"><a href="#top" class="top_stick">&nbsp;</a></div>';
	$("body").append(gototopHtml);

	$("#topcontrol").css({
		"display": "none",
		"margin-left" : "auto",
		"margin-right" : "auto",
		"width" : 1000
	});
	$("#topcontrol").find(".top_stick").css({
		"position" : "fixed",
		"bottom" : 150,
		"margin-left": 1050
	});

	win.scroll(function(){
		var scrTop = win.scrollTop();
		if( scrTop > 100 ) {
			$("#topcontrol").fadeIn();
		} else {
			$("#topcontrol").fadeOut();
		}
	});

	$("#topcontrol").click(function(){
		$(this).animate({scrollTop: 0}, 1000);
	})
})