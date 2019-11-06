<<<<<<< HEAD
$(".slider").slick({

    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true
});
=======
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
>>>>>>> c19da7d0ebb9a1041c1e60164900cd0d26b82dd8
