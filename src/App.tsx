import { useState } from 'react'
import './App.css'

function App() {
  const [inputTodo, setInputTodo] = useState("")
  const [checkedItems, setCheckedItems] = useState([])
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

  const onClickDelete = (index)=>{
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)

    let newCheckedItems = [...checkedItems]
    const targetTodo = todos[index]
    if (checkedItems.includes(targetTodo)){
      newCheckedItems = newCheckedItems.filter((e)=>(e!==targetTodo))}
      setCheckedItems(newCheckedItems)
  }

  const onClickCheck = (index)=>{
    const targetTodo = todos[index]
    let newCheckedItems = [...checkedItems]

    if (checkedItems.includes(targetTodo)){
      newCheckedItems = newCheckedItems.filter((e)=>(e!==targetTodo))
      setCheckedItems(newCheckedItems)
      return
    }
    newCheckedItems.push(targetTodo)
    setCheckedItems(newCheckedItems)
  }

  return (
    <>
      <p>全てのタスク:{todos.length}</p>
      <p>完了済み:{checkedItems.length}</p>
      <p>未完了:{todos.length - checkedItems.length}</p>
      <input value={inputTodo} onChange={onChangeTodo}/>
      <button onClick={onClickAdd}>保存</button>
      {
        todos.map((todo,index)=>(
          <div key={todo} className="list-row">
            <input type="checkbox" onClick={()=>{onClickCheck(index)}} />
            <p>{todo}</p>
            <button>編集</button>
            <button onClick={()=>{onClickDelete(index)}}>削除</button>
          </div>
        ))
      }
    </>
  )
}

export default App