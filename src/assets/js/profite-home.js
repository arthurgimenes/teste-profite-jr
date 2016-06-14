
carouselBanners = function() {
    bannerHome = $('.x-full-banner .x-carousel ul').bxSlider({
        responsive: true,
        pager: true,
        controls: true,
        autoStart: true,
        auto: true,
        mode: "fade",
        moveSlides: 1,
        infiniteLoop: true,
        adaptiveHeight: true
    });
};

carouselProducts = function() {
  var slidesize = 245
      , isMobile = (parseInt($("body").width() / slidesize),
    !1)
      , numMinSlide = 4;
    $(window).width() < 760 && (isMobile = true,
    numMinSlide = 1),
    $(window).width() > 760 && $(window).width() < 1279 && (numMinSlide = 3),

    $('.x-vitrine .x-carousel .x-prateleira ul').bxSlider({
        responsive: true,
        pager: false,
        controls: true,
        minSlides: numMinSlide,
        maxSlides: 4,
        preloadImages: "visible",
        touchEnabled: true,
        autoStart: true,
        auto: true,
        moveSlides: 1,
        infiniteLoop: true,
        slideWidth: slidesize
    });
};

$(document).ready(function(){
  carouselBanners();
  carouselProducts();
});

$(document).ajaxStop(function(){
});

$(window).load(function() {
});


$(window).resize(function() {
});
