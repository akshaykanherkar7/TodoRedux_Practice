import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoInput from "../Components/TodoInput";
import TodoEdit from "./TodoEdit";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoInput />}></Route>
        <Route path="/:id" element={<TodoEdit />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
