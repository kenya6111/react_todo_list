## 初期セットアップ
- 以下の記事を参考に作成
https://www.webcreatorbox.com/blog/vite-react

- 

## ソース説明
- 以下全体のソースになります（コンポーネント分割やデザインは一旦無視してます）
- 画面の動きは以下動画参照
  - https://streamable.com/0cjy29
```tsx
import { useState } from 'react'
import './App.css'
import { Top } from './components/pages/Top'

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
      <input value={inputTodo} onChange={onChangeTodo}/>
      <button onClick={onClickAdd}>保存</button>
      {
        todos.map((todo,index)=>(
          <div key={todo.id} className="list-row">
            <input type="checkbox" onClick={()=>{onClickCheck(index)}} />
            {<div>{ todo.isEdit ? <input onChange={onChangeEdit} value={editTodo}/> : <p>{todo.title}</p> }</div> }
            {<div>{ todo.isEdit ? <button onClick={()=>{onClickEditSave(index)}}>保存</button> : <button onClick={()=>{onClickEdit(index)}}>編集</button> }</div> }
            <button onClick={()=>{onClickDelete(index)}}>削除</button>
          </div>
        ))
      }
    </>
  )
}

export default App
```


- TODO追加（CREATE）
  ```tsx
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
  ```
  ```html
    <input value={inputTodo} onChange={onChangeTodo}/>
    <button onClick={onClickAdd}>保存</button>
  ```

- TODO表示（READ）
  - 
  ```tsx
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
            {<div>{ todo.isEdit ? <input onChange={onChangeEdit} value={editTodo}/> : <p>{todo.title}</p> }</div> }
            {<div>{ todo.isEdit ? <button onClick={()=>{onClickEditSave(index)}}>保存</button> : <button onClick={()=>{onClickEdit(index)}}>編集</button> }</div> }
            <button onClick={()=>{onClickDelete(index)}}>削除</button>
          </div>
        ))
      }
    </>
  )
  ```


- TODO更新（UPDATE）
```tsx
<input type="checkbox" onClick={()=>{onClickCheck(index)}} />
{<div>{ todo.isEdit ? <input onChange={onChangeEdit} value={editTodo}/> : <p>{todo.title}</p> }</div> }
{<div>{ todo.isEdit ? <button onClick={()=>{onClickEditSave(index)}}>保存</button> : <button onClick={()=>{onClickEdit(index)}}>編集</button> }</div> }
```
```tsx
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

```
- TODO削除（DELETE）
```tsx
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
  ```

```tsx
<button onClick={()=>{onClickDelete(index)}}>削除</button>
```
