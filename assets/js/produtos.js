var dadosJSON = {
    "produtos": [

        {
        "nome": "Sandália Ferracini Ecologic",
        "de": "",
        "por": "R$ 95,92",
        "parcelas": "4x",
        "valorParcela": "R$ 23,98",
        "imgProduto": "assets/img/sapatos/calçado1.png",
        "imgHover": "assets/img/sapatos/calçado1_hover.png",
        "imgModal": "assets/img/sapatos/calçado1_zoom.png",
        "classificacao": "assets/img/sapatos/estrelas.png",
        "economize": "R$ 43,98",
        "buy": "assets/img/sapatos/carrinho.png"
        }              
    ], 

    "produtos1": [

    	{	        
        "nome": "Chinelo Kildare",
        "de": "R$ 99,90",
        "por": "R$ 79,92",
        "parcelas": "3x",
        "valorParcela": "R$ 26,64",
        "imgProduto": "assets/img/sapatos/calçado2.png",
        "imgHover": "assets/img/sapatos/calçado2_hover.png",
        "imgModal": "assets/img/sapatos/calçado2_zoom.png",
        "economize": "R$ 19,98"        
   		}
    ],

    "produtos2": [

        {
        "nome": "Tênis Ferracini Week",
        "de": "R$ 229,90",
        "por": "R$ 183,92",
        "parcelas": "9x",
        "valorParcela": "R$ 20,43",
        "imgProduto": "assets/img/sapatos/calçado3.png",
        "imgHover": "assets/img/sapatos/calçado3_hover.png",
        "imgModal": "assets/img/sapatos/calçado3_zoom.png",
        "economize": "R$ 45,98" 

        }
    ],

    "produtos3": [
        {
        "nome": "Tênis Democrata Fan",
        "de": "R$ 219,90",
        "por": "R$ 159,92",
        "parcelas": "7x",
        "valorParcela": "R$ 22,84",
        "imgProduto": "assets/img/sapatos/calçado4.png",
        "imgHover": "assets/img/sapatos/calçado4_hover.png",
        "imgModal": "assets/img/sapatos/calçado4_zoom.png",
        "economize": "R$ 59,98" 
        } 
    ]


};
							
var div = document.getElementById("prod1");
div.innerHTML = '<br><img class="img-produto" src="' + dadosJSON.produtos[0].imgProduto + '">';
div.innerHTML = '<br><img class="img-hover" src="' + dadosJSON.produtos[0].imgHover + '">';
div.innerHTML += '<br><p class="title bold">' + dadosJSON.produtos[0].nome + '</p>';
div.innerHTML += '<br><div class="stars"><img src="' + dadosJSON.produtos[0].classificacao + '"></div>';
div.innerHTML += '<p class= "precos">Por: <i>' + dadosJSON.produtos[0].por + '</i></p>';
div.innerHTML += '<p class= "precos first-prod"><i> ou até ' + dadosJSON.produtos[0].parcelas  + ' de ' + dadosJSON.produtos[0].valorParcela + '</i></p>';
div.innerHTML += '<div class="buy"><p class="p-buy"><img class="pull-left" src="' + dadosJSON.produtos[0].buy + '">comprar</p></div>';
div.innerHTML += '<div class="prod-economize">Economize: ' + dadosJSON.produtos[0].economize + '</div>';
$("#prod1").click(function(){
    $(".modal-body").html("<img class='img-responsive' src='"+ dadosJSON.produtos[0].imgModal +"'/>");
    $('#prodModal').modal('show');

});
var div = document.getElementById("prod2");
div.innerHTML = '<br><img src="' + dadosJSON.produtos1[0].imgProduto + '">';
div.innerHTML = '<br><img class="img-hover" src="' + dadosJSON.produtos1[0].imgHover + '">';
div.innerHTML += '<br><p class="title bold">' + dadosJSON.produtos1[0].nome + '</p>';
div.innerHTML += '<br><div class="stars"><img src="' + dadosJSON.produtos[0].classificacao + '"> </div>';
div.innerHTML += '<p class= "precos">De: <i>' + dadosJSON.produtos1[0].de + '</i> </p>';
div.innerHTML += '<p class= "precos">Por: <i>' + dadosJSON.produtos1[0].por + '</i> </p>';
div.innerHTML += '<p class= "precos"> <i> ou até ' + dadosJSON.produtos1[0].parcelas  + ' de ' + dadosJSON.produtos1[0].valorParcela + '</i> </p>';
div.innerHTML += '<div class="buy"><p class="p-buy"><img class="pull-left" src="' + dadosJSON.produtos[0].buy + '">comprar</p></div>';
div.innerHTML += '<div class="prod-economize">Economize: ' + dadosJSON.produtos1[0].economize + '</div>';
$("#prod2").click(function(){
    $(".modal-body").html("<img class='img-responsive' src='"+ dadosJSON.produtos1[0].imgModal +"'/>");
    $('#prodModal').modal('show');

});
var div = document.getElementById("prod3");
div.innerHTML = '<br><img src="' + dadosJSON.produtos2[0].imgProduto + '">';
div.innerHTML = '<br><img class="img-hover" src="' + dadosJSON.produtos2[0].imgHover + '">';
div.innerHTML += '<br><p class="title bold">' + dadosJSON.produtos2[0].nome + '</p>';
div.innerHTML += '<br><div class="stars"><img src="' + dadosJSON.produtos[0].classificacao + '"> </div>';
div.innerHTML += '<p class= "precos">De: <i>' + dadosJSON.produtos2[0].de + '</i> </p>';
div.innerHTML += '<p class= "precos">Por: <i>' + dadosJSON.produtos2[0].por + '</i> </p>';
div.innerHTML += '<p class= "precos"><i> ou até ' + dadosJSON.produtos2[0].parcelas  + ' de ' + dadosJSON.produtos2[0].valorParcela + '</i> </p>';
div.innerHTML += '<div class="buy"><p class="p-buy"><img class="pull-left" src="' + dadosJSON.produtos[0].buy + '">comprar</p></div>';
div.innerHTML += '<div class="prod-economize">Economize: ' + dadosJSON.produtos2[0].economize + '</div>';
$("#prod3").click(function(){
    $(".modal-body").html("<img class='img-responsive' src='"+ dadosJSON.produtos2[0].imgModal +"'/>");
    $('#prodModal').modal('show');

});

var div = document.getElementById("prod4");
div.innerHTML = '<br><img src="' + dadosJSON.produtos3[0].imgProduto + '">';
div.innerHTML = '<br><img class="img-hover" src="' + dadosJSON.produtos3[0].imgHover + '">';
div.innerHTML += '<br><p class="title bold">' + dadosJSON.produtos3[0].nome + '</p>';
div.innerHTML += '<br><div class="stars"><img src="' + dadosJSON.produtos[0].classificacao + '"> </div>';
div.innerHTML += '<p class= "precos">De: <i>' + dadosJSON.produtos3[0].de + '</i> </p>';
div.innerHTML += '<p class= "precos">Por: <i>' + dadosJSON.produtos3[0].por + '</i></p>';
div.innerHTML += '<p class= "precos"><i> ou até ' + dadosJSON.produtos3[0].parcelas  + ' de ' + dadosJSON.produtos3[0].valorParcela + '</i> </p>';
div.innerHTML += '<div class="buy"><p class="p-buy"><img class="pull-left" src="' + dadosJSON.produtos[0].buy + '">comprar</p></div>';
div.innerHTML += '<div class="prod-economize">Economize: ' + dadosJSON.produtos3[0].economize + '</div>';
$("#prod4").click(function(){
    $(".modal-body").html("<img class='img-responsive' src='"+ dadosJSON.produtos3[0].imgModal +"'/>");
    $('#prodModal').modal('show');

});

