import React from 'react';
import Product1 from "../../assets/product1.png"


class CardProduct extends React.Component {
    render() {
        return (
            <div class="card" id="divCardProduct" >
                <img class="card-img-top" src={Product1} alt="productFoo" />
                <div class="card-body">
                    <h5 class="card-title">TÊNIS COURO PUMA R698 Q4 V2</h5>
                    <p class="card-text">de R$ 299,00</p>
                    <p class="card-text">por R$ 399,00</p>
                    <p class="card-text">ou em 3x de R$ 133,00</p>
                    <a href="#" class="btn btn-primary">COMPRAR</a>
                </div>
            </div>

        );
    }
}

export default CardProduct;
