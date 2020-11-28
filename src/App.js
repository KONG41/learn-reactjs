import logo from "./logo.svg";
import "./App.css";
import Login from "./component/login";
import Singup from "./component/singup";
import Home from "./component/home";
// import { Route, BrowserRouter as Router } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/singup" component={Singup} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
