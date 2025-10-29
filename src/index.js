import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie"; // 👈 add this
import App from "./App";
import "./Stylings/Style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <CookiesProvider>
      <App />
    </CookiesProvider>
  
);
