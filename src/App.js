import React, { useState } from "react";
import './App.css';

//components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Hi Andy</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}></Form>
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
