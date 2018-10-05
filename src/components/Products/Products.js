import React from 'react';
import CardProduct from "./CardProduct";



class Products extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            productId: 1,
        }
        this.beforeClick = this.beforeClick.bind(this)
        this.afterClick = this.afterClick.bind(this)
    }

    beforeClick(){
        this.setState({
            productId: this.state.productId-1,
        });
    }

    afterClick(){
        this.setState({
            productId: this.state.productId+1,
        });
    }

    render() {
        return (
            <div class="row align-items-center">
                <div id="divBeforeButton" class="col-1">
                    <span onClick={this.beforeClick} />
                </div>
                <div class="col-sm">
                    <CardProduct productId={this.state.productId}/>
                </div>
                <div class="col-sm">
                    <CardProduct productId={this.state.productId+1}/>
                </div>
                <div class="col-sm">
                    <CardProduct productId={this.state.productId+2}/>
                </div>
                <div class="col-sm">
                    <CardProduct productId={this.state.productId+3}/>
                </div>
                <div id="divAfterButton" class="col-1">
                    <span onClick={this.afterClick} />
                </div>
            </div>
        );
    }
}

export default Products;
