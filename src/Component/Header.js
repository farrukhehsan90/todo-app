import React from "react";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-2 mx-4">
        <p className="text-xl-center mt-2 pt-2">Todo App</p>
        <button type="button" className="btn btn-light">
          Add Todo
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Header;
