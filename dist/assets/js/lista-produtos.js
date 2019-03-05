var loja, k, x = "";

loja = {
	"produtos":[
	{
		"titulo":"TÊNIS COURO PUMA R698 Q4 V2",
		"rating":30,
		"price_start":299,
		"price":399,
		"parcel":"ou em 3x de R$ 133,00",              
	},
	{
		"titulo":"TÊNIS COURO PUMA R698 Q4 V2",
		"rating":30,
		"price_start":299,
		"price":399,
		"parcel":"ou em 3x de R$ 133,00",
	},
	{
		"titulo":"TÊNIS COURO PUMA R698 Q4 V2",
		"rating":30,
		"price_start":299,
		"price":399,
		"parcel":"ou em 3x de R$ 133,00",
	},
	{
		"titulo":"TÊNIS COURO PUMA R698 Q4 V2",
		"rating":30,
		"price_start":299,
		"price":399,
		"parcel":"ou em 3x de R$ 133,00",
	},
	]

}

for (k in loja.produtos) {

	x += '<div class="box-produto-item">';
	x += '<div class="box-produto-image">';
	x += '<img src=\"assets/media/images/tenis-couro-puma.png\" alt=\"Tênis Couro Puma R698 Q4 V2\" height=\"150\">';
	x += '</div>';
	x += '<div class="box-produto-description">';
	x += '<h3>' + loja.produtos[k].titulo + '</h3>';
	x += '<p class=\"rating\"><img src="assets/media/images/rating.png" alt="Avaliação do Produto"></p>';
	x += '<p class=\"price-start\">de R$ ' + loja.produtos[k].price_start + ',00</p>';
	x += '<p class=\"price-end\">por R$ ' + loja.produtos[k].price + ',00</p>';
	x += '<p class=\"price-financing\">' + loja.produtos[k].parcel + '</p>';
	x += '<button class=\"btn-comprar\" alt=\"Comprar\"> Comprar</button></p>';
	x += '</div>';
	x += '</div>';
}

document.querySelector(".lista-produtos").innerHTML = x;