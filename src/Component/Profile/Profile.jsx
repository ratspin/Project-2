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
  const createUpload = () =>{navigate('/Upload',{state: {rating}})}
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
  const meat5 = rating_meat5.map((item,index) =>  <div style={{paddingLeft: "10px"}} key={index}>{item}</div>)

  var rating_meat4_1 
  var rating_meat4_2 
  var rating_meat4_3 
  var rating_meat4_4 
  var rating_meat4_5
  var rating_meat4_6
  var rating_meat4_7
  var rating_meat4 = []
    if(rating[0]["หมู"] === 4) rating_meat4_1  = "หมู"
    if(rating[0]["ไก่"] === 4) rating_meat4_2 = "ไก่"
    if(rating[0]["ปลา"] === 4) rating_meat4_3 = "ปลา"
    if(rating[0]["กุ้ง"] === 4) rating_meat4_4 = "กุ้ง"
    if(rating[0]["หมึก"] === 4) rating_meat4_5 = "หมึก"
    if(rating[0]["วัว"] === 4) rating_meat4_6 = "วัว"
    if(rating[0]["ไข่"] === 4) rating_meat4_7 = "ไข่"
  rating_meat4.push(rating_meat4_1,rating_meat4_2,rating_meat4_3,rating_meat4_4,rating_meat4_5,rating_meat4_6,rating_meat4_7)
  const meat4 = rating_meat4.map((item,index) =>  <div style={{paddingLeft: "10px"}} key={index}>{item}</div>)

  var rating_meat3_1 
  var rating_meat3_2 
  var rating_meat3_3 
  var rating_meat3_4 
  var rating_meat3_5
  var rating_meat3_6
  var rating_meat3_7
  var rating_meat3 = []
    if(rating[0]["หมู"] === 3) rating_meat3_1  = "หมู"
    if(rating[0]["ไก่"] === 3) rating_meat3_2 = "ไก่"
    if(rating[0]["ปลา"] === 3) rating_meat3_3 = "ปลา"
    if(rating[0]["กุ้ง"] === 3) rating_meat3_4 = "กุ้ง"
    if(rating[0]["หมึก"] === 3) rating_meat3_5 = "หมึก"
    if(rating[0]["วัว"] === 3) rating_meat3_6 = "วัว"
    if(rating[0]["ไข่"] === 3) rating_meat3_7 = "ไข่"
  rating_meat3.push(rating_meat3_1,rating_meat3_2,rating_meat3_3,rating_meat3_4,rating_meat3_5,rating_meat3_6,rating_meat3_7)
  const meat3 = rating_meat3.map((item,index) =>  <div style={{paddingLeft: "10px"}} key={index}>{item}</div>)

  var rating_veg5_1 
  var rating_veg5_2 
  var rating_veg5_3 
  var rating_veg5_4 
  var rating_veg5_5
  var rating_veg5_6
  var rating_veg5_7
  var rating_veg5_8
  var rating_veg5_9
  var rating_veg5_10
  var rating_veg5_11
  var rating_veg5_12
  var rating_veg5_13
  var rating_veg5_14
  var rating_veg5_15
  var rating_veg5_16
  var rating_veg5_17
  var rating_veg5_18
  var rating_veg5_19
  var rating_veg5_20
  var rating_veg5 = []
    if(rating[0]["คะน้า"] === 5) rating_veg5_1  = "คะน้า"
    if(rating[0]["เห็ด"] === 5) rating_veg5_2 = "เห็ด"
    if(rating[0]["ผักกาด"] === 5) rating_veg5_3 = "ผักกาด"
    if(rating[0]["มะเขือ"] === 5) rating_veg5_4 = "ขิง"
    if(rating[0]["ขิง"] === 5) rating_veg5_5 = "หมึก"
    if(rating[0]["ฟัก"] === 5) rating_veg5_6 = "ฟัก"
    if(rating[0]["เม็ดมะม่วงหิมพานต์"] === 5) rating_veg5_7 = "เม็ดมะม่วงหิมพานต์"
    if(rating[0]["บวบ"] === 5) rating_veg5_8 = "บวบ"
    if(rating[0]["หน่อไม้"] === 5) rating_veg5_9 = "หน่อไม้"
    if(rating[0]["ตำลึง"] === 5) rating_veg5_10 = "ตำลึง"
    if(rating[0]["ชะอม"] === 5) rating_veg5_11 = "ชะอม"
    if(rating[0]["กะหล่ำปลี"] === 5) rating_veg5_12 = "กะหล่ำปลี"
    if(rating[0]["ถั่วงอก"] === 5) rating_veg5_13 = "ถั่วงอก"
    if(rating[0]["ผักบุ้ง"] === 5) rating_veg5_14 = "ผักบุ้ง"
    if(rating[0]["ไชโป้ว"] === 5) rating_veg5_15 = "ไชโป้ว"
    if(rating[0]["บรอกโคลี"] === 5) rating_veg5_16 = "บรอกโคลี"
    if(rating[0]["สะตอ"] === 5) rating_veg5_17 = "สะตอ"
    if(rating[0]["กะเพรา"] === 5) rating_veg5_18 = "กะเพรา"
    if(rating[0]["ฝักทอง"] === 5) rating_veg5_19 = "ฝักทอง"
    if(rating[0]["ผักกระเฉด"] === 5) rating_veg5_20 = "ผักกระเฉด"
  rating_veg5.push(rating_veg5_1,rating_veg5_2,rating_veg5_3,rating_veg5_4,rating_veg5_5,rating_veg5_6,rating_veg5_7,rating_veg5_8,rating_veg5_9,rating_veg5_10,
    rating_veg5_11,rating_veg5_12,rating_veg5_13,rating_veg5_14,rating_veg5_15,rating_veg5_16,rating_veg5_17,rating_veg5_18,rating_veg5_19,rating_veg5_20)
  const veg5 = rating_veg5.map((item,index) =>  <div style={{paddingLeft: "10px"}} key={index}>{item}</div>)

  var rating_veg4_1 
  var rating_veg4_2 
  var rating_veg4_3 
  var rating_veg4_4 
  var rating_veg4_5
  var rating_veg4_6
  var rating_veg4_7
  var rating_veg4_8
  var rating_veg4_9
  var rating_veg4_10
  var rating_veg4_11
  var rating_veg4_12
  var rating_veg4_13
  var rating_veg4_14
  var rating_veg4_15
  var rating_veg4_16
  var rating_veg4_17
  var rating_veg4_18
  var rating_veg4_19
  var rating_veg4_20
  var rating_veg4 = []
    if(rating[0]["คะน้า"] === 4) rating_veg4_1  = "คะน้า"
    if(rating[0]["เห็ด"] === 4) rating_veg4_2 = "เห็ด"
    if(rating[0]["ผักกาด"] === 4) rating_veg4_3 = "ผักกาด"
    if(rating[0]["มะเขือ"] === 4) rating_veg4_4 = "ขิง"
    if(rating[0]["ขิง"] === 4) rating_veg4_5 = "หมึก"
    if(rating[0]["ฟัก"] === 4) rating_veg4_6 = "ฟัก"
    if(rating[0]["เม็ดมะม่วงหิมพานต์"] === 4) rating_veg4_7 = "เม็ดมะม่วงหิมพานต์"
    if(rating[0]["บวบ"] === 4) rating_veg4_8 = "บวบ"
    if(rating[0]["หน่อไม้"] === 4) rating_veg4_9 = "หน่อไม้"
    if(rating[0]["ตำลึง"] === 4) rating_veg4_10 = "ตำลึง"
    if(rating[0]["ชะอม"] === 4) rating_veg4_11 = "ชะอม"
    if(rating[0]["กะหล่ำปลี"] === 4) rating_veg4_12 = "กะหล่ำปลี"
    if(rating[0]["ถั่วงอก"] === 4) rating_veg4_13 = "ถั่วงอก"
    if(rating[0]["ผักบุ้ง"] === 4) rating_veg4_14 = "ผักบุ้ง"
    if(rating[0]["ไชโป้ว"] === 4) rating_veg4_15 = "ไชโป้ว"
    if(rating[0]["บรอกโคลี"] === 4) rating_veg4_16 = "บรอกโคลี"
    if(rating[0]["สะตอ"] === 4) rating_veg4_17 = "สะตอ"
    if(rating[0]["กะเพรา"] === 4) rating_veg4_18 = "กะเพรา"
    if(rating[0]["ฝักทอง"] === 4) rating_veg4_19 = "ฝักทอง"
    if(rating[0]["ผักกระเฉด"] === 4) rating_veg4_20 = "ผักกระเฉด"
  rating_veg4.push(rating_veg4_1,rating_veg4_2,rating_veg4_3,rating_veg4_4,rating_veg4_5,rating_veg4_6,rating_veg4_7,rating_veg4_8,rating_veg4_9,rating_veg4_10,
    rating_veg4_11,rating_veg4_12,rating_veg4_13,rating_veg4_14,rating_veg4_15,rating_veg4_16,rating_veg4_17,rating_veg4_18,rating_veg4_19,rating_veg4_20)
  const veg4 = rating_veg4.map((item,index) =>  <div style={{paddingLeft: "10px"}} key={index}>{item}</div>)
  
  var rating_veg3_1 
  var rating_veg3_2 
  var rating_veg3_3 
  var rating_veg3_4 
  var rating_veg3_5
  var rating_veg3_6
  var rating_veg3_7
  var rating_veg3_8
  var rating_veg3_9
  var rating_veg3_10
  var rating_veg3_11
  var rating_veg3_12
  var rating_veg3_13
  var rating_veg3_14
  var rating_veg3_15
  var rating_veg3_16
  var rating_veg3_17
  var rating_veg3_18
  var rating_veg3_19
  var rating_veg3_20
  var rating_veg3 = []
    if(rating[0]["คะน้า"] === 3) rating_veg3_1  = "คะน้า"
    if(rating[0]["เห็ด"] === 3) rating_veg3_2 = "เห็ด"
    if(rating[0]["ผักกาด"] === 3) rating_veg3_3 = "ผักกาด"
    if(rating[0]["มะเขือ"] === 3) rating_veg3_4 = "ขิง"
    if(rating[0]["ขิง"] === 3) rating_veg3_5 = "หมึก"
    if(rating[0]["ฟัก"] === 3) rating_veg3_6 = "ฟัก"
    if(rating[0]["เม็ดมะม่วงหิมพานต์"] === 3) rating_veg3_7 = "เม็ดมะม่วงหิมพานต์"
    if(rating[0]["บวบ"] === 3) rating_veg3_8 = "บวบ"
    if(rating[0]["หน่อไม้"] === 3) rating_veg3_9 = "หน่อไม้"
    if(rating[0]["ตำลึง"] === 3) rating_veg3_10 = "ตำลึง"
    if(rating[0]["ชะอม"] === 3) rating_veg3_11 = "ชะอม"
    if(rating[0]["กะหล่ำปลี"] === 3) rating_veg3_12 = "กะหล่ำปลี"
    if(rating[0]["ถั่วงอก"] === 3) rating_veg3_13 = "ถั่วงอก"
    if(rating[0]["ผักบุ้ง"] === 3) rating_veg3_14 = "ผักบุ้ง"
    if(rating[0]["ไชโป้ว"] === 3) rating_veg3_15 = "ไชโป้ว"
    if(rating[0]["บรอกโคลี"] === 3) rating_veg3_16 = "บรอกโคลี"
    if(rating[0]["สะตอ"] === 3) rating_veg3_17 = "สะตอ"
    if(rating[0]["กะเพรา"] === 3) rating_veg3_18 = "กะเพรา"
    if(rating[0]["ฝักทอง"] === 3) rating_veg3_19 = "ฝักทอง"
    if(rating[0]["ผักกระเฉด"] === 3) rating_veg3_20 = "ผักกระเฉด"
  rating_veg3.push(rating_veg3_1,rating_veg3_2,rating_veg3_3,rating_veg3_4,rating_veg3_5,rating_veg3_6,rating_veg3_7,rating_veg3_8,rating_veg3_9,rating_veg3_10,
    rating_veg3_11,rating_veg3_12,rating_veg3_13,rating_veg3_14,rating_veg3_15,rating_veg3_16,rating_veg3_17,rating_veg3_18,rating_veg3_19,rating_veg3_20)
  const veg3 = rating_veg4.map((item,index) =>  <div style={{paddingLeft: "10px"}} key={index}>{item}</div>)

  return (
    <div>
      <NavContainer>
        <Header>
          <NavBox>
            <a href="/"><RecipeImage src="/food4U.png" /></a>
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
                อันดับที่ 1 {meat5}  <br/>
                อันดับที่ 2 {meat4} <br/>
                อันดับที่ 3 {meat3} <br/>
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
                อันดับที่ 1 {veg5} <br/>
                อันดับที่ 2 {veg4} <br/>
                อันดับที่ 3 {veg3} <br/>
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