import React, { useRef,useState } from "react";
import { useLocation, useNavigate} from 'react-router-dom';
import {NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,Container,Box} from "./Styled";
// import NavBar from '../NavBar/NavBar'
import './Profile.css';
// import { FaBars, FaTimes } from "react-icons/fa";
var data = require("../../calculatetion/food.json");

export default function Profile() {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createSearchImg = () =>{navigate('/SearchImg',{state: {rating}})}
  const rating = state.rating
  const navRef = useRef();
  console.log(rating);

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

  // var MaxC2 = {} 
  // var MaxC3 = {} 

  // MaxC2[0] = Math.max(rating[0]["หมู"],rating[0]["ไก่"],rating[0]["ปลา"],rating[0]["กุ้ง"],rating[0]["หมึก"],rating[0]["วัว"],rating[0]["ไข่"])   
  // MaxC3[0] = Math.max(rating[0]["คะน้า"],rating[0]["เห็ด"],rating[0]["ผักกาด"],rating[0]["มะเขือ"],rating[0]["ขิง"],
  //                     rating[0]["ฟัก"],rating[0]["เม็ดมะม่วงหิมพานต์"],rating[0]["บวบ"],rating[0]["หน่อไม้"],rating[0]["ตำลึง"],
  //                     rating[0]["ชะอม"],rating[0]["กะหล่ำปลี"],rating[0]["ถั่วงอก"],rating[0]["ผักบุ้ง"],rating[0]["ไชโป้ว"],
  //                     rating[0]["บรอกโคลี"],rating[0]["สะตอ"],rating[0]["กะเพรา"],rating[0]["ฝักทอง"],rating[0]["ผักกระเฉด"]) 
  
  var rating_disease1 
  var rating_disease2 
  var rating_disease3 
  var rating_disease4 
  var rating_disease  = []
    if(rating[0]["โรคหัวใจ"] === 5) rating_disease1 = "โรคหัวใจ"
    if(rating[0]["โรคเบาหวาน"] === 5) rating_disease2 = "โรคเบาหวาน"
    if(rating[0]["โรคไต"] === 5) rating_disease3 = "โรคไต"
    if(rating[0]["โรคความดันโลหิตสูง"] === 5) rating_disease4 = "โรคความดันโลหิตสูง"
  rating_disease.push(rating_disease1,rating_disease2,rating_disease3,rating_disease4)
  const disease = rating_disease.map((item,index) =>  <div key={index}>{item}</div>)

  var rating_meat5_1 
  var rating_meat5_2 
  var rating_meat5_3 
  var rating_meat5_4 
  var rating_meat5_5
  var rating_meat5_6
  var rating_meat5_7
  var rating_meat5 = []
    if(rating[0]["หมู"] === 5) rating_meat5_1  = "หมู"
    if(rating[0]["ไก่"] === 5) rating_meat5_2 = "ไก่"
    if(rating[0]["ปลา"] === 5) rating_meat5_3 = "ปลา"
    if(rating[0]["กุ้ง"] === 5) rating_meat5_4 = "กุ้ง"
    if(rating[0]["หมึก"] === 5) rating_meat5_5 = "หมึก"
    if(rating[0]["วัว"] === 5) rating_meat5_6 = "วัว"
    if(rating[0]["ไข่"] === 5) rating_meat5_7 = "ไข่"
  rating_meat5.push(rating_meat5_1,rating_meat5_2,rating_meat5_3,rating_meat5_4,rating_meat5_5,rating_meat5_6,rating_meat5_7)
  const meat5 = rating_meat5.map((item,index) =>  <div key={index}>{item}</div>)

  return (
    <div>
      <NavContainer>
        <Header>
          <NavBox>
            <a href="/"><RecipeImage src="/food4U.png" /></a>
            <nav ref={navRef}>
              <div className="a" onClick={() => createRec()} > แนะนำอาหาร</div>
              <div className="a" onClick={() => createPlan()} >วางแผนการรับประทาน</div>
              <div className="a" onClick={() => createSearchImg()} >ค้นหาด้วยรูป</div>
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
              .map((item) => (
              <div style={{ cursor: 'pointer' }} onClick={() => onSearch(item.name)} key={item.name}>{item.name}</div>))}
          </div>
        </div>
        </Header>
      </NavContainer> 

      <Container>
        <Box>
          <div style={{ display: "flex", justifyContent: "center", }}>
              <div style={{ background: '#f8ae1a', fontSize: '1rem', width: "750px", borderBottom: "1px solid #000", display: "flex", justifyContent: "space-between", padding: "1rem 2rem" }}>
                  <h3 style={{ display: "flex", alignItems: "center" }}>โรคที่เป็น</h3>
                  <button style={{ border: "none", background: "transparent", fontSize: "1rem", color: "#fff" }} onClick={() => setShowInfo(!showInfo)}>
                      {showInfo ? '-' : '+'}
                  </button>
              </div>
          </div>
          <div style={{ textAlign: "left", display: "flex", justifyContent: "center" }}>
              {showInfo && <div  style={{  background: '#303030', fontSize: '1rem', width: "750px", padding: "1rem 2rem", marginBottom: "0.5rem" }}>
              {disease}
              </div>}
          </div>


        
          <div style={{ display: "flex", justifyContent: "center", }}>
              <div style={{ background: '#f8ae1a', fontSize: '1rem', width: "750px", borderBottom: "1px solid #000", display: "flex", justifyContent: "space-between", padding: "1rem 2rem" }}>
                  <h3 style={{ display: "flex", alignItems: "center" }}>เนื้อสัตว์ที่ชอบ</h3>
                  <button style={{ border: "none", background: "transparent", fontSize: "1rem", color: "#fff" }} onClick={() => setShowInfo1(!showInfo1)}>
                      {showInfo1 ? '-' : '+'}
                  </button>
              </div>
          </div>
          <div style={{ textAlign: "left", display: "flex", justifyContent: "center" }}>
              {showInfo1 && <p style={{  background: '#303030', fontSize: '1rem', width: "750px", padding: "1rem 2rem", marginBottom: "0.5rem" }}>
                {meat5}
                อันดับที่ 1 หมู <br/>
                อันดับที่ 2 ไก่ <br/>
                อันดับที่ 3 ปลา <br/>
              </p>}
          </div>


          <div style={{ display: "flex", justifyContent: "center", }}>
              <div style={{ background: '#f8ae1a', fontSize: '1rem', width: "750px", borderBottom: "1px solid #000", display: "flex", justifyContent: "space-between", padding: "1rem 2rem" }}>
                  <h3 style={{ display: "flex", alignItems: "center" }}>ผักที่คุณชอบ</h3>
                  <button style={{ border: "none", background: "transparent", fontSize: "1rem", color: "#fff" }} onClick={() => setShowInfo2(!showInfo2)}>
                      {showInfo2 ? '-' : '+'}
                  </button>
              </div>
          </div>
          <div style={{ textAlign: "left", display: "flex", justifyContent: "center" }}>
              {showInfo2 && <p style={{  background: '#303030', fontSize: '1rem', width: "750px", padding: "1rem 2rem", marginBottom: "0.5rem" }}>
                อันดับที่ 1 คะน้า <br/>
                อันดับที่ 2 กะเพราะ <br/>
                อันดับที่ 3 สะตอ <br/>
              </p>}
          </div>
          <br/>
          <br/>
        </Box>
        <div className="form-submit-button" onClick={() => navigate("/info")} >แก้ไขข้อมูล</div><br/> <br/>
      </Container>
    </div>
  )
}

