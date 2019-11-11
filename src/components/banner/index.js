import React from "react";
import { Main } from "./styles";

import BannerIMG from "../../img/Banner.jpg";
import Line from "../../img/Line2.png";

export default function Banner() {
  return (
    <Main>
      <div className="title">
        <h1>Nossa especialidade: experiência de compra.</h1>
        <img src={Line} alt="" className="line" />
      </div>
      <img src={BannerIMG} alt="banner" className="banner" />
    </Main>
  );
}
