import { useState } from 'react'
import '../../App.css'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { Input } from '../atoms/input/Input'
import { Edit } from '../atoms/input/Edit'
import { Check } from '../atoms/input/Check'

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
      <p>全てのタスク:{todos.length}</p>
      <p>完了済み:{checkedItems.length}</p>
      <p>未完了:{todos.length - checkedItems.length}</p>
      <Input value={inputTodo} onChange={onChangeTodo} placeholder="タスクを入力"/>
      <PrimaryButton onClick={onClickAdd}>保存</PrimaryButton>
      {
        todos.map((todo,index)=>(
          <div key={todo.id} className="list-row">
            <Check type="checkbox" onClick={( )=>{onClickCheck(index)}} />
            {<div>{ todo.isEdit ? <Edit value={editTodo} onChange={onChangeEdit} placeholder="タスクを変更"/> : <p>{todo.title}</p> }</div> }
            {<div>{ todo.isEdit ? <PrimaryButton onClick={()=>{onClickEditSave(index)}}>保存</PrimaryButton> : <PrimaryButton onClick={()=>{onClickEdit(index)}}>編集</PrimaryButton> }</div> }
            <PrimaryButton onClick={()=>{onClickDelete(index)}}>削除</PrimaryButton>
          </div>
        ))
      }
    </>
  )
}

export default App
