import React, { useRef,useState,useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Container,NavContainer,Header,NavBox,SearchBox,SearchIcon,SearchInput,RecipeImage,} from "./Styled";
import "./NavBar.css";
import SearchResult from './SearchResult'
import SearchChackbox from './SearchChackbox'

var data = require("../../calculation/food.json");

export default function Search() {
  const [value, setValue] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  const createLink = () =>{navigate('/search',{state: [{value},{rating},{disease}]})}
  const createRec = () =>{navigate('/rec',{state: {rating}})}
  const createPlan = () =>{navigate('/plan',{state: [{rating},{disease}]})}
  const createUpload = () =>{navigate('/Upload',{state: [{rating},{disease}]})}
  const disease = state[2].disease
  const rating = state[1].rating

  const navRef = useRef();

  var name = [];
  for (var i = 0; i < data.length; i++) {
    var food = data[i]["อาหาร"];
    name.push({ name: food });
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // console.log("search ", searchTerm);
  };

  const onLink = (searchTerm) => {
    setValue(searchTerm);
    createLink();
    // console.log("search onLink :", searchTerm);
  };

  return (
    <div>
      <Wrapper>
      <NavContainer>
        <Header>
          <NavBox>
            {/* <button className="nav-btn" onClick={showNavbar}><FaBars /></button> */}
            <a href="/info"><RecipeImage src="/3.png" /></a>
            <nav ref={navRef}>
              <div className="a" onClick={() => createRec()} > แนะนำอาหาร</div>
              <div className="a" onClick={() => createPlan()} >วางแผนการรับประทาน</div>
              <div className="a" onClick={() => createUpload()} >ค้นหาด้วยรูป</div>
            </nav>
            {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button> */}

          </NavBox>
          <div>
            <SearchBox>
              <SearchIcon src="/search-icon.svg" onClick={() => onLink(value)}/>
              <SearchInput placeholder="ค้นหาเมนูอาหาร" type="text"value={value} onChange={(e) => setValue(e.target.value)}/>
            </SearchBox>
            <div className="dropdown" style={{ width: '280px'}} >
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
        <SearchResult data = {state[0].value}/>
        <SearchChackbox data = {state[0].value}/>           
      </Container>
      </Wrapper>
    </div>
  );
}

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};