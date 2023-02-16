import React, { useRef,useState } from "react";
import {Container,RecipeListContainer,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,MealBox,DayBox,Day} from './Styled'
import { useLocation, useNavigate} from 'react-router-dom';
import "./NavBar.css";
import ShowResult from "../ShowResult/Show_Result"


export default function Plan() {
  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createUpload = () =>{navigate('/upload',{state: {rating}})}
  const rating = state.rating
  const navRef = useRef();

  var data = require("../../calculatetion/food.json");
  var fooddb = require('../../calculatetion/food.json'); 
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

  var cal_result = calculate.similar_sort(calculate.Weight(rating),calculate.Weight(fooddb) ,calculate.similar_score ,20)
  var result= []

  for(var i = 0; i < cal_result.length; i++) {
  var food_img = "food/"+ cal_result[i].food + ".png"
  var food_ingr = "ingredients/"+ cal_result[i].food + ".png"
  var food_name = cal_result[i].food
  var food_similar = cal_result[i].similar_rate
  var food_nutr = "nutrients/"+ cal_result[i].food + ".png"
  result.push({food_img:food_img,food_nutr:food_nutr,food_ingr:food_ingr,food_name:food_name,food_similar:food_similar})
  }

  var meal = [{meal:"มื้อเช้า",img:"/meal/1.png"},{meal:"มื้อเที่ยง",img:"/meal/2.png"}, {meal:"มื้อเย็น",img:"/meal/3.png"}]

    function random_item() {
        var items = [Math.floor(Math.random()*result.length)]; 
        return result.splice(items,1)[0]
            
      }
   
    var day1 = [];
    var day2 = [];
    var day3 = [];

        for(var j = 0; j < 3 ; j ++){
          day1.push(random_item(result))
          day2.push(random_item(result))
          day3.push(random_item(result))
        }
  
    
    
  


  // console.log(result[0], result[1], result[2], result[3]);

  const text = meal.map((d,index) => {return <MealBox key={index}>
                                                <img style={{ margin: "5px",height: "50px", width: "50px" }} key={index} src = {d.img} alt={d.meal}/> 
                                                <div style={{ marginTop: "15px" }} key={index}>{d.meal}</div> 
                                              </MealBox> })

 
  return (
    <div>
      <NavContainer>
        <Header>
          <NavBox>
            <a href="/info"><RecipeImage src="/food4U.png" /></a>
            <nav ref={navRef}>
              <div className="a" onClick={() => createRec()} > แนะนำอาหาร</div>
              <div className="a" onClick={() => createPlan()} >วางแผนการรับประทาน</div>
              <div className="a" onClick={() => createUpload()} >ค้นหาด้วยรูป</div>
            </nav>
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
                .map((item,index) => (
                <div style={{ cursor: 'pointer' }} onClick={() => onSearch(item.name)} key={index}>{item.name}</div>))}
            </div>
          </div>
        </Header>
      </NavContainer>

      <Container>
        <DayBox>  
          <Day >วันที่ 1</Day>    
            <RecipeListContainer>{text}</RecipeListContainer>
          <Day style={{ backgroundColor: 'white'}} >วันที่ 1</Day>    
        </DayBox>                   
        <RecipeListContainer>   
          {day1 !== [] &&day1.map((data,index) => {return <ShowResult key={index} data={data} />;})}
        </RecipeListContainer>
        <br/><br/><br/><hr/><br/>
        
        <DayBox>  
          <Day >วันที่ 2</Day>    
            <RecipeListContainer>{text}</RecipeListContainer>
          <Day style={{ backgroundColor: 'white'}} >วันที่ 2</Day>    
        </DayBox>    
        <RecipeListContainer>
          {day2 !== [] &&day2.map((data,index) => {return <ShowResult key={index} data={data} />;})}
        </RecipeListContainer>
        <br/><br/><br/><hr/><br/>

        <DayBox>  
          <Day >วันที่ 3</Day>    
            <RecipeListContainer>{text}</RecipeListContainer>
          <Day style={{ backgroundColor: 'white'}} >วันที่ 3</Day>    
        </DayBox>    
        <RecipeListContainer>
          {day3 !== [] &&day3.map((data,index) => {return <ShowResult key={index} data={data} />;})}
        </RecipeListContainer>
      </Container>
  </div>
  )
}