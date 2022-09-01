import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoInput from "../Components/TodoInput";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TodoInput />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
