import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // evnts
  const deleteHandler = () => {
    //removes this todo from todolist
    setTodos(todos.filter(element => element.id !==  todo.id))
  };
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if(item.id === todo.id) {
        return {
          // toglle completed of this item
          ...item, completed: !item.completed
        }
      }
      // or just return the item as normal
      return item;
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="complete-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;