import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Showcase from './components/Showcase/Showcase';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
