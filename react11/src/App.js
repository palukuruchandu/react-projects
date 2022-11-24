import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Products from './Components/Products'
import Contact from './Components/Contactus'
import Services from './Components/Services'
import About from './Components/About'
import Register from './Components/Register'
import Login from './Components/Login'
import Product from './Components/Product'
import Cart from './Components/Cart'
import { CartProvider } from 'react-use-cart'
// import Contact from './Components/Contactus'
import Contactus from './Components/Contactus'

const App = () => {
  return (
    <>
 
      <Router>
         <CartProvider>
          <Navbar />
          <Routes>
            <Route path='Home' element={<Home />} />
            <Route path='Products' element={<Products />} />
            <Route path='Services' element={<Services />} />
            <Route path='Contact' element={<Contactus />} />
            <Route path='About' element={<About />} />
            <Route path='products/:id' element={<Product />} />
            <Route path='Login' element={<Login />} />
            <Route path='Register' element={<Register />} />
            <Route path='Cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router> 
    </>
  )
}

export default App