$(document).ready(function(){
    var produto = $('.carrosselnw .content');
    for(var i=0; i<11; i++){
        produto.clone().appendTo('.carrosselnw');
    }
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
            if(pos !== 3 || carrosselWidth === '641px' || carrosselWidth === '778px'){
            value = Number('-'+pos+'02.7');

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
          value = Number('-'+pos+'02.7');

      //Caso torne, mostra últimos itens de acordo com screen size
      }else{
          if(carrosselWidth === '641px' || carrosselWidth === '778px'){
              value = -302.7;
              pos = 3;
          }else{
              value = -202.7;
              pos = 2;
          }
      }
    }
                
    //Aplica novo positionamento
    $('.carrosselnw').css('transform', 'translateX('+value+'%)');       
}