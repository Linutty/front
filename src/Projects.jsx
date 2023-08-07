import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects/>} />
    </Router>
  );
}

export default App;
