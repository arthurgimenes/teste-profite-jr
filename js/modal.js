
function abreModal(index){
  var modal = document.getElementById('modalZoom'+index);
  
  //Mostra modal
  modal.style.display = "block";

  //Caso usuário clicar fora do modal o mesmo é "fechado"
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

//Clicando no span(x) fecha o modal
function fecharModal(index){
  var modal = document.getElementById('modalZoom'+index);
  modal.style.display = "none";
}







