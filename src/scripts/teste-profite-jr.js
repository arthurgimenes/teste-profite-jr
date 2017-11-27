$('.single-item').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      adaptiveHeight: true,
  });
$('.produtos').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 8000,
      adaptiveHeight: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerMode: true,     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
$('#calcado-1').elevateZoom({
    zoomType                : "inner",
  cursor: "crosshair"
});