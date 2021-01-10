import React from "react";
import Header from "./header";
import InputFile from "./inputFile";
import { Container, Form, Row, Col } from "react-bootstrap";
import TableHeader from "./tableHeader";
import TableRow from "./tableRow";
import Btn from "./button";
import { useState } from "react";

// import DataTable from "./dataTable";
const Home = () => {
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputQty, setInputQty] = useState("");
  const [data, setData] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: inputId,
        name: inputName,
        qty: inputQty,
        tableId: Math.random() * 1000,
      },
    ]);
    setInputId("");
    setInputName("");
    setInputQty("");
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="home-container">
            <Header
              name="Product"
              className="title"
              detail="fild your products"
            />
            <Form.Group>
              <InputFile
                name="ID"
                type="text"
                placeholder="product id"
                onChange={(e) => setInputId(e.target.value)}
                value={inputId}
              />
            </Form.Group>
            <Form.Group>
              <InputFile
                name="Name"
                type="text"
                placeholder="product name"
                onChange={(e) => setInputName(e.target.value)}
                value={inputName}
              />
            </Form.Group>
            <Form.Group>
              <InputFile
                name="Quantity"
                type="number"
                placeholder="1-1000000000000000"
                onChange={(e) => setInputQty(e.target.value)}
                value={inputQty}
              />
            </Form.Group>
            <Btn onClick={submit} value="Add Product" />
          </div>
        </Col>
      </Row>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col>
          <table>
            <TableHeader name1="ID" name2="Name" name3="Quantity" />
            {data.map((tableRow) => (
              <TableRow
                tableRow={tableRow}
                data={data}
                setData={setData}
                key={tableRow.tableId}
                id={tableRow.id}
                name={tableRow.name}
                qty={tableRow.qty}
              />
            ))}
          </table>
          {/* <DataTable /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
