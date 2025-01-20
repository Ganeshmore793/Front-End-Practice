import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './Component/Header';
import Home from './pages/Home';
import Hero from './Component/Hero';
import NewArrievals from './Component/NewArrievals/NewArrievals';
import ProductPage from './pages/ProductPage';
import './App.css'
const App = () => {
  return (
    <>
  
   <BrowserRouter>
   <Header/>
   <Hero/>
   <NewArrievals/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App


