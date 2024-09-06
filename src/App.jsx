import "./App.css";
import ToDoContiner from "./components/ToDoContiner";
import InputContainer from "./components/InputContainer";
import { useState } from "react";
function App() {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }
  function addTodo() {
    if (inputVal === "") return;
    setTodoList([...todoList, inputVal]);
    setInputVal("");
  }
  function deleteTodo(index) {
    setTodoList((todoList) =>
      todoList.filter((todoList, prevIndex) => {
        return prevIndex !== index;
      })
    );
  }

  return (
    <>
      <h1>To Do List</h1>

      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <ToDoContiner todoList={todoList} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
