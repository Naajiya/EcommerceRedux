import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import './bootstrap.min.css'
import Footer from './components/Footer'
import View from './pages/View'



function App() {

  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<WishList />} path='/wishlist' />
        <Route element={<View />} path='/:id/view' />

        <Route element={ <Navigate  to={'/'} />} path='/*'/>
      </Routes>
      <Footer/>

    </>

  )
}

export default App
