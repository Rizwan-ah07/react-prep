
import { useState } from 'react'
import './App.css'

function App () {

  const [counter, setCounter] = useState(0);

  return(
    <div>
      <button onClick={() => setCounter(count => count - 1)}>-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter(count => count + 1)}>+</button>
    </div>
  )
} 

export default App
