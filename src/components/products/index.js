import React from "react";
import { Main, ProductList } from "./styles";

import Line from "../../img/Line3.png";
import ProductImage from "../../img/Product.png";

export default function Banner() {
  return (
    <Main>
      <h2>Produtos</h2>
      <img src={Line} alt="" />
      <div className="products">
        <ProductList>
          <li>
            <img src={ProductImage} alt="" />
            <p className="itemName">TÊNIS COURO PUMA R698 Q4 V2</p>
            <p className="originalPrice">de R$ 399,00</p>
            <p className="discountedPrice">por R$ 299,00</p>
            <p className="installmentPurchase">ou em 3x de R$ 133,00</p>
          </li>
        </ProductList>
        <ProductList>
          <li>
            <img src={ProductImage} alt="" />
            <p className="itemName">TÊNIS COURO PUMA R698 Q4 V2</p>
            <p className="originalPrice">de R$ 399,00</p>
            <p className="discountedPrice">por R$ 299,00</p>
            <p className="installmentPurchase">ou em 3x de R$ 133,00</p>
          </li>
        </ProductList>
        <ProductList>
          <li>
            <img src={ProductImage} alt="" />
            <p className="itemName">TÊNIS COURO PUMA R698 Q4 V2</p>
            <p className="originalPrice">de R$ 399,00</p>
            <p className="discountedPrice">por R$ 299,00</p>
            <p className="installmentPurchase">ou em 3x de R$ 133,00</p>
          </li>
        </ProductList>
        <ProductList>
          <li>
            <img src={ProductImage} alt="" />
            <p className="itemName">TÊNIS COURO PUMA R698 Q4 V2</p>
            <p className="originalPrice">de R$ 399,00</p>
            <p className="discountedPrice">por R$ 299,00</p>
            <p className="installmentPurchase">ou em 3x de R$ 133,00</p>
          </li>
        </ProductList>
      </div>
    </Main>
  );
}
