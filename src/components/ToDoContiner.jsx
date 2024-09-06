import React from "react";
import "../App.css";
import ToDo from "./ToDo";

const ToDoContiner = ({ todoList, deleteTodo }) => {
  return (
    <div className="container">
      {todoList.map((todo, index) => {
        return <ToDo todo={todo} index={index} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
};

export default ToDoContiner;
