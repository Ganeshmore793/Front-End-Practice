import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const NewArrievals = () => {
    const[products,setProducts]=useState([]);

    async function getProducts(){
        try{
          const res= await fetch("https://dummyjson.com/products?limit=4");
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
         
        <br/>
        <br/>
        <hr/>
        <br/>
        <br/>
         <h1>NEW ARRIEVALS</h1>
        </div>

        <div className="cards">
            <div className="card">
              {
                products.map((product)=>{
                  return (
                    <>
              
                  <li>{product.price}</li>
                  <li>{product.description}</li>
                  </>
                );
                })
              }
            </div>
        </div> 
        </div>  
</section>
</>
  );
}


export default NewArrievals