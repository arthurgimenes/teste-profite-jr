import styled from "styled-components";

export const Main = styled.header`
  width: 100%;
  height: 280px;
  background: #011627;
  padding: 40px 13%;
  color: #fff;

  div.addresses {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Address = styled.ul`
  display: flex
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  margin-right: 50px;
  
  li{
    margin-right: 40px
  }

  h3 {
    margin-top: 20px;
  }

  p {
    margin-top: 5px;
  }
`;

export const Contact = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 150px;

  button.message {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9f1c;
    border-radius: 5px;
    width: 230px;
    height: 38px;
    color: #fff;
    margin-bottom: 30px;

    img {
      padding-right: 10px;
    }
  }

  button.consultor {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9f1c;
    border-radius: 5px;
    width: 230px;
    height: 38px;
    color: #fff;
    padding-right: 20px;

    img {
      margin-left: 35px;
    }
  }
`;

export const Logo = styled.ul`
  display: flex;

  li {
    display: flex;
    margin-right: 30px;
    flex-direction: column;
    font-style: normal;
    font-weight: normal;
    font-size: 10.6017px;
    line-height: 12px;

    img {
      height: 17.91px;
    }
  }
`;
