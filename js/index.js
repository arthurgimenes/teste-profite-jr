$(document).ready(function() {
  var myItems;

  $.getJSON('calçados.json', function(data) {
      myItems = data.items;
      console.log(myItems);
  });
});