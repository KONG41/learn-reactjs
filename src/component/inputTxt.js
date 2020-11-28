import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
const InputTxt = (props) => {
  return (
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type="name" placeholder={props.placeholder} />
    </Form.Group>
  );
};
export default InputTxt;
