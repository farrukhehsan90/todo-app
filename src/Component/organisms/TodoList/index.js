import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../../../Redux/Actions/todo";
import { TodoCard } from "../../molecules";

const TodoList = () => {
  const dispatch = useDispatch();  
  const todos = useSelector((state) => state.todoReducer.todos);

  useEffect(() => {
      dispatch(getTodos());
  }, []);
  
  return (
    <div className="mx-5 my-2">
      <h3>Todo list</h3>
      <hr />
      <div className="row">
        {todos?.map((todo, index) => {
          return <TodoCard key={index} todoIndex={index} todo={todo} />
        })}      
      </div>
    </div>
  );
};

export default TodoList;
