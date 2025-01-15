import React, { useEffect, useState } from 'react';
import "./Header.css";




const Header = () => {

   const [search, setSearch]=useState("");
   const [searchedProducts, setSearchedProducts]=useState([]);

   const sendReq=async()=>{
      try{
      const res= await fetch('https://dummyjson.com/products/search?q=${search}');

   const data= await res.json();

   setSearchedProducts(data.searchedProducts);
   }  

catch(error){
   console.log(error);
}
   };

   useEffect(()=>{
      if(search){
      sendReq();
      }
},[search]);


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
          <p><a href="shop.html">Shop</a></p>
          <p><a href="#arrieval-section">New Arrival</a></p>
          <p><a href="#sellings">Top Selling</a></p>
          <p><a href="#on-sale">on sale</a></p>

          <div className="search-box">
          
          <input type="search" placeholder="Search for Products" onChange={(e)=>setSearch(e.target.value)} value={search} >
          </input>
          {searchedProducts.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
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