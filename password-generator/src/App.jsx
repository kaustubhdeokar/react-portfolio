import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef(null)

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    alert('password selected')
  }

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!\"#$%&'()*+,-./";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword()
  },
    [length, numberAllowed, charAllowed]
  )

  return (
    <>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text' value={password} placeholder='Password' readOnly ref={passwordRef} />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>

      <div className='flex items-center gap-x-1 text-white'>
        <input type='range' min={6} max={20} value={length} className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" />

        <label style={{ "color": "white" }} htmlFor='length'> Length: {length} </label>
      </div>

      <div className='flex items-center gap-x-1 text-white'>
        <input type='checkbox' defaultChecked={numberAllowed} name="" id=""
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
        />
        <label htmlFor="number">Numbers</label>
      </div>

      <div className='flex items-center gap-x-1 text-white'>
        <input type='checkbox' defaultChecked={charAllowed} name="" id=""
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
        />
        <label htmlFor="charInput">Character</label>
      </div>
    </>
  )
}

export default App
