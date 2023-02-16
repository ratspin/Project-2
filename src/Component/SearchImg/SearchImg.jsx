import React, { useRef,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import {Container,RecipeListContainer,RecipeContainer,CoverImage,RecipeName,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,
  // SeeIngredients,SeeNutrients,ResultBox,
  Day} from "./Styled";
import "./SearchImg.css";
// import { FaBars, FaTimes } from "react-icons/fa";
var data = require("../../calculatetion/food.json");

export default function SearchImg() {

  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createUpload = () =>{navigate('/Upload',{state: {rating}})}
  const rating = state[1].rating
  const search_name = state[0].foodname
  const navRef = useRef();
  console.log(search_name);
  
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

  const food_name = search_name;
  const food_img = "food/" + search_name + ".png";
  const food_ingr = "ingredients/" + search_name + ".png";
  const food_nutr = "nutrients/" + search_name + ".png";
  const showinfo = [];

  showinfo.push({
    food_img: food_img,
    food_nutr: food_nutr,
    food_ingr: food_ingr,
    food_name: food_name,
  });

  return (
    <div>
    
    <NavContainer>
      <Header>
        <NavBox>
          {/* <button className="nav-btn" onClick={showNavbar}><FaBars /></button> */}
          <a href="/info"><RecipeImage src="/food4U.png" /></a>
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

    <Container>

        <Day >ผลลัพธ์การค้นหา</Day>      <RecipeName>{food_name}</RecipeName>

          <RecipeListContainer>
            {/* <RecipeContainer>
                <CoverImage src={food_img} alt={food_name} />
            </RecipeContainer> <br/> */}
            <RecipeContainer>
                <CoverImage src={food_ingr} alt={food_name} />
            </RecipeContainer> <br/>
            <RecipeContainer>
                <CoverImage src={food_nutr} alt={food_name} />
            </RecipeContainer> <br/>
          </RecipeListContainer>




        
    </Container>
    </div>
  );
}
