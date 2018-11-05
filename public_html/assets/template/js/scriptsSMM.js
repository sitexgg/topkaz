var slider = tns({
	container: ".smmBanner__slides",
	items: 1,
	controls: false,
	nav: false,
	autoplayButton: false,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
	arrowKeys: true,
	loop: true,
	mouseDrag: true,
	autoplay: true,
	slideBy: "page",
	mode: "gallery"
});

var slider2 = tns({
	container: ".smmProjects__slides",
	items: 1,
	controls: false,
	nav: false,
	autoplayButtonOutput: false,
	autoplayHoverPause: true,
	arrowKeys: true,
	loop: true,
	mouseDrag: true,
	autoplay: true,
	responsive: {
		768: {
			controls: true
		}
	}
});

$(document).on("ready", function() {
	SMMcount();
	videoDetect();
});

$(".smmCalc__form").on("click", function() {
	SMMcount();
});

function SMMcount() {
	var smmResultHolder = $(".smmCalc__result");
	var smmResultCurrency = $(".smmCalc__result").data("option-currency");
	var smmChecked = $(".smmCalc__form input:checked");
	var smmSum = 0;
	var smmOptions = "";
	for (var i = 0; i < smmChecked.length; i++) {
		smmSum += $(smmChecked[i])
		.parent()
		.data("option-price");
		smmOptions +=
		$(smmChecked[i]).attr("id") +
		"(" +
		$(smmChecked[i])
		.parent()
		.data("option-price") +
		")" +
		", ";
	}
	smmResultHolder.text(smmSum + " " + smmResultCurrency);
	smmMessage = smmOptions + "total=" + smmSum + smmResultCurrency;
	console.clear();
	console.log(smmMessage);
	$(".smmCalc__result2").text(smmMessage);
	return smmMessage;
	
}
  
function videoDetect() {
	if ($('#video').length > 0) {
		if (($('#video').length > 0) && ($(window).width() > '1199')) {
			$('.smmBanner__photo').addClass('disabled');
			$('.smmBanner__video').addClass('active');
			video.loop = true;
			video.play();
		}
		else {
			$('.smmBanner__photo').removeClass('disabled');
			$('.smmBanner__video').removeClass('active');
			video.loop = true;
			video.pause();
		}
	}
}