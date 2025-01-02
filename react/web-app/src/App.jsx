import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestComponent from './TestComponent'
import NewComponent from './newComponent'

function App() {
  const userName="Ganesh";

  return (
    <>
  <div className="container">
    {userName}
    <TestComponent></TestComponent>
    <NewComponent></NewComponent>
  </div>
  </>
  )
};


export default App
