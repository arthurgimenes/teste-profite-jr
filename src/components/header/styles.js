import styled from "styled-components";

export const Main = styled.header`
  background: #fff;
  width: 100%;
  height: 80px;
  padding: 0px 100px
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 1;
`;

export const Search = styled.div`
  width: 450px;
  border-bottom: 1px solid #7A7A7A
  display: flex;

  img{
    padding-left: 265px
    padding-bottom: 2px;
  }
`;

export const Side = styled.ul`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;

  li.profile {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 5px;
    }
  }

  li.cart {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    img {
      margin-right: 5px;
    }
  }
  li.language {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    img {
      margin-left: 10px;
    }
  }
`;
