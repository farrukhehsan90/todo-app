import React from "react";

const Button = ({ title, type, color }) => {
  return ( 
        <button type={type}className={`btn btn-${color}`}>
          {title}
        </button>
  );
};

export default Button;
