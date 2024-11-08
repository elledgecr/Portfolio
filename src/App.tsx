import React from "react";
import "./styles/App.css";
import Hero from "./components/hero/index";
import Navbar from "./components/navbar";
import Works from "./components/works";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Works />
    </>
  );
}

export default App;
