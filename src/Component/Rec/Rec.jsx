import React, { useRef,useState } from "react";
import {Container,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,RecipeName,SeeMoreText} from './Styled'
import { useLocation, useNavigate} from 'react-router-dom';
import "./NavBar.css";
import RecPagination from './RecPagination'

export default function Rec() {
  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating},{disease}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: [{rating},{disease}]})}
  const createUpload = () =>{navigate('/Upload',{state: [{rating},{disease}]})}
  const rating = state.rating
  const navRef = useRef();

  var data = require("../../calculatetion/food.json");
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
              <SearchInput placeholder="ค้นหาเมนูอาหาร" type="text"value={value} onChange={(e) => setValue(e.target.value)}/>
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
        <div style={{ display: 'flex', justifyContent: 'space-between' ,marginLeft : "2%",marginRight : "3%" , flexWrap: "wrap"}}>             
            <RecipeName>
              ผลการแนะนำเมนูอาหารสำหรับผู้ป่วย : {disease} <br/> เรียงลำดับตามความชอบของผู้ใช้
            </RecipeName> 
            <SeeMoreText>แก้ไขการเลือก</SeeMoreText> 
        </div>
         
        
        
        <RecPagination data={rating}/>
      
      </Container>
  </div>
  )
}
