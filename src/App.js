import React, { Component } from 'react';
import './App.css';
import Foot from "./components/Foot/Foot";
import Head from "./components/Head/Head";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";

class App extends Component {
  render() {
    return (
      <div id="divApp" className="App">
        <div id="containerHead" class="container-fluid">
          <Head />
        </div>
        <div id="containerBanner" class="container-fluid">
          <Banner />
        </div>
        <div id="containerProducts" class="container-fluid">         
              <Products />
        </div>
        <div id="containerFoot" class="container-fluid">
          <Foot />
        </div>
      </div>
    );
  }
}

export default App;
