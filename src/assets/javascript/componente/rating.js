// http://callmenick.com/post/five-star-rating-component-with-javascript-css

// target element
var el = document.querySelector('.product__rating');

// current rating, or initial rating
var currentRating = 0;

// max rating, i.e. number of stars you want
var maxRating = 5;

// callback to run after setting the rating
var callback = function(rating) {
  // alert(rating);
};

// rating instance
var myRating = rating(el, currentRating, maxRating, callback);
myRating.setRating(3);
myRating.getRating();
