$(window).scroll(function(){var e=$(window).scrollTop();e>=100&&$(window).width()>"991"?$(".b-scrollHeader").addClass("js-show"):$(".b-scrollHeader").removeClass("js-show")}),$(".b-SWD__QuestionsButtonsOrderCall, .b-SWD__QuestionsButtonsRequest, .b-scrollHeader__sendModal").click(function(){$(".b-scrollHeader").removeClass("js-show")}),$(document).ready(function(){$("body").on("click",".blog-tags-filter a",function(){$("#blog-inner").hide().empty(),$("#loader").show(),loadUrl="[[++site_url]]"+$(this).attr("title"),console.log(loadUrl),$("#blog-inner").load(loadUrl+" #blog-inner > *",function(){$("#loader").hide()}),$("#blog-inner").fadeIn(1200)})}),$(".b-SWD__TitleServiceSetItem").animated("fadeIn","fadeOut"),$(".b-index__TitleServiceSetItem").animated("fadeIn","fadeOut"),$(".b-SWD__ProcessCard").animated("fadeIn","fadeOut");var $hamburger=$(".hamburger");$hamburger.on("click",function(e){$hamburger.toggleClass("is-active")}),$(window).width()>"991"&&$.fn.bootstrapDropdownHover({}),$(document).on("af_complete",function(e,o){o.success&&$(".remodal-close").click()});

// youtube lazy load
window.onload = function() {
	$(function() {
		$(".youtube").each(function() {
			$(this).width($(this).parent().width()).height($(this).parent().width() * .563);
			$(this).css('background-image', 'url(https://i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)');
			$(this).append($('<div/>', {'class': 'play'}));
			$(document).delegate('#'+this.id, 'click', function() {
				var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
				if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
					var iframe = $('<iframe/>', {
						'frameborder': '0',
						'src': iframe_url,
						'width': $(this).parent().width(),
						'height': $(this).parent().width() * .563
					})
					$(this).replaceWith(iframe);
				});
		});
	});	
}

$(window).resize(function() {
	$(".youtube").each(function() {
		var $el = $(this);
		$el
		.width($(this).parent().width())
		.height($(this).parent().width() * .563);
	});
}).resize();

// fancybox
$(".fancybox").fancybox({
	padding : 0,
	helpers: {
		overlay: {
			locked: false
		},
		title: {
			type: 'inside'
		}
	}
});