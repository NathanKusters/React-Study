import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='cor'> 
     <h1>Primeiro Site em Rect</h1>
     <input type="checkbox" name="a" id="" />
     <label htmlFor="a">Gostou do site?
     </label>
     </div>
    </>
  )
}

export default App
