
import './App.css'

function App() {

  return (
    <>
    <Example3/>
    </>
  )

}

function Example3() {
  const getRandomNum = () => Math.floor(Math.random() * 10) + 1;
  const userInput = prompt('Hi, enter something:');

  return (
    <div className="heading">
      <h1>
        Here's a random number from 1 to 10: {getRandomNum()} — You entered: {userInput}
      </h1>
    </div>
  );
}

export default App
