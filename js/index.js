$(document).ready(() => {
  var items;

  $('#carousel-large').carousel({
    interval: 5000
  });

  $('#carousel-small').carousel({
    interval: 5000
  });

  $.getJSON('http://localhost:3000/calcados.json', (data) => {
    items = data.calcados;
    //Dá append com todos os produtos do json.
    appendProducts(items);
  });

  //Lógica das setas dos produtos para as telas menores.
  $('#right-arrow').click(function () {
    if ($('#product-3').hasClass('hidden-sm')) {
      $('#product-0').addClass('hidden-sm hidden-xs');
      $('#product-1').addClass('hidden-sm hidden-xs');
      $('#product-2').addClass('hidden-sm hidden-xs');
      $('#product-3').removeClass('hidden-sm hidden-xs');  
    }
  });

  $('#left-arrow').click(function () {
    if (!($('#product-3').hasClass('hidden-sm'))) {
      $('#product-0').removeClass('hidden-sm hidden-xs');
      $('#product-1').removeClass('hidden-sm hidden-xs');
      $('#product-2').removeClass('hidden-sm hidden-xs');
      $('#product-3').addClass('hidden-sm hidden-xs');  
    }
  });
});

function appendProducts(items) {
  for (var i = 0; i < items.length; i++) {
    var precoParcela = (items[i].precoAtual / items[i].parcelas).toFixed(2).toString();
    var precoAtual = items[i].precoAtual.toString().replace('.',',');
    var precoOriginal = '';
    var classes = i == 3 ? 'hidden-sm hidden-xs col-xs-12 col-sm-4 col-md-3 product' : 'col-xs-4 col-sm-4 col-md-3 product';
    if (items[i].precoOriginal != 0) {
      precoOriginal = `<span class="preco-original"><small><i>De: R$ ${items[i].precoOriginal.toFixed(2).toString().replace('.',',')}</i></small></span>`;
    }
    $('#products').append(
      `<div id="product-${i.toString()}" class="${classes}">
        <img id="product-img-${i.toString()}" class="product-img" onclick="$('#modal-${i.toString()}').css('display','block')" src="/img/${items[i].hover}">
        <div id="modal-${i.toString()}" class="modal">
          <span class="close" onclick="document.getElementById('modal-${i.toString()}').style.display='none'">
            <img src="/img/fechar.png">
          </span>
          <img class="modal-content" src="/img/${items[i].zoom}">
        </div>
        <span class="name"><b>${items[i].nome}</b></span>
        <img src="/img/estrelas.png">
        <div>
          ${precoOriginal}
          <span>
            <b>Por R$ ${precoAtual}</b>
          </span>
          <span>
            <i>ou <b>até ${items[i].parcelas.toString()}X</b> de <b>R$ ${precoParcela.replace('.',',')}</b></i>
          </span>
        </div>
        <button class="btn btn-buy">
          <div class="col-xs-1">
            <img src="/img/carrinho.png">
          </div>
          <span class="col-xs-11">
            <b>COMPRAR</b>
          </span>
        </button>
        <div class="economize">
          <span>
            <small>Economize: R$ ${items[i].economize.toString().replace('.',',')}</small>
          </span>  
        </div>
      </div>`
    );
    //Configura botão fechar do zoom dos produtos;
    $(`.close`).click(function () {
      $(`#modal-${i.toString()}`).css('display', 'none');          
    });
  }
}