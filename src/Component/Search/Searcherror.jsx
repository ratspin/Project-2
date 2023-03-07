import React, { useRef,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { RecipeName,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,ContainerERR
  // ,Container,RecipeListContainer,RecipeContainer,CoverImage
  } from "./Styled";
import "./NavBar.css";
var data = require("../../calculatetion/food.json");

export default function SearchError() {

  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createUpload = () =>{navigate('/Upload',{state: {rating}})}
  const rating = state[0].rating

  const navRef = useRef();

  // console.log(rating);
  
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




  return (
    <div>
    
    <NavContainer>
      <Header>
        <NavBox>
          {/* <button className="nav-btn" onClick={showNavbar}><FaBars /></button> */}
          <a href="/info"><RecipeImage src="/3.png" /></a>
          <nav ref={navRef}>
            <div className="a" onClick={() => createRec()} > แนะนำอาหาร</div>
            <div className="a" onClick={() => createPlan()} >วางแผนการรับประทาน</div>
            <div className="a" onClick={() => createUpload()} >ค้นหาด้วยรูป</div>
          </nav>
          {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button> */}

        </NavBox>
        <div>
          <SearchBox>
            <SearchIcon src="/search-icon.svg" onClick={() => onLink(value)}/>
            <SearchInput placeholder="ค้นหา" type="text"value={value} onChange={(e) => setValue(e.target.value)}/>
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

    <ContainerERR>

        {/* <Day >ผลลัพธ์การค้นหา</Day>       */}

        <RecipeName> ไม่พบผลลัพธ์ที่ตรงกับการค้นหาของคุณ </RecipeName>


        
    </ContainerERR>
    </div>
  );
}
