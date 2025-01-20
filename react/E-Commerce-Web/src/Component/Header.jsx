import React from 'react';
import "./Header.css";




const Header = () => {
  return (
    <>
    <link rel='stylesheet' href='https://kit.fontawesome.com/a076d05399.js'></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
        
     <header>
        <div className="header-all">
     <div className="header-top">
        <p>Use promo code <b>Moemen</b> for 20% discount</p>
     </div>

     <div className="header-main">
          <h1>SHOP.CO</h1>
          <p><a href="#">Shop</a></p>
          <p><a href="#">New Arrival</a></p>
          <p><a href="#">Top Selling</a></p>
          <p><a href="#">on sale</a></p>

          <div className="search-box">
          
          <input type="search" placeholder="Search for Products"  ></input>
         </div>
    
         <div className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
        </div>
    </div>
     </div>
     </header>
 
    </>
  )
}

export default Header