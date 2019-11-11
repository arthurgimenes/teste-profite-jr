import styled from "styled-components";

export const Main = styled.header`
  background: #fff;
  width: 100%;
  height: 500px;
  padding: 40px 13%;

  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
  }

  div.products {
    display: flex;
    justify-content: space-around;
    margin: 0px -90px;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 20px 0px;
  align-items: center;
  margin-top: 20px;
  width: 216px;
  height: 353px;
  box-sizing: border-box;

  p.itemName {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin-top: 10px

    color: #7a7a7a;
  }

  p.originalPrice {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    margin-top: 5px

    text-align: center;
    text-decoration-line: line-through;

    color: #7a7a7a;
  }

  p.discountedPrice {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 5px

    text-align: center;

    color: #2ec4b6;
  }

  p.installmentPurchase {
    margin-top: 5px
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    text-align: center;

    color: #7a7a7a;
  }
`;
