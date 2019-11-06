$(function() {
    $(".slider").slick({

        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        carouselcontrolprev: $('.prev'),
        carouselcontrolnext: $('.next')
    });
})