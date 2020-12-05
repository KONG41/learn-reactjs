import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Btn from "./button";
import InputFile from "./inputFile";
const Singup = () => {
  return (
    <div className="singup-con">
      <div className="singup-form">
        <div className="title">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account!</p>
        </div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <InputFile
                type="text"
                name="First Name"
                placeholder="your first-name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <InputFile
                type="text"
                name="Last Name"
                placeholder="your last-name"
              />
            </Form.Group>
          </Form.Row>

          {/* <InputEmail name="Email" placeholder="Enter Email" /> */}
          <Form.Group controlId="formGroupEmail">
            <InputFile type="email" name="Email" placeholder="username@email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <InputFile type="password" name="Password" placeholder="password" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <InputFile
              type="password"
              name="Comfirm Password"
              placeholder="confirm-password"
            />
          </Form.Group>
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label=" I accept the Terms of Use & Privacy Policy"
              a=""
            />
          </Form.Group>
        </Form>
        <Link to="/home">
          <Btn value="Submit"></Btn>
        </Link>
      </div>
    </div>
  );
};
export default Singup;
