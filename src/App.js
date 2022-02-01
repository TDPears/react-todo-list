import React, {useState, useRef, useEffect} from 'react';
import Todolist from './TodoList'
import { v4 as uuid } from 'uuid'
import TodoItem from './TodoItem';

const LOCAL_STORAGE_KEY = "todoApp.todoItems"

function App() {
  const [todoList, setTodolist] = useState([])
  const todoNameRef = useRef()


  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodoList) setTodolist(storedTodoList)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList])

  function toggleTodoItem (id) {
    const newTodoList = [...todoList]
    const todoItem = newTodoList.find(todoItem => todoItem.id === id)
    todoItem.complete = !todoItem.complete
    setTodolist(newTodoList)
  }

  function addTodoHandler(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodolist(prevTodoItems => {
      return [...prevTodoItems, {id: uuid(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function clearTodoHandler(e) {
    const newTodoList = todoList.filter(todoItem => !todoItem.complete)
    setTodolist(newTodoList)
  }

  return (
  <>
    <Todolist todoList={todoList} toggleTodoItem = {toggleTodoItem} />
    <input ref={todoNameRef} type="text" />
    <button onClick={addTodoHandler}>Add Todo Item</button>
    <button onClick={clearTodoHandler} >Clear Complete</button>
    <div>{todoList.filter(todoItem => !todoItem.complete).length} Todo Items Left</div>
  </>
  )
}

export default App;