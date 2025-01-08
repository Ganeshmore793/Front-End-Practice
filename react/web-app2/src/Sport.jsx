
import React from 'react'

const Sport = (props) => {
    const sports=["Cricket","kabaddi","hockey","chess"];

  return (
    <>
    <ul>
       
      {/* if ({!props.playerName}) {
         <h1>player name is not found</h1>
      }
       */}
<h1>greatest player is:{props.playerName}</h1>
      {sports.map((sport)=>{
      return <> <li key={sport}>{sport}</li>   
      </>
       }) 
      }
</ul> 
</>        
  )
}

export default Sport