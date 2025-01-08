import React from 'react'

const UserName = (props) => { //props means properties.......
  return (
    <>
    <div>
        <h1>Welcome back:{props.firstname}{props.lastname}</h1>
    </div>
    </>
  )
}

export default UserName


//tic-tac-toe application building using react