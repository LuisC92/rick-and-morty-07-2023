import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { CharactersContextProvider } from "./contexts/CharactersContext.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CharactersContextProvider>
          <App />
        </CharactersContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
