import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from './pages/Success';



const App = () => {
  
  
  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="/login" element={<Login/>} />      
      <Route path="/register" element={<Register/>} />
      
      
    </Routes>
    
  </BrowserRouter>
  )
  
};

export default App;