import "./App.css";
import { Button } from "./components/Buttons";
import { Input } from "./components/input";
import { Otp } from "./components/Otp";

function App() {
  return (
    <div className=" h-screen bg-blue-500">
      <div className="">
<br /><br /><br /><br />
        {/* <Input type="text" placeholder={'Username'} ></Input>
        <Button disabled={true}>Sign Up</Button>
         */}
      </div>
      <Otp></Otp>
    </div>
  );
}

export default App;
