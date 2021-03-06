import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Test from "./component/test";
import reportWebVitals from "./reportWebVitals";
import Input from "./component/input";
ReactDOM.render(
  <React.StrictMode>
    {/* <Test /> */}
    <App />
    {/* <Input name="Name" />
    <Input name="password" /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
