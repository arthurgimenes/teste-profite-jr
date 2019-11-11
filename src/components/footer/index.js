import React from "react";
import { Main, Address, Contact, Logo } from "./styles";

import Line from "../../img/Line4.png";
import ContactIcon from "../../img/Iconcontact.svg";
import HeadphoneIcon from "../../img/Iconheadphones.svg";
import ProfiteLogo from "../../img/Profit.png";
import eLogo from "../../img/E.png";
import VtexLogo from "../../img/Vtex.png";

export default function Footer() {
  return (
    <Main>
      <h2>Localização</h2>
      <img src={Line} alt="" />
      <div className="addresses">
        <Address>
          <li>
            <h3>São Paulo</h3>
            <p>Rua do Rócio, 423/1801</p>
            <p>Vila Olímpia - SP</p>
            <p>04552-000</p>
            <p>+55 11 3333 3333</p>
          </li>
          <ul>
            <li>
              <h3>Rio de Janeiro</h3>
              <p>Vol. da Pátria, 301/702</p>
              <p>Botafogo - RJ</p>
              <p>22270-000</p>
              <p>+55 21 3333 3333</p>
            </li>
          </ul>
        </Address>

        <Contact>
          <li>
            <button className="message">
              <img src={ContactIcon} alt="" />
              ENTRE EM CONTATO
            </button>
          </li>
          <li>
            <button className="consultor">
              <img src={HeadphoneIcon} alt="" />
              FALE COM O NOSSO CONSULTOR ONLINE
            </button>
          </li>
        </Contact>
        <Logo>
          <li>
            Created by
            <div>
              <img src={ProfiteLogo} alt="" />
              <img src={eLogo} alt="" />
            </div>
          </li>
          <li>
            Powered by by
            <div>
              <img src={VtexLogo} alt="" />
            </div>
          </li>
        </Logo>
      </div>
    </Main>
  );
}
