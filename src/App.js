import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home'
import Info from './Component/ShowInfo/Show_Info'
import Test from './Component/Test/Test'
import NavBar from './Component/NavBar/NavBar'
import Rec from './Component/Rec/Rec'
import Search from './Component/Search/Search'
import Profile from './Component/Profile/Profile'
import Plan from './Component/Plan/Plan'
import Upload from './Component/Upload/Upload'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/test' element={<Test />} />
          <Route path='/navbar' element={<NavBar />} />
          <Route path='/rec' element={<Rec />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/upload' element={<Upload/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}