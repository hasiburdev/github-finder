import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
