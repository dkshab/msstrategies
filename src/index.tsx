import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Application from "./Application";

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  document.getElementById("root")
);
