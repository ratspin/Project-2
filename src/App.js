import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App2 from './App2'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}