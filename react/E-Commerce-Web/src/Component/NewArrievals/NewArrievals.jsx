import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./NewArrievals.css"
const NewArrievals = () => {
    const[products,setProducts]=useState([]); /*product for get the products and setProduct for set 
                                                the value of product intiallly empty */
    const[showAll,setShowAll]=useState(false);  //value of showAll is false

    async function getProducts(){
        try{
          const res= await fetch("https://dummyjson.com/products"); //fetch data from dummy json
         const data=await res.json();   //convert data into json format
    
         setProducts(data.products);    //set the data into products
       }
     catch(error){
        console.log(error);             //if error is cought handle the error
     }
    }
      useEffect(()=>{
        getProducts();                  //call the getProduct function and execute the inside the getProduct
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
                products.slice(0, showAll ? products.length:4)  /* .slice method use for show the product from 0 index 
                to product.lengths index  it is also use if else ternererry operator*/ 
                .map((product,index)=>{ //.map use for seperate the array of objects which is in products array
                  return (
           <>   
            
              <div className='products' key={index}> {/*index is key for identify items unique */}
                
                  <img src={product.thumbnail} alt='product images'></img> {/* takes from product array which we takes from 
                                                                        dummy json and stores inside the products */}
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
  <button onClick={()=>setShowAll((prev) => !prev) } style={{  //when we click on this button 

       }}>
    {showAll ? 'Hide All' : 'View All'}
    </button>
    </div>
  </>
  );

}


export default NewArrievals