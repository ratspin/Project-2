import React, { useRef,useState,useLayoutEffect } from "react";
import {Container,RecipeListContainer,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,MealBox,DayBox,Day,Name} from './Styled'
import { useLocation, useNavigate} from 'react-router-dom';
import "./NavBar.css";
import ShowResult from "../ShowResult/Show_Result"


export default function Plan() {
  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating},{disease}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: [{rating},{disease}]})}
  const createUpload = () =>{navigate('/Upload',{state: [{rating},{disease}]})}
  const rating = state[0].rating
  const disease = state[1].disease
  const navRef = useRef();

  var data = require("../../calculation/food.json");
  var calculate = require("../../calculation/calculate.js");

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

  var cal_result = calculate.Similar_sort(calculate.Weights(rating),calculate.Weights(calculate.Fillters(rating[0].โรค,data)),calculate.Similar_score)
  var result= []

  for(var i = 0; i < cal_result.length; i++) {
  var food_img = "food/"+ cal_result[i].food + ".png"
  var food_ingr = "ingredients/"+ cal_result[i].food + ".png"
  var food_name = cal_result[i].food
  var food_similar = cal_result[i].similar_rate
  var food_nutr = "nutrients/"+ cal_result[i].food + ".png"
  var b = cal_result[i].มื้อเช้า
  result.push({food_img:food_img,food_nutr:food_nutr,food_ingr:food_ingr,food_name:food_name,food_similar:food_similar,มื้อเช้า:b})
  }

  var result20 = []
  for(var ind = 0 ; ind < 20 ; ind++){
    result20.push(result[ind])
  }


  var meal = [{meal:"มื้อเช้า",img:"/meal/1.png"},{meal:"มื้อเที่ยง",img:"/meal/2.png"}, {meal:"มื้อเย็น",img:"/meal/3.png"}]

  function random_item() {
      var items = [Math.floor(Math.random()*result20.length)]; 
      return result20.splice(items,1)[0]
          
    }
   
    var day1 = [];
    var day2 = [];
    var day3 = [];

    day1.push(random_item(result20))
    day2.push(random_item(result20))
    day3.push(random_item(result20))
    // var tmp = 5555 

    // while(day1[0].มื้อเช้า === 0)
    // if(day1[0].มื้อเช้า === 0){
    //   day1[0].replace(day1[0],random_item(result))
    //   console.log(tmp)
    // }

        for(var j = 0; j < 2 ; j ++){
          day1.push(random_item(result20))
          day2.push(random_item(result20))
          day3.push(random_item(result20))
        }


    
  
  const text = meal.map((d,index) => {return <MealBox key={index}>
                                                <img style={{ margin: "5px",height: "50px", width: "50px" }} key={index} src = {d.img} alt={d.meal}/> 
                                                <div style={{ marginTop: "15px" }} key={index}>{d.meal}</div> 
                                              </MealBox> })
 
  return (
    <div>
      <Wrapper>
        <NavContainer>
          <Header>
            <NavBox>
              <a href="/info"><RecipeImage src="/3.png" /></a>
              <nav ref={navRef}>
                <div className="a" onClick={() => createRec()} > แนะนำอาหาร</div>
                <div className="a" onClick={() => createPlan()} >วางแผนการรับประทาน</div>
                <div className="a" onClick={() => createUpload()} >ค้นหาด้วยรูป</div>
              </nav>
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
                  .map((item,index) => (
                  <div style={{ cursor: 'pointer' }} onClick={() => onSearch(item.name)} key={index}>{item.name}</div>))}
              </div>
            </div>
          </Header>
        </NavContainer>

        <Container>
          <Name>
                แผนการรับประทานอาหารสำหรับผู้ป่วย : {disease}
          </Name>             
          <br/><hr/><br/>            
          <DayBox>  
            <Day >วันที่ 1</Day>    
              <RecipeListContainer>{text}</RecipeListContainer>
              <div  style={{color: '#ff8412' , cursor: "pointer" ,padingTop: '10px'}} onClick={() => createPlan()} >
                สุ่มเมนูใหม่ <br/>  
                <img style={{ height: "40px", width: "40px" }} src ="/refresh.png"  alt = "555"  />
              </div><br/> <br/>  
          </DayBox>                   
          <RecipeListContainer>   
            {day1 !== [] &&day1.map((data,index) => {return <ShowResult key={index} data={data} />;})}
          </RecipeListContainer>
          {/* {day1 !== [] &&day1.map((data,index) => {return <p key={index}  >{data.มื้อเช้า}</p>;})} */}
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
      </Wrapper>
  </div>
  )
}

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};