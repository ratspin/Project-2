import React, { useRef,useState } from "react";
import {Container,RecipeListContainer,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,RecipeName} from './Styled'
import { useLocation, useNavigate} from 'react-router-dom';
import "./NavBar.css";
import ShowResult from "../ShowResult/Show_Result"


export default function Rec() {
  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createUpload = () =>{navigate('/Upload',{state: {rating}})}
  const rating = state.rating
  const navRef = useRef();

  var data = require("../../calculatetion/food.json");
  var calculate = require("../../calculatetion/calculate.js");

  var name = [];
  for (var index = 0; index < data.length; index++) {
    var food = data[index]["อาหาร"];
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

  // var cal_result = calculate.Similar_sort(calculate.Weights(rating),calculate.Weights(data),calculate.Similar_score,105)

  var cal_result = calculate.Similar_sort(calculate.Weights(rating),calculate.Weights(calculate.Fillters(rating[0].โรค,data)),calculate.Similar_score,20)

  var result= []

  for(var i = 0; i < cal_result.length; i++) {
  var food_img = "food/"+ cal_result[i].food + ".png"
  var food_ingr = "ingredients/"+ cal_result[i].food + ".png"
  var food_name = cal_result[i].food
  var food_similar = cal_result[i].similar_rate
  var food_nutr = "nutrients/"+ cal_result[i].food + ".png"
  result.push({food_img:food_img,food_nutr:food_nutr,food_ingr:food_ingr,food_name:food_name,food_similar:food_similar})
  }

  console.log(state);

  var disease = ""
  if(rating[0].โรค === "A") disease = "โรคหัวใจ"
  if(rating[0].โรค === "B") disease = "โรคเบาหวาน"
  if(rating[0].โรค === "C") disease = "โรคความดันโลหิตสูง"
  if(rating[0].โรค === "D") disease = "โรคไต"
  if(rating[0].โรค === "AB") disease = "โรคหัวใจ และโรคเบาหวาน"
  if(rating[0].โรค === "AC") disease = "โรคหัวใจ และโรคความดันโลหิตสูง"
  if(rating[0].โรค === "AD") disease = "โรคหัวใจ และโรคไต"
  if(rating[0].โรค === "BC") disease = "โรคเบาหวาน และโรคความดันโลหิตสูง"
  if(rating[0].โรค === "BD") disease = "โรคเบาหวาน และโรคไต"
  if(rating[0].โรค === "CD") disease = "โรคความดันโลหิตสูง และโรคไต"
  if(rating[0].โรค === "ABC") disease = "โรคหัวใจ โรคเบาหวาน และโรคความดันโลหิตสูง"
  if(rating[0].โรค === "ABD") disease = "โรคหัวใจ โรคเบาหวาน และโรคไต"
  if(rating[0].โรค === "ACD") disease = "โรคหัวใจ โรคความดันโลหิตสูง และโรคไต"
  if(rating[0].โรค === "BCD") disease = "โรคเบาหวาน โรคความดันโลหิตสูง และโรคไต"
  if(rating[0].โรค === "ABCD") disease = "โรคหัวใจ โรคเบาหวาน โรคความดันโลหิตสูง และโรคไต"

  
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
            <div className="dropdown" style={{ width: '280px'}}>
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
        <RecipeName>เมนูสำหรับผู้ที่มี</RecipeName>
        <div><RecipeName> {disease} </RecipeName>
         {/* <IconImg src="/icon/โรคหัวใจ.png" alt = "หมู"/>  */}
        </div>
        
        <RecipeListContainer>
          {result !== [] &&result.map((data,index) => {return <ShowResult key={index} data={data} />;})}
      </RecipeListContainer>
      </Container>
  </div>
  )
}
