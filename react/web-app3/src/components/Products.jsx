import React, { useState } from 'react'

const Products = () => {

    const [products,setProducts]=useState()

async function getProducts() {
    const res=fetch("https://dummyjson.com/products");
    const data=await res.json();
    setProducts(data.products)
    
}
 

//create to-do app using react








  return (

    <div>

    </div>
  )
}

export default Products