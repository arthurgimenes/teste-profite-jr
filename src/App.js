import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/header";
import Banner from "./components/banner";
import Products from "./components/products";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <Products />
      <Footer />
    </>
  );
}

export default App;
