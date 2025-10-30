import { useState } from 'react'
import ColorButton from './ColorButtonPage'
import './App.css'

function App() {

  const [color, setColor] = useState<string>("purple")

  return (
    <div style={{backgroundColor: color}}>
      <ColorButton color='red' onSelectColor={setColor}/>
      <ColorButton color='purple' onSelectColor={setColor}/>
      <ColorButton color='pink' onSelectColor={setColor}/>
      <ColorButton color='blue' onSelectColor={setColor}/>
    </div>
  )
}

export default App
