$(document).ready(function() {

  $("#slide").owlCarousel({

      navigation : true, // Show next and prev buttons
      pagination: true,
      paginationSpeed : 400,
      singleItem:true,
      mouseDrag: false,

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });


  $("#products").owlCarousel({
    items : 4,
    lazyLoad : true,
    navigation : true,
    mouseDrag: false,

    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]

  });


});
