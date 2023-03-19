import React,{ useState } from "react";
import {Checkbox,IconImg,RecipeName} from './Styled'
import SearchSimilar from './SearchSimilar'

export default function SearchChackbox(props) {
    const [userinfo, setUserInfo] = useState({value: [0]});
    const [userinfo1, setUserInfo1] = useState ({value1: [0]});
    const [userinfo2, setUserInfo2] = useState({value2: [0]});
    const [userinfo3, setUserInfo3] = useState({value3: [0]});

    var handleChange  = (e) => {
        const { checked} = e.target;
        const { value } = userinfo;
        if(value)
        if (checked)    { setUserInfo({value: ["A"],});} //console.log("โรคหัวใจ : checked ") }
        else            { setUserInfo({value: [0],});} //console.log("โรคหัวใจ : unchecked")}      
    }; 
    const handleChange1 = (e) => {
        const { checked} = e.target;
        const { value1 } = userinfo1;
        if(value1)
        if (checked)    { setUserInfo1({value1: ["B"],});} //console.log("โรคเบาหวาน : checked") }
        else            { setUserInfo1({value1: [0],});} //console.log("โรคเบาหวาน : unchecked")}  
    }; 
    const handleChange2 = (e) => {
        const { checked} = e.target;
        const { value2 } = userinfo2;
        if(value2)
        if (checked)    { setUserInfo2({value2: ["D"],});} //console.log("โรคไต : checked") }
        else            { setUserInfo2({value2: [0],});} //console.log("โรคไต : unchecked")}  
    }; 
    const handleChange3 = (e) => {
        const { checked} = e.target;
        const { value3 } = userinfo3;
        if(value3)
        if (checked)    { setUserInfo3({value3: ["C"],});} //console.log("โรคความดันโลหิตสูง : checked") }
        else            { setUserInfo3({value3: [0],});} //console.log("โรคความดันโลหิตสูง : unchecked")}  
    };
    
    var disease = ""
    if(userinfo.value[0] === "A")  disease = disease + userinfo.value[0]
    if(userinfo1.value1[0] === "B")  disease = disease + userinfo1.value1[0]
    if(userinfo3.value3[0] === "C")  disease = disease + userinfo3.value3[0]
    if(userinfo2.value2[0] === "D")  disease = disease + userinfo2.value2[0]

    var calculate = require("../../calculatetion/calculate.js");
    var food = require("../../calculatetion/food.json");
    var result = calculate.Fillters(disease,food);
    
    var diseases = ""
    if(disease === "A") diseases = "โรคหัวใจ"
    if(disease === "B") diseases = "โรคเบาหวาน"
    if(disease === "C") diseases = "โรคความดันโลหิตสูง"
    if(disease === "D") diseases = "โรคไต"
    if(disease === "AB") diseases = "โรคหัวใจ และโรคเบาหวาน"
    if(disease === "AC") diseases = "โรคหัวใจ และโรคความดันโลหิตสูง"
    if(disease === "AD") diseases = "โรคหัวใจ และโรคไต"
    if(disease === "BC") diseases = "โรคเบาหวาน และโรคความดันโลหิตสูง"
    if(disease === "BD") diseases = "โรคเบาหวาน และโรคไต"
    if(disease === "CD") diseases = "โรคความดันโลหิตสูง และโรคไต"
    if(disease === "ABC") diseases = "โรคหัวใจ โรคเบาหวาน และโรคความดันโลหิตสูง"
    if(disease === "ABD") diseases = "โรคหัวใจ โรคเบาหวาน และโรคไต"
    if(disease === "ACD") diseases = "โรคหัวใจ โรคความดันโลหิตสูง และโรคไต"
    if(disease === "BCD") diseases = "โรคเบาหวาน โรคความดันโลหิตสูง และโรคไต"
    if(disease === "ABCD") diseases = "โรคหัวใจ โรคเบาหวาน โรคความดันโลหิตสูง และโรคไต"

    return (
        <>
        <Checkbox>
            <div>
                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange3} />  
                <IconImg src="/icon/โรคความดันโลหิตสูง.png" alt = "หมู"/>
                <label style={{ verticalAlign: "super" }}>โรคความดันโลหิตสูง</label>   
            </div>

            <div>
                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange2} />  
                <IconImg src="/icon/โรคไต.png" alt = "หมู"/> 
                <label style={{ verticalAlign: "super" }}>โรคไต</label>            
            </div>

            <div>
                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange1} />  
                <IconImg src="/icon/โรคเบาหวาน.png" alt = "หมู"/> 
                <label style={{ verticalAlign: "super" }}>โรคเบาหวาน</label>         
            </div>

            <div>
                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange} />  
                <IconImg src="/icon/โรคหัวใจ.png" alt = "หมู"/> 
                <label style={{verticalAlign: "super" }}>โรคหัวใจ</label>            
            </div>
        </Checkbox>
        
        <br/><br/><hr/><br/><br/>
        <RecipeName>เมนูทางเลือกที่แนะนำสำหรับผู้ป่วย: {diseases}</RecipeName> 
        <SearchSimilar data1 = {props.data} data2 = {result} />    
        </>
    );
}