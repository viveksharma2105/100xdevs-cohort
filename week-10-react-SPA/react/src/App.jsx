import { useState, useRef} from 'react';

import './App.css';

//----------------------A Clock with start and a stop button-------------------------------------
function App() {
  const [currentCount, setCurrrrntCount] = useState(0);
  const timer = useRef();

function StartClock() {
  let value = setInterval(() => {
    setCurrrrntCount(c=> c + 1)
  }, 1000);
  timer.current = value;
}


function StopClock() {
  clearInterval(timer.current);
}
  return <div>
    {currentCount} <br />

    <button onClick={StartClock}>Start</button> <br />
    <button onClick={StopClock}>Stop</button>
  </div>
  
}

////-----------------------------This is how the ref work and focus on input---------------------
// function App() {
// const inputRef = useRef();

// function fucusOnInput(){
//   inputRef.current.focus()
// }

//   return <div>
//     SignUp 
//     <input ref={inputRef} type={"text"}></input>
//     <input type={"text"}></input>
//     <button type="submit" onClick={fucusOnInput}>Submit</button>
//   </div>


// }

 export default App;
