var lightbox = $('.lightbox');
var lightboxImage = $('.lightbox__image');
var lightboxClose = $('.lightbox__close');


$(document).on('click', '.thumb', function() {
  var height = $(document).height();

  lightbox.css('height', height + 'px');
  lightbox.addClass('is-active');


  var href = $(this).attr('src');
  lightboxImage.attr('src', href)

});

$(document).on('click', '.lightbox__close', function() {
  lightbox.removeClass('is-active');

});
