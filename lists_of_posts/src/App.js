import React from "react";
import "./style/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./API/Navbar";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
