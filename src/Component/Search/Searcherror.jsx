import React, { useRef,useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import {Container,RecipeListContainer,RecipeContainer,CoverImage,RecipeName,SeeIngredients,SeeNutrients,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,ResultBox} from "./Styled";
import Modal1 from "../Modal/Modal_Ingredients";
import Modal2 from "../Modal/Modal_Nutrients";
import "./Search.css";
// import { FaBars, FaTimes } from "react-icons/fa";
var data = require("../../calculatetion/food.json");

export default function Search() {
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: {value}})}
  const navRef = useRef();

  const { state } = useLocation();
  const search_name = state.value;

  var name = [];
  for (var i = 0; i < data.length; i++) {
    var food = data[i]["อาหาร"];
    name.push({ name: food });
  }

  const onChange = (event) => {
    setValue(event.target.value);
    console.log("searchbox :", event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("search :", searchTerm);
  };

  const onLink = (searchTerm) => {
    setValue(searchTerm);
    createLink()
    console.log("searchlink :", searchTerm);
  };

  const show = name.filter((item) => {return value.toLowerCase() === ''? item: item.food_name.toLowerCase().includes(value);})

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
  console.log(search_name);

  return (
    <Container>
      <NavContainer>
        <Header>
          <NavBox>
            {/* <button className="nav-btn" onClick={showNavbar}><FaBars /></button> */}
            <a href="/"><RecipeImage src="/food4U.png" /></a>
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
              <SearchInput placeholder="Search" type="text"value={value} onChange={onChange}/>
            </SearchBox>
            <div className="dropdown">
              {show.filter((item) => {const searchTerm = value.toLowerCase();const Name = item.name.toLowerCase();
                  return (searchTerm &&Name.startsWith(searchTerm) &&Name !== searchTerm);}).slice(0, 10).map((item) => (
                  <div className="dropdown-row"onClick={() => onSearch(item.name)} key={item.name}>{item.name}</div>
                ))}
            </div>
          </div>
        </Header>
      </NavContainer>
      
      <ResultBox> 
        <Modal1 open={openModal1} data={food_name} onClose={() => setOpenModal1(false)}/>
        <Modal2 open={openModal2} data={food_name} onClose={() => setOpenModal2(false)}/> 
        <div style={{ width: "0%", marginTop: '1rem', backgroundColor: 'gray', color: '#fff', padding: '20px 1rem', width: '200px', border: 'none', fontSize: '1.5rem', position: 'relative', top: '5px' , }} >
          ผลลัพธ์การค้นหา
        </div>
      </ResultBox>     

      <RecipeListContainer>
      <div style={{fontSize: '1.5rem',margin: '50px', }} >
      ไม่มีผลลัพธ์ตรงกับที่คุณค้นหา
        </div>              
      </RecipeListContainer>           
        
    </Container>
  );
}
