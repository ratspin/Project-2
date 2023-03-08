import React,{ useState } from "react";
import Rating from '@mui/material/Rating';
import './Show_Info.css';
import { useNavigate } from 'react-router-dom';
import {IconImg,IconBox,Checkbox} from './Styled'

export default function Show_Info() {
    const navigate = useNavigate();
    const createPost = () =>{navigate('/rec',{state: {rating}})}
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
    const [rating27, setratings27] = useState(0);
    const [rating28, setratings28] = useState(0);
    const [rating29, setratings29] = useState(0);
    var handleChange  = (e) => {
        const { checked} = e.target;
        const { value } = userinfo;
        if(value)
        if (checked)    { setUserInfo({value: [5],});} //console.log("โรคหัวใจ : checked ") }
        else            { setUserInfo({value: [0],});} //console.log("โรคหัวใจ : unchecked")}      
    }; 
    const handleChange1 = (e) => {
        const { checked} = e.target;
        const { value1 } = userinfo1;
        if(value1)
        if (checked)    { setUserInfo1({value1: [5],});} //console.log("โรคเบาหวาน : checked") }
        else            { setUserInfo1({value1: [0],});} //console.log("โรคเบาหวาน : unchecked")}  
    }; 
    const handleChange2 = (e) => {
        const { checked} = e.target;
        const { value2 } = userinfo2;
        if(value2)
        if (checked)    { setUserInfo2({value2: [5],});} //console.log("โรคไต : checked") }
        else            { setUserInfo2({value2: [0],});} //console.log("โรคไต : unchecked")}  
    }; 
    const handleChange3 = (e) => {
        const { checked} = e.target;
        const { value3 } = userinfo3;
        if(value3)
        if (checked)    { setUserInfo3({value3: [5],});} //console.log("โรคความดันโลหิตสูง : checked") }
        else            { setUserInfo3({value3: [0],});} //console.log("โรคความดันโลหิตสูง : unchecked")}  
    }; 

    var protein =   [   "หมู","ไก่",'ปลา',"กุ้ง","หมึก","เนื้อวัว","ไข่"]
    var vegetable = [   "กวางตุ้ง","กะหล่ำปลี","ข้าวโพดอ่อน","ขิง","คะน้า",
                        "แครอท","บรอกโคลี","บวบ","ปวยเล้ง","ผักกาด",
                        "ผักโขม","ผักบุ้ง","ฟัก","ฟักทอง","พริก",
                        "พริกหวาน","มะเขือ","มะเขือเทศ","มะระ","มะละกอ",
                        "เม็ดมะม่วงหิมพานต์","หน่อไม้ฝรั่ง","เห็ด"    
                    ]

                       

    var rating = []
    rating.push({  อาหาร: "User",
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

                        กวางตุ้ง: rating7,
                        กะหล่ำปลี: rating8,
                        ข้าวโพดอ่อน: rating9,
                        ขิง: rating10,
                        คะน้า: rating11,
                        แครอท: rating12,
                        บรอกโคลี: rating13,
                        บวบ: rating14,
                        ปวยเล้ง: rating15,
                        ผักกาด: rating16,
                        ผักโขม: rating17,
                        ผักบุ้ง: rating18,
                        ฟัก: rating19,
                        ฟักทอง: rating20,
                        พริก: rating21,
                        พริกหวาน: rating22,
                        มะเขือ: rating23,
                        มะเขือเทศ : rating24,
                        มะระ: rating25,
                        มะละกอ: rating26,
                        เม็ดมะม่วงหิมพานต์: rating27,
                        หน่อไม้ฝรั่ง: rating28,
                        เห็ด: rating29                    
    })
    // console.log(rating);

    const Alert = () => {
        // if(rating0 === 0 || rating1 === 0 || rating2 === 0  || rating3 === 0 || rating4 === 0 || rating5 === 0 || rating6 === 0 || rating7 === 0 || rating8 === 0 || rating9 === 0 || rating10 === 0 || rating11 === 0 || rating12 === 0 || rating13 === 0 || rating14 === 0 || rating15 === 0 || rating16 === 0 || rating17 === 0 || rating18 === 0 || rating19 === 0 || rating20 === 0 || rating21 === 0 || rating22 === 0 || rating23 === 0 || rating24 === 0 || rating25 === 0 || rating26 === 0 )  alert("โปรดระบุข้อมูลให้ครบถ้วน")
        // else createPost()
        createPost()
    };
    

    return (
        <div>

            <form ><br/><br/><br/>
                <div className="container">
                    <div className="card">
                        <div className="card-header"> <p className="title">ระบุโรคของคุณ</p> </div>
                        <div className="card-body">
                            <Checkbox>
                                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange3} class="largerCheckbox"/>  
                                <IconImg src="/icon/โรคความดันโลหิตสูง.png" alt = "หมู"/>
                                <label style={{ verticalAlign: "super" }}>โรคความดันโลหิตสูง</label>   
                            </Checkbox>

                            <Checkbox>
                                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange2} class="largerCheckbox"/>  
                                <IconImg src="/icon/โรคไต.png" alt = "หมู"/> 
                                <label sstyle={{ verticalAlign: "super" }}>โรคไต</label>            
                            </Checkbox>

                            <Checkbox>
                                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange1} class="largerCheckbox"/>  
                                <IconImg src="/icon/โรคเบาหวาน.png" alt = "หมู"/> 
                                <label style={{ verticalAlign: "super" }}>โรคเบาหวาน</label>         
                            </Checkbox>

                            <Checkbox>
                                <input style={{ verticalAlign: "super" }} type="checkbox" onChange={handleChange} class="largerCheckbox"/>  
                                <IconImg src="/icon/โรคหัวใจ.png" alt = "หมู"/> 
                                <label style={{verticalAlign: "super" }}>โรคหัวใจ</label>            
                            </Checkbox>
                        </div>
                    </div>
                </div>  <br/> <br/>

                <div className="container">
                    <div className="card">
                        <div className="card-header"> <p className="title">ระบุเนื้อสัตว์ที่คุณชื่นชอบ</p> </div> 
                        <div className="card-body">  

                            <div class="select-container">
                                <IconImg src="/icon/กุ้ง.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{protein[3]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating3} onChange={(event, newValue) => {setratings3(newValue);}}/>
                                </IconBox> 
                            </div> 

                            <div class="select-container">
                                <IconImg src="/icon/ไก่.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{protein[1]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating1} onChange={(event, newValue) => {setratings1(newValue);}}/>
                                </IconBox> 
                            </div>
            
                            <div class="select-container">
                                <IconImg src="/icon/ไข่.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{protein[6]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating6} onChange={(event, newValue) => {setratings6(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/วัว.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{protein[5]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating5} onChange={(event, newValue) => {setratings5(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/ปลา.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{protein[2]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating2} onChange={(event, newValue) => {setratings2(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/หมึก.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{protein[4]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating4} onChange={(event, newValue) => {setratings4(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/หมู.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{protein[0]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating0} onChange={(event, newValue) => {setratings0(newValue);}}/>
                                </IconBox> 
                            </div>

                        </div>
                    </div> 
                </div>  <br/> <br/>

                <div className="container">
                    <div className="card">
                        <div className="card-header"> <p className="title">ระบุผักที่คุณชื่นชอบ</p> </div>
                        <div className="card-body">   

                            <div class="select-container">
                                <IconImg src="/icon/กวางตุ้ง.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[0]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating7} onChange={(event, newValue) => {setratings7(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/กะหล่ำปลี.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[1]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating8} onChange={(event, newValue) => {setratings8(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/ข้าวโพดอ่อน.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[2]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating9} onChange={(event, newValue) => {setratings9(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/ขิง.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[3]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating10} onChange={(event, newValue) => {setratings10(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/คะน้า.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[4]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating11} onChange={(event, newValue) => {setratings11(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/แครอท.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[5]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating12} onChange={(event, newValue) => {setratings12(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/บรอกโคลี.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[6]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating13} onChange={(event, newValue) => {setratings13(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/บวบ.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[7]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating14} onChange={(event, newValue) => {setratings14(newValue);}}/>
                                </IconBox> 
                            </div>
                              
                            <div class="select-container">
                                <IconImg src="/icon/ปวยเล้ง.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[8]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating15} onChange={(event, newValue) => {setratings15(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/ผักกาด.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[9]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating16} onChange={(event, newValue) => {setratings16(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/ผักโขม.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[10]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating17} onChange={(event, newValue) => {setratings17(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/ผักบุ้ง.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[11]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating18} onChange={(event, newValue) => {setratings18(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/ฟัก.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[12]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating19} onChange={(event, newValue) => {setratings19(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/ฟักทอง.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[13]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating20} onChange={(event, newValue) => {setratings20(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/พริก.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[14]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating21} onChange={(event, newValue) => {setratings21(newValue);}}/>
                                </IconBox> 
                            </div>
      
                            <div class="select-container">
                                <IconImg src="/icon/พริกหวาน.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[15]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating22} onChange={(event, newValue) => {setratings22(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/มะเขือ.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[16]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating23} onChange={(event, newValue) => {setratings23(newValue);}}/>
                                </IconBox> 
                            </div>
                              
                            <div class="select-container">
                                <IconImg src="/icon/มะเขือเทศ.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[17]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating24} onChange={(event, newValue) => {setratings24(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/มะระ.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[18]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating25} onChange={(event, newValue) => {setratings25(newValue);}}/>
                                </IconBox> 
                            </div>
                              
                            <div class="select-container">
                                <IconImg src="/icon/มะละกอ.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[19]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating26} onChange={(event, newValue) => {setratings26(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/เม็ดมะม่วงหิมพานต์.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[20]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating27} onChange={(event, newValue) => {setratings27(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/หน่อไม้ฝรั่ง.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[21]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating28} onChange={(event, newValue) => {setratings28(newValue);}}/>
                                </IconBox> 
                            </div>

                            <div class="select-container">
                                <IconImg src="/icon/เห็ด.png" alt = "หมู"/> <label style={{ paddingTop: '30px'}}>{vegetable[22]}</label>
                                <IconBox>
                                    <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}}value={rating29} onChange={(event, newValue) => {setratings29(newValue);}}/>
                                </IconBox> 
                            </div>
                        </div>
                    </div> 
                </div>  <br/> <br/>

                 {/* <input type="submit" className="form-submit-button"   value="บันทึกข้อมูล" /><br/> <br/> */}
               {/* <input type="submit" className="form-submit-button"   value="บันทึกข้อมูล" onDoubleClick={() =>{createPost()}}/><br/> <br/> */}
                <div className="form-submit-button" onClick={() =>Alert()}>บันทึกข้อมูล</div><br/> <br/>
            </form>
        </div>
);
}

