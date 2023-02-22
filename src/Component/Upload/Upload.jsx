import React, { useRef,useState, useEffect } from "react";
import {Container,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage} from './Styled'
import { useLocation, useNavigate} from 'react-router-dom';
import imageToBase64 from 'image-to-base64/browser';
import "./NavBar.css";

export default function Upload() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [base64, setBase64] = useState("");
  const [value, setValue] = useState("");

  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createSearchImg = () =>{navigate('/upload',{state: {rating}})}
  
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
    createLink()
    console.log("search onLink :", searchTerm);
  };



  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
    // console.log("Images : ", images[0].name);
  }, [images]);



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
      .then(data => setValue(JSON.parse(data).objects[0].result))
      .catch(error => console.log('error', error));
      console.log(value)
  }, [imageURLs,base64,value]);

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
              <div className="a" onClick={() => createSearchImg()} >ค้นหาด้วยรูป</div>
            </nav>
            {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button> */}

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
        <div style={{ height: '500px'}}> 
          <input type="file" accept="image/jpeg, image/png, image/jpg" onChange={(e) => setImages([...e.target.files])} /> <br/><br/><br/>
          รองรับไฟล์รูปภาพนามสกุล .jpg, .png <br/>โดย crop เฉพาะส่วนอาหาร ขนาดไม่เกิน 1 MB <br/><br/>
          {imageURLs.map((imageSrc, idx) => (<img key={idx} width="100%" height="360" src={imageSrc} alt = "555" />))}          
        </div>

        <div className="form-submit-button" onClick={() => createLink()} >วิเคราะห์ภาพ</div><br/> <br/>

        <>{value}</> 

      </Container>
  
  </div>
  )
}
