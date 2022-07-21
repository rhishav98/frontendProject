import React from "react";
import { useState } from "react";
import "./app.css";
import FormInput from "../Forms/FormInput";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    loginStatus: "",
  });
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("done");

    try {
      await axios
        .post("http://localhost:5000/login", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          if (response.data.length === 1) {
            history.push("/sidenav");
          } else {
            alert("Wrong email/password");
          }
        });
    } catch (error) {
      if (error.response) {
        console.log("Error");
      }
    }
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <h1> Alumni Login </h1>{" "}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}{" "}
        <button> Submit </button> <h1> {values.loginStatus} </h1>{" "}
        <p>
          Click here to <NavLink to="/Registration"> Register </NavLink>{" "}
        </p>{" "}
      </form>{" "}
    </div>
  );
};
export default Login;
