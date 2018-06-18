import 'bootstrap';
import 'jquery';
import './scss/index.scss';

function fetchProducts() {
    jQuery.getJSON('public/mock/products.json').done(function(data) {
        for (var key in data.results) {

            $(`
                <div class="carousel-item col-md-3 ${ key == 0 ? 'active' : '' }">
                    <div class="card">
                        <img class="card-img-top" src="src/img/${data.results[key].image}" alt="${data.results[key].title}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${data.results[key].title}</h5>
                            <div class="card-rate">
                                <i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>
                            </div>
                            <p class="card-text text-line-through">de R$ ${data.results[key].price_in}</p>
                            <p class="card-price">por R$ ${data.results[key].price_by}</p>
                            <p class="card-text">ou em 3x de R$ 133,00</p>
                            <a href="#" class="btn btn-primary mt-1"><i class="fas fa-cart-plus mr-2"></i> Comprar</a>
                        </div>
                    </div>
                </div>

                `).appendTo('#carouselProducts .carousel-inner');
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
