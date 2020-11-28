import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import InputFile from "./input";
const Login = () => {
  return (
    <div className="container">
      <label className="login">LOGIN</label>
      <div>
        <InputFile name="Name" />
        <InputFile name="Password" />
      </div>
      <div className="btn">
        <label>Login</label>
      </div>
      <Link to="/Singup">
        <div className="btn1">
          <label>Sing Up</label>
        </div>
      </Link>
    </div>
  );
};
export default Login;
