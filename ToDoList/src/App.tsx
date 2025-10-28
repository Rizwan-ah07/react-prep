
import { useState } from 'react'
import ToDoItem from "../components/ToDoItem";
import './App.css'


function App() {
 
  const [item, setItem] = useState<string>("")
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addItem = () => {
    if (item.trim() === "") return;
    setToDoList([...toDoList, item]);
    setItem("");
  }

  const removeItem = (index: number) => {
    const updatedList = toDoList.filter((_, i) => i !== index)
    setToDoList(updatedList)
  }

  console.log(item);

  return(
    <div>
      <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {toDoList.map((todo, index) => (
          <ToDoItem 
            key={index}
            todo={todo}
            onDelete={() => removeItem(index)}
          />))}
      </ul>
    </div>
  )
}

export default App
