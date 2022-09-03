import * as types from "./todo.actionTypes";
import axios from "axios";

export const addTodoAPI = (todo) => (dispatch) => {
  return axios.post("http://localhost:8080/todos", todo);
};

export const getTodoAPI = () => (dispatch) => {
  return axios.get("http://localhost:8080/todos").then((res) => {
    dispatch({ type: types.GET_TODO, payload: res.data });
  });
};

export const deleteTodoAPI = (id) => (dispatch) => {
  return axios.delete(`http://localhost:8080/todos/${id}`);
};

export const toggleTodoAPI = (todo) => (dispatch) => {
  return axios.patch(`http://localhost:8080/todos/${todo.id}`, {
    status: !todo.status,
  });
};

export const editTodoAPI = (id, todo) => (dispatch) => {
  return axios.patch(`http://localhost:8080/todos/${id}`, todo);
};
