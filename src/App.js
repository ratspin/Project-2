import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Component/ShowInfo/Show_Info'
import Test from './Component/ShowInfo/Show_Info'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Info />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}