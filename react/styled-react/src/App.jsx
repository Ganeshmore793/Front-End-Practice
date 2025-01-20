import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Component1/>
      <div className="card">
        <h1> {counter}</h1>
        <button onClick={() => setCounter((counter) => counter + 1)}>
          Increase Count
        </button>
      </div>
      
    </>
  )
}

function Component1(counter, setCounter){

 return(
 <>
 <div className="card">
  <h1> {counter}</h1>
 <button onClick={() => setCounter((counter) => counter + 1)}>
   count is {counter}
 </button>
</div>
</>
)
}

export default App
