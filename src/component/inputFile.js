import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
const InputFile = (props) => {
  return (
    <div>
      <Form.Label>{props.name}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} />
    </div>
  );
};
export default InputFile;
