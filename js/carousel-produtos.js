if (document.documentElement.clientWidth <= 640) {
  var slideProdutos = 1;
  mostraProdutos(slideProdutos);

  function trocaProduto(n) {
    mostraProdutos(slideProdutos += n);
  }


  function mostraProdutos(n) {
    var i;
    var x = document.getElementsByClassName("produto");
    if (n > x.length) {
        slideProdutos = 1
    }    
    if (n < 1) {slideProdutos = x.length}
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";  
      }
    x[slideProdutos-1].style.display = "none";  
  }
}