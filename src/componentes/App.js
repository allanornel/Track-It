import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./PaginaInicial";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/habitos" element={<Habitos />}></Route>
        <Route path="/hoje"></Route>
        <Route path="/historico"></Route>
      </Routes>
    </BrowserRouter>
  );
}
