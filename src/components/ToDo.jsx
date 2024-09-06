import React from "react";
import "../App.css";

const ToDo = ({ todo, index, deleteTodo }) => {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="action-elements">
        <input type="checkbox" />
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDo;
