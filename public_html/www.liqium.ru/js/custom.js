var bootstrapTooltip = $.fn.tooltip.noConflict();
$.fn.bstooltip = bootstrapTooltip;

jQuery(document).ready(function () {

	$(".scrollTo").click( function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 85;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	jQuery('a.fancybox_map').click(function (e) {
		e.preventDefault();
		$('#blc_map').toggleClass('open');
		initialize(map1, 'map10');
	});
	jQuery('.blc_close_map').click(function () {
		$('#blc_map').toggleClass('open');
		initialize(map1, 'map10');
	});
	
   // Google map________________________________________________________________________________________
		var map1;
	
        function initialize(varName, mapName) {

                //var map;   
                var my_map = 'custom_style';
                //var bounds = new google.maps.LatLngBounds();
                var featureOpts = [
									{
										"featureType": "all",
										"elementType": "geometry",
										"stylers": [
											{
												"color": "#242a41"
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "geometry.fill",
										"stylers": [
											{
												"color": "#242a41"
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "geometry.stroke",
										"stylers": [
											{
												"color": "#32394e"
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels",
										"stylers": [
											{
												"color": "#7a7e8c"
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text",
										"stylers": [
											{
												"color": "#7a7e8c"
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text.fill",
										"stylers": [
											{
												"color": "#7a7e8c"
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.text.stroke",
										"stylers": [
											{
												"color": "#050c26"
											}
										]
									},
									{
										"featureType": "all",
										"elementType": "labels.icon",
										"stylers": [
											{
												"color": "#242a41"
											}
										]
									},
									{
										"featureType": "water",
										"elementType": "all",
										"stylers": [
											{
												"color": "#030a25"
											}
										]
									}
								]

                $('body').find('#' + mapName).each(function(){
                        var Moscow = new google.maps.LatLng($(this).parent().find('span:first').attr('y'), $(this).parent().find('span:first').attr('x'));
                        var mapOptions = {
                                center: Moscow,
                                panControl: true,
                                scaleControl:true,
                                streetViewControl: true,
                                overviewMapControl: true,
                                rotateControl:true,
                                zoom: 17,
                                zoomControl: true,
                                zoomControlOptions: {
                                  style:google.maps.ZoomControlStyle.DEFAULT
                                },                                                             
                                mapTypeControl: false,
                                scrollwheel: false,
                                mapTypeControlOptions: {
                                  mapTypeIds: [google.maps.MapTypeId.ROADMAP, my_map]
                                },
                                mapTypeId: my_map
                        }; // end mapOptions;

                        varName = new google.maps.Map(document.getElementById($(this).attr('id')), mapOptions);
  
                       //varName.panBy(100,0);// maps shift center

                        if(mapName == 'map10'){
                            map1 = varName;
                        }
                        var ob = [];
                        var i = 0;
                        $(this).parent().find('span').each(function(index, elem){
                                ob[i] = {
                                        ele: 'Moscow '+ i,
                                        name: $(this).attr('name'),
                                        text: $(this).attr('text'),
                                        url: $(this).attr('url'),
                                        x: $(this).attr('x'),
                                        y: $(this).attr('y')
                                        };
                                i = i+1;
                        });
                        var count_element = i;
                        varName.setTilt(45);
                        var markers = [];
                        // Display multiple markers on a map
                        var infoWindow = new google.maps.InfoWindow(), marker, i;
                        // Loop through our array of markers & place each one on the map  
                        for( i = 0; i < markers.length; i++ ) {
                               // var position = new google.maps.LatLng(markers[i][1], markers[i][2]);

                                //bounds.extend(position);
                                      // marker = new google.maps.Marker({
                                      //         position: position,
                                      //         map: map,
                                      //         title: markers[i][0]
                                      // });
                                // Allow each marker to have an info window    
                                // google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                //     return function() {
                                //         infoWindow.setContent(infoWindowContent[i][0]);
                                //         infoWindow.open(varName, marker);
                                //         }
                                // })(marker, i)); 
                        } 
                        var styledMapOptions = {name: 'Custom Style'};
                        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

                        varName.mapTypes.set(my_map, customMapType);
                        var j = 0;

                        while(j<count_element){
                                var officeImage = new google.maps.MarkerImage('/images/marker.png',
                                        new google.maps.Size(67, 67),
                                        //new google.maps.Point(0,0),
                                        new google.maps.Point(0, 0)
                                );

                                var officeShadow = new google.maps.MarkerImage('/images/marker.png',
                                        new google.maps.Size(67, 67),
                                        //new google.maps.Point(0,0),
                                        new google.maps.Point(0, 0)
                                );

                                var office = [
                                        [ob[j]['ele'], ob[j]['y'], ob[j]['x']]
                                ];

                                var infoWindowContentsOffice = [
                                        ['<div class="info_content">' + '<h3><a href="'+ob[j]['url']+'">'+ob[j]['name']+'</a></h3>' + '<p>'+ob[j]['text']+'</p>' + '</div>']
                                ];

                                var infoOffice = new google.maps.InfoWindow(), office, i;
                                var position = new google.maps.LatLng(office[i][1], office[i][2]);

                                office = new google.maps.Marker({
                                        position: position,
                                        map: varName,
                                        icon: officeImage,
                                        shadow: officeShadow,
                                        optimized: false,
                                        zIndex:9,
                                        title: office[i][0]
                                });

//                                google.maps.event.addListener(office, 'click', (function(office, i) {
//                                        return function() {
//                                                infoOffice.setContent(infoWindowContentsOffice[i][0]);
//                                                infoOffice.open(varName, office);
//                                        };
//                                })(office, i));
                                j = j+1;
                        };
                });
        } // end initialize()

    // End Google map________________________________________________________________________________________


	$("select").chosen({
		//"disable_search": true, //поле поиска выключено
		"disable_search": false, //поле поиска включено
		width: '100%'
	});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	//    $("a.scroll").click(function() {
	//        $.scrollTo($(".divScroll"), 800, {
	//            offset: 0
	//        });
	//    });
	//


	$(".ul_flat li a div.h_bg p.btn span.arrow").css({
		"opacity": 0.5
	});
	$(".ul_flat li a div.h_bg p.btn").hover(function () {
		$(this).children("span.arrow").animate({
			"opacity": 0.8
		}, 300);
	}, function () {
		$(this).children("span.arrow").animate({
			"opacity": 0.5
		}, 300);
	});
	
	
	$('.order_www_ls li a').hover(function(){
		$(this).parent().addClass('hover');
	},
	function(){
		$(this).parent().removeClass('hover');
	});


	if ($('form').is('#mform')) {
		$('textarea').niceScroll({
			touchbehavior: false,
			autohidemode: false,
			cursorborderradius: "100px",
			railoffset: true,
			cursorfixedheight: 20,
			zindex: 100,
			enablescrollonselection: false,
			cursordragontouch: true,
			cursorborder: "0",
			cursorcolor: "#424242",
			cursorwidth: "3"
		});
	}

	setTimeout(function () {
		if ($('form').is('.rform')) {
			$('textarea').niceScroll({
				touchbehavior: false,
				autohidemode: true,
				cursorborderradius: "100px",
				railoffset: true,
				cursorfixedheight: 20,
				zindex: 100,
				enablescrollonselection: false,
				cursordragontouch: true,
				cursorborder: "0",
				cursorcolor: "#777777",
				cursorwidth: "3",
			});
		}
	}, 100);

	$('#ascrail2000').appendTo('.bcl_right_textarea');
	$('#ascrail2001').appendTo('.blc_textarea');


//	var oldSlimScroll = $.fn.slimScroll;
//	$.fn.slimScroll = function (options) {
//		options.wheelStep = 2;
//		return oldSlimScroll.apply(this, [options]);
//	};
	
	
	
//		if ($('div').is('#fullpage')) {
//			$('#fullpage').fullpage({
//				anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
//				verticalCentered: false,
//				css3: true,
//				scrollingSpeed: 1750,
//				autoScrolling: true,
//				slimScroll: 'slimScroll',
//				navigation: false,
//				scrollOverflow: true,			
//				afterLoad: function (anchorLink, index) {
//					LoadPage(index);
//				},
//				onLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
//					$('#header_main').removeClass('header_main_fix');
//					$('#header_main').animate({
//						top: "0px"
//					}, 800);					
//					if (index == 2) {
//						$('#header_main').addClass('pgs2');
//					} else {
//						$('#header_main').removeClass('pgs2');
//					}
//					if (index == 3) {
//						$('#header_main').addClass('pgs3');
//					} else {
//						$('#header_main').removeClass('pgs3');
//					}
//					if (index == 4) {
//						$('#header_main').addClass('pgs4');
//					} else {
//						$('#header_main').removeClass('pgs4');
//					}
//				},		
//			});
//		}
//
//	function LoadPage(index) {		
//		if (index == 2) {
//			$('#header_main').addClass('header_main_fix');
//			setTimeout(function () {
//				$('#header_main').animate({
//					top: "-55px"
//				}, 800);
//			}, 100);
//		}
//		if (index == 3) {
//			$('#header_main').addClass('header_main_fix');
//			setTimeout(function () {
//				$('#header_main').animate({
//					top: "-55px"
//				}, 800);
//			}, 100);
//		}
//		if (index == 4) {
//			$('#header_main').addClass('header_main_fix');
//			setTimeout(function () {
//				$('#header_main').animate({
//					top: "-55px"
//				}, 800);
//			}, 100);
//		}
//	}
//
//
//	$(document).on('click', '#moveUp', function () {
//		$.fn.fullpage.moveSectionUp();
//	});
//	$(document).on('click', '#moveDown', function () {
//		$.fn.fullpage.moveSectionDown();
//	});	
	

	$('.chat_form').sidr({
		name: "blc_right",
		timing: 'ease-in-out',
		speed: 700,
		side: 'right',
		method: 'open',
		body: '#blc_all_cnt',
		onOpen: function onOpen() {
			$('.fclose').click(function () {
				$.sidr('close', 'blc_right')
			});
			$('#header_main').css({
				'position': "absolute !important"
			});
			//$('#header_main').removeClass('fix');
			$('#header_main').toggleClass('fix');
//			$('.blc_nav_ch_arw').css({
//				'position': "absolute",
//				"z-index": "9",
//				'top': '11.25%'
//			});
			$('.blc_nav_ch_arw_seo').css({
				'top': '2.2%'
			});
			//$('.blc_nav_ch_arw_ecom').css({'top':'12.2%'});
		},
		onCloseEnd: function onCloseEnd() {
			$('#header_main').css({
				'position': "fixed"
			});
			$('.blc_nav_ch_arw').css({
				'position': "fixed",
				'top': '45%'
			});
			$('.header_main_in_gr').css({
				'position': "static"
			});
			$('.blc_nav_ch_arw_seo').css({
				'position': "fixed",
				'top': '20%'
			});
			$('#header_main').toggleClass('fix');
			//$('#header_main').removeClass('fix');
			//$('#header_main').addClass('fix');
			// $('.blc_nav_ch_arw_ecom').css({'position':"fixed", 'top':'20%'});
		},
	});


	$(function () {
		$(".ttip").tooltip({
			show: {
				effect: "slideDown",
				delay: 250
			},
			hide: {
				effect: "slideUp",
				delay: 200
			},
			position: {
				my: "top center-40",
				at: "right-13 center"
			},
			tooltipClass: "circle_cnt_tooltips"
		});
	});

	$(function () {
		$(".ttip_btm").tooltip({
			show: {
				effect: "slideDown",
				delay: 250
			},
			hide: {
				effect: "slideUp",
				delay: 200
			},
			position: {
				my: "bottom center+45",
				at: "right-23 center"
			},
			tooltipClass: "circle_cnt_tooltips_btm"
		});
	});



	$(".soc_share").click(function () {
		$(".blc_soc_share").toggleClass("active");
		return false;
	});

	$('.apl_list li.active').prev('li').find('a').css({
		"borderRight": "1px solid transparent",
		"paddingRight": "0"
	});



	var section_link_other_projects = $('.section_link_other_projects a');
	$(section_link_other_projects).click(function () {
		if ($(section_link_other_projects).text() === 'Показать другие проекты') {
			$(this).html('<span>Скрыть проекты</span>');
		} else {
			$(this).html('<span>Показать другие проекты</span>');
		}
		$('.seo_list_four').slideToggle(700);
		return false;
	});


//Counter------------------------------------------
	var jQueryj = jQuery;
	"use strict";
	initCounter();

	function initCounter() {
		"use strict";
		jQueryj('.counter').each(function () {
			jQueryj(this).appear(function () {
				jQueryj(this).absoluteCounter({
					speed: 2000,
					fadeInDelay: 1000
				})
			})
		})
	}
//End Counter------------------------------------------

	//Video Tubular
//	if ($('div').is('.bbox')) {
//		var options = {
//			videoId: 'RXuI-YHW5mk',
//			start: 0,
//			modestbranding: 1
//		};
//		$('.bbox').tubular(options);
//	}
	
	(function($){
		// console.log(navigator.userAgent);
		/* Adjustments for Safari on Mac */
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
			// console.log('Safari on Mac detected, applying class...');
			$('html').addClass('safari-mac'); // provide a class for the safari-mac specific css to filter with
		}
	})(jQuery);	
	
	//$('.cbp-hrsub').hide().css({'opacity': "0"});
	
	var mLi = $('.nav > li');
	$(mLi).mouseover(function () {
		$(this).children('.cbp-hrsub').stop().slideDown(650);
	});
	$(mLi).mouseout(function () {
		$(this).children('.cbp-hrsub').stop().slideUp(650);
	});
	
	setTimeout(function(){
		var mLiA = $('.nav > li.arw');
		$(mLiA).mouseover(function () {
			$(this).closest('#header_main').css({"z-index":"110"});
		});
		$(mLiA).mouseout(function () {
			$(this).closest('#header_main').css({"z-index":"99"});
		});			
	}, 100);

	
	
	if($('div').is('.cbp-hrsub')){
		$('.cbp-hrsub').parent('li').addClass('arw');		
	}	

//	(function($) {
//		$(function() {
//			$('ul.tabs_price_list').on('click', 'li:not(.active)', function() {
//				$(this)
//					.addClass('active').siblings().removeClass('active')	.closest('div.tabs_price').find('div.tabs_content_price').removeClass('active').eq($(this).index()).addClass('active');
//			});
//		});
//	})(jQuery);
	

	(function($) {
		$(function() {
			$('ul.apl_list').on('click', 'li:not(.active)', function() {
				$(this)
					.addClass('active').siblings().removeClass('active')					.closest('div.blc_tab_archive').find('div.tab_archive_content').removeClass('active').eq($(this).index()).addClass('active');
				$('ul.apl_list li').removeClass('brdr');
				$(this).prev('li').addClass('brdr');
			});
			
		});
	})(jQuery);	
	

	$('#mform #in_mame input').focus(function () {
		$(this).closest('#mform').find('#in_mame').addClass('focus');
	}).blur(function () {
		$(this).closest('#mform').find('#in_mame').removeClass('focus');
	});
	
	$('#mform #in_pnone input').focus(function () {
		$(this).closest('#mform').find('#in_pnone').addClass('focus');
	}).blur(function () {
		$(this).closest('#mform').find('#in_pnone').removeClass('focus');
	});
	
	$('#mform #in_mail input').focus(function () {
		$(this).closest('#mform').find('#in_mail').addClass('focus');
	}).blur(function () {
		$(this).closest('#mform').find('#in_mail').removeClass('focus');
	});	
	
	$('#mform textarea').focus(function () {
		$(this).closest('#mform').find('.blc_textarea').addClass('focus');
	}).blur(function () {
		$(this).closest('#mform').find('.blc_textarea').removeClass('focus');
	});	
	
	$('.rform textarea').focus(function () {
		$(this).closest('.rform').find('.bcl_right_textarea').addClass('focus');
	}).blur(function () {
		$(this).closest('.rform').find('.bcl_right_textarea').removeClass('focus');
	});	
	
	$('.mob_dev_list .btn').click(function(){
		$(this).prev('.mdl_hd').slideToggle('slow').end().toggleClass('open');
		return false;
	});
	
	$('.guaranteed_sale_list .link_in_blc').click(function(){
		$(this).prev('.mdl_hd').slideToggle('slow').end().toggleClass('open');
		return false;
	});
	 
	
//	$('#section0').on('mousewheel DOMMouseScroll', function(e) {
//		console.log(e);
//			var logo = 100;
//
//			if (e.originalEvent > 100) {
//				$('#header_main').addClass('scroll');
//			} else{
//				$('#header_main').removeClass('scroll');
//			} 	
//	});	


//
//	$('#section0').on('mousewheel DOMMouseScroll', function(event){
//		if (event.originalEvent.wheelDelta > 0) {
//			$('#header_main').removeClass('scroll');
//		}
//		else {  
//			$('#header_main').addClass('scroll');
//		}
//	});

	
	$('input.phone').mask('+7 (999) 999-99-99');
	jQuery.validator.addMethod('phoneRU', function(value, element) {
		return this.optional(element) || /^\+7 \(([0-9]){3}\) ([0-9]){3}-([0-9]){2}-([0-9]){2}$/.test(value) || /^([0-9]){10}$/.test(value);
	}, '');
	var form = $('.rform');
	form.validate({
		errorClass : 'error',
		invalidHandler: function(event, validator) {
			//console.log(validator);
		},
		errorPlacement: function(error, element) {
			// error.appendTo( element.closest(''));
		},
		highlight: function(element, errorClass, validClass) {
			$(element).addClass('error').removeClass('valid');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).removeClass('error').addClass('valid');
		},
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: {
				required: true,
				phoneRU: true
			},
			time: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		}
	});	
	
	$('input.email').inputmask({
		mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
		greedy: !1,
		onBeforePaste: function (pastedValue, opts) {
			pastedValue = pastedValue.toLowerCase();
			return pastedValue.replace("mailto:", "");
		},
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				cardinality: 1,
				casing: "lower"
			},
			"-": {
				validator: "[0-9A-Za-z-]",
				cardinality: 1,
				casing: "lower"
			}
	}
	});	

//	
//	function name(){
//		$.mask.definitions['h'] = "[A-Яa-я]";
//		$("input.name").mask("");
//	}
//	name();	

	$('.blc_nav_ch_arw').hide();
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 150) {
				$('.blc_nav_ch_arw').fadeIn();
			} else {
				$('.blc_nav_ch_arw').fadeOut();
			}
		});
//		$('#moveUp').click(function () {
//			$('body,html').animate({
//				scrollTop: 0
//			}, 800);
//			return false;
//		});
//		$('#moveDown').click(function () {
//			$("html, body").animate({scrollTop:$(document).height()},"slow")
//		});			
	});	
	
//	$('.list_slog li p').gradientText({
//		colors: ['#b5e4ff', '#b776e8', '#b6247c']
//	});
	
	$('.blc_web_bg').closest('#blc_all_cnt').addClass('nt_header');
	
	$('.all_seo_services').click(function(){
		$(this).closest('.blc_ass').find('.blc_all_seo_services').slideToggle('slow');
		return false
	});
	
	$('.f1').closest('.blc_gray_blue_eagle').addClass('fq1');
	$('.f2').closest('.blc_gray_blue_eagle').addClass('fq2');
	$('.f3').closest('.blc_gray_blue_eagle').addClass('fq3');
	$('.f4').closest('.blc_gray_blue_eagle').addClass('fq4');
	$('.f5').closest('.blc_gray_blue_eagle').addClass('fq5');
	$('.f6').closest('.blc_gray_blue_eagle').addClass('fq6');
	$('.f7').closest('.blc_gray_blue_eagle').addClass('fq7');
	$('.f8').closest('.blc_gray_blue_eagle').addClass('fq8');
	$('.f9').closest('.blc_gray_blue_eagle').addClass('fq9');
	$('.f10').closest('.blc_gray_blue_eagle').addClass('fq10');
	$('.f11').closest('.blc_gray_blue_eagle').addClass('fq11');
	$('.f12').closest('.blc_gray_blue_eagle').addClass('fq12');
	$('.f13').closest('.blc_gray_blue_eagle').addClass('fq13');
	$('.f14').closest('.blc_gray_blue_eagle').addClass('fq14');
	$('.f15').closest('.blc_gray_blue_eagle').addClass('fq15');
	$('.f16').closest('.blc_gray_blue_eagle').addClass('fq16');
	$('.f17').closest('.blc_gray_blue_eagle').addClass('fq17');
	$('.f18').closest('.blc_gray_blue_eagle').addClass('fq18');
	$('.f19').closest('.blc_gray_blue_eagle').addClass('fq19');
	$('.f20').closest('.blc_gray_blue_eagle').addClass('fq20');
}); // End $(document).ready



$(window).load(function () {

	$('.blc_web_bg').closest('#blc_all_cnt').addClass('nt_header');
	
	function setEqualHeight(columns) {
		var tallestcolumn = 0;
		columns.css('height', '');
		columns.each(function () {
			currentHeight = $(this).height();
			if (currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		});
		columns.height(tallestcolumn);
	}

	setEqualHeight(jQuery(".blc_our_service ul.serevice_list > li .desc"));
	setEqualHeight(jQuery(".section_list li"));
	

	var columns = $('.blc_our_service ul.serevice_list > li .desc');

	jQuery(window).resize(function () {
		setEqualHeight(jQuery(".blc_our_service ul.serevice_list > li .desc"));
		setEqualHeight(jQuery(".section_list li"));

		var imgH3 = $('.it3 img').height();
		$('.it4').css({
			"top": imgH3 + 3
		});
		$('.it7').css({
			"top": imgH3 + 3
		});
		var imgH = $('.it1 img').height();
		$('.blc_f_command').css({
			"height": imgH
		});
	});

	var imgH = $('.it1 img').height();
	$('.blc_f_command').css({
		"height": imgH
	});
	var imgH3 = $('.it3 img').height();
	$('.it4').css({
		"top": imgH3 + 3
	});
	$('.it7').css({
		"top": imgH3 + 3
	});	

	
});


jQuery(window).scroll(function () {
	var Logo = $(window).scrollTop();	
	if (Logo >= 100) {
		jQuery('.hd_main, .hd_company').addClass('sc_panel');
		jQuery('.blc_top_project, .blc_web_bg, .blc_sub_in_menu, .blc_top_ecom, .blc_mob_phone, .blc_top_branding, #fullpage_seo, .prtfl .blc_flat_project ').addClass('active');
	} else {
		jQuery('.hd_main, .hd_company').removeClass('sc_panel');
		jQuery('.blc_web_bg, .blc_top_ecom, .blc_top_project, .blc_mob_phone, .blc_top_branding, #fullpage_seo, .prtfl .blc_flat_project').removeClass('active');
		setTimeout(function(){
			jQuery('.blc_sub_in_menu').removeClass('active');
		}, 350);
	}
});	

	


$(function(){

    var ul = $('.blc_fole_upl #ul1');
    $('#drop a').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });
    // Initialize the jQuery File Upload plugin
    $('#upload').fileupload({
        // This element will accept file drag/drop uploading
        dropZone: $('#drop'),
        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {
            var tpl = $('<li class="working"><input type="text" value="0" data-width="0" data-height="0"'+
                ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');
            // Append the file name and file size
            tpl.find('p').text(data.files[0].name)
                         .after('<i>(' + formatFileSize(data.files[0].size) + ')</i>');
            // Add the HTML to the UL element
            data.context = tpl.appendTo(ul);
            // Initialize the knob plugin
            tpl.find('input').knob();
            // Listen for clicks on the cancel icon
            tpl.find('span').click(function(){
                if(tpl.hasClass('working')){
                    jqXHR.abort();
                }
                tpl.fadeOut(function(){
                    tpl.remove();
                });
            });

            // Automatically upload the file once it is added to the queue
            var jqXHR = data.submit();
        },
        progress: function(e, data){
            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);
            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();
            if(progress == 100){
                data.context.removeClass('working');
            }
        },
        fail:function(e, data){
            // Something has gone wrong!
            data.context.addClass('error');
        }
    });


    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        e.preventDefault();
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }
        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }
        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }
        return (bytes / 1000).toFixed(2) + ' KB';
    }

});





$(function(){

    var ul = $('.blc_fole_upl #ul2');
    $('#drop2 a').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });
    // Initialize the jQuery File Upload plugin
    $('#mform').fileupload({
        // This element will accept file drag/drop uploading
        dropZone: $('#drop2'),
        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {
            var tpl = $('<li class="working"><input type="text" value="0" data-width="0" data-height="0"'+
                ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');
            // Append the file name and file size
            tpl.find('p').text(data.files[0].name)
                         .after('<i>(' + formatFileSize(data.files[0].size) + ')</i>');
            // Add the HTML to the UL element
            data.context = tpl.appendTo(ul);
            // Initialize the knob plugin
            tpl.find('input').knob();
            // Listen for clicks on the cancel icon
            tpl.find('span').click(function(){
                if(tpl.hasClass('working')){
                    jqXHR.abort();
                }
                tpl.fadeOut(function(){
                    tpl.remove();
                });
            });

            // Automatically upload the file once it is added to the queue
            var jqXHR = data.submit();
        },
        progress: function(e, data){
            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);
            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();
            if(progress == 100){
                data.context.removeClass('working');
            }
        },
        fail:function(e, data){
            // Something has gone wrong!
            data.context.addClass('error');
        }
    });


    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        e.preventDefault();
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }
        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }
        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }
        return (bytes / 1000).toFixed(2) + ' KB';
    }

});
