$(document).ready(function() {
    $('#carousel1').carousel({
        interval: 2000
    });
    $.getJSON("https://raw.githubusercontent.com/Leocadio94/teste-profite-jr/master/calcados.json", function(data) {
        var json = JSON.parse(JSON.stringify(data));
        var i = 0;

        $(".single-items").html("");

        $(json.calcados).each(function() {
            i++;

            var idSapato = "sapato"+i;
            var titulo = this.titulo;
            var precoOriginal = this.precoOriginal;
            var precoAtual = this.precoAtual;
            var maxParcelas = this.maxParcelas;
            var parcela = this.parcela;
            var economia = this.economia;
            var imgUrl = this.imgUrl;
            var imgHoverUrl = this.imgHoverUrl;
            var imgZoomUrl = this.imgZoomUrl;

            var postPrecoOriginal = "<br>";

            if (precoOriginal !== "") {
              postPrecoOriginal = "<p> <i> <strike> De: " + precoOriginal + "</strike></i></p>";
            }

            $(".single-items").append("<div class='sapato text-center'>" +
                "<img id='"+idSapato+"' class='img-responsive' src='" + imgHoverUrl + "' alt='Foto do " + titulo + "' />" +
                "<p><b>" + titulo + "</b></p>" +
                "<img class='img-responsive estrelas' src='img/sapatos/estrelas.png' alt='Estrelas' />" +
                postPrecoOriginal + "<p><span>Por: " + precoAtual + "</span></p>" +
                "<p><i>ou <span>até " + maxParcelas + "X</span> de <span>" + parcela + "</span></i></p>" +
                "<button type='button' name='button' class='comprar'>" +
                "<img class='btn pull-left img-responsive' src='img/sapatos/carrinho.png' alt='Icone de Carrinho' />COMPRAR" +
                "</button>" +
                "<div class='economia text-center'>Economize " + economia + "</div>" +
                "</div>");

            $("#"+idSapato).click(function(){
                  $(".modal-body").html("<img class='img-responsive' src='"+imgZoomUrl+"' alt='Imagem Zoom' style='margin: 0 auto;'/>");
                  $('#myModal').modal('show');
            });
        });


        $('.single-items').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            autoplay: true,
            prevArrow: "<img class='a-left control-c prev slick-prev' src='./img/sapatos/seta_esquerda.png'>",
            nextArrow: "<img class='a-right control-c next slick-next' src='./img/sapatos/seta_direita.png'>",
            responsive: [{
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4
                }
            },{
                breakpoint: 1360,
                settings: {
                    slidesToShow: 4
                }
            },{
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4
                }
            },{
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
