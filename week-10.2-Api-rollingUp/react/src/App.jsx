import { useState, createContext, useContext } from 'react'

import './App.css'
const BulbContext = createContext();

////custom own provider---like we can  use bublProvider insteed of bulbcontex.provider value{}
// export function bublProvider({children}) {
//   const [bulbOn, setBulbOn] = useState(true)
  
//   return <BulbContext.Provider value={{bulbOn:bulbOn, setBulbOn:setBulbOn}}>
//     {children}
//     </BulbContext.Provider>
// }



//-----------------------Prop Drilling-------------------
function App() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbContext.Provider value={{bulbOn:bulbOn, setBulbOn:setBulbOn}}>
    <Light />
    </BulbContext.Provider>
  </div>


}

function Light({bulbOn, setBulbOn}) {
  
  return <div>
    <LightBulb bulbOn={bulbOn}/>
    <LightSwitch bulbOn={bulbOn}  setBulbOn={setBulbOn}/>
   
  </div>
  
}


function LightBulb() {
  const {bulbOn} = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
  
}
function LightSwitch() {
  const {bulbOn, setBulbOn} = useContext(BulbContext)
  function Toggle() {
    setBulbOn(!bulbOn)
    
  }
  return  <div>
    <button onClick={Toggle}>ToggleBulb</button>
  </div>
  
}




//-----------------pros OR getting elements  from upper to lower ----------------------------
// function App() {
  

//   return <div>
//     <LightBulb/>
//   </div>


// }

// function LightBulb() {
//   const [bulbOn, setBulbOn] = useState(true)
//   return <div>
//     <BulbState bulbOn={bulbOn}/>
//     <ToggleState bulbOn={bulbOn}  setBulbOn={setBulbOn}/>
   
//   </div>
  
// }


// function BulbState({bulbOn}) {
//   //const [bulbOn, setBulbOn] = useState(true) //wehave to done this abovee because itts use in 2 diff functions
//   return <div>
//     {bulbOn ? "Bulb On" : "Bulb Off"}
//   </div>
  
// }
// function ToggleState({bulbOn, setBulbOn}) {
//   function Toggle() {
//     setBulbOn(!bulbOn)
    
//   }
//   return  <div>
//     <button onClick={Toggle}>ToggleBulb</button>
//   </div>
  
// }

export default App
