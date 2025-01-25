import { useReducer } from 'react'

import './App.css'


const reducer=(state,action)=>{
  if(action.type==="increament"){
    return ++state;
  }
  else if(action.type==="Decrement"){
    return --state;
  }
}
function App() {
  const [countState,dispatch]=useReducer(reducer,0);

  return (
    <>
    <h1>count is {countState}</h1>
    
    <button onClick={()=>dispatch({type:"increament"})}>Increament</button>
    <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
  
  </>
  )
}

export default App

//useHooks.com