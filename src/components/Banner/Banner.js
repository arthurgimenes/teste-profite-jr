import React from 'react';
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";


class Banner extends React.Component {
    render() {
        return (
            <section id="sectionBanner">
                <div id="carouselExampleIndicators" class="carousel slide hiddenColum" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li id="carouselIndicatorCircle" data-slide-to="0" class="active"></li>
                        <li id="carouselIndicatorCircle" data-slide-to="1"></li>
                        <li id="carouselIndicatorCircle" data-slide-to="2"></li>
                        <li id="carouselIndicatorCircle" data-slide-to="3"></li>

                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block ml-auto mr-right w-50" src={banner1} alt="First slide" />
                            <div class="carousel-caption mr-left w-50">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-50" src={banner2} alt="Second slide" />
                            <div class="carousel-caption ml-auto mr-right w-50">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-50" src={banner3} alt="Third slide" />
                            <div class="carousel-caption ml-auto mr-right w-50">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block ml-auto mr-right w-50" src={banner4} alt="Forth slide" />
                            <div class="carousel-caption mr-left w-50">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                {/*mobile*/}
                <div id="carouselExampleIndicators" class="carousel slide showColumMobile" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li id="carouselIndicatorCircle" data-slide-to="0" class="active"></li>
                        <li id="carouselIndicatorCircle" data-slide-to="1"></li>
                        <li id="carouselIndicatorCircle" data-slide-to="2"></li>
                        <li id="carouselIndicatorCircle" data-slide-to="3"></li>

                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={banner1} alt="First slide" />
                            <div class="carousel-caption ml-auto w-100">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={banner2} alt="Second slide" />
                            <div class="carousel-caption ml-auto  w-100">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={banner3} alt="Third slide" />
                            <div class="carousel-caption ml-auto mr-right w-100">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={banner4} alt="Forth slide" />
                            <div class="carousel-caption w-100">
                                <h5>Nossa especialidade:</h5>
                                <p>experiência de compra.</p>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
        );
    }
}

export default Banner;
