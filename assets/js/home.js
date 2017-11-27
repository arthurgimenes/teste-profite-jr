$('.slide').slick({
  dots: true,
  slidesToScroll: 1,
  infinite: true,
  speed: 200,
  autoplay: true,
	autoplaySpeed: 2000,
  fade: true,
  cssEase: 'linear',
  arrows:true,
});

$('.slide-produtos').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.carousel.carousel-slider').carousel({fullWidth: true});

