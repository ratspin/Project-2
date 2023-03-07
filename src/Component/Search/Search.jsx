import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Recipe,
  RecipeListContainer,
  NavContainer,
  Header,
  NavBox,
  SearchBox,
  SearchIcon,
  SearchInput,
  RecipeImage,
  RecipeName,
  RecipeContainer,
  ResultBox,
  CoverImage,
} from "./Styled";
import "./NavBar.css";
import ShowResult from "../ShowResult/Show_Result";
var stringSimilarity = require("string-similarity");
var data = require("../../calculatetion/food.json");

export default function Search() {
  const [value, setValue] = useState("");

  const { state } = useLocation();
  const navigate = useNavigate();
  const createLink = () => {
    navigate("/search", { state: [{ value }, { rating }] });
  };
  const createRec = () => {
    navigate("/rec", { state: { rating } });
  };
  const createPlan = () => {
    navigate("/plan", { state: { rating } });
  };
  const createUpload = () => {
    navigate("/Upload", { state: { rating } });
  };
  const rating = state[1].rating;
  const search_name = state[0].value;
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

  var foodname = [];
  for (var index = 0; index < data.length; index++) {
    foodname.push(data[index]["อาหาร"]);
  }

  var search_result = [];
  search_result.push({
    food_img: "food/" + search_name + ".png",
    food_ing: "ingredients/" + search_name + ".png",
    food_name: search_name,
  });

  const similar = stringSimilarity.findBestMatch(search_name, foodname);

  var similar_ratings = similar.ratings;
  similar_ratings.sort(function (a, b) {
    return b.rating < a.rating
      ? -1
      : b.rating > a.rating
      ? 1
      : b.rating >= a.rating
      ? 0
      : NaN;
  });

  var key = 0;
  var length_key = 10;
  if (search_result[0].food_name === similar_ratings[0].target) {
    key = 1;
    length_key = 11;
  }

  var sort = [];
  for (var j = key; j < length_key; j++) {
    sort.push(similar_ratings[j]);
  }

  var similar_result = [];
  for (var k = 0; k < sort.length; k++) {
    similar_result.push({
      food_img: "food/" + sort[k].target + ".png",
      food_name: sort[k].target,
    });
  }

  const search_check = search_result.map((d, index) => {
    var key_result;
    for (var ind = 0; ind < data.length; ind++) {
      if (search_result[0].food_name !== foodname[ind]) {
        key_result = 0;
      }
      if (search_result[0].food_name === foodname[ind]) {
        key_result = 1;
        break;
      }
    }

    if (key_result === 1) {
      return (
          <Recipe>
            <RecipeContainer>
                <CoverImage src = {search_result[0].food_img} alt = {search_name} />
            </RecipeContainer> <br/>
            <RecipeContainer>
                <CoverImage src = {search_result[0].food_ing} alt = {search_name} />
            </RecipeContainer> <br/>
          </Recipe>
      );
    }
    if (key_result === 0) {
      return <ResultBox key={index}> <br/><br/><br/>ไม่พบผลลัพธ์การค้นหา <br/><br/><br/><br/></ResultBox>;
    }
    return <ResultBox key={index}> <br/><br/><br/>ไม่พบผลลัพธ์การค้นหา <br/><br/><br/><br/></ResultBox>;
  });

  return (
    <div>
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
              <SearchInput placeholder="ค้นหา" type="text"value={value} onChange={(e) => setValue(e.target.value)}/>
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
        <RecipeName>ผลลัพธ์ของคุณ : {search_name}</RecipeName> 
        {search_check}
        <br/><br/><hr/><br/><br/>

        <RecipeName>ผลลัพธ์ที่ใกล้เคียง</RecipeName>
        <RecipeListContainer>{similar_result !== [] &&similar_result.map((data, index) => {return <ShowResult key={index} data={data} />;})}</RecipeListContainer>
      </Container>
    </div>
  );
}
