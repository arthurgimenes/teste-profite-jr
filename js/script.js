$(document).ready(function() {
    $('#carousel1').carousel({
        interval: 2000
    });

    $.getJSON("https://raw.githubusercontent.com/Leocadio94/teste-profite-jr/master/calcados.json", function(data) {
        var json = JSON.parse(JSON.stringify(data));

        $(".single-items").html("");

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

            $(".single-items").append("<div class='sapato text-center'>" +
                "<img class='img-responsive' src='" + imgHoverUrl + "' alt='Foto do " + titulo + "' />" +
                "<p><b>" + titulo + "</b></p>" +
                "<img class='img-responsive estrelas' src='img/sapatos/estrelas.png' alt='Estrelas' />" +
                "<p> <strike> De: " + precoOriginal + "</strike></p>" + "<p>Por: " + precoAtual + "</p>" +
                "<p>" + maxParcelas + "</p>" + "<p>" + parcela + "</p>" +
                "<button type='button' name='button' class='comprar'>" +
                "<img class='btn pull-left img-responsive' src='img/sapatos/carrinho.png' alt='Icone de Carrinho' />COMPRAR" +
                "</button>" +
                "<div class='economia text-center'>Economize " + economia + "</div>" +
                "</div>");
        });


        $('.single-items').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            prevArrow: "<img class='a-left control-c prev slick-prev' src='../img/sapatos/seta_esquerda.png'>",
            nextArrow: "<img class='a-right control-c next slick-next' src='../img/sapatos/seta_direita.png'>",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    });
});
