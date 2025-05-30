

import './App.css'
//--------FRAGMENTS OR EMPTY TAGS TO AVOID EXTRA DIV IN CASE OF INSERT MORE THEN ONE DIV------------------------


// function App(params) {
//   return <>
// <div>hi</div>
// <div>hi there</div>
//   </>
  
// };

// export default App

// ////--------------THEME CHANGING ----------------------
// import { useState } from 'react';
// import './App.css';

// function App() {
//      const [darkMode, setDarkmode] = useState(false);
//      function toggletheme() {
//       setDarkmode(!darkMode)
//      }

//    return <div  style={{
//       backgroundColor: darkMode ? 'black' : 'white',
//       height: '100vh',
//       textAlign: 'center',
//       padding:50
//     }}>
//       <button onClick={toggletheme} style={{color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? 'black':'white'}}>Change Theme</button>
//    </div>

   
// }

// export default App;



////---------------ERRORBOUNDRY CLASS--------------------
// class ErrorBoundry extends React.Component{
//   constructor(props){
//     super(props);
//       this.state={hasError: false};
    
//   }
//   static getDerivedStateFromError(error){
//     return {hasError: true};
//   }
//   componentDidCatch(error, info){
//     console.error("error caughed:", error, info);

//   }
//   render(){
//     if(this.state.hasError){
//       return <h1>Something  went wrong</h1>;
//     }
//     return this.props.children
//   }
  
// }



// //---------------CHILDREN-------------------------------
// function App() {

//  return <div  style={{padding:10, display:'flex',background:'grey'}}>
//   <Card>
//     Type your Post here
//     <br /><br />
//     <input type="text" />
//   </Card>
//    <Card>
//     Hi there
//   </Card>
//  </div>

// }

// function Card({children}) {
//   return <div style={{background:'white', borderRadius:10,padding:10,  margin:10}}>


// {children}
//   </div>
  
  
// }
// export default App
