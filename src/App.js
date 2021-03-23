import React, { useState, useEffect } from "react";
import './App.css';

//components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
   //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //run once when app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect runs once when page is rendered
  // or when the todos and status value changes
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //functions
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }
  //load locals
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoFromLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Hi Andy</h1>
      </header> 
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus={setStatus}
      ></Form>
      <ToDoList 
      status={status} 
      todos={todos} 
      setTodos={setTodos}
      filteredTodos={filteredTodos}
      ></ToDoList>
    </div>
  );
}

export default App;
