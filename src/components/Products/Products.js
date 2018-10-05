import React from 'react';
import CardProduct from "./CardProduct";



class Products extends React.Component {
    render() {
        return (
            <div class="row align-items-center">
                <div id="divBeforeButton" class="col-1">
                    <span />
                </div>
                <div class="col-sm">
                    <CardProduct />
                </div>
                <div class="col-sm">
                    <CardProduct />
                </div>
                <div class="col-sm">
                    <CardProduct />
                </div>
                <div class="col-sm">
                    <CardProduct />
                </div>
                <div id="divAfterButton" class="col-1">
                    <span />
                </div>
            </div>
        );
    }
}

export default Products;
