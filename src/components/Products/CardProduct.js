import React from 'react';
import Product1 from "../../assets/product1.png"
import empytStar from "../../assets/empyt_star.png"
import fullStar from "../../assets/full_star.png"



class CardProduct extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            star: fullStar,
            star2: empytStar,
            star3: empytStar,
            star4: empytStar,
            star5: empytStar,
        }
    }


    render() {

        return (
            <div class="card" id="divCardProduct" >
                <img class="card-img-top" src={Product1} alt="productFoo" />
                <div id="dicCardBody" class="card-body">
                    <h5 class="card-title">TÊNIS COURO PUMA R698 {this.props.productId}</h5>
                    <div class="col-sm">
                        <img class="card-img-top" src={this.state.star} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star2} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star3} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star4} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star5} alt="empytStar" />
                    </div>
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
