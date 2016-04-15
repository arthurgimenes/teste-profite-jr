$(document).ready(function() {
    $('#carousel1').carousel({
        interval: 2000
    });
    $('#carousel2').carousel({
        interval: 40000
    });
    $.getJSON("https://raw.githubusercontent.com/Leocadio94/teste-profite-jr/master/calcados.json", function(data) {
            var json = JSON.parse(JSON.stringify(data));

            $(json.calcados).each(function() {
                    var titulo = this.titulo;
                    var precoOriginal = this.precoOriginal;
                    var precoAtual = this.precoAtual;
                    var maxParcelas = this.maxParcelas;
                    var parcela = this.parcela;
                    var economia = this.economia;
                    var imgUrl = this.imgUrl;
                    var imgHoverUrl = this.imgHoverUrl;
                    var imgZoomUrl = this.imgZoomUrl;

                    console.log(titulo + " - " + precoOriginal + " - " + precoAtual + " - " +
                        maxParcelas + " - " + parcela + " - " + economia + " - " +
                        imgUrl + " - " + imgHoverUrl + " - " + imgZoomUrl);

                    $("#carousel2 .carousel-inner").append("<div class='item'>" +
                        "<div class='center-block text-center sapato'>" +
                        "<img class='img-responsive' src='"+imgHoverUrl+"' alt='Foto do "+titulo+"' />" +
                        titulo + " - " + precoOriginal + " - " + precoAtual + " - " +
                        maxParcelas + " - " + parcela + " - " + economia +
                        "<button type='button' name='button' class='comprar'>"+
                        "<img class='btn pull-left img-responsive' src='img/sapatos/carrinho.png' alt='Icone de Carrinho' />Comprar" +
                        "</button>"+
                        "</div>" +
                        "</div>");
            });

    });
});
