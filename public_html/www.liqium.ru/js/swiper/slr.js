$(document).ready(function () {

    var slr_main = new Swiper('.swiper_slr', {
        autoplay: 1000,
        speed: 1200,
        slidesPerView: 1,
        loop: true,
        paginationClickable: true,
        effect: 'fade',
        // pagination: '.swiper-pagination',
        pagination: {
            el: '.swiper-pagination',
        },      
    });

    var slr_main = new Swiper('.swiper_slr_letters_recommendation', {
        autoplay: 0,
        speed: 0,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        effect: 'slide',
        autoResize: true,
        DOMAnimation: true,
        grabCursor: true,
        preventClicks: false,
        observer:true,
        observeParents:true,
        // pagination: '.swiper-pagination_lt',
        // paginationType: 'fraction',
        pagination: {
            el: '.swiper-pagination_lt',
            type: 'fraction',
        },    
    });

    var slr_reviews = new Swiper('.slr_reviews', {
    	autoplay: 0,
    	speed: 4200,
    	slidesPerView: 1,
    	loop: true,
    	preventClicks: false,
    	paginationClickable: true,
    	// nextButton: '.swiper-button-next',
    	// prevButton: '.swiper-button-prev',
    	// pagination: '.swiper-pagination',
    	// paginationType: 'fraction',
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },  
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },     
    });

    var fap_slr = new Swiper('.fap_slr', {
    	autoplay: 0,
    	speed: 4200,
    	slidesPerView: 3,
    	slidesPerGroup: 3,
    	grabCursor: true,
    	loop: true,
    	preventClicks: false,
    	paginationClickable: true,
    	//nextButton: '.swiper-fap_button-next',
    	//prevButton: '.swiper-fap_button-prev',
    	//pagination: '.swiper-fap_pagination',
    	//paginationType: 'fraction',
        pagination: {
            el: '.swiper-fap_pagination',
            type: 'fraction',
        },  
        navigation: {
            nextEl: '.swiper-fap_button-next',
            prevEl: '.swiper-fap_button-prev',
        },        
    });

    var slr_ipad = new Swiper('.slr_ipad', {
        autoplay: 0,
        speed: 2750,
        slidesPerView: 1,
        loop: true,
    	grabCursor: true
        //paginationClickable: true,
        //effect: 'fade',
    });

    var mp_slr = new Swiper('.mp_slr', {
        autoplay: 0,
        speed: 1200,
        //slidesPerView: 1,
        loop: true,
        paginationClickable: true,
    	preventClicks: false,
        //pagination: '.swp',
        pagination: {
            el: '.swp',
            type: 'bullets',
        },    
    	//nextButton: '.swp_next',
    	//prevButton: '.swp_prev',
        navigation: {
            nextEl: '.swp_next',
            prevEl: '.swp_prev',
        },    
    });

    var rcnt_slr = new Swiper('.rcnt_slr', {
        autoplay: 0,
        speed: 1200,
        //slidesPerView: 1,
        loop: true,
        paginationClickable: true,
        preventClicks: false,
        effect: 'fade',
        pagination: {
            el: '.sp',
            type: 'fraction',
        },    
        navigation: {
            nextEl: $('.rcnt').find('.sbn'),
            prevEl: $('.rcnt').find('.sbp'),
        },    
    });

    var rcnt_slr2 = new Swiper('.rcnt_slr2', {
        autoplay: 0,
        speed: 1200,
        //slidesPerView: 1,
        loop: true,
        paginationClickable: true,
        preventClicks: false,
        effect: 'fade',
        pagination: {
            el: '.sp2',
            type: 'fraction',
        },    
        navigation: {
            nextEl: $('.rcnt2').find('.sbn2'),
            prevEl: $('.rcnt2').find('.sbp2'),
        },    
    });

});




