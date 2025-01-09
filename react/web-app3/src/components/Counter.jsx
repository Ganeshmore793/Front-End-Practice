import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);


  return (
    <>
    <h2>Counter is :&nbsp;&nbsp;{count}</h2>
    <button onClick={()=> setCount(count+1)}>Increase</button>&nbsp;&nbsp;&nbsp;
    <button onClick={()=> setCount(count-1)}>decrease</button>&nbsp;&nbsp;&nbsp;
    <button onClick={()=> setCount(0)}>Reset</button>
  </>
  )
}

export default Counter

//mount upadate and unmount      