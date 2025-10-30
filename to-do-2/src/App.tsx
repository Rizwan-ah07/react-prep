
import { useState } from 'react'
import './App.css'
import ToDoItem from '../components/todo'

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);

  function AddItem() {
    if (input.trim() === '') return

    setList([...list, input]);
    setInput("");
  }

  function DeleteItem(index: number) {
  const updated = list.filter((_, i) => i !== index);
  setList(updated);
  }

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input field + button */}
      
      <input 
      type="text" 
      placeholder="New item..." 
      value={input}
      onChange={(e => setInput(e.target.value))}
      />
      <button onClick={AddItem}>Add</button>

      {/* List of todos */}
      <ul>
        {list.map((todo, index) => (
          <ToDoItem
          key={index}
          text={todo}
          onDelete={() => DeleteItem(index)} />
        ))}
      </ul>
    </div>
  );
}





export default App
