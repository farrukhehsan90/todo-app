import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Actions/todo";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodoData = e => {
    e.preventDefault();

    if (!title || !description) {
      return alert('Please enter data');
    }

    dispatch(addTodo({
      title,
      description 
    }));

    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={addTodoData} className="mx-5">
      <h3>Notes Detail</h3>
      <hr />
      <div className="form-group">
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          onChange={e => setTitle(e.target.value)}
          className="form-control"
          value={title}
          id="Title"
          aria-describedby="titlehelp"
          placeholder="Enter title"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          onChange={e => setDescription(e.target.value)}
          className="form-control"
          value={description}
          id="description"
          aria-describedby="testHelp"
          placeholder="Enter description"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
