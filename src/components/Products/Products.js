import React from 'react';
import CardProduct from "./CardProduct";
import Product1 from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";
import Product3 from "../../assets/product3.png";
import Product4 from "../../assets/product4.png";
import Product5 from "../../assets/product5.png";
import Product6 from "../../assets/product6.png";
import Product7 from "../../assets/product7.png";
import Product8 from "../../assets/product8.png";
import Product9 from "../../assets/product9.png";
import Product10 from "../../assets/product10.png";
import Product11 from "../../assets/product11.png";
import Product12 from "../../assets/product12.png";

var jsonProducts = [
    {
        imagem: Product1,
        title: "TÊNIS GIRO CINZA Q4 V2",
        numberStar: "1",
        totalPrice: "de R$ 599,00",
        promoPrice: "por R$ 499,00",
        parcelaPrice: "ou em 3x de R$ 201,00",
        idProduto: "1"

    },
    {
        imagem: Product2,
        title: "TÊNIS NIKE WHITE Q4 V2",
        numberStar: "1",
        totalPrice: "de R$ 699,00",
        promoPrice: "por R$ 599,00",
        parcelaPrice: "ou em 3x de R$ 271,00",
        idProduto: "2"

    },
    {
        imagem: Product3,
        title: "TÊNIS STORM BLACK Q4 V2",
        numberStar: "1",
        totalPrice: "de R$ 299,00",
        promoPrice: "por R$ 199,00",
        parcelaPrice: "ou em 3x de R$ 71,00",
        idProduto: "3"

    },
    {
        imagem: Product4,
        title: "TÊNIS WHITE FULL Q4 V2",
        numberStar: "1",
        totalPrice: "de R$ 199,00",
        promoPrice: "por R$ 99,00",
        parcelaPrice: "ou em 3x de R$ 71,00",
        idProduto: "4"

    },
    {
        imagem: Product5,
        title: "TÊNIS LISTRADO COM FORRO",
        numberStar: "1",
        totalPrice: "de R$ 299,00",
        promoPrice: "por R$ 199,00",
        parcelaPrice: "ou em 3x de R$ 121,00",
        idProduto: "5"

    },
    {
        imagem: Product6,
        title: "TÊNIS MARROM COM DETALHE",
        numberStar: "1",
        totalPrice: "de R$ 899,00",
        promoPrice: "por R$ 599,00",
        parcelaPrice: "ou em 3x de R$ 191,00",
        idProduto: "6"

    },
    {
        imagem: Product7,
        title: "PALMILHA PRETA VERMELHA",
        numberStar: "1",
        totalPrice: "de R$ 99,00",
        promoPrice: "por R$ 79,00",
        parcelaPrice: "ou em 3x de R$ 32,00",
        idProduto: "7"

    },
    {
        imagem: Product8,
        title: "TÊNIS DOURADO PRATEADO",
        numberStar: "1",
        totalPrice: "de R$ 1299,00",
        promoPrice: "por R$ 1199,00",
        parcelaPrice: "ou em 3x de R$ 441,00",
        idProduto: "8"

    },
    {
        imagem: Product9,
        title: "SALTO MODELO GTA",
        numberStar: "1",
        totalPrice: "de R$ 799,00",
        promoPrice: "por R$ 699,00",
        parcelaPrice: "ou em 3x de R$ 299,00",
        idProduto: "9"

    },
    {
        imagem: Product10,
        title: "SALTO FEITO EM CG",
        numberStar: "1",
        totalPrice: "de R$ 499,00",
        promoPrice: "por R$ 399,00",
        parcelaPrice: "ou em 3x de R$ 170,00",
        idProduto: "10"

    },
    {
        imagem: Product11,
        title: "TÊNIS HOKA VERDE-AGUA",
        numberStar: "1",
        totalPrice: "de R$ 299,00",
        promoPrice: "por R$ 199,00",
        parcelaPrice: "ou em 3x de R$ 80,00",
        idProduto: "11"

    },
    {
        imagem: Product12,
        title: "SOCIAL DO HOMEM ARANHA",
        numberStar: "1",
        totalPrice: "de R$ 799,00",
        promoPrice: "por R$ 699,00",
        parcelaPrice: "ou em 3x de R$ 251,00",
        idProduto: "12"

    },

]

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(jsonProducts[Math.floor(Math.random() * 11)])
    }



    render() {
        return (
            <div id="divRowProducts" class="row align-items-center">
                <div id="divBeforeButton" class="col-1">
                    <span href="#carouselExampleControls" role="button" data-slide="prev" />
                </div>
                <div class="col-sm">
                    <div class="row align-items-center">
                        <div class="col-sm">
                            <span>Produtos</span>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm">
                            <div id="divrectangleProducts"></div>
                        </div>
                    </div>
                    <div id="carouselExampleControls" class="carousel slide row align-items-center" data-interval="false" data-ride="carousel">
                        <div class="carousel-inner">
                            <div id="divRowCarousel" class="carousel-item active">
                                <div class="row">
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                </div>
                            </div>
                            <div id="divRowCarousel" class="carousel-item">
                                <div class="row">
                                    <div class="col-sm ">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                </div>
                            </div>
                            <div id="divRowCarousel" class="carousel-item">
                                <div class="row">
                                    <div class="col-sm ">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                </div>
                            </div>
                            <div id="divRowCarousel" class="carousel-item">
                                <div class="row">
                                    <div class="col-sm ">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                    <div class="col-sm">
                                        <CardProduct objectData={jsonProducts[Math.floor(Math.random() * 12)]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="divAfterButton" class="col-1" >
                    <span href="#carouselExampleControls" role="button" data-slide="next" />
                </div>
            </div>
        );
    }
}

export default Products;
