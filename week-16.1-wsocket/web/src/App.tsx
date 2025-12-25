import { useEffect, useRef, useState } from "react"



function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef(null);



  function sendMessage(){
    if(!socket){
      console.log("Socket not connected");
      return;
    }

    const message = inputRef.current.value;
    console.log("Sending message:", message);

    //@ts-ignore
    socket.send(message)


    
  }


  useEffect(()=>{

    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    //important connection
    ws.onmessage = (ev)=>{
      console.log("Received message:", ev.data);
      alert(ev.data)
    }


    //error
    ws.onerror = (error)=>{
      console.log("WebSocket error:", error);
    }

   //close
    ws.onclose = ()=>{
      console.log("WebSocket closed");
    }
   

    //open
    ws.onopen = ()=>{
      console.log("WebSocket connected");
    }

  },[])

  return (
    <>
      <div style={{
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
          height: "100vh",


      }}>

        <input ref = {inputRef} type="text" placeholder="Messaage..." ></input>
        <button onClick={sendMessage}>Send</button>


      </div>
    </>
  )
}

export default App
