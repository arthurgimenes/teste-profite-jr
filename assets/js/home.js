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
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.carousel.carousel-slider').carousel({fullWidth: true});

