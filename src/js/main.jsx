import React from "react";
import ReactDOM from "react-dom/client";
import FullCounter from "./component/FullCounter.jsx";
import "../index.css"; // ✅ Ruta corregida
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<FullCounter />);