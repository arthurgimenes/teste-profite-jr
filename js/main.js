$(document).ready(function(){

	var width = $(window).width();

	/*********************************************************************/
	/************************* Banner Slider *****************************/
	/*********************************************************************/
 	$(".atom-main-banner-slider-arrows-before").on("click", function(){
 		$('.molecule-main-banner-slider-each :first-child')
        	.fadeOut(1000)
        	.parent()
        	.find('.atom-main-banner-slider-each-img')
        	.last()
        	.fadeIn(2000)
        	.prependTo('.molecule-main-banner-slider-each');
        var slideDot = $('.molecule-main-banner-slider-each :first-child').data('slide');
        $(".atom-main-banner-slider-dots-each").removeClass("active");
        $('*[data-slider="' + slideDot + '"]').addClass('active');
 	});

 	$(".atom-main-banner-slider-arrows-after").on("click", function(){
 		$('.molecule-main-banner-slider-each :first-child')
        	.fadeOut(1000)
        	.next('.atom-main-banner-slider-each-img')
        	.fadeIn(2000)
        	.end()
        	.appendTo('.molecule-main-banner-slider-each'); 
        var slideDot = $('.molecule-main-banner-slider-each :first-child').data('slide');
        $(".atom-main-banner-slider-dots-each").removeClass("active");
        $('*[data-slider="' + slideDot + '"]').addClass('active');
 	})

 	$(".atom-main-banner-slider-dots-each").on("click", function(){
 		var slide = $(this).data('slider');
 		if($('*[data-slide="' + slide + '"]').index() == 0) {
 			// Nothing to see here ┬┴┬┴┤(･_├┬┴┬┴
 			// Really, it's meant to do nothing (and yes, I like to write comments in english AND be totally casual around here. It's my "comical escape". Please, don't mind me.).
 		} else {
 			$(".atom-main-banner-slider-dots-each").removeClass("active");
 			$(this).addClass("active");
 			while($('*[data-slide="' + slide + '"]').index() != 0) {
	 			$('.molecule-main-banner-slider-each :first-child').appendTo('.molecule-main-banner-slider-each');
	 		}

			$('.molecule-main-banner-slider-each .atom-main-banner-slider-each-img').fadeOut(1000);
			$('*[data-slide="' + slide + '"]').fadeIn(2000);
 		}
 	})


 	/*********************************************************************/
	/************************* Products Slider ***************************/
	/*********************************************************************/

	$(".atom-main-products-control-prev").on("click", function(){
		$('.organism-main-products-gallery').slick('slickPrev');
	})
	$(".atom-main-products-control-after").on("click", function(){
		$('.organism-main-products-gallery').slick('slickNext');
	})

	$(document).on("click", ".atom-main-products-each-img", function(){
		if($('body').hasClass('modal-active')) {
			// Nothing to see here ┬┴┬┴┤(･_├┬┴┬┴
		} else {
			var productImage = $(this).data('image');
			$(".molecule-modal-products-img").css({
				'backgroundImage' : 'url(' + productImage + ')'
			});
			$('body').addClass('modal-active');
		}
	})

	$(".atom-modal-products-close, .organism-overlay").on("click", function() {
		$('body').removeClass('modal-active');
	})
});
	