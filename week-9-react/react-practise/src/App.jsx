import React from 'react'
import { useState,  useEffect } from 'react'
import './App.css'

function App() {
  let [visible,setCount] =  useState(true);
  
  useEffect(function(){
setInterval(()=>{
  setCount(c => !c)
},5000)
  },[]);
  

 return <div>

  {visible && <Counter></Counter>}

 </div>

}

  function Counter() {
  const [count, setCount]   = useState(0);

//it is doingjuggling because  it is calling manytimes on each call
//for this we use useEffect  to preventing re-rendering  and also it ensure the the function in 
//useEffect is calls once 

useEffect(function(){
  let clock = setInterval(()=>{
   setCount(count => count+1)
   
  },1000)
 return function(){
  clearInterval(clock)
 }

},[]);

 
  
  return<div >
        <h1>{count}</h1>      
      </div>
   
    
  
}


export default App
