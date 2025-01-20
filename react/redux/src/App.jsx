import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increament } from './App/counterSlice';

function App() {
     const stateCounter=useSelector((state)=> state.counter);
     const dispatch=useDispatch();

  return (
    <>
    <h1>
    counter {stateCounter}
    </h1>

    <button onClick={()=> dispatch(increament())}>Increament </button>

    <button onClick={()=> dispatch(decrement())}>Decrement </button>
     </>
  )
}


export default App
