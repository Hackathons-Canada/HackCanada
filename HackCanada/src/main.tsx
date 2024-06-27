import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Hero />
    <About />
  </React.StrictMode>
);
