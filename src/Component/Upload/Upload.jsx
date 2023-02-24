import React, { useRef,useState, useEffect } from "react";
import {Container,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,IconBox} from './Styled'
import { useLocation, useNavigate} from 'react-router-dom';
import imageToBase64 from 'image-to-base64/browser';
import "./NavBar.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Avatar from 'react-avatar';

export default function Upload() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [size, setSize] = useState([]);
  const [base64, setBase64] = useState("");
  const [value, setValue] = useState("");
  const [foodname, setFoodname] = useState("");

  const {state} = useLocation();
  const navigate = useNavigate();
  const createErr = () =>{navigate('/searcherror',{state: [{rating}]})}
  const createSearchImg = () =>{navigate('/searchimg',{state: [{foodname},{rating}]})}
  const createSearch = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createUpload = () =>{navigate('/upload',{state: {rating}})}
  
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
    // console.log("search ", searchTerm);
  };

  const onLink = (searchTerm) => {
    setValue(searchTerm);
    createSearch()
    console.log("search onLink :", searchTerm);
  };

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
    setSize(images[0].size);
    // console.log(console.log(images[0].size));
  }, [images,size]);

  useEffect(() => {
    imageToBase64(imageURLs) // Image URL
    .then(response => setBase64("'"+response+"'"))
    .catch((error) => {console.log(error); }) // Logs an error if there was one

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Apikey", "zEcGHT26R8S7j7vEkgB4pGe1xgHGuQkt");

    var raw = JSON.stringify({
      "file": base64
    });   

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://api.aiforthai.in.th/thaifood", requestOptions)
      .then(response => response.text())
      .then(data => setFoodname(JSON.parse(data).objects[0].result))
      .catch(error => console.log('error', error));
      console.log(foodname)
  }, [imageURLs,base64,foodname]);


  
  const createLink = () => {
    if(size > 1000000){
      alert("โปรดเลือกไฟล์ใหม่ ระบบรองรับไฟล์ขนาดไม่เกิน 1 MB")
    }
    else if(foodname === ""){
      alert("โปรดเลือกไฟล์")
    }
    else{
      for (var index = 0; index < name.length; index++) {
        if(String(foodname) === String(name[index].name)) {
          console.log(foodname)
          createSearchImg()
          break;
        }
        if(String(foodname) !== String(name[index].name)) {
          console.log(foodname)
          createErr()
          break; 
        }
      }
    }
    // if(String(foodname) !== String(name[10].name)) {
    //   console.log(String(name[10].name),1)
    // }
    
    // if(String(foodname) === String(name[10].name)) {
    //   console.log(foodname,2)
    // }
    
  };

  
  return (
    <div>
      <NavContainer>
        <Header>
          <NavBox>
            {/* <button className="nav-btn" onClick={showNavbar}><FaBars /></button> */}
            <a href="/info"><RecipeImage src="/food4U.png" /></a>
            <nav ref={navRef}>
              <div className="a" onClick={() => createRec()} > แนะนำอาหาร</div>
              <div className="a" onClick={() => createPlan()} >วางแผนการรับประทาน</div>
              <div className="a" onClick={() => createUpload()} >ค้นหาด้วยรูป</div>
            </nav>
            {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button> */}

          </NavBox>

          <IconBox>
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
            <Popup trigger=
                {<button> <Avatar round={true} size="40" src ="/p.png"/> </button>}
                position="bottom">
                <div> 55555 </div>
            </Popup>
          </IconBox>
       
        </Header>
      </NavContainer>

      <Container>
        <div style={{ height: '500px'}}> 
          <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setImages([...e.target.files])} /> <br/><br/><br/>
          รองรับไฟล์รูปภาพนามสกุล .jpg, .png <br/>โดย crop เฉพาะส่วนอาหาร ขนาดไม่เกิน 1 MB <br/><br/>
          {imageURLs.map((imageSrc, idx) => (<img key={idx} width="100%" height="360" src={imageSrc} alt = "555" />))}          
        </div>

        <div className="form-submit-button" onClick={() => createLink()} >ค้นหา</div><br/> <br/>

        <>{foodname}</> 

      </Container>
  
  </div>
  )
}
