import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicial from "./PaginaInicial";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Hoje from "./Hoje";
import Historico from "./Historico";
import UserContext from "./../context/UserContext";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicial />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/habitos" element={<Habitos />}></Route>
          <Route path="/hoje" element={<Hoje />}></Route>
          <Route path="/historico" element={<Historico />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
