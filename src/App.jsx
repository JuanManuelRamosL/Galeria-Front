import { useState } from "react";
import Home from "./componentes/home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./componentes/landing";
import Detail from "./componentes/detail";
import Favs from "./componentes/favoritos";
import Category from "./componentes/category";
import Category_dt from "./componentes/category_dt";
import Usuario from "./componentes/Usuario";
import Nosotros from "./componentes/nosotros";
import Artist from "./componentes/artist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/categorias" element={<Category />} />
        <Route path="/categorias_d" element={<Category_dt />} />
        <Route path="/user" element={<Usuario />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </>
  );
}

export default App;
