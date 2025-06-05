import React, { useEffect, useState,memo } from 'react';

import './App.css'
import { counterAtom } from './store/atom/counter';


function App() {
  return (
    <>
    
      <Counter />
    
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(c => c + 1)
    },3000)
  },[]);

  return (
    <div>
      <CurrCount/>
      <Increase  />
      <Decrease  />
    </div>
  )
}



const CurrCount = memo(function () {
 return <div>
  1
 </div>
})




const Increase = memo(function () {
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  )
})

const Decrease = memo(function () {
  
  return (
    <div>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
    </div>
  )
})

export default App

// ///-------------------REcoil(render specific ) -----------------------------------------
// function App() {
//   return (
//     <>
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//     </>
//   )
// }

// function Counter() {
  
//   return (
//     <div>
//       <CurrCounter/>
//       <Increase  />
//       <Decrease  />
//     </div>
//   )
// }

// function CurrCounter() {
//   let count;
//   try {
//     count = useRecoilValue(counterAtom);
//   } catch (error) {
//     console.error("Error in CurrCounter:", error);
//     return <div style={{ color: 'red' }}>Error loading counter: {error.message}</div>;
//   }

//   return <div>Current Count: {count}</div>;
// }
// console.log("Loaded counterAtom:", counterAtom);



// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);
//   return (
//     <div>
//       <button onClick={() => setCount(c => c + 1)}>Increase</button>
//     </div>
//   )
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);
//   return (
//     <div>
//       <button onClick={() => setCount(c => c - 1)}>Decrease</button>
//     </div>
//   )
// }

// export default App


////-----------------without recoil--------------------------------------
// import { useState } from 'react'
// import {RecoilRoot, atom} from 'recoil'
// import './App.css'

// function App() {
//   return (
//     <>
//     <RecoilRoot>
//       <Counter />
//       </RecoilRoot>
//     </>
//   )
// }

// function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <Increase setCount={setCount} />
//       <Decrease setCount={setCount} />
//     </div>
//   )
// }

// function Increase({ setCount }) {
//   return (
//     <div>
//       <button onClick={() => setCount(c => c + 1)}>Increase</button>
//     </div>
//   )
// }

// function Decrease({ setCount }) {
//   return (
//     <div>
//       <button onClick={() => setCount(c => c - 1)}>Decrease</button>
//     </div>
//   )
// }

// export default App
