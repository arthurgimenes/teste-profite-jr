$(function(){

	// abre e fecha menu
	$('.nav-toggle, .nav-close').click(function(e){
		e.preventDefault();
		$('.nav').toggleClass('active');
	});


	// carousel banner
	$('#owl-carousel-banner').owlCarousel({
	    loop:true,
	    margin:0,
	    autoplay:true,
	    autoplayTimeout:3000,
        autoplayHoverPause:true,
	    nav:true,
	    autoHeight:true,
	    responsive:{
	        0:{
	            items:1
	        }
	    },
	});

	// carousel produtos
	$('#owl-carousel-produtos').owlCarousel({
		loop:true,
		margin:20,
		autoplay:true,
		dots: true,
		dotsData: true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		autoHeight:true,
		responsive:{
			0:{
				items:2,
			},
			800:{
				items:4,
				loop:true
			}
		}
	});

	$('.carousel-produtos .owl-dot').click(function() {
        owl.trigger('to.owl.carousel', [$(this).index(), 1000]);
    })

	var owl = $('#owl-carousel-produtos');

	owl.owlCarousel();
	// Go to the next item
	$('.owl-btn-next').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.owl-btn-prev').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [300]);
	})
});	


