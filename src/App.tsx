import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Delete from "./components/DeleteStudent";
import DisplayAll from "./components/DisplayAll";
import AddCar from "./components/AddCar";
import ShowAllStu from "./components/ShowAllStu";
import SearchStudent from "./components/SearchStudent";
import AllCars from "./components/AllCars";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ShowAllStu />} />
          <Route path="/all" element={<DisplayAll />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/del" element={<Delete />} />
          <Route path="/search" element={<SearchStudent />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/allcars" element={<AllCars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
