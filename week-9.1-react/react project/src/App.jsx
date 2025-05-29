import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <div style={{ backgroundColor: "#b2bec3", display: "flex", justifyContent: "center", position: "relative", minHeight: "100vh" }}>
      <div>
        <div><PostComponent /><br /></div>
        <div><PostComponent /><br /></div>
        <div><PostComponent /><br /></div>


      </div>

      <ProfileCard />
        <div>
      <ToggleMessage/>
    </div>
    <div>
      <NCount/>
    </div>

    </div>
  
  );
}


const style =  {width: 200, backgroundColor: "white", borderRadius: 10,padding :20, borderColor: "grey",  borderWidth: 1}

function PostComponent(){
  return <div style={style}>
  <div  style={{display: "flex"}}>
    <  img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_960_720.jpg"
    style={{
      width: 40,
      height: 40,
      borderRadius: 40
    }}
    />
<div style={{fontStyle: 10, marginLeft: 10}}><b>  100xdevs </b>
<div>23,343 followers</div>
<div>12m</div>

</div>


  </div>
  <div>
    What to know how to WIn
  </div>
  </div>
}

function ProfileCard() {
  return (
    <div style={{
      position: "absolute", 
      top: 10, 
      left: 10, 
      backgroundColor: "grey", 
      color: "white", 
      padding: "20px", 
      borderRadius: "5px",
      textAlign:'center'
    
    }}>
      <div>
        <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_960_720.jpg'
        style={{
          width:  45,
          height:45,
          borderRadius:45,
          

        }}  />
      </div>
      <br />
      <div >
        <b> Harkirat Singh</b>
        <h6 style={{margin:5}}>Working with WebRTC</h6>
        
      </div>
      <div style={{
      fontSize:10,
      display:'flex'
      
      }}>
        Profie viewers
        <div style={{
          marginLeft:35
        }}> 4,000</div>
      </div>
    </div>
    
  );
}

const ToggleMessage = ()=> {
  const [isVisible, setIsvisible] = useState(true)

  function toggle() {
    setIsvisible(!isVisible)
  }
  return <div style={{
    position: "absolute",
    top:200,
    left:30,
    backgroundColor:'yellow',
    padding:10,
    borderRadius:30
    
  }}>
    <button onClick={toggle}>
      TOGGLE
    </button>
    {isVisible  && <p>This msg is conditionally rendered </p>}
  </div>
  

}

const  NCount = ()=>{
  let [notificationCount, setCount] = useState(0)

  function increment() {
    setCount(notificationCount +1)
    
  }
  return <div style={{
    position:'absolute',
    top: 320,
    left:30
  }}>
  <button onClick={increment}>
    notification
  </button>
  {notificationCount}
</div>
}



export default App
