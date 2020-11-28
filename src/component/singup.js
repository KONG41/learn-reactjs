import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirrm Password" />
          </Form.Group>
          {/* <Form.Group>
            <label>
              <Form.Check aria-label="option 1" />I accept the
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </Form.Group> */}
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
