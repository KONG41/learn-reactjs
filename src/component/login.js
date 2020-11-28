import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="container">
      <label className="login">LOGIN</label>
      <div>
        <ul>
          <li>
            <label className="label">Email</label>
          </li>
          <li>
            <label className="label">Password</label>
          </li>
        </ul>
        <ul>
          <li>
            <input type="text" />
          </li>
          <li>
            <input type="password" />
          </li>
        </ul>
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
