$(document).ready(function(){
  if($(window).width() <768){
    $('.carrosselnw').css({"-webkit-transform":"translate(2)"});
  }else{
    $('.carrosselnw').css({"-webkit-transform":"translate(0)"});
  }
});
style="transform: translateX(0)"
//Gera itens do carrossel
function seedCarrossel(arr){
    var produtosJson = JSON.stringify(arr);
    var produtos = JSON.parse(produtosJson);
    var carrosselHtml = '';
    var economia;
    //Constrói itens
    for(var i=0; i<produtos.length; i++){
        carrosselHtml += '<div class="col-lg-3 col-md-3 col-sm-4 col-xs-4 content">';
        carrosselHtml += '<div class="thumbnail"><a>';
        carrosselHtml += '<img src="'+produtos[i].img+'" alt="'
                       +produtos[i].nome+'" data-toggle="modal" data-target="#tenis"/>';
        carrosselHtml += '<div class="caption">';
        carrosselHtml += '<h4>'+produtos[i].nome+'</h4>';
        carrosselHtml += '<img src="./public/sapatos/estrelas.png"/><br />';
        carrosselHtml += '<span class="preco-original">';
        if(produtos[i].precoOriginal !== produtos[i].precoPromocao){
          carrosselHtml += '<i>De: R$ <span>'+produtos[i].precoOriginal.toString().replace(".", ",")+'</span></i>';
        }
        carrosselHtml += '</span><br /><p class="preco-desconto"><b>Por: <i>R$ <span>'
                         +produtos[i].precoPromocao.toString().replace(".", ",")+'</span></i></b></p>';
        carrosselHtml += '<p class="preco-parcelado"><i>ou <b>até 3X</b> de <b>R$ '
                         +(produtos[i].precoPromocao/3).toFixed(2).toString().replace(".", ",")+'</b></i></p>';
        carrosselHtml += '<button class="comprarBtn"><img src="./public/sapatos/carrinho.png" alt="icone carrinho">COMPRAR</button><br />';
        carrosselHtml += '<span class="preco-economia">Economize: R$ '
                         +(produtos[i].precoOriginal - produtos[i].precoPromocao).toFixed(2).toString().replace(".", ",")+'</span>';
        carrosselHtml += '</div></a></div></div>';
    }
    //Adiciona itens a html
    $(".carrosselnw").html(carrosselHtml);
}

//Muda imagem de modal ao clicar
$('.thumbnail > a img').on('click', function() {
  var image = $(this).attr("src");
  image = image.replace('hover', 'zoom');
  $('.modal-body > img').attr("src", image);
});

//Inicializa posição de carrossel
var pos = 0;

//Volta a posição zero em resize, para evitar bugs no carrossel
$(window).resize(function(){
    $('.carrosselnw').css('transform', 'translateX(0%)');
    pos = 0;   
})

//Mostra itens de acordo com width
function move(btn){
                
    var value = 0;
    var carrosselWidth = $('.carrosselTenis').css('width');

    //Verifica se deve avançar ou voltar
    if($(btn).attr('class').toString() === 'btnCtrlNext'){
      pos++;

        //Se não estiver no limite...
        if(pos !== 4){

            // Se não estiver nos últimos itens de desktop(pos3) 
            // ou mobile/tablet(carrosselWidth), continua.
            if(pos !== 3 || carrosselWidth === '630px' || carrosselWidth === '778px'){
            value = Number('-'+pos+'00');

            //Caso contrário, volta ao início
            }else{
                value = 0;
                pos = 0;
            }

        //Se estiver no limite, volta ao começo
        }else{
            value = 0;
            pos = 0;
        }
    }else{
      pos--;

      //Se primeiro clique não tornar pos negativo
      if(pos !== -1){
          value = Number('-'+pos+'00');

      //Caso torne, mostra últimos itens de acordo com screen size
      }else{
          if(carrosselWidth === '630px' || carrosselWidth === '778px'){
              value = -300;
              pos = 3;
          }else{
              value = -200;
              pos = 2;
          }
      }
    }
    //Aplica novo positionamento
    $('.carrosselnw').css('transform', 'translateX('+value+'%)');       
}