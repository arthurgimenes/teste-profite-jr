import React from 'react';
import CardProduct from "./CardProduct";



class Products extends React.Component {
    render() {
        return (
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <section class="d-block mr-center w-100">
                            <div class="row">
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
                            </div>
                        </section>
                    </div>
                    <div class="carousel-item">
                        <section class="d-block mr-center w-100">
                            <div class="row">
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
                            </div>
                        </section>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

        );
    }
}

export default Products;
