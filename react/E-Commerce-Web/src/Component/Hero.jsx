import React from 'react';
import "./Hero.css";
import heroImage from './Images/e-commercepic-1.jpeg';
const Hero = () => {


  return (
    <main>
    <div className="hero-section">
       
    <div className="hero-info">
    <div >
   <h1>FIND CLOTHS</h1>
    <h1>THAT MATCHES</h1>
    <h1>YOUR STYLE</h1>
    <p>Browse through our diverse range of meticulously crafted
     garments, designed <br/>to bring out your individuality and cater to your sense of style.</p>
     <button type="submit">Shop Now</button>
</div>
<div className="hero-end">
    <div className="ratings">
        <h2>200+</h2>
        <p>International Brands</p>
    </div>
    <div className="ratings">
        <h2>2,000+</h2>
        <p>High-Quality Products</p>
    </div>
    <div className="ratings">
        <h2>30,000</h2>
        <p>Happy Customers</p>
    </div>
</div>
</div>
<div className="hero-image">
<img src={heroImage} alt={Hero}></img>
</div>
</div>
</main>
  )
}

export default Hero