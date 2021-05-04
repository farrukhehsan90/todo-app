import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo, getTodos } from "../Redux/Actions/todo";

const TodoCard = ({ todo, todoIndex }) => {
  const dispatch = useDispatch();  
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setTitle(todo.title);
    setDescription(todo.description);
  }, [])

  const updateTodoData = async id => {
    if (!title || !description) {
      return alert('Please enter data');
    }

    dispatch(updateTodo({
      id,
      payload: {
        title,
        description
      }
    }));

    setEdit(false);
  }

  const deleteTodoData = id => {
    dispatch(deleteTodo(id, todoIndex));

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  return (
        <div className="col-sm-3 col-md-4 col-lg-3 my-2">
          <div className="card">
            <div className="card-body">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
              {edit ? <input 
                type="text" 
                className="mb-2"
                onChange={e => setTitle(e.target.value)}  
                value={title}
              /> : <h5 className="card-title">{title}</h5>}
              {edit ? <input
                type="text"
                onChange={e => setDescription(e.target.value)}
                value={description}
               /> : <p className="card-text">{description}</p>}  
              </div>
              <div className="d-flex justify-content-around">
                <a onClick={_ => edit ? updateTodoData(todo.id) : setEdit(true)} href="Javascript:void(0)" className="btn btn-success btn-min-w">
                  {edit ? 'Update' : 'Edit'}
                </a>
                <a onClick={_ => edit ? setEdit(false) : deleteTodoData(todo.id)} href="Javascript:void(0)" className="btn btn-danger btn-min-w">
                  {edit ? 'Cancel' : 'Delete'}
                </a>
              </div>
            </div>
          </div>
        </div>
  );
};

export default TodoCard;
