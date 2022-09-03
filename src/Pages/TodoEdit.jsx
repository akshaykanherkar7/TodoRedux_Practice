import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editTodoAPI, getTodoAPI } from "../Redux/Todo/todo.action";

const TodoEdit = () => {
  let { id } = useParams();
  console.log("id:", id);

  const navigate = useNavigate();

  const [edittitle, setEdittitle] = useState("");
  const [todo, setTodo] = useState({});

  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleEditTodo = () => {
    let newEditedTodo = {
      title: edittitle,
    };
    dispatch(editTodoAPI(id, newEditedTodo)).then((res) => {
      dispatch(getTodoAPI());
    });
  };

  const handleNav = () => {
    navigate("/");
  };

  useEffect(() => {
    if (todos.length > 0) {
      id = Number(id);
      if (id) {
        for (let i = 0; i < todos.length; i++) {
          if (id === todos[i].id) {
            setTodo(todos[i]);
          }
        }
      }
    }
  }, [todos, id]);

  useEffect(() => {
    dispatch(getTodoAPI());
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        value={edittitle}
        onChange={(e) => setEdittitle(e.target.value)}
        placeholder="write something..."
      />
      <button onClick={handleEditTodo}>Edit Now</button>
      <div>
        <div>{todo.title}</div>
        <div>{todo.status ? "Completed" : "notCompleted"}</div>
      </div>
      <button onClick={handleNav}>Goto Todo Page</button>
    </div>
  );
};

export default TodoEdit;
