
var slideIndex = 1;
showDivs(slideIndex);

/* Função para avançar e voltar um slide */
function trocarDiv(n) {
  showDivs(slideIndex += n);
}
/* Recebe a div clicada e chama a função para mostrar*/
function divAtual(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("banner");
  var botoes = document.getElementsByClassName("btn-navegacao");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < botoes.length; i++) {
     botoes[i].className = botoes[i].className.replace(" btn-ativado", "");
  }
  x[slideIndex-1].style.display = "block";  
  botoes[slideIndex-1].className += " btn-ativado";
}

