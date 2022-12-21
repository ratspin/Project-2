import React,{ useState } from "react";
import ShowResult from "./ShowResult";
import {RecipeListContainer} from './Styled'
import './CheckboxLabels.css';

var food = require('../../calculatetion/food.json'); 
var calculate = require("../../calculatetion/calculate.js");

export default function Show_Info() {
  const [results, setresults] = useState([]);
  const [userinfo, setUserInfo] = useState({value: [0]});
  const [userinfo1, setUserInfo1] = useState ({value1: [0]});
  const [userinfo2, setUserInfo2] = useState({value2: [0]});
  const [userinfo3, setUserInfo3] = useState({value3: [0]});
  const [rating0, setratings0] = useState(4);
  const [rating1, setratings1] = useState(4);
  const [rating2, setratings2] = useState(4);
  const [rating3, setratings3] = useState(4);
  const [rating4, setratings4] = useState(4);
  const [rating5, setratings5] = useState(4);
  const [rating6, setratings6] = useState(4);
  const [rating7, setratings7] = useState(4);
  const [rating8, setratings8] = useState(4);
  const [rating9, setratings9] = useState(4);
  const [rating10, setratings10] = useState(4);
  const [rating11, setratings11] = useState(4);
  const [rating12, setratings12] = useState(4);
  const [rating13, setratings13] = useState(4);
  const [rating14, setratings14] = useState(4);
  const [rating15, setratings15] = useState(4);
  const [rating16, setratings16] = useState(4);
  const [rating17, setratings17] = useState(4);
  const [rating18, setratings18] = useState(4);
  const [rating19, setratings19] = useState(4);
  const [rating20, setratings20] = useState(4);
  const [rating21, setratings21] = useState(4);
  const [rating22, setratings22] = useState(4);
  const [rating23, setratings23] = useState(4);
  const [rating24, setratings24] = useState(4);
  const [rating25, setratings25] = useState(4);
  const [rating26, setratings26] = useState(4);

  var handleChange  = (e) => {
    const { checked} = e.target;
    const { value } = userinfo;
    if(value)
    if (checked)    { setUserInfo({value: [5],}); console.log("โรคหัวใจ : checked") }
    else            { setUserInfo({value: [0],}); console.log("โรคหัวใจ : unchecked")}      
  }; 
  const handleChange1 = (e) => {
      const { checked} = e.target;
      const { value1 } = userinfo1;
      if(value1)
      if (checked)    { setUserInfo1({value1: [5],}); console.log("โรคเบาหวาน : checked") }
      else            { setUserInfo1({value1: [0],}); console.log("โรคเบาหวาน : unchecked")}  
  }; 
  const handleChange2 = (e) => {
      const { checked} = e.target;
      const { value2 } = userinfo2;
      if(value2)
      if (checked)    { setUserInfo2({value2: [5],}); console.log("โรคไต : checked") }
      else            { setUserInfo2({value2: [0],}); console.log("โรคไต : unchecked")}  
  }; 
  const handleChange3 = (e) => {
      const { checked} = e.target;
      const { value3 } = userinfo3;
      if(value3)
      if (checked)    { setUserInfo3({value3: [5],}); console.log("โรคความดันโลหิตสูง : checked") }
      else            { setUserInfo3({value3: [0],}); console.log("โรคความดันโลหิตสูง : unchecked")}  
  }; 

  var protein =   [   "หมู","ไก่",'ปลา',"กุ้ง","หมึก","เนื้อวัว","ไข่"]
  var vegetable = [   "คะน้า","เห็ด","ผักกาด","มะเขือ","ขิง",
                      "ฟัก","เม็ดมะม่วงหิมพานต์","บวบ","หน่อไม้","ตำลึง",
                      "ชะอม","กะหล่ำปลี","ถั่วงอก","ผักบุ้ง","ไชโป้ว",
                      "บรอกโคลี","สะตอ","กะเพรา","ฝักทอง","ผักกระเฉด"]

  var user_rating = []
  user_rating.push({     อาหาร: "User",
                    โรคหัวใจ: userinfo.value[0],
                    โรคเบาหวาน: userinfo1.value1[0],
                    โรคไต: userinfo2.value2[0],
                    โรคความดันโลหิตสูง: userinfo3.value3[0],
                    หมู: rating0,
                    ไก่: rating1,
                    ปลา: rating2,
                    กุ้ง: rating3,
                    หมึก: rating4,
                    วัว: rating5,
                    ไข่: rating6,
                    คะน้า: rating7,
                    เห็ด: rating8,
                    ผักกาด: rating9,
                    มะเขือ: rating10,
                    ขิง: rating11,
                    ฟัก: rating12,
                    เม็ดมะม่วงหิมพานต์: rating13,
                    บวบ: rating14,
                    หน่อไม้: rating15,
                    ตำลึง: rating16,
                    ชะอม: rating17,
                    กะหล่ำปลี: rating18,
                    ถั่วงอก: rating19,
                    ผักบุ้ง: rating20,
                    ไชโป้ว: rating21,
                    บรอกโคลี: rating22,
                    สะตอ: rating23,
                    กะเพรา: rating24,
                    ฝักทอง: rating25,
                    ผักกระเฉด: rating26
  })


  const onSubmit = (e) => {
    e.preventDefault();
    var result = calculate.similar_sort(calculate.Weight(user_rating),calculate.Weight(food) ,calculate.similar_score ,10)

    var food_img = []
    var food_ingr = []
    var food_db = []
    var food_name = []
    var food_similar = []
    var food_nutr = []

    for(var i = 0; i < result.length; i++) {
      food_img = "food/"+ result[i].food + ".png"
      food_ingr = "ingredients/"+ result[i].food + ".png"
      food_nutr = "nutrients/"+ result[i].food + ".png"
      food_name = result[i].food
      food_similar = result[i].similar_rate
      food_db.push({food_img:food_img,food_nutr:food_nutr,food_ingr:food_ingr,food_name:food_name,food_similar:food_similar})
    }

    // console.log(food_db) 
    setresults(food_db);
    // console.log(results);
  };
  

  return (
    <div className="tmp">

      <form onSubmit={onSubmit}>
        <div className="container">
            <div className="card">
                <div className="card-header"> <p className="title">โปรดระบุโรคของคุณ</p> </div>
                <div className="card-body">
                    <input type="checkbox" onChange={handleChange}/>  <label>โรคหัวใจ</label>            <br/><br/>
                    <input type="checkbox" onChange={handleChange1}/> <label>โรคเบาหวาน</label>         <br/><br/>
                    <input type="checkbox" onChange={handleChange2}/> <label>โรคไต</label>              <br/><br/>
                    <input type="checkbox" onChange={handleChange3}/> <label>โรคความดันโลหิตสูง</label>    <br/><br/>
                </div>
            </div>
          </div>  <br/> <br/>

          <div className="container">
                <div className="card">
                    <div className="card-header"> <p className="title">โปรดระบุระดับความชอบแหล่งโปรตีนหลัก</p> </div>
                    <div className="card-body">   

                    <div class="select-container">
                          <label>{protein[0]}</label>  
                              <select  onChange = {(e) => {setratings0(e.target.value)}}  >
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">
                          <label>{protein[1]}</label>  
                              <select  onChange = {(e) => {setratings1(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">
                          <label>{protein[2]}</label>
                              <select  onChange = {(e) => {setratings2(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">  
                          <label>{protein[3]}</label> 
                              <select  onChange = {(e) => {setratings3(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container"> 
                          <label>{protein[4]}</label> 
                              <select  onChange = {(e) => {setratings4(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">  
                          <label>{protein[5]}</label> 
                              <select  onChange = {(e) => {setratings5(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container"> 
                          <label>{protein[6]}</label>  
                              <select  onChange = {(e) =>{setratings6(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>
                    </div>
                </div> 
          </div>  <br/> <br/>

          <div className="container">
              <div className="card">
                  <div className="card-header"> <p className="title">โปรดระบุระดับความชอบของผัก</p> </div>
                  <div className="card-body">   

                          <div class="select-container">
                          <label>{vegetable[0]}</label>  
                              <select  onChange = {(e) => {setratings7(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">
                          <label>{vegetable[1]}</label>  
                              <select  onChange = {(e) => {setratings8(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">
                          <label>{vegetable[2]}</label>
                              <select  onChange = {(e) => {setratings9(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">  
                          <label>{vegetable[3]}</label> 
                              <select  onChange = {(e) => {setratings10(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container"> 
                          <label>{vegetable[4]}</label> 
                              <select  onChange = {(e) => {setratings11(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">  
                          <label>{vegetable[5]}</label> 
                              <select  onChange = {(e) => {setratings12(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container"> 
                          <label>{vegetable[6]}</label>  
                              <select  onChange = {(e) => {setratings13(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>

                          <div class="select-container"> 
                          <label>{vegetable[7]}</label>  
                              <select  onChange = {(e) => {setratings14(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>
                              
                          <div class="select-container"> 
                          <label>{vegetable[8]}</label>  
                              <select  onChange = {(e) => {setratings15(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>

                          <div class="select-container">
                          <label>{vegetable[9]}</label>  
                              <select  onChange = {(e) => {setratings16(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">
                          <label>{vegetable[10]}</label>  
                              <select  onChange = {(e) => {setratings17(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">
                          <label>{vegetable[11]}</label>
                              <select  onChange = {(e) => {setratings18(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">  
                          <label>{vegetable[12]}</label> 
                              <select  onChange = {(e) => {setratings19(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container"> 
                          <label>{vegetable[13]}</label> 
                              <select  onChange = {(e) => {setratings20(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container">  
                          <label>{vegetable[14]}</label> 
                              <select  onChange = {(e) => {setratings21(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/> </div>
      
                          <div class="select-container"> 
                          <label>{vegetable[15]}</label>  
                              <select  onChange = {(e) => {setratings22(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>

                          <div class="select-container"> 
                          <label>{vegetable[16]}</label>  
                              <select  onChange = {(e) => {setratings23(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>
                              
                          <div class="select-container"> 
                          <label>{vegetable[17]}</label>  
                              <select  onChange = {(e) => {setratings24(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>

                          <div class="select-container"> 
                          <label>{vegetable[18]}</label>  
                              <select  onChange = {(e) =>{setratings25(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>
                              
                          <div class="select-container"> 
                          <label>{vegetable[19]}</label>  
                              <select  onChange = {(e) => {setratings26(e.target.value)}}>
                                  <option value="4">ชอบที่สุด</option>
                                  <option value="3">ชอบมาก</option>
                                  <option value="2">ชอบ</option>
                                  <option value="1">ชอบน้อย</option>
                                  <option value="0">ไม่ชอบ</option>
                              </select><br/> <br/>  </div>
                  </div>
              </div> 
          </div>  <br/> <br/>

        <div className="container" > <input className="form-submit-button"  type="submit" value="บันทึกข้อมูล]" /> </div>
      </form>

      <RecipeListContainer> {results !== [] &&results.map((data) => {return <ShowResult data={data} />;})} </RecipeListContainer> 
    </div>
);
}

