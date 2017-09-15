$(document).ready(() => {
  var myItems;

  $.getJSON('http://localhost:3000/calcados.json', (data) => {
    myItems = data.calcados;
    console.log(myItems);
  });
});