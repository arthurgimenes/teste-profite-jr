$(document).ready(function() {
    $('.single-items').slick({
        infinite: true,
        speed: 300,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true
    });
    $('#carousel1').carousel({
        interval: 2000
    });
    $('#carousel2').carousel({
        interval: 40000
    });
    $.getJSON("https://raw.githubusercontent.com/Leocadio94/teste-profite-jr/master/calcados.json", function(data) {
        var json = JSON.parse(JSON.stringify(data));

        $("#sapatos-item").html("");

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

            $("#sapatos-item").append("<div class='center-block text-center col-md-3 col-xs-3 sapato'>" +
                "<img class='img-responsive' src='" + imgHoverUrl + "' alt='Foto do " + titulo + "' />" +
                titulo + " - " + precoOriginal + " - " + precoAtual + " - " +
                maxParcelas + " - " + parcela + " - " + economia +
                "<button type='button' name='button' class='comprar'>" +
                "<img class='btn pull-left img-responsive' src='img/sapatos/carrinho.png' alt='Icone de Carrinho' />Comprar" +
                "</button>" +
                "</div>" +
                "</div>");
        });

    });
});
