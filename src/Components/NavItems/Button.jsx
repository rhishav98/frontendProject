import React from "react";
import { NavLink } from "react-bootstrap";
const Button = () => {
  return (
    <>
      <div id="headerbtn" className="">
        <div className="mt-3">
          <NavLink to="#" className="btn-get-started ">
            <i> Add to Cart </i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Button;
