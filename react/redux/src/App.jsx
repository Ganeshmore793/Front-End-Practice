import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increament } from './App/counterSlice';

function App() {
     const state=useSelector((state)=> state.counter);
     const dispatch=useDispatch();

  return (
    <>
    <h1>
    counter {state}
    </h1>

    <button onClick={()=> dispatch(increament())}>click </button>

    <button onClick={()=> dispatch(decrement())}>click</button>
     </>
  )
}


export default App
