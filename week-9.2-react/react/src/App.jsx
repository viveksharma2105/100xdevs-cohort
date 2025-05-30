import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [ currentTab, setCurrentTab] = useState("feed");
const [tabData, setTabdata] = useState({});
const  [loader, setLoader] = useState(true);

useEffect(function(){
    setLoader(true)
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
    .then(async res => {
        const json = await res.json()
        setTabdata(json)
        setLoader(false)

    });
},[currentTab]);

return <div >
    <button onClick={()=> setCurrentTab(1)}style={{color : currentTab == 1 ?'red':'black'  ,margin:7, cursor:'pointer'}}>Todo #1</button>
    <button onClick={()=> setCurrentTab(2)}style={{color : currentTab == 2 ?'red':'black',margin:7, cursor:'pointer'}}>Todo #2</button>
    <button onClick={()=> setCurrentTab(3)}style={{color : currentTab == 3 ?'red':'black',margin:7, cursor:'pointer'}}>Todo #3</button>
    <button onClick={()=> setCurrentTab(4)}style={{color : currentTab == 4 ?'red':'black',margin:7, cursor:'pointer'}}>Todo #4</button>
<br />
    {loader ? "Loading..."  :tabData.title}
</div>


}

export default App
