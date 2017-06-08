window.onload = function() {
				 carregarJSON("js/produto.json",produtos.montarProdutos);
                 carrousel.init();

};

var carrousel = (function(){
var mod = {};

mod.init = function(){
    montarCarrousel();
    iniciarCarrousel();
};

function montarCarrousel(){
    var galeria = document.getElementById('galeria');
    var qtdItem = galeria.children.length;
    for(var i = 0;i < qtdItem;i++){
        var item = document.createElement('li');
        item.className = "item";
        var imagem = document.createElement('img');
        if(window.innerWidth <= 640)
        imagem.src = "image/banner/banner" + (i + 1) + "_mobile.jpg";
        else
        imagem.src = "image/banner/banner" + (i + 1) + ".jpg";    
        imagem.alt = "Imagem número " + (i + 1) + " da galeria de imagens";
        item.appendChild(imagem);
        galeria.appendChild(item);
    }
    document.getElementById('indicadores').nextSibling.addEventListener('click',function(){
        voltarItem();
    });
    document.getElementById('carrousel').lastChild.addEventListener('click',function(){
        avancarItem();        
    });
}

function avancarItem(){
    var indices = document.getElementsByName('indicador');
    for(var indice = 0;indice < indices.length;indice++){
           if(indices[indice].checked){
                if(indice === (indices.length - 1)){
                    indice= 0;
                }else{indice++;}
                indices[indice].checked = "checked";
                return;
           } 
    }
}

function voltarItem(){
 var indices = document.getElementsByName('indicador');
    for(var indice = 0;indice < indices.length;indice++){
           if(indices[indice].checked){
                if(indice === 0){
                    indice = indices.length - 1;
                }else{indice--;}
                indices[indice].checked = "checked";
                return;
           } 
    }   
}

function iniciarCarrousel(){
    var indices = document.getElementsByName('indicador');
    for(var i = 0;i < indices.length;i++){    
        (function(x){ 
        setTimeout(
      function(){
        indices[x].checked = true;
        if(x === (indices.length - 1)){
            iniciarCarrousel();
        }
        },i * 6000);})(i);    
}
}
return mod;
})();

function carregarJSON(arquivo,useData) {
                var xhttp;
                if(window.XMLHttpRequest){xhttp = new XMLHttpRequest();}
                else{xhttp = new ActiveXObject("Microsoft.XMLHTTP");}
                xhttp.open("GET",arquivo);
                xhttp.onreadystatechange = function() {
                    if(xhttp.readyState  != 4) {
                            useData(xhttp.readyState);
                }
                    else if(xhttp.readyState == 4 && xhttp.status == 200) {
                        if(typeof(useData) == 'function')
                            useData(xhttp.responseText);
                    }
                    else{
                        useData(false);
                    }
                };
                xhttp.send();
}

var produtos = (function(){
var qtdProdutos = 0,
    indice = 0,
    produtos = document.getElementById('produtos'),
    mod={};
mod.montarProdutos = function(data) {
                if(!data) {
                    produtos.innerHTML = "<span style=margin-left:4%;>Não foram encontrados produtos cadastrados...</span>";
                }
                else if(!isNaN(data) && data != 4) {
                    produtos.innerHTML = "<img src=image/loading.gif></img>";
                }
                else if(data) {
                        produtos.innerHTML = "";
                        data = JSON.parse(data);
                        data.produtos.forEach(function(item,indice) {
                            var lista = document.createElement('div');
                            var imagem = document.createElement('img');
                            var titulo = document.createElement('p');
                            var rank = document.createElement('img');
                            var preco = document.createElement('p');
                            var botao = document.createElement('button');
                            var info = document.createElement('span');
                            indice++;
                            imagem.src = item.image + "calçado" + indice + "_hover.png";
                            imagem.alt = "Imagem de " + item.nome;
                            imagem.title =  item.nome;
                            imagem.className = "img-produto";
                            imagem.setAttribute('data-hover',item.image + "calçado" + indice + "_hover.png");
                            imagem.setAttribute('data-zoom',item.image + "calçado" + indice + "_zoom.png"); 
                            lista.appendChild(imagem);
                                titulo.append(item.nome);
                                titulo.className = "titulo";
                            lista.appendChild(titulo);
                                rank.src = item.image + "estrelas.png";
                            lista.appendChild(rank);
                                if(item.promo)
                                preco.setAttribute('data-old-price',"De: R$ " + String(item.preco_original.toFixed(2)).replace('.',','));
                                preco.setAttribute('data-parcela',"ou até " + item.parcela + "X de " + String((item.preco/item.parcela).toFixed(2)).replace('.',','));
                                preco.append("Por: R$ " + String(item.preco.toFixed(2)).replace('.',','));
                                preco.className = "preco";
                            lista.appendChild(preco);
                                botao.className = "comprar";
                                botao.append("Comprar");
                            lista.appendChild(botao);
                                if(item.promo){
                                   info.className = "info";
                                   info.append("Economize: R$ " + String((item.preco_original - item.preco).toFixed(2)).replace('.',','));
                            lista.appendChild(info);
                            }
                            produtos.appendChild(lista);
                    });
                qtdProdutos = produtos.children.length;
                if(qtdProdutos > 0){
                    setBtnDirections();
                }       
                }
                setViewProduto();
};


function setViewProduto(){
    var imagens = document.querySelectorAll('.img-produto');
    imagens.forEach(function(item){
            var img = document.createElement('img');
            img.src = item.getAttribute('data-zoom');
            img.className = "is-hidden";
            document.getElementById('visualizacao-produto').appendChild(img);
            item.addEventListener('click',function(){

            });
    });
}

function vizualizarProduto(){

}

function setBtnDirections(){
    var containerProdutos = document.getElementById('container-produtos');
    var btnEsq = document.createElement('button');
    btnEsq.className = "direcao is-hidden";
    btnEsq.addEventListener('click',function(){
        mostrarMais(0);
    });
    var btnDir = document.createElement('button');
    btnDir.className = "direcao";
    btnDir.addEventListener('click',function(){
        mostrarMais(1);
    });
    containerProdutos.appendChild(btnEsq);
    containerProdutos.appendChild(btnDir);
}

function mostrarMais(trajeto){
        var max = Math.floor(qtdProdutos/ getProdutosPorIndice());
        var botoes = document.querySelectorAll('.direcao'); 
        if(trajeto === 1){//avançar
            indice++;
            produtos.style.left = "-" + indice * 100  + "%";
            if(indice > 0)
                botoes[0].className = "direcao";
            if(indice === max){
                botoes[1].className = "direcao is-hidden";
            }
        }
        else{//recuo
            produtos.style.left = parseInt(produtos.style.left) + 100 + "%";
            indice--;
            if(indice === 0){
                botoes[0].className = "direcao is-hidden";
                botoes[1].className = "direcao";
            }
        }
}

function getProdutosPorIndice(){
    return window.innerWidth <= 640 ? 3 : 4;
}

return mod;
})();

