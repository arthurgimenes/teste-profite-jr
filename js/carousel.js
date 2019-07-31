$(window).on('load', function() {

    console.log('All assets are loaded')

    var titles  = $("#titles").children('li'),
        dot        = $("#dots").children('span'),
        numtitles = titles.length,
        tempo      = 2000,
        rodar      = setInterval(autoPlay, tempo),
        i            = 0,
        a;

    function imagemSeguinte() {
        titles.eq(i).removeClass('active');
        dot.eq(i).removeClass('active');
        i = ++i === numtitles ? 0 : i;
        titles.eq(i).addClass('active');
        dot.eq(i).addClass('active');
    };
    
    function imagemAnterior() {
        titles.eq(i).removeClass('active');
        dot.eq(i).removeClass('active');
        i = --i === -1 ? numtitles -1 : i;
        titles.eq(i).addClass('active');
        dot.eq(i).addClass('active');
    };
    
    function mudarImagem( i, a ) {
        clearInterval(rodar);

        // remover
        titles.eq(a).removeClass('active');
        dot.eq(a).removeClass('active');

        // adicionar
        titles.eq(i).addClass('active');
        dot.eq(i).addClass('active');
        
        rodar = setInterval(autoPlay, tempo);       
    };
    
    $('.conteudo').hover(function(){
        $('#botoes').fadeIn(200);
        clearInterval(rodar);
    }, function(){
        $('#botoes').fadeOut(200);
        rodar = setInterval(autoPlay, tempo);
    });
    
    $('#anterior, #seguinte').on('click', function (e) {
        e.preventDefault();
        if( this.id === 'seguinte' ) {
            imagemSeguinte();
        } else {
            imagemAnterior();
        }
    });
    
    $('.dot').on('click', function (e) {
        e.preventDefault();

        i = $(this).index();
        a = $('#dots').children('span.active').index();

        mudarImagem( i, a );        
    });
    
    function autoPlay() {
        $('#seguinte').click();
    }

}); 