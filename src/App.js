import React from 'react';
// import './App.css';
// import './server.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/MainPages/Home';
import Contact from './components/MainPages/Contact';
import Apparel from './components/MainPages/Apparel';
import Cart from './components/MainPages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
