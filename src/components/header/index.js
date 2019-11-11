import React from "react";
import { Main, Search, Side } from "./styles";

import Logo from "../../img/logo.svg";
import Magnifier from "../../img/Iconmagnifier.svg";
import Profile from "../../img/Iconprofile.svg";
import Cart from "../../img/cart.svg";
import PTBR from "../../img/PTBR.svg";
import ES from "../../img/ES.svg";
import EN from "../../img/EN.svg";

export default function Header() {
  return (
    <Main>
      <img src={Logo} alt="profite-logo" />
      <Search>
        <input type="text" placeholder="O que está procurando?" />
        <img src={Magnifier} alt="" />
      </Search>
      <Side>
        <li className="profile">
          <img src={Profile} alt="profile" />
          Minha Conta
        </li>
        <li className="cart">
          <img src={Cart} alt="" />1
        </li>

        <li className="language">
          <img src={PTBR} alt="" />
          <img src={ES} alt="" />
          <img src={EN} alt="" />
        </li>
      </Side>
    </Main>
  );
}
