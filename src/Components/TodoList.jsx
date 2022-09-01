import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoAPI,
  editTodoAPI,
  getTodoAPI,
  toggleTodoAPI,
} from "../Redux/Todo/todo.action";

const TodoList = ({ title }) => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  console.log("todos:", todos);

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoAPI(id)).then((res) => {
      dispatch(getTodoAPI()).then(res);
    });
  };

  const handleToggleTodo = (todo) => {
    dispatch(toggleTodoAPI(todo)).then((res) => {
      dispatch(getTodoAPI());
    });
  };

  const handleEditTodo = (todo) => {
    // id,title,status
    todo.title = title;
    dispatch(editTodoAPI(todo)).then((res) => {
      dispatch(getTodoAPI());
    });
  };

  useEffect(() => {
    dispatch(getTodoAPI());
  }, [dispatch]);

  return (
    <div>
      {todos.length > 0 &&
        todos.map((el) => (
          <div key={el.id} style={{ border: "1px solid red" }}>
            <div>{el.title}</div>
            <div>{el.status ? "Completed" : "notCompleted"}</div>
            <div>
              <button onClick={() => handleEditTodo(el)}>Edit</button>
              <button
                onClick={() => handleToggleTodo(el)}
                style={el.status ? { color: "green" } : { color: "red" }}
              >
                Toggle
              </button>
              <button onClick={() => handleDeleteTodo(el.id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
