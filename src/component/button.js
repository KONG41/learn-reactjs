import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Group, Label, Control, Row, Col, Button } from "react-bootstrap";
const Btn = (props) => {
  return (
    <Button variant="primary" className={props.className}>
      {props.value}
    </Button>
  );
};
export default Btn;
