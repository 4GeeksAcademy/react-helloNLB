import React from "react";
import ReactDOM from "react-dom/client";
import FullCounter from "./component/FullCounter.jsx";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FullCounter />);