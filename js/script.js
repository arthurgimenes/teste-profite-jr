//FUNCIONALIDADE MENU
function slidertoggle(){
    var slider = document.querySelector('.menu-mobile');
    slider.style.height = window.innerHeight - 120 + "px";

    if(slider.style.left == '0px'){
        slider.style.left = "-250px";
    }else{
        slider.style.left = "0px";
    }
}
//FUNCIONALIDADE MENU

$(document).ready(function(){
  
    //FUNCIONALIDADE SLIDESHOW
    //FUNCIONALIDADE SLIDESHOW
    var imgItens = $('.slider li').length; //Verifica quantidade de imagens que tem na página
    var imgPos = 1;

    //Adicionando a paginação
    for(i = 1; i <= imgItens; i++){
        $('.pagination').append('<li><span class="fas fa-circle"></span></li>');
    }
    
    $('.slider li').hide(); //Esconder todos os sliders assim que carrega a página
    $('.slider li:first-child').show(); //Mostrar apenas o primeiro slider
    $('.pagination li:first').css({'color': '#FF9F1C'}); // Estilo para o primeiro item da paginação


    // Executar funções
    //Ao clicar na paginação ele envia para o slide respectivo
    $('.pagination li').click(pagination);
    //Ao clicar nas flechas envia para o prox ou slide anterior
    $('.next-right span').click(nextSlider);
    $('.next-left span').click(prevSlider);


    setInterval(function(){
        nextSlider();
    },4000);

    //FUNÇÕES
    function pagination(){
        var paginationPos = $(this).index() + 1;
        $('.slider li').hide();
        $('.slider li:nth-child('+paginationPos+')').fadeIn();
        $('.pagination li').css({'color': '#BDBDBD'});
        $(this).css({'color': '#FF9F1C'});

        imgPos = paginationPos;
    }

    function nextSlider(){
        if(imgPos >= imgItens){
            imgPos = 1;
        }else{
            imgPos ++;
        }
        $('.slider li').hide();
        $('.slider li:nth-child('+imgPos+')').fadeIn();
        $('.pagination li').css({'color': '#BDBDBD'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#FF9F1C'});
    }
    
    function prevSlider(){
        if(imgPos <= 1){
            imgPos = imgItens;
        }else{
            imgPos --;
        }
        $('.slider li').hide();
        $('.slider li:nth-child('+imgPos+')').fadeIn();
        $('.pagination li').css({'color': '#BDBDBD'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#FF9F1C'});
    }
    //FUNCIONALIDADE SLIDESHOW
    //FUNCIONALIDADE SLIDESHOW
});





     






