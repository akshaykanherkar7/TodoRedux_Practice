import * as types from "./todo.actionTypes";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODO: {
      return { ...state, todos: payload };
    }

    default: {
      return state;
    }
  }
};
