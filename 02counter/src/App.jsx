import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 0;

  const[counter, setCounter] = useState(0)

  function increaseCounter(){
    setCounter((prev) => prev+1);
    setCounter((prev) => prev+1);
    setCounter((prev) => prev+1);
    console.log(counter);
  }
  const decreaseCounter = () => {
    setCounter(counter-1);
    console.log(counter);
  }

  return (
    <>
      <h1> react course {counter}</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={increaseCounter}> Add value</button>{"  "}
      <button onClick={decreaseCounter}> Decrease value</button>
      <p>Footer:{counter}</p>
    </>
  )
}




export default App
