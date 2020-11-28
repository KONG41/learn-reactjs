import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputEmail from "./InputEmail";
import InputPass from "./inputPass";
import InputTxt from "./inputTxt";
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
            <InputTxt name="First Name" />
            <InputTxt name="Last Name" />
          </Form.Row>

          <InputEmail name="Email" placeholder="Enter Email" />
          <InputPass name="Password" placeholder="Password" />
          <InputPass name="Comfirm Password" placeholder="Comfirm Password" />
          <Form.Group id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label=" I accept the Terms of Use & Privacy Policy"
              a=""
            />
          </Form.Group>
        </Form>
        <Link to="/home">
          <Button variant="primary" className="btn-sub">
            Submit
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Singup;
