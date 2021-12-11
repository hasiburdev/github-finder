import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import "./index.css";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
      <GithubProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GithubProvider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
