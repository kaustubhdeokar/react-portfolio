import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showCount, setShowCount] = useState(false)
  const [appState, setAppState] = useState({
    show: true,
    count: 1
  })

  function handleShowCount() {
    //setAppState((appState) => {
    //appState.show = !appState.show;
    //})
    setAppState((appState) =>
    (
      {
        ...appState, show: !appState.show
      }
    ))
  }

  function increment() {
    setAppState((appState) =>
    (
      { ...appState, count: appState.count + 1 }
    ));
  }

  function incrementBy2() {
    // setAppState((appState) => appState.count + 1);
    // setAppState((appState) => appState.count + 1);
    setAppState((appState) =>
    (
      {
        ...appState, count: appState.count+2
      }
    ))
  }

  function decrement() {
    setAppState((appState) =>
    (
      {
        ...appState, count: appState.count-1
      }
    ))
  }

  return (
    <>
    <h2>Use state hook</h2>
      {appState.show && <button onClick={increment}> Increment </button>}
      {appState.show && <button onClick={incrementBy2}> IncrementBy2 </button>}
      {appState.show && <button onClick={decrement}> Decrement </button>}
      <button onClick={handleShowCount}> Toggle show count </button>
      <p>{appState.show && appState.count}</p>
    </>
  )
}

export default App
