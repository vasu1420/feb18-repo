import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Delete from "./components/Delete";
import Search from "./components/Search";
import DisplayAll from "./components/DisplayAll";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/del" element={<Delete />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
