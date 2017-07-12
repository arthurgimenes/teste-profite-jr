// slide destaque
$('.slide_destaque .slide-wrap').slick({
  dots: true,
  infinite: false,
  fade: true,
  prevArrow: '<div class="sd-arrow_prev"></div>',
  nextArrow: '<div class="sd-arrow_next"></div>',
  dotsClass: 'sd-pager'
});


//slide produtos
$('.slide_produto .slide-wrap').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="sp-arrow_prev"></div>',
  nextArrow: '<div class="sp-arrow_next"></div>',
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});


//lightbox zoom
$('.pd-zoom_produto').magnificPopup({
  type:'image'

});
