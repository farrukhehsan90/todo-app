import React from "react";
import { Button } from "../../atoms";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-2 mx-4">
        <p className="text-xl-center mt-2 pt-2">Todo App</p>
        <Button title="Add Todo" type="button" color="light" />
      </div>
      <hr />
    </div>
  );
};

export default Header;
