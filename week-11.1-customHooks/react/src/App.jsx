import { useEffect, useRef, useState } from "react";

import "./App.css";
import { useFetch, usePostTitle, usePrev } from "./hooks/useFetch";
import { use } from "react";
////---------------------useDebounce Hook----------------------------------------------------------
////if we constantly  typing  in search bar then it  prevents the  continous function call--------
function useDebounce(originalfn) {
  const currClock = useRef;

  const fn = () => {
    clearTimeout(currClock.current);
    currClock.current = setTimeout(originalfn, 300);
  };
  return fn;
}
function App() {
  function sendToDatabase() {
    fetch("api.amazon.com/search/");
  }
  const debouncefn = useDebounce(sendToDatabase);

  return (
    <>
      <input type="text" onChange={debouncefn}></input>
    </>
  );
}

////--------------------------------usePrev Hook--------------------------------------
// function App(parms) {
//   const [State, setState] = useState(1);
//   const prev = usePrev(State)

// return <>
// <p>{State}</p>
// <button onClick={()=> {setState((curr) => curr + 1)}}>click me</button>
// <p>The prev value was {prev}</p>
// </>

// }
////------------------Dynamic Fetch from seprate file-----------------------------------------------
//  function App(parms) {
//   const [current, setCurrent] = useState(1);

//   const {finalData, Loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + current);

//   if(Loading){
//     return <div>
//       Loading....
//     </div>
//   }

// return <div>
//   <button onClick={()=> setCurrent(1)}>1</button>
//   <button onClick={()=> setCurrent(2)}>2</button>
//   <button onClick={()=> setCurrent(3)}>3</button>
//     {JSON.stringify(finalData)}
//   </div>

// }

////------------------Simple Fetch from seprate file-----------------------------------------------
//  function App(parms) {
//   const {finalData} = useFetch("https://jsonplaceholder.typicode.com/posts/1");
// return <div>
//     {JSON.stringify(finalData)}
//   </div>

// }

////---------------------------FETCH  in a sigle file----------------------------------------
//  function App(parms) {
//   const [post, setPost]  = useState({})

//   async function  getPost(){
//     const response  = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const json = await response.json();
//     setPost(json);
//   }
// useEffect(()=>{
//   getPost()
// },[])

//   return <div>
//     {post.title}
//   </div>

// }

////--------------------Custom Hooks---------------------------------------------
// function useCounter() {
//   const  [count, setCount] = useState(0)
//   function increaseCount() {
//     setCount(count + 1)

//   }
//   return {
//     count:count,
//     increaseCount: increaseCount
//   }

// }
// function App() {
//   const {count, increaseCount}  =  useCounter();

//   return <div>
//     <button onClick={increaseCount}>Increase {count}</button>
//   </div>

// }

export default App;
