import React from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import About from './components/about';
import Contact  from './components/Contact';

function App() {
  return (
    <div className="App">
        <Header />
        <Product />
        <About />
        <Contact />
    </div>
  );
}

export default App;
