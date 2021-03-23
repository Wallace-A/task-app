import React from "react";


const Form = ({ inputText, setInputText, todos, setTodos, setStatus}) => {
  const inputTextHandler = (e) => {
    //gets text after every key press
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    //stops page refreshing
    e.preventDefault(); 
    //create new todo and add to array
    setTodos([
      //current todos
      ...todos, 
      //create and add new todo from input text
      {text: inputText, completed: false, id:Math.random() * 1000}
    ]);
    //set input to blank
    setInputText("");
    console.log(inputText);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;