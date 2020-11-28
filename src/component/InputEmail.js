import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
const InputEmail = (props) => {
  return (
    <Form.Group controlId="formGroupEmail">
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type="email" placeholder={props.placeholder} />
    </Form.Group>
  );
};
export default InputEmail;
