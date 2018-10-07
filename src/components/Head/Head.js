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
            <div class="row align-items-center">
                <div id="divLogoProfite" class="col-3">
                    <img src={profiteLogo} alt="profite" />
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
                    <img  src={userPhoto} alt="userPhoto" />
                    <span>Minha Conta</span>
                </div>
                <div id="divCarShopping" class="col-md-auto">
                    <button>
                        <img src={shoppingCart} alt="shoppingCart" />
                        <span class="navbar-toggler-icon">5</span>
                    </button>
                </div>
                <div  class="col-md-auto">
                    <div id="divRectangleHorizontalMenu" />
                </div>
                <div id="divButtonFlag" class="col-md-auto">
                    <button><img src={brasilFlag} alt="brasilFlag" /></button>
                    <button><img src={spainFlag} alt="spainFlag" /></button>
                    <button><img src={britainFlag} alt="britainFlag" /></button>
                </div>
            </div>
        );
    }
}

export default Head;
