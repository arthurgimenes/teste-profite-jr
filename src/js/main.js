axios.get("/produtos.json").then(function(response) {
  var produtos = response.data;
  var div = document.querySelector("#produtos");
  console.log(response.data);
  produtos.forEach(function(itemProduto) {
    div.innerHTML += `<div class="swiper-slide item-produto"><img class="img-produto" src="img/produto.png" alt="Tênis da marca Puma" />
    <p class="desc-produto">${itemProduto.nome}</p>
    <div class="avaliacao"><span class="fa fa-star-o checked"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span></div>
    <div class="preco">
      <p class="antigo">de R$ ${itemProduto.valorAnterior},00</p>
      <p class="novo">por R$ ${itemProduto.valorAtual},00</p>
      <p class="parcela">ou em 3x de R$ ${(itemProduto.valorAtual / 3).toFixed(
        2
      )}</p><button><img src="img/add-to-cart.png" alt="Carrinho de compras com simbolo mais"/>comprar</button></div>
    </div>`;
  });
  var sliderProdutos = new Swiper(".swiper-produtos", {
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: ".produtos-button-next",
      prevEl: ".produtos-button-prev"
    },
    pagination: {
      el: ".produtos-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 4
      }
    }
  });
});

var swiper = new Swiper(".swiper-banner", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev"
  },
  pagination: {
    el: ".banner-pagination",
    clickable: true
  }
});
