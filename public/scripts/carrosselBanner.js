$(document).ready(function(){

  //Variáveis
  var imgs = $('.carousel-inner img');
  var length = imgs.length;

  //Se tela não é mobile, substitui por imagens maiores
  if($(window).width()>767){
    mudaImagensCarrossel('not-mobile')
  }

  //Muda imagem ao mudar screen-size
  $(window).resize(function(){
    if($(window).width() < 768){
      mudaImagensCarrossel('mobile');
      return;
    }
    mudaImagensCarrossel('not-mobile');
  });

  //Muda imagem para versão mobile ou desktop
  function mudaImagensCarrossel(size){
    if(size === 'mobile'){
      for(var i=0; i<length; i++){
        $(imgs[i]).attr("src","./public/img/banner/banner"+(i+1)+"_mobile.jpg");
      }
      return;
    }
    for(var i=0; i<length; i++){
      $(imgs[i]).attr("src","./public/img/banner/banner"+(i+1)+".jpg");
    }
  }
  
});