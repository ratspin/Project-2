import React,{ useState } from "react";
import Rating from '@mui/material/Rating';
import './CheckboxLabels.css';

var food = require('../../calculatetion/food.json'); 
var calculate = require("../../calculatetion/calculate.js");

export default function Show_Info() {
  const [results, setresults] = useState([]);
  const [rating0, setratings0] = useState(0);
  const [rating1, setratings1] = useState(0);
  const [rating2, setratings2] = useState(0);
  const [rating3, setratings3] = useState(0);
  const [rating4, setratings4] = useState(0);
  const [rating5, setratings5] = useState(0);
  const [rating6, setratings6] = useState(0);

  var protein =   [   "หมู","ไก่",'ปลา',"กุ้ง","หมึก","เนื้อวัว","ไข่"]

  var user_rating = []
  user_rating.push({    อาหาร: "User",
                        โรคหัวใจ: 0,
                        โรคเบาหวาน: 0,
                        โรคไต: 0,
                        โรคความดันโลหิตสูง: 0,
                        หมู: rating0,
                        ไก่: rating1,
                        ปลา: rating2,
                        กุ้ง: rating3,
                        หมึก: rating4,
                        วัว: rating5,
                        ไข่: rating6,
                        คะน้า: 0,
                        เห็ด: 0,
                        ผักกาด: 0,
                        มะเขือ: 0,
                        ขิง: 0,
                        ฟัก: 0,
                        เม็ดมะม่วงหิมพานต์: 0,
                        บวบ: 0,
                        หน่อไม้: 0,
                        ตำลึง: 0,
                        ชะอม: 0,
                        กะหล่ำปลี: 0,
                        ถั่วงอก: 0,
                        ผักบุ้ง: 0,
                        ไชโป้ว: 0,
                        บรอกโคลี: 0,
                        สะตอ: 0,
                        กะเพรา: 0,
                        ฝักทอง: 0,
                        ผักกระเฉด: 0
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

    setresults(food_db);
    // console.log(food_db) 
    console.log(results);
    console.log(rating0);
    console.log(rating1);
    console.log(rating2);
    console.log(rating3);
    console.log(rating4);
    console.log(rating5);
    console.log(rating6);

    
  };
  

  return (
    <div className="tmp">

      <form onSubmit={onSubmit}>

          <div className="container">
                <div className="card">
                    <div className="card-header"> <p className="title">โปรดระบุระดับความชอบแหล่งโปรตีนหลัก</p> </div>
                    <div className="card-body">   

                        <div class="select-container">
                            <label>{protein[0]}</label>  
                            <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating0} onChange={(event, newValue) => {setratings0(newValue);}}/>
                        <br/> <br/> </div>
      
                        <div class="select-container">
                            <label>{protein[1]}</label>  
                            <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating1} onChange={(event, newValue) => {setratings1(newValue);}}/>
                        <br/> <br/> </div>
      
                        <div class="select-container">
                            <label>{protein[2]}</label>
                            <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating2} onChange={(event, newValue) => {setratings2(newValue);}}/>
                        <br/> <br/> </div>
      
                        <div class="select-container">
                            <label>{protein[3]}</label>
                            <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating3} onChange={(event, newValue) => {setratings3(newValue);}}/>
                        <br/> <br/> </div>
      
                        <div class="select-container">
                            <label>{protein[4]}</label>
                            <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating4} onChange={(event, newValue) => {setratings4(newValue);}}/>
                        <br/> <br/> </div>
      
                        <div class="select-container">
                            <label>{protein[5]}</label>
                            <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating5} onChange={(event, newValue) => {setratings5(newValue);}}/>
                        <br/> <br/> </div>
      
                        <div class="select-container">
                            <label>{protein[6]}</label>
                            <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating6} onChange={(event, newValue) => {setratings6(newValue);}}/>
                        <br/> <br/> </div>
                    </div>
                </div> 
          </div>  <br/> <br/>


        <div className="container" > <input className="form-submit-button"  type="submit" value="บันทึกข้อมูล" /> </div>
      </form>
    </div>
);
}

