import 'bootstrap';
import 'jquery';
import './scss/index.scss';

function fetchProducts() {
  jQuery.getJSON('public/mock/products.json').done(function(data) {
    for (var key in data.results) {
      console.log(data.results[key]);

      $(
        '<div class="carousel-item col-md-3">' +
          data.results[key].title +
          '</div>'
      ).appendTo('#carouselProducts .carousel-inner');
    }
  });
}

$(document).ready(function() {
  $('#carouselProducts').on('slide.bs.carousel', function(e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.products .carousel-item').length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == 'left') {
          $('.products .carousel-item')
            .eq(i)
            .appendTo('.products .carousel-inner');
        } else {
          $('.products .carousel-item')
            .eq(0)
            .appendTo('.products .carousel-inner');
        }
      }
    }
  });

  fetchProducts();
});
