$(document).ready(function(){
  $('.banner-interno').slick({
    dots: true,
    draggable: true
  });
  $('.vitrine').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<img src="public/img/seta_esquerda_l.png" alt="" class="anterior_l">',
    nextArrow: '<img src="public/img/seta_direita_l.png" alt="" class="proxima_l">',
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $(".produto1").click(function(){
      $("#myModal").modal('show');
  });
});
