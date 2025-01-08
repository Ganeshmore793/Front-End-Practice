import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <>
    <h2>Counter is :{count}</h2>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    <button onClick={()=> setCount(count-1)}>decrease</button>
    <button onClick={()=> setCount(0)}>Reset</button>
  </>
  )
}

export default Counter

//mount upadate and unmount