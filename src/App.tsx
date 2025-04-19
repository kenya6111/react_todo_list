import { useState } from 'react'
import './App.css'

function App() {
  const [inputTodo, setInputTodo] = useState("")
  const [checkedItems, setCheckedItems] = useState([])
  const [todos, setTodos] = useState([])
  const [id,setId] = useState(0)

  const onChangeTodo = (e)=>{
    setInputTodo(e.target.value)
  }
  const onClickAdd = ()=>{
    if (!inputTodo) return;
    const newTodo = {
      id:id,
      title:inputTodo,
      inEdit:false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    setInputTodo('')
    setId((id) => id + 1)

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
          <div key={todo.id} className="list-row">
            <input type="checkbox" onClick={()=>{onClickCheck(index)}} />
            <p>{todo.title}</p>
            <button>編集</button>
            <button onClick={()=>{onClickDelete(index)}}>削除</button>
          </div>
        ))
      }
    </>
  )
}

export default App