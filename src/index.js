import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const input = document.querySelector(".input");
const btns = document.querySelector(".btns");

input.addEventListener("focus", () => {
  btns.style.transform = "translateX(0)";
});

input.addEventListener("blur", () => {
  btns.style.transform = "translateX(40px)";
});

reportWebVitals();
