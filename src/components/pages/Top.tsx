import { useState } from 'react'
import '../../App.css'
import { Task } from '../molecules/Task'
import { TaskState } from '../organisms/TaskState'
import { SearchInput } from '../molecules/SearchInput'

function App() {
  const [inputTodo, setInputTodo] = useState("")
  const [editTodo, setEditTodo] = useState("")
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
      isEdit:false,
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

  const onClickEdit =(index)=>{
    const currentTodos = [...todos]
    const currentTitle = currentTodos[index].title
    currentTodos[index].isEdit = !currentTodos[index].isEdit
    setTodos(currentTodos)
    setEditTodo(currentTitle)

  }
  const onChangeEdit =(e)=>{
    const editText = e.target.value
    setEditTodo(editText)
    console.log(editTodo)
  }
  const onClickEditSave =(index)=>{
    console.log(index)
    const currentTodos = [...todos]
    currentTodos[index].title = editTodo
    currentTodos[index].isEdit = !currentTodos[index].isEdit
    setTodos(currentTodos)
  }

  return (
    <>
      <TaskState todos={todos} checkedItems={checkedItems}/>
      <SearchInput inputTodo={inputTodo} onChangeTodo={onChangeTodo} onClickAdd={onClickAdd} placeholder="タスクを入力"/>
      <Task todos={todos} onClickCheck={onClickCheck} onChangeEdit={onChangeEdit} onClickEditSave={onClickEditSave} onClickEdit={onClickEdit} onClickDelete={onClickDelete}/>
    </>
  )
}

export default App
