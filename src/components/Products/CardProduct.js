import React from 'react';
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
            star5: empytStar           
        }
    }

    render() {

        return (
            <div class="card" id="divCardProduct" >
                <img class="card-img-top" src={this.props.objectData.imagem} alt="productFoo" />
                <div id="dicCardBody" class="card-body">
                    <h5 class="card-title">{this.props.objectData.title}</h5>
                    <div class="col-sm">
                        <img class="card-img-top" src={this.state.star} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star2} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star3} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star4} alt="empytStar" />
                        <img class="card-img-top" src={this.state.star5} alt="empytStar" />
                    </div>
                    <p class="card-text">{this.props.objectData.totalPrice}</p>
                    <p class="card-text">{this.props.objectData.promoPrice}</p>
                    <p class="card-text">{this.props.objectData.parcelaPrice}</p>
                    <a href="#" id={this.props.objectData.idProduto} class="btn btn-primary">COMPRAR</a>
                </div>
            </div>

        );
    }
}

export default CardProduct;
