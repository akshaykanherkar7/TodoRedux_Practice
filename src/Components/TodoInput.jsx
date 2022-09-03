import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAPI, getTodoAPI } from "../Redux/Todo/todo.action";
import TodoList from "./TodoList";

const TodoInput = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const todo = {
      id: Date.now(),
      title: title,
      status: false,
    };
    dispatch(addTodoAPI(todo)).then((res) => {
      dispatch(getTodoAPI());
    });
  };
  return (
    <div>
      <h1>TodoInput</h1>
      <input
        type="text"
        placeholder="write something"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>ADD</button>
      <TodoList></TodoList>
    </div>
  );
};

export default TodoInput;
