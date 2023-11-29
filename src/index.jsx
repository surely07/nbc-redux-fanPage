import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LetterContextProvider from "context/LetterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LetterContextProvider>
    <App />
  </LetterContextProvider>
);
