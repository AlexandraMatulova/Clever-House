import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Header } from "./Components/Header";
import { Dashboard } from "./Components/Dashboard";
import { smartHomeData } from "./smartHomeData.js";

const data = smartHomeData;

const App = () => {
  return (
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={data} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
