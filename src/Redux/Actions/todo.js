import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../types";
import { BASE_URL } from "../../Config/config";

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const dataJSON = await fetch(`${BASE_URL}/api/todos`);
      const data = await dataJSON.json();

      return dispatch({
        type: GET_TODOS,
        payload: data
      });

    } catch (err) {
      return dispatch({
        type: GET_TODOS,
        payload: []
      }); 
    }
  }
};

export const addTodo = (payload) => {
  return async (dispatch) => {
    try {
      const dataJSON = await fetch(`${BASE_URL}/api/todos`, {
        method: 'POST',
        body: JSON.stringify(payload)
      });      
      const data = await dataJSON.json();

      return dispatch({
        type: ADD_TODO,
        payload: data
      });
      
    } catch (err) {
      console.log('Error from add todo', err);
    }
  }
};

export const updateTodo = ({ id, payload }) => {
  return async (dispatch) => {
    try {
      const dataJSON = await fetch(`${BASE_URL}/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
      });      

      const data = await dataJSON.json();

      return dispatch({
        type: UPDATE_TODO,
        payload: { id, payload: data }
      });
      
    } catch (err) {
      console.log('Error from update todo', err);
    }
  }
};

export const deleteTodo = (id, todoIndex) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/api/todos/${id}`, {
        method: 'DELETE'
      });      

      return dispatch({
        type: DELETE_TODO,
        payload: { todoIndex }
      });
      
    } catch (err) {
      console.log('Error from delete todo', err);
    }
  }
};