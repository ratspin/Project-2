import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Component/ShowInfo/Show_Info'
import Test from './Component/Test/Test'
import Test2 from './Component/Test/Test2'
import Test3 from './Component/Test/Test5'
import NavBar from './Component/NavBar/NavBar'
import Rec from './Component/Rec/Rec'
import Search from './Component/Search/Search'
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'
import Plan from './Component/Plan/Plan'
import SearchImg from './Component/SearchImg/SearchImg'


export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Info' element={<Info />} />
          <Route path='/test' element={<Test />} />
          <Route path='/test2' element={<Test2 />} />
          <Route path='/test3' element={<Test3 />} />
          <Route path='/NavBar' element={<NavBar />} />
          <Route path='/Rec' element={<Rec />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Plan' element={<Plan />} />
          <Route path='/SearchImg' element={<SearchImg />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}