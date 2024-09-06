import React, { useState } from "react";
import "../App.css";

const InputContainer = ({ inputVal, writeTodo, addTodo }) => {
  return (
    <div className="inner-Container">
      <input
        type="text"
        value={inputVal}
        onChange={writeTodo}
        placeholder="ToDo task here..."
      />
      <button onClick={addTodo}>+</button>
    </div>
  );
};

export default InputContainer;
