import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./NewArrievals.css"
const NewArrievals = () => {
    const[products,setProducts]=useState([]);
    const[showAll,setShowAll]=useState(false);

    async function getProducts(){
        try{
          const res= await fetch("https://dummyjson.com/products");
         const data=await res.json();
    
         setProducts(data.products); 
       }
     catch(error){
        console.log(error);
     }
    }
      useEffect(()=>{
        getProducts();
      }, []);

   
  return (
    <>
    <section>
    <div>
    <div className="arrieval-text">         
          <h1>NEW ARRIEVALS</h1>    
    </div>
      <div className='card-container'>
           {
                products.slice(0, showAll ? products.length:4)
                .map((product,index)=>{
                  return (
           <>   
            
              <div className='products' key={index}>
                
                  <img src={product.thumbnail} alt='product images'></img>
                 <b> <li>{product.title}</li> </b>
                  <li>Price:<b>{product.price}</b></li>  
                  <li>{product.brand}</li>
                     
              </div>
                            
           </>    
                );
                })
              }
     </div>
        </div>  
</section>
<div className='button'>
  <button onClick={()=>setShowAll((prev) => !prev) } style={{
       }}>
    {showAll ? 'Hide All' : 'View All'}
    </button>
    </div>
  </>
  );

}


export default NewArrievals