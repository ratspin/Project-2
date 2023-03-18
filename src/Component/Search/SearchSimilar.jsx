import React, { useEffect, useState } from "react";
import ShowResult from "../ShowResult/Show_Result";
import {RecipeListContainer} from "./Styled";
import stringSimilarity from "string-similarity";

export default function SearchSimilar(props) {
    const search_name = props.data1;
    const food_data = props.data2;

    var foodname = [];
    for (var index = 0; index < food_data.length; index++) {
      foodname.push(food_data[index]["อาหาร"]);
    }

    const similar = stringSimilarity.findBestMatch(search_name, foodname);
    var similar_ratings = similar.ratings;
    similar_ratings.sort(function (a, b) {
      return b.rating < a.rating ? -1 : b.rating > a.rating ? 1 : b.rating >= a.rating ? 0 : NaN; });
  
    var key = 0;
    if (search_name  === similar_ratings[0].target) {
      key = 1;
    }

    const [data, setData] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const itemsPerPage = 10;
    const pageNumberLimit = 5;

    const renderData = (data) => {
      return ( <RecipeListContainer>{data !== [] &&data.map((data,index) => {return <ShowResult key={index} data={data} />;})}</RecipeListContainer> );
    };

    const handleClick = (event) => {
      setcurrentPage(Number(event.target.id));
    };
  
    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (  <li key={number} id={number}  onClick={handleClick} className={currentPage === number ? "active" : null} >  {number} </li>  );
    } else {
        return null;
    }
    });

    useEffect(() => { 
      var sort = [];
      for (var j = key; j < food_data.length; j++) {
        sort.push(similar_ratings[j]);
      }
      var similar_result = [];
      for (var k = 0; k < sort.length; k++) {
        similar_result.push({
          food_img: "food/" + sort[k].target + ".png",
          food_name: sort[k].target,
        });
      }
        setData(similar_result)
    }, [food_data,key,similar_ratings]);

    const handleNextbtn = () => {
      setcurrentPage(currentPage + 1);

  if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  }
  };

  const handlePrevbtn = () => {
  setcurrentPage(currentPage - 1);

  if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
  }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
  pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
  pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  console.log(props.data2);

    return (
      <div >
        {renderData(currentItems)}
        <div style = {{ display : 'flex', }}>
          <ul className="pageNumbers">
              <li> <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false} > ก่อนหน้า</button> </li>
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
              <li> <button onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false}> ถัดไป </button> </li>
          </ul>
        </div> <br/>
      </div>
    );
}