$.ajax({
	url: 'assets/js/produtos.json',
	type: 'GET',
	success: function(produtos){
		console.log(produtos);

		var k , x = '';

		for (k in produtos) {

			x += '<div class="item">';
			x += '<div class="box-produto-item">';
			x += '<figure class="box-produto-image">';
			x += '<img src=\"assets/media/images/tenis-couro-puma.png\" alt=\"Tênis Couro Puma R698 Q4 V2\" height=\"150\">';
			x += '</figure>';

			x += '<div class="box-produto-description">';
			x += '<h3>' + produtos[k].titulo + '</h3>';
			x += '<p class=\"rating\"><img src="assets/media/images/rating.png" alt="Avaliação do Produto"></p>';
			x += '<p class=\"price-start\">de R$ ' + produtos[k].price_start + ',00</p>';
			x += '<p class=\"price-end\">por R$ ' + produtos[k].price + ',00</p>';
			x += '<p class=\"price-financing\">' + produtos[k].parcel + '</p>';
			x += '<button class=\"btn-comprar\" alt=\"Comprar\"> Comprar</button>';
			x += '</div>';
			x += '</div>';
			x += '</div>';
		}


		$(".lista-produtos").html(x);
	}
});
