import React from 'react';
import CardProduct from "./CardProduct";



class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productId: 1,
        }
        this.beforeClick = this.beforeClick.bind(this)
        this.afterClick = this.afterClick.bind(this)
    }

    beforeClick() {
        if (this.state.productId == 1) {
            this.setState({
                productId: 99,
            });
        } else {
            this.setState({
                productId: this.state.productId - 1,
            });
        }
    }

    afterClick() {
        if (this.state.productId == 100) {
            this.setState({
                productId: 1,
            });
        } else {
            this.setState({
                productId: this.state.productId + 1,
            });
        }
    }

    render() {
        return (
            <div id="divRowProducts" class="row align-items-center">
                <div id="divBeforeButton" class="col-1">
                    <span onClick={this.beforeClick} />
                </div>
                <div class="col-sm">
                    <div class="row align-items-center">
                        <span>Produtos</span>
                    </div>
                    <div class="row align-items-center">
                        <div id="divrectangleProducts"></div>
                    </div>
                    <div id="divRowCardProduct" class="row">
                        <div class="col-sm">
                            <CardProduct productId={this.state.productId} />
                        </div>
                        <div class="col-sm">
                            <CardProduct productId={this.state.productId + 1} />
                        </div>
                        <div class="col-sm">
                            <CardProduct productId={this.state.productId + 2} />
                        </div>
                        <div class="col-sm">
                            <CardProduct productId={this.state.productId + 3} />
                        </div>
                    </div>
                </div>
                <div id="divAfterButton" class="col-1">
                    <span onClick={this.afterClick} />
                </div>
            </div>
        );
    }
}

export default Products;
