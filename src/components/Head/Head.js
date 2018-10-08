import React from 'react';
import profiteLogo from "../../assets/logo_profite.png";
import magnifyinGlass from "../../assets/magnifying_glass.png";
import userPhoto from "../../assets/user_photo.png";
import shoppingCart from "../../assets/shopping_cart.png";
import brasilFlag from "../../assets/brasil_flag.png";
import spainFlag from "../../assets/spain_flag.png";
import britainFlag from "../../assets/britain_flag.png";

class Head extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
                <button id="buttonNavBarMobile" class="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div id="divLogoProfite" class="col-2 " >
                    <img src={profiteLogo} alt="profite" />
                </div>
                <div id="divCarShopping" class="col-3 navbar-toggler">
                    <button>
                        <img src={shoppingCart} alt="shoppingCart" />
                        <span class="navbar-toggler-icon">5</span>
                    </button>
                </div>
                <div id="divInputHead" class="col-sm">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="O que está procurando?" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                <img src={magnifyinGlass} alt="magnifyinGlass" />
                            </button>
                        </div>
                    </div>
                </div>

                <div id="divRightUserPhoto" class="col-md-auto">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <img src={userPhoto} alt="userPhoto" />
                                <span>Minha Conta</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div  class="col-md-auto hiddenColum" id="divCarShopping">
                    <button>
                        <img src={shoppingCart} alt="shoppingCart" />
                        <span class="navbar-toggler-icon">5</span>
                    </button>
                </div>

                <div class="col-md-auto hiddenColum">
                    <div class="navbar collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <div id="divRectangleHorizontalMenu" />
                            </li>
                            <li class="nav-item">
                                <a href=""><img src={britainFlag} alt="britainFlag" /></a>
                            </li>
                            <li class="nav-item">
                                <a href=""><img src={brasilFlag} alt="brasilFlag" /></a>
                            </li>
                            <li class="nav-item">
                                <a href=""><img src={spainFlag} alt="spainFlag" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Head;
        /*
        
 <nav class="bqg">
                    <div class="bqa">
                        <button class="bow boy bqb" type="button" data-toggle="collapse" data-target="#nav-toggleable-md">
                            <span class="adp">Toggle nav</span>
                        </button>
                        <a class="bqc brd" href="index.html">
                            <span class="bv bhc bqd"></span>
                        </a>
                    </div>

                    <div class="collapse bpd" id="nav-toggleable-md">
                        <div id="divInputHead" class="col-sm">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="O que está procurando?" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                                        <img src={magnifyinGlass} alt="magnifyinGlass" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                */