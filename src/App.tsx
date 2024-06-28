import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Hero />
    <About />
  </React.StrictMode>,
);
