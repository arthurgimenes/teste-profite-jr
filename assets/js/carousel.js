$(document).ready(function() {

  let speed = 5000;
  let item_width = $('#itens li').outerWidth();
  let left_value = item_width * (-1);

  setInterval('rotate()', speed);

  $('#itens li:first').before($('#itens li:last'));
  $('#itens ul').css({ 'left': left_value });

  $('#anterior').click(function() {
      let left_intend = parseInt($('#itens ul').css('left')) + item_width;
      $('#itens ul').animate({ 'left': left_intend }, 400, function() {
          $('#itens li:first').before($('#itens li:last'));
          $('#itens ul').css({ 'left': left_value });
      });
  });

  $('#proximo').click(function() {
      let left_intend = parseInt($('#itens ul').css('left')) - item_width;
      $('#itens ul').animate({ 'left': left_intend }, 400, function() {
          $('#itens li:last').after($('#itens li:first'));
          $('#itens ul').css({ 'left': left_value });
      });
  });

});

function rotate() {
  $('#proximo').click();
}
