import React, { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  
  //states
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([]) //vai ser um array
  const [status, setStatus] = useState('all')//o status "all" é considerado o padrão, depois pode ser completed ou uncompleted
  const [filteredTodos, setFilteredTodos] = useState([])
  
  //run once when the app starts
  useEffect(() => {
    getLocalTodos()
  }, [])
  //use effect: Tem dois argumentos, o primeiro é uma function e o segundo um array. Essa função so vai ser chamado quando rodar o programa pela primeira vez (no inicio), e sempre que o conteudo de dentro do array for alterado
  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  }, [todos,status])
  //functions and events
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  //save to local storage
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
        status={status}
      />
      <Todolist filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
