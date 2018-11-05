jQuery(document).ready(function () {


	
	var wWwin = $(document).width();
	
	if ((wWwin) >= 1200){
		lnB1200();
	}else if((wWwin) < 1200 && (wWwin) >= 1081 ){
		lnS1200();
	}else if((wWwin) < 1080){
		lnB1080();
	}
	
	function lnS1200(){
		TweenMax.from(".bpt1 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});		
		TweenMax.to(".ln1", 2, {
			width:"469px",
			delay: 2,
		})	
		
		TweenMax.from(".bpt2 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});
		TweenMax.to(".ln2", 2, {
			width:"418px",
			delay: 4,
			onStart: function(){
				$('.bpt2').addClass('active');
			}
		});
		
		TweenMax.from(".bpt3 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});
		TweenMax.to(".ln3", 2, {
			width:"402px",
			delay: 6,
			onStart: function(){
				$('.bpt4').addClass('active');
			}
		})		
		TweenMax.from(".bpt4 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});

		TweenMax.to(".ln4", 2, {
			width:"273px",
			delay: 8,
			onStart: function(){
				$('.bpt3').addClass('active');
			}
		})	
		
	}
	
	function lnB1200(){
		TweenMax.from(".bpt1 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});
		TweenMax.to(".ln1", 2, {
			width:"671px",
			delay: 2,
		})

		TweenMax.from(".bpt2 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});
		TweenMax.to(".ln2", 2, {
			width:"418px",
			delay: 4,
			onStart: function(){
				$('.bpt2').addClass('active');
			}
		})

		TweenMax.from(".bpt4 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});

		TweenMax.to(".ln4", 2, {
			width:"273px",
			delay: 8,
			onStart: function(){
				$('.bpt3').addClass('active');
			}
		})
		TweenMax.from(".bpt3 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});

		TweenMax.to(".ln3", 2, {
			width:"602px",
			delay: 6,
			onStart: function(){
				$('.bpt4').addClass('active');
			}
		})
	}
	
	function lnB1080(){
		TweenMax.from(".bpt1 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});
		TweenMax.to(".ln1", 2, {
			width:"469px",
			delay: 2,
		})

		TweenMax.from(".bpt2 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});
		TweenMax.to(".ln2", 2, {
			width:"410px",
			delay: 4,
			onStart: function(){
				$('.bpt2').addClass('active');
			}
		})

		TweenMax.from(".bpt4 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});

		TweenMax.to(".ln4", 2, {
			width:"273px",
			delay: 8,
			onStart: function(){
				$('.bpt3').addClass('active');
			}
		})
		TweenMax.from(".bpt3 .point", 2, {
			opacity: 0,
			repeat: -1,
			yoyo: true
		});

		TweenMax.to(".ln3", 2, {
			width:"402px",
			delay: 6,
			onStart: function(){
				$('.bpt4').addClass('active');
			}
		})
	}	

	TweenMax.to(".buble", 20, {
		rotation:360,
		transformOrigin:"10px 100px",
		repeat:-1,
		ease:Linear.easeNone
	});
	TweenMax.to(".buble10", 15, {
		rotation:-360,
		delay: 1,
		transformOrigin:"100px 10px",
		repeat:-1,
		ease:Linear.easeNone
	});
	TweenMax.to(".buble11", 25, {
		rotation:360,
		delay: 2,
		transformOrigin:"50px 100px",
		repeat:-1,
		ease:Linear.easeNone
	});
	TweenMax.to(".buble12", 23, {
		rotation:360,
		delay: 3,
		transformOrigin:"100px -10px",
		repeat:-1,
		ease:Linear.easeNone
	});

	TweenMax.from(".buble13", 100, {
		rotation:-360,
		delay: 2,
		transformOrigin:"100px 100px",
		repeat:-1,
		width: "2px",
		height: "2px",
		ease:Linear.easeNone
	});
	TweenMax.to(".buble14", 42, {
		rotation:-360,
		delay: 1,
		transformOrigin:"50px -50px",
		repeat:-1,
		ease:Linear.easeNone
	});


    var buble1 = $(".buble1"),
    buble2 = $(".buble2"),
    buble3 = $(".buble3"),
	
    tn1 = TweenMax.to([buble1], 50, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:0},
                {x:-100, y:100},
                {x:0, y:200},
                {x:100, y:100},
                {x:0, y:0},
                {x:-100, y:-100},
                {x:0, y:-200},
                {x:100, y:-100},
                {x:0, y:0}

            ]
        },
        ease:Linear.easeNone
    });

    tn2 = TweenMax.to([buble2], 40, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:0},
                {x:100, y:-100},
                {x:0, y:-200},
                {x:-100, y:-100},
                {x:0, y:0},
                {x:100, y:100},
                {x:0, y:200},
                {x:-100, y:100},
                {x:0, y:0}

            ]
        },
        ease:Linear.easeNone
    });

    tn3 = TweenMax.to([buble3], 60, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:0},
                {x:150, y:-50},
                {x:0, y:-100},
                {x:-50, y:-50},
                {x:0, y:0},
                {x:750, y:50},
                {x:0, y:100},
                {x:-50, y:50},
                {x:0, y:0}
            ],
            backgroundColor:"f00",
        },
        ease:Linear.easeNone
    });
	
	
	
    var cadr = $('.bpt2 .big_point');
	var cadrLink = $('.cardLink');
    var ourCmd = $('.blc_black_cmp_btm_ttl h1');

    if($('div').is('.blc_f_command')){
        var scEnd = $('.blc_f_command').offset().top;
    }

    $(cadr).click(function(){
        TweenLite.to(window, 3, {
            scrollTo:{
                y: scEnd -250
            },
            ease: Back.easeOut.config(0),
        });
        TweenMax.from(ourCmd, 1, {
            delay: 3,
            scale: 0,
            ease: Back.easeOut.config(1),
            //onUpdate: onUpdate
            //rotation: 270,
            //scale: 0.4
        });
    });
    $(cadrLink).click(function(){
        TweenLite.to(window, 3, {
            scrollTo:{
                y: scEnd -250
            },
            ease: Back.easeOut.config(0),
        });
        TweenMax.from(ourCmd, 1, {
            delay: 3,
            scale: 0,
            ease: Back.easeOut.config(1),
            //onUpdate: onUpdate
            //rotation: 270,
            //scale: 0.4
        });
		return false;
    });	

	
    var goFeedBack = $('.goFeedBack');

    if($('div').is('.blc_black_form')){
        var feedBack = $('.blc_black_form').offset().top;
    }

    $(goFeedBack).click(function(){
        TweenMax.to(window, 10, {
            scrollTo:{
                y: feedBack,
                //autoKill: false
            },
            ease: Back.easeOut.config(2),
        });
		return false;
    });


	var goPrice = $('.goto_price');
    if($('div').is('#fullpage_seo')){
        var ourPrice = $('#section_price').offset().top;
    }
    $(goPrice).click(function(){
        TweenMax.to(window, 5, {
            scrollTo:{
                y: ourPrice + 30,
                //autoKill: false
            },
            ease: Power1.easeNone,
        });
		return false;
    });
	
	var goDev = $('.developed_more');
    if($('div').is('.blc_ecom_mebelion')){
        var bem = $('.blc_ecom_mebelion').offset().top;
    }
    $(goDev).click(function(){
        TweenMax.to(window, 3, {
            scrollTo:{
                y: bem,
                //autoKill: false
            },
            ease: Power4.easeNone,
        });
		return false;
    });
	
	
	var prtEcm = $('.prt_ecm');
    if($('div').is('.bg_section_blue')){
        var prtEcmBg = $('.bg_section_blue').offset().top;
    }
    $(prtEcm).click(function(){
        TweenMax.to(window, 2, {
            scrollTo:{
                y: prtEcmBg + 35,
                //autoKill: false
            },
            ease: Power1.easeNone,
        });
		return false;
    });	
	
	var goMobPr = $('.goMobPr');
    if($('div').is('.blc_mob_bin')){
        var goMobPrBg = $('.blc_mob_bin').offset().top;
    }
    $(goMobPr).click(function(){
        TweenMax.to(window, 2, {
            scrollTo:{
                y: goMobPrBg -19,
                //autoKill: false
            },
            ease: Power1.easeNone,
        });
		return false;
    });	
	
	var sbl = $('.services_brand_link');
    if($('div').is('.blc_brsk')){
        var sblBg = $('.blc_brsk').offset().top;
    }
    $(sbl).click(function(){
        TweenMax.to(window, 2, {
            scrollTo:{
                y: sblBg - 85,
                //autoKill: false
            },
            ease: Power1.easeNone,
        });
		return false;
    });		
	
	
	var goTopArv = $('#moveUp');
    if($('div').is('.blc_nav_ch_arw')){
        var goH = 0;
    }
    $(goTopArv).click(function(){
        TweenMax.to(window, 3, {
            scrollTo:{
                y: goH,
                //autoKill: false
            },
            ease: Power4.easeNone,
        });
		return false;
    });		

	
	var goDwnArv = $('#moveDown');
    if($('div').is('.blc_nav_ch_arw')){
        var goB = $('.copyright').offset().top;
    }
    $(goDwnArv).click(function(){
        TweenMax.to(window, 3, {
            scrollTo:{
                y: goB + 200,
                //autoKill: false
            },
            ease: Power4.easeNone,
        });
		return false;
    });		

//SEO Airs____________________________________________________________________________________

    var air1 = $(".air1"),
    air2 = $(".air2"),
    air3 = $(".air3"),
    air4 = $(".air4"),
    air5 = $(".air5"),
    air6 = $(".air6"),
    air7 = $(".air7"),
    air8 = $(".air8"),
    air9 = $(".air9"),
    air10 = $(".air10"),
    air11 = $(".air11"),
    air12 = $(".air12"),
    air13 = $(".air13"),
    air14 = $(".air14"),
    air15 = $(".air15"),
    air16 = $(".air16"),
    air17 = $(".air17"),
    air18 = $(".air18"),
    air19 = $(".air19"),
    air20 = $(".air20"),
    bl1 = $(".bl1"),
    bl2 = $(".bl2"),
    bl3 = $(".bl3"),
    bl4 = $(".bl4"),
    bl5 = $(".bl5"),
    bl6 = $(".bl6"),
    bl7 = $(".bl7"),
    bl8 = $(".bl8"),
    bl9 = $(".bl9"),
    bl10 = $(".bl10"),
    bl11 = $(".bl11"),
    bl12 = $(".bl12"),
    bl13 = $(".bl13"),
    bl14 = $(".bl14"),

    a1 = TweenMax.to([air1], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-850},
                {x:2250, y:-900},
            ],
        }/*bezier end*/,
        delay: 0.5,
        ease: Power3.easeOut,
    });

    a2 = TweenMax.to([air2], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-50},
                {x:1000, y:-150},
                {x:1250, y:-180},
                {x:1500, y:-200},
                {x:1750, y:-210},
                {x:2000, y:-220},
                {x:2250, y:-230},
                {x:2250, y:-240},
            ],
        }/*bezier end*/,
        delay: 1,
        ease: Power4.easeOut,
    });

    a3 = TweenMax.to([air3], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:-200},
                {x:2200, y:-800},
            ],
        }/*bezier end*/,
        delay: 2,
        ease:Power2.easeOut,
        rotation: 25
    });

    a4 = TweenMax.to([air4], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:100, y:-30},
                {x:150, y:-50},
                {x:200, y:-70},
                {x:300, y:-90},
                {x:400, y:-110},
                {x:500, y:-130},
                {x:600, y:-150},
                {x:700, y:-180},
                {x:800, y:-200},
                {x:900, y:-220},
                {x:1000, y:-240},
                {x:1100, y:-260},
                {x:1150, y:-280},
                {x:1200, y:-300},
                {x:1250, y:-320},
                {x:1300, y:-340},
                {x:1350, y:-360},
                {x:1400, y:-380},
                {x:1450, y:-400},
                {x:1500, y:-420},
                {x:1550, y:-440},
                {x:1600, y:-460},
                {x:1650, y:-480},
                {x:1750, y:-510},
                {x:1850, y:-525},
                {x:2250, y:-550},
            ],
        }/*bezier end*/,
        delay: 3,
        ease: Power3.easeOut,
    });

    a5 = TweenMax.to([air5], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-50},
                {x:1000, y:-150},
                {x:1250, y:-180},
                {x:1500, y:-200},
                {x:1750, y:-210},
                {x:2000, y:-220},
                {x:2250, y:-230},
                {x:2250, y:-240},
            ],
        }/*bezier end*/,
        delay: 4,
        ease:Power3.easeOut,
        rotation: 5
    });

    a6 = TweenMax.to([air6], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-700},
                {x:2250, y:-700},
                {x:2250, y:-700},
            ],
        }/*bezier end*/,
        delay: 5,
        ease:Power3.easeOut,
    });

    a7 = TweenMax.to([air7], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-800},
                {x:2250, y:-800},
            ],
        }/*bezier end*/,
        delay: 6,
        ease:Power4.easeOut,
        rotation: 20
    });

    a8 = TweenMax.to([air8], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:100, y:-30},
                {x:150, y:-50},
                {x:200, y:-70},
                {x:300, y:-90},
                {x:400, y:-110},
                {x:500, y:-130},
                {x:600, y:-150},
                {x:700, y:-180},
                {x:800, y:-200},
                {x:900, y:-220},
                {x:1000, y:-240},
                {x:1100, y:-260},
                {x:1150, y:-280},
                {x:1200, y:-300},
                {x:1250, y:-320},
                {x:1300, y:-340},
                {x:1350, y:-360},
                {x:1400, y:-380},
                {x:1450, y:-400},
                {x:1500, y:-420},
                {x:1550, y:-440},
                {x:1600, y:-460},
                {x:1650, y:-480},
                {x:1750, y:-510},
                {x:1850, y:-525},
                {x:2250, y:-550},
            ],
        }/*bezier end*/,
        delay: 7,
        ease:Power4.easeOut
    });

    a9 = TweenMax.to([air9], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-800},
                {x:2250, y:-800},
            ],
        }/*bezier end*/,
        delay: 8,
        ease:Power3.easeOut,
    });

    a10 = TweenMax.to([air10], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-800},
                {x:2250, y:-800},
            ],
        }/*bezier end*/,
        delay: 9,
        ease:Power3.easeOut,
    });

    a11 = TweenMax.to([air11], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-800},
                {x:2250, y:-800},
            ],
        }/*bezier end*/,
        delay: 10,
        ease:Power2.easeOut,
    });

    a12 = TweenMax.to([air12], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:100, y:-30},
                {x:150, y:-50},
                {x:200, y:-70},
                {x:300, y:-90},
                {x:400, y:-110},
                {x:500, y:-130},
                {x:600, y:-150},
                {x:700, y:-180},
                {x:800, y:-200},
                {x:900, y:-220},
                {x:1000, y:-240},
                {x:1100, y:-260},
                {x:1150, y:-280},
                {x:1200, y:-300},
                {x:1250, y:-320},
                {x:1300, y:-340},
                {x:1350, y:-360},
                {x:1400, y:-380},
                {x:1450, y:-400},
                {x:1500, y:-420},
                {x:1550, y:-440},
                {x:1600, y:-460},
                {x:1650, y:-480},
                {x:1750, y:-510},
                {x:1850, y:-525},
                {x:2250, y:-550},
            ],
        }/*bezier end*/,
        delay: 11,
        ease:Power2.easeOut,
    });

    a13 = TweenMax.to([air13], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-800},
                {x:2250, y:-800},
            ],
        }/*bezier end*/,
        delay: 12,
        ease:Power3.easeOut,
    });

    a14 = TweenMax.to([air14], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-50},
                {x:1000, y:-150},
                {x:1250, y:-180},
                {x:1500, y:-200},
                {x:1750, y:-210},
                {x:2000, y:-220},
                {x:2250, y:-230},
                {x:2250, y:-240},
            ],
        }/*bezier end*/,
        delay: 13,
        ease:Power3.easeOut,
    });

    a15 = TweenMax.to([air15], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2150, y:-850},
                {x:2200, y:-900},
            ],
        }/*bezier end*/,
        delay: 14,
        ease:Power4.easeOut,
    });

    a16 = TweenMax.to([air16], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2100, y:-850},
                {x:2250, y:-900},
                {x:2350, y:-1000},
            ],
        }/*bezier end*/,
        delay: 15,
        ease:Power4.easeOut,
    });

    a17 = TweenMax.to([air17], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2100, y:-750},
                {x:2250, y:-700},
                {x:2350, y:-650},
            ],
        }/*bezier end*/,
        delay: 16,
        ease:Power4.easeOut,
    });

    a18 = TweenMax.to([air18], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:100, y:-30},
                {x:150, y:-50},
                {x:200, y:-70},
                {x:300, y:-90},
                {x:400, y:-110},
                {x:500, y:-130},
                {x:600, y:-150},
                {x:700, y:-180},
                {x:800, y:-200},
                {x:900, y:-220},
                {x:1000, y:-240},
                {x:1100, y:-260},
                {x:1150, y:-280},
                {x:1200, y:-300},
                {x:1250, y:-320},
                {x:1300, y:-340},
                {x:1350, y:-360},
                {x:1400, y:-380},
                {x:1450, y:-400},
                {x:1500, y:-420},
                {x:1550, y:-440},
                {x:1600, y:-460},
                {x:1650, y:-480},
                {x:1750, y:-510},
                {x:1850, y:-525},
                {x:2250, y:-550},
            ],
        }/*bezier end*/,
        delay: 17,
        ease:Power4.easeOut,
        rotation: 15
    });

    a19 = TweenMax.to([air19], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2150, y:-850},
                {x:2250, y:-1000},
            ],
        }/*bezier end*/,
        delay: 18,
        ease:Power4.easeOut,
    });

    a20 = TweenMax.to([air20], 20, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:100, y:-30},
                {x:150, y:-50},
                {x:200, y:-70},
                {x:300, y:-90},
                {x:400, y:-110},
                {x:500, y:-130},
                {x:600, y:-150},
                {x:700, y:-180},
                {x:800, y:-200},
                {x:900, y:-220},
                {x:1000, y:-240},
                {x:1100, y:-260},
                {x:1150, y:-280},
                {x:1200, y:-300},
                {x:1250, y:-320},
                {x:1300, y:-340},
                {x:1350, y:-360},
                {x:1400, y:-380},
                {x:1450, y:-400},
                {x:1500, y:-420},
                {x:1550, y:-440},
                {x:1600, y:-460},
                {x:1650, y:-480},
                {x:1750, y:-510},
                {x:1850, y:-525},
                {x:2250, y:-550},
            ],
        }/*bezier end*/,
        delay: 19,
        ease:Power3.easeOut,
        rotation: 25
    });


    bl1 = TweenMax.to([bl1], 300, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-200},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-850},
                {x:2250, y:-900},
            ],
        }/*bezier end*/,
        delay: 0,
        ease: Power1.easeOut,
    });

    bl2 = TweenMax.to([bl2], 350, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:100, y:-30},
                {x:150, y:-50},
                {x:200, y:-70},
                {x:300, y:-90},
                {x:400, y:-110},
                {x:500, y:-130},
                {x:600, y:-150},
                {x:700, y:-180},
                {x:800, y:-200},
                {x:900, y:-220},
                {x:1000, y:-240},
                {x:1100, y:-260},
                {x:1150, y:-280},
                {x:1200, y:-300},
                {x:1250, y:-320},
                {x:1300, y:-340},
                {x:1350, y:-360},
                {x:1400, y:-380},
                {x:1450, y:-400},
                {x:1500, y:-420},
                {x:1550, y:-440},
                {x:1600, y:-460},
                {x:1650, y:-480},
                {x:1750, y:-510},
                {x:1850, y:-525},
                {x:2250, y:-550},
            ],
        }/*bezier end*/,
        delay: 1,
        ease: Power2.easeOut,
        scale: 1
    });

    bl3 = TweenMax.to([bl3], 280, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-100},
                {x:1000, y:-400},
                {x:1250, y:-600},
                {x:1500, y:-650},
                {x:1750, y:-700},
                {x:2000, y:-750},
                {x:2250, y:-850},
                {x:2250, y:-900},
            ],
        }/*bezier end*/,
        delay: 2,
        ease: Power2.easeOut,
        scale: 2
    });

    bl4 = TweenMax.to([bl4], 320, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:500, y:-100},
                {x:1000, y:-300},
                {x:1250, y:-500},
                {x:1500, y:-550},
                {x:1750, y:-700},
                {x:2000, y:-850},
                {x:2250, y:-950},
                {x:2350, y:-1100},
            ],
        }/*bezier end*/,
        delay: 3,
        ease: Power1.easeOut,
        scale: 1
    });

    bl5 = TweenMax.to([bl5], 470, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:0},
                {x:100, y:-30},
                {x:250, y:-50},
                {x:500, y:-150},
                {x:750, y:-200},
                {x:750, y:-250},
                {x:750, y:-150},
                {x:750, y:-200},
            ],
        }/*bezier end*/,
        delay: 0,
        ease: Power2.easeOut,
        opacity: 1
    });

    bl6 = TweenMax.to([bl6], 270, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:0},
                {x:100, y:-30},
                {x:250, y:-50},
                {x:500, y:-150},
                {x:750, y:-200},
                {x:850, y:-250},
                {x:950, y:-350},
                {x:1050, y:-400},
            ],
        }/*bezier end*/,
        delay: 1,
        ease: Power2.easeOut,
        scale: 4
    });

    bl7 = TweenMax.to([bl7], 170, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:0},
                {x:100, y:-30},
                {x:150, y:-150},
                {x:500, y:-250},
                {x:750, y:-300},
                {x:850, y:-450},
            ],
        }/*bezier end*/,
        delay: 0,
        ease: Power2.easeOut,
        scale: 3
    });

    bl8 = TweenMax.to([bl8], 220, {
        repeat:-1,
        bezier:{
            type:'soft',
            values:[
                {x:0, y:0},
                {x:100, y:-30},
                {x:150, y:-150},
                {x:500, y:-250},
                {x:750, y:-300},
                {x:850, y:-450},
            ],
        }/*bezier end*/,
        delay: 100,
        ease: Power4.easeOut,
        opacity: 1
    });
//    TweenMax.to(".ln2", 2, {
//        width:"418px",
//        delay: 4,
//        //transformOrigin: 100,
//        onStart: function(){
//            $('.bpt2').addClass('active');
//        }
//    })



	$(window).resize(function (){
		var wWwin = $(document).width();
		if ((wWwin) >= 1200){
			lnB1200();
		}else if((wWwin) < 1200 && (wWwin) >= 1081 ){
			lnS1200();
		}else if((wWwin) < 1080){
			lnB1080();
		}		
	});


});
