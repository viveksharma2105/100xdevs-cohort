import { useState } from 'react';
import './App.css';

function App() {
     const [darkMode, setDarkmode] = useState(false);
     function toggletheme() {
      setDarkmode(!darkMode)
     }

   return <div  style={{
      backgroundColor: darkMode ? 'black' : 'white',
      height: '100vh',
      textAlign: 'center',
      padding:50
    }}>
      <button onClick={toggletheme} style={{color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? 'black':'white'}}>Change Theme</button>
   </div>

   
}

export default App;
