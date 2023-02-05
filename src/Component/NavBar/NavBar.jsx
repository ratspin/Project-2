import React, { useRef,useState } from "react";
import {NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage} from "./Styled";
// import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";

var data = require("../../calculatetion/food.json");

export default function NavBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: {value}})}
  const navRef = useRef();

  var name = [];
  for (var i = 0; i < data.length; i++) {
    var food = data[i]["อาหาร"];
    name.push({ name: food });
  }
 
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search ", searchTerm);
  };

  const onLink = (searchTerm) => {
    setValue(searchTerm);
    createLink()
    console.log("search onLink :", searchTerm);
  };

  // const show = name.filter((item) => {return value.toLowerCase() === ''? item: item.name.toLowerCase().includes(value);})
  // console.log(show);

  
  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // };

  return (
    <NavContainer>
      <Header>
        <NavBox>
          {/* <button className="nav-btn" onClick={showNavbar}><FaBars /></button> */}
          <a href="/info"><RecipeImage src="/food4U.png" /></a>
          <nav ref={navRef}>
            <a href="/rec">แนะนำอาหาร</a>
            <a href="/plan">วางแผนการรับประทาน</a>
            <a href="/plan">ค้นหาด้วยรูป</a>
          </nav>
          {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button> */}

        </NavBox>
        <div>
          <SearchBox>
            <SearchIcon src="/search-icon.svg" onClick={() => onLink(value)}/>
            <SearchInput placeholder="Search" type="text"value={value} onChange={(e) => setValue(e.target.value)}/>
          </SearchBox>
          <div className="dropdown">
          {name.filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.name.toLowerCase();
              return (searchTerm &&fullName.startsWith(searchTerm) &&fullName !== searchTerm);}).slice(0, 10)
              .map((item) => (
              <div style={{ cursor: 'pointer' }} onClick={() => onSearch(item.name)} key={item.name}>{item.name}</div>))}
          </div>
        </div>
      </Header>
    </NavContainer>
  );
}
