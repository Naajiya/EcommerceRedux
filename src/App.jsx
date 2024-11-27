import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import './bootstrap.min.css'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<WishList />} path='/wishlist' />
      </Routes>
      <Footer/>

    </>

  )
}

export default App
