import { useRef, useState } from "react";
import { Button } from "./Buttons";

export function Otp(){
const ref1 = useRef();
const ref2 = useRef();
const ref3 = useRef();
const ref4 = useRef();
const ref5 = useRef();
const ref6 = useRef();


const[disabled, setDisable] = useState(true)

    return <div className="flex justify-center ">  
<SubOtpBoxes refrence={ref1} onDone={()=>{ref2.current.focus()}}  />
<SubOtpBoxes refrence={ref2} onDone={()=>{ref3.current.focus()}} onBack={()=>{ref1.current.focus()}}/>
<SubOtpBoxes refrence={ref3} onDone={()=>{ref4.current.focus()}} onBack={()=>{ref2.current.focus()}}/>
<SubOtpBoxes refrence={ref4} onDone={()=>{ref5.current.focus()}} onBack={()=>{ref3.current.focus()}}/>
<SubOtpBoxes refrence={ref5} onDone={()=>{ref6.current.focus()}} onBack={()=>{ref4.current.focus()}}/>
<SubOtpBoxes refrence={ref6} onDone={()=> setDisable(false)}     onBack={()=>{ref5.current.focus()}}/>
    <Button disabled={disabled} >SignUp</Button>
    </div>
}

function SubOtpBoxes({refrence, onDone, onBack}) {
    const [inputBoxVal, setInputboxVal] = useState("");
    return <div>
        <input value={inputBoxVal} ref={refrence} onKeyUp={(e)=>{
            if (e.key ==  'Backspace') {
                onBack()
            }
        }} onChange={(e)=>{
            const val = e.target.value
            if (val == "") {
                onBack()
            }else if (val >= "0" && val <= "9"){
            setInputboxVal(val);
            onDone()
                
            }else{
                
            }

      
        }}
        
        type="text" className=" text-center outline-none m-1 w-[40px] h-[50px] rounded-xl bg-blue-300" ></input>
    </div>
    
}