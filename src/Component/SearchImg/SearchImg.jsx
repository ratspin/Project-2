import React, { useRef,useState, useEffect } from "react";
import {Container,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage} from './Styled'
import { useLocation, useNavigate} from 'react-router-dom';
import "./NavBar.css";

export default function SearchImg() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const [value, setValue] = useState("");
  const {state} = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: {rating}})}
  const createSearchImg = () =>{navigate('/SearchImg',{state: {rating}})}
  const createSearch = () =>{navigate('/search',{state: {rating}})}
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
    console.log("search ", searchTerm);
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
    console.log("Images : ", images[0].name);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  console.log(images);
  


 
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
        
        <div style={{ height: '500px'}}> 
          <input type="file" accept="image/*" onChange={onImageChange} /> <br/><br/><br/>
          รองรับไฟล์รูปภาพนามสกุล .jpg, .png <br/>โดย crop เฉพาะส่วนอาหาร ขนาดไม่เกิน 1 MB <br/><br/>
          {imageURLs.map((imageSrc, idx) => (
          <img key={idx} width="360" height="360" src={imageSrc} alt = "555" />
          ))}
        </div>
        <div className="form-submit-button" onClick={() => createSearch()} >วิเคราะห์ภาพ</div><br/> <br/>
      </Container>

  </div>
  )
}
