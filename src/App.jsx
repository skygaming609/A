import React from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Categories />
        <FeaturedProducts />
      </div>
    </div>
  );
}

export default App;
