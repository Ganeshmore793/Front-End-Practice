import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sport from './Sport';
import UserName from './UserName';

function App() {
 const fName="Ganesh";
   const lName="More";
  
 //we are passing the value of playername to sport 
 //for user name we decleare the variable and pass to the username component.
  return (
    <>
    <h1>Sports</h1>
     <br />
    <Sport playerName="Virat kohli"/> 
     <br /> 
     <UserName firstname={fName} lastname={lName}/>
     
    </>
  );}

export default App 
 