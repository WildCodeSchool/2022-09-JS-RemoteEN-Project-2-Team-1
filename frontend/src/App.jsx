import React from "react";
import "./App.css";

import Recommended from "./components/Recommended";
import WorldMusic from "@components/WorldMusic";
import Header from "./components/header";

import { Route, Routes } from "react-router-dom";

import Rock from "./pages/Rock";

function App() {
  return (
    <div className="App">
      <Routes>
      <Header />
      <Route path="/rock/*" element={<Rock />} />
      <Recommended />
      <WorldMusic />
      </Routes>
    </div>
  );
}

export default App;
