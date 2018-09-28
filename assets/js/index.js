//Banner 
$(document).on('ready', function() {

	$(".banner").slick({

		dots: false,

		infinite: true,

		slidesToShow: 1,

		slidesToScroll: 1,

		autoplay: true,

		autoplaySpeed: 2000,

		prevArrow: $('.prev'),

		nextArrow: $('.next'),

		responsive: [

		{

			breakpoint: 600,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1,

				prevArrow: null,

				nextArrow: null,

			}

		},

		{

			breakpoint: 480,

			settings: {

				slidesToShow: 1,

				slidesToScroll: 1,

				prevArrow: null,

				nextArrow: null,

			}

		}

		]

	});

});

//Banner Mobile
$(document).on('ready', function() {

	$(".bannerMobile").slick({

		dots: false,

		infinite: true,

		slidesToShow: 1,

		slidesToScroll: 1,

		autoplay: true,

		prevArrow: null,

		nextArrow: null,

		autoplaySpeed: 2000,
	});

});