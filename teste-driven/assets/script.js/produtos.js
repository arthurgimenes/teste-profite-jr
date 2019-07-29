function dadosProduto(){
    let produto1 = {
        imagem:         "./img/produto.png",
        descricao:      "Tenis couro Puma R968 Q4 V2",
        precoAntigo:    "399,00",
        precoNovo:      "299,00",
        parcelas:       "3",
        valorParcela:   "99,00"
    }
    let produto2 = {
        imagem:         "./img/produto.png",
        descricao:      "Tenis couro Puma R968 Q4 V2",
        precoAntigo:    "399,00",
        precoNovo:      "299,00",
        parcelas:       "3",
        valorParcela:   "99,00"
    }
    let produto3 = {
        imagem:         "./img/produto.png",
        descricao:      "Tenis couro Puma R968 Q4 V2",
        precoAntigo:    "399,00",
        precoNovo:      "299,00",
        parcelas:       "3",
        valorParcela:   "99,00"
    }
    let produto4 = {
        imagem:         "./img/produto.png",
        descricao:      "Tenis couro Puma R968 Q4 V2",
        precoAntigo:    "399,00",
        precoNovo:      "299,00",
        parcelas:       "3",
        valorParcela:   "99,00"
    }
    let produtos = []
    produtos.push(produto1,produto2,produto3,produto4)
    return(JSON.stringify(produtos))
}

function renderizarProdutos(){
    let divEsquerda = $('<div>', {class: 'marginProduto'})
    $(".containerCards").append(divEsquerda)
    let listaProdutos =  JSON.parse(dadosProduto())
    listaProdutos.forEach((function(produto,index){
        let divCards        = $('<div>', {class: 'Cards'})
        let divImg          = $('<img>',{ class:'imagemProdutos', src:produto.imagem})
        let divDescricao    = $('<div>',{class: 'descricaoProdutos'})
        let descricao       = $('<p>'+ produto.descricao+'</p>')
        let precoDe         = $('<p>'+ 'de '+produto.precoAntigo+'</p>')
        let precoPara       = $('<p>'+ 'por '+produto.precoNovo+'</p>').addClass('valorPara')
        let Parcelamento    = $('<p>'+ 'ou em '+produto.parcelas+'x de '+produto.valorParcela+'</p>')
        let btnComprar      = $('<button>',{class:'bntComprar', text:'COMPRAR' })
        let descricaoCompleta = divDescricao.append(descricao,precoDe,precoPara,Parcelamento,btnComprar)
        let produtoCriado   = divCards.append(divImg,descricaoCompleta)
        $(".containerCards").append(produtoCriado)
    }))
    let divDireita= $('<div>', {class: 'marginProduto'})
    $(".containerCards").append(divDireita)

}
renderizarProdutos()