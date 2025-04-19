import { useState } from 'react'
import './App.css'

function App() {
  const [inputTodo, setInputTodo] = useState("")
  const [todos, setTodos] = useState([])

  const onChangeTodo = (e)=>{
    setInputTodo(e.target.value)
  }
  const onClickAdd = ()=>{
    if (!inputTodo) return;
    const newTodos = [...todos, inputTodo]
    setTodos(newTodos)
    setInputTodo('')

  }
  return (
    <>
      <input value={inputTodo} onChange={onChangeTodo}/>
      <button onClick={onClickAdd}>保存</button>
      {
        todos.map((todo)=>(
          <div>
            <p>{todo}</p>
          </div>
        ))
      }
    </>
  )
}

export default App