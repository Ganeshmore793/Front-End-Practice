import { Component, useReducer } from 'react'

import './App.css'
import TestApp2 from './component/TestApp2';
import TestApp from './component/TestApp';


// const reducer=(state,action)=>{
//   if(action.type==="increament"){
//     return ++state;
//   }
//   else if(action.type==="Decrement"){
//     return --state;
//   }
// }
function App() {
  // const [countState,dispatch]=useReducer(reducer,0);

//const [open,setOpen]=setOpen(true);
  return (
    <>
    {/* <h1>count is {countState}</h1>
    
    <button onClick={()=>dispatch({type:"increament"})}>Increament</button>
    <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
//    */}
{/* <NewComponent/> */}
<ErrorBoundry>
  <TestApp/>
</ErrorBoundry>
<ErrorBoundry>
  <TestApp2/>
</ErrorBoundry>
   {/* <h1 onClick={()=>setOpen(!open)}>sow/hide</h1>
     */}
  </>
  )
}


// class NewComponent extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0,
//     }
//   }

//   componentDidMount(){

//   }
//   componentDidUpdate(){

//   }
//   componentWillUnmount(){

//   }
  
//   render(){
//     return (
//       <>
//       <button onClick={()=>setCount(count=this.state.count+1)}>count is{this.set.count}</button>
//       </>
//     )
//   }
// }

class ErrorBoundry extends Component{
  constructor(props){
    super(props);
    this.state={
      isError:false,
    }
  }

  componnetDidCatch(){
    this.setState({isError:true});
  }

  render(){
    if(this.state.isError){
      return<>
      <h1>Somthing went wrong</h1>;
      </>
    }
    return<>
    {this.props.children}
    </>;
  }
}

export default App

//useHooks.com