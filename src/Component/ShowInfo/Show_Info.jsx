import React,{ useState } from "react";
import Rating from '@mui/material/Rating';
import './Show_Info.css';
import { useNavigate } from 'react-router-dom';
import {RecipeListContainer} from './Styled'
import ShowResult from "../ShowResult/Show_Result";
var food = require('../../calculatetion/food.json'); 
var calculate = require("../../calculatetion/calculate.js");

export default function Show_Info() {
    const navigate = useNavigate();
    const [results, setresults] = useState([]);
    const createPost = () =>{navigate('/profile',{state: {user_rating}})}
    const [userinfo, setUserInfo] = useState({value: [0]});
    const [userinfo1, setUserInfo1] = useState ({value1: [0]});
    const [userinfo2, setUserInfo2] = useState({value2: [0]});
    const [userinfo3, setUserInfo3] = useState({value3: [0]});
    const [rating0, setratings0] = useState(0);
    const [rating1, setratings1] = useState(0);
    const [rating2, setratings2] = useState(0);
    const [rating3, setratings3] = useState(0);
    const [rating4, setratings4] = useState(0);
    const [rating5, setratings5] = useState(0);
    const [rating6, setratings6] = useState(0);
    const [rating7, setratings7] = useState(0);
    const [rating8, setratings8] = useState(0);
    const [rating9, setratings9] = useState(0);
    const [rating10, setratings10] = useState(0);
    const [rating11, setratings11] = useState(0);
    const [rating12, setratings12] = useState(0);
    const [rating13, setratings13] = useState(0);
    const [rating14, setratings14] = useState(0);
    const [rating15, setratings15] = useState(0);
    const [rating16, setratings16] = useState(0);
    const [rating17, setratings17] = useState(0);
    const [rating18, setratings18] = useState(0);
    const [rating19, setratings19] = useState(0);
    const [rating20, setratings20] = useState(0);
    const [rating21, setratings21] = useState(0);
    const [rating22, setratings22] = useState(0);
    const [rating23, setratings23] = useState(0);
    const [rating24, setratings24] = useState(0);
    const [rating25, setratings25] = useState(0);
    const [rating26, setratings26] = useState(0);

    // console.log(rating0)

    var handleChange  = (e) => {
        const { checked} = e.target;
        const { value } = userinfo;
        if(value)
        if (checked)    { setUserInfo({value: [5],}); console.log("???????????????????????? : checked ") }
        else            { setUserInfo({value: [0],}); console.log("???????????????????????? : unchecked")}      
    }; 
    const handleChange1 = (e) => {
        const { checked} = e.target;
        const { value1 } = userinfo1;
        if(value1)
        if (checked)    { setUserInfo1({value1: [5],}); console.log("?????????????????????????????? : checked") }
        else            { setUserInfo1({value1: [0],}); console.log("?????????????????????????????? : unchecked")}  
    }; 
    const handleChange2 = (e) => {
        const { checked} = e.target;
        const { value2 } = userinfo2;
        if(value2)
        if (checked)    { setUserInfo2({value2: [5],}); console.log("??????????????? : checked") }
        else            { setUserInfo2({value2: [0],}); console.log("??????????????? : unchecked")}  
    }; 
    const handleChange3 = (e) => {
        const { checked} = e.target;
        const { value3 } = userinfo3;
        if(value3)
        if (checked)    { setUserInfo3({value3: [5],}); console.log("?????????????????????????????????????????????????????? : checked") }
        else            { setUserInfo3({value3: [0],}); console.log("?????????????????????????????????????????????????????? : unchecked")}  
    }; 

    var protein =   [   "?????????","?????????",'?????????',"????????????","????????????","????????????????????????","?????????"]
    var vegetable = [   "???????????????","????????????","??????????????????","??????????????????","?????????",
                        "?????????","??????????????????????????????????????????????????????","?????????","?????????????????????","???????????????",
                        "????????????","???????????????????????????","?????????????????????","?????????????????????","??????????????????",
                        "????????????????????????","????????????","??????????????????","??????????????????","???????????????????????????"]

    var user_rating = []
    user_rating.push({  ???????????????: "User",
                        ????????????????????????: userinfo.value[0],
                        ??????????????????????????????: userinfo1.value1[0],
                        ???????????????: userinfo2.value2[0],
                        ??????????????????????????????????????????????????????: userinfo3.value3[0],
                        ?????????: rating0,
                        ?????????: rating1,
                        ?????????: rating2,
                        ????????????: rating3,
                        ????????????: rating4,
                        ?????????: rating5,
                        ?????????: rating6,
                        ???????????????: rating7,
                        ????????????: rating8,
                        ??????????????????: rating9,
                        ??????????????????: rating10,
                        ?????????: rating11,
                        ?????????: rating12,
                        ??????????????????????????????????????????????????????: rating13,
                        ?????????: rating14,
                        ?????????????????????: rating15,
                        ???????????????: rating16,
                        ????????????: rating17,
                        ???????????????????????????: rating18,
                        ?????????????????????: rating19,
                        ?????????????????????: rating20,
                        ??????????????????: rating21,
                        ????????????????????????: rating22,
                        ????????????: rating23,
                        ??????????????????: rating24,
                        ??????????????????: rating25,
                        ???????????????????????????: rating26
    })
    console.log(user_rating);

    const onSubmit = (e) => {
        e.preventDefault();
        var result = calculate.similar_sort(calculate.Weight(user_rating),calculate.Weight(food) ,calculate.similar_score ,20)

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
        console.log(food_db);
    };
    

    return (
        <div>

            <form onSubmit={onSubmit}   ><br/><br/><br/>
                <div className="container">
                    <div className="card">
                        <div className="card-header"> <p className="title">???????????????????????????????????????????????????</p> </div>
                        <div className="card-body">
                            <input type="checkbox" onChange={handleChange}/>  <label>????????????????????????</label>            <br/><br/>
                            <input type="checkbox" onChange={handleChange1}/> <label>??????????????????????????????</label>         <br/><br/>
                            <input type="checkbox" onChange={handleChange2}/> <label>???????????????</label>              <br/><br/>
                            <input type="checkbox" onChange={handleChange3}/> <label>??????????????????????????????????????????????????????</label>    <br/><br/>
                        </div>
                    </div>
                </div>  <br/> <br/>

                <div className="container">
                    <div className="card">
                        <div className="card-header"> <p className="title">?????????????????????????????????????????????????????????????????????????????????????????????????????????</p> </div> 
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

                <div className="container">
                    <div className="card">
                        <div className="card-header"> <p className="title">??????????????????????????????????????????????????????????????????????????????</p> </div>
                        <div className="card-body">   

                            <div class="select-container">
                                <label>{vegetable[0]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating7} onChange={(event, newValue) => {setratings7(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">
                                <label>{vegetable[1]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating8} onChange={(event, newValue) => {setratings8(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">
                                <label>{vegetable[2]}</label>
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating9} onChange={(event, newValue) => {setratings9(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">  
                                <label>{vegetable[3]}</label> 
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating10} onChange={(event, newValue) => {setratings10(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container"> 
                                <label>{vegetable[4]}</label> 
                          <     Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating11} onChange={(event, newValue) => {setratings11(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">  
                                <label>{vegetable[5]}</label> 
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating12} onChange={(event, newValue) => {setratings12(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container"> 
                                <label>{vegetable[6]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating13} onChange={(event, newValue) => {setratings13(newValue);}}/>
                            <br/> <br/> </div>

                            <div class="select-container"> 
                                <label>{vegetable[7]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating14} onChange={(event, newValue) => {setratings14(newValue);}}/>
                            <br/> <br/> </div>
                              
                            <div class="select-container"> 
                                <label>{vegetable[8]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating15} onChange={(event, newValue) => {setratings15(newValue);}}/>
                            <br/> <br/> </div>

                            <div class="select-container">
                                <label>{vegetable[9]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating16} onChange={(event, newValue) => {setratings16(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">
                                <label>{vegetable[10]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating17} onChange={(event, newValue) => {setratings17(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">
                                <label>{vegetable[11]}</label>
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating18} onChange={(event, newValue) => {setratings18(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">  
                                <label>{vegetable[12]}</label> 
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating19} onChange={(event, newValue) => {setratings19(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container"> 
                                <label>{vegetable[13]}</label> 
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating20} onChange={(event, newValue) => {setratings20(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container">  
                                <label>{vegetable[14]}</label> 
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating21} onChange={(event, newValue) => {setratings21(newValue);}}/>
                            <br/> <br/> </div>
      
                            <div class="select-container"> 
                                <label>{vegetable[15]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating22} onChange={(event, newValue) => {setratings22(newValue);}}/>
                            <br/> <br/> </div>

                            <div class="select-container"> 
                                <label>{vegetable[16]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating23} onChange={(event, newValue) => {setratings23(newValue);}}/>
                            <br/> <br/> </div>
                              
                            <div class="select-container"> 
                                <label>{vegetable[17]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating24} onChange={(event, newValue) => {setratings24(newValue);}}/>
                            <br/> <br/> </div>

                            <div class="select-container"> 
                                <label>{vegetable[18]}</label>  
                                 <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating25} onChange={(event, newValue) => {setratings25(newValue);}}/>
                            <br/> <br/> </div>
                              
                            <div class="select-container"> 
                                <label>{vegetable[19]}</label>  
                                <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating26} onChange={(event, newValue) => {setratings26(newValue);}}/>
                            <br/> <br/> </div>
                        </div>
                    </div> 
                </div>  <br/> <br/>

                 <input type="submit" className="form-submit-button"   value="????????????????????????????????????" /><br/> <br/>
               {/* <input type="submit" className="form-submit-button"   value="????????????????????????????????????" onDoubleClick={() =>{createPost()}}/><br/> <br/> */}
                <div className="form-submit-button" onClick={() =>{createPost()}}>????????????????????????????????????</div><br/> <br/>
            </form>
            <RecipeListContainer> {results !== [] &&results.map((data) => {return <ShowResult data={data} />;})} </RecipeListContainer> 
        </div>
);
}

