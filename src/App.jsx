import React from 'react'
import './App.css'
import { BrowserRouter , Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/product" element={<Product/>} /> 
            <Route path="/singleproduct/:id" element={<SingleProduct/>} /> 
            <Route path="/cart" element={<Cart/>} /> 
          </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
