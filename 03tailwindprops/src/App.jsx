import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-4 rounded-md'>Vite with Tailwind</h1>
     <Cards username="kd" />
    </>
  )
}

export default App
