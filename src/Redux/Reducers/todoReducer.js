import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../types";

const initialState = {
  todos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      return { ...state, todos: action.payload };
    }

    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }

    case UPDATE_TODO: {
      let todosClone = [...state.todos];
      let todoIndex = todosClone.findIndex(todo => todo.id === action.payload.id);
      todosClone[todoIndex] = { ...action.payload.payload };
      return { ...state, todos: todosClone };
    }

    case DELETE_TODO: {
      let todosClone = [...state.todos]; 
      todosClone.splice(action.payload.todoIndex, 1);
      return { ...state, todos: todosClone };
    }

    default:
      return state;
  }
};
