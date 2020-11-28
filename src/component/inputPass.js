import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
const InputFile = (props) => {
  return (
    <Form.Group controlId="formGroupPassword">
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type="password" placeholder={props.placeholder} />
    </Form.Group>
  );
};
export default InputFile;
