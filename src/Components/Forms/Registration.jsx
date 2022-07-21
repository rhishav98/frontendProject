import React from "react";
import { useState } from "react";
import "./app.css";
import FormInput from "../Forms/FormInput";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const Registration = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    centre: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-30 characters and shouldn't include any special character!",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "centre",
      type: "text",
      placeholder: "Centre/Department Name",

      label: "Centre/Department Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000/registration", {
      username: values.username,
      email: values.email,
      centre: values.centre,
      password: values.password,
    }).then((result) => {
      if (result != null) {
        window.location.reload();
      }
    });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <h1> Alumni Register </h1>{" "}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}{" "}
        <button type="submit"> Submit </button>{" "}
        <p>
          Already Registed ? ? <NavLink to="/Login"> Login </NavLink>{" "}
        </p>{" "}
      </form>{" "}
    </div>
  );
};
export default Registration;
