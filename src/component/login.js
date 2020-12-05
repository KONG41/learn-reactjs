import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Btn from "./button";
import InputFile from "./inputFile";
import Header from "./header";
const Login = () => {
  return (
    <div className="singup-con">
      <div className="singup-form">
        <Header name="Login" detail="Please fill this to login your account" />
        <Form className="fill-form">
          <Form.Group controlId="formGroupUsername">
            <InputFile type="email" name="Email" placeholder="username@email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <InputFile type="password" name="Password" placeholder="password" />
          </Form.Group>
        </Form>
        <div className="detail">
          <li>
            <a
              href="https://web.facebook.com/login/identify?_rdc=1&_rdr"
              target="_blank"
            >
              Forgot Password.
            </a>
          </li>
        </div>
        <div className="detail">
          <p>Click singup if you don't have account.</p>
        </div>
        <Link to="/singup">
          <Btn value="SingUp" className="btn-singup"></Btn>
        </Link>
        <Link to="/home">
          <Btn value="Login" className="btn-login"></Btn>
        </Link>
      </div>
    </div>
  );
};
export default Login;
