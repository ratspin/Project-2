import React, { useEffect, useState } from "react";
import "./style.css";
import ShowResult from "../ShowResult/Show_Result"
import {RecipeListContainer} from './Styled'
var cal_result = require("../../calculatetion/data");



function PaginationComponent() {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const itemsPerPage = 5;
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
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    var result= []
    for(var i = 0; i < cal_result.length; i++) {
      var food_img = "food/"+ cal_result[i].food + ".png"
      var food_ingr = "ingredients/"+ cal_result[i].food + ".png"
      var food_name = cal_result[i].food
      var food_similar = cal_result[i].similar_rate
      var food_nutr = "nutrients/"+ cal_result[i].food + ".png"
      result.push({food_img:food_img,food_nutr:food_nutr,food_ingr:food_ingr,food_name:food_name,food_similar:food_similar})
    }
    setData(result)
  }, []);

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

  console.log(data)

  return (
    <>

      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li> <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false} > Prev</button> </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li> <button onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false}> Next </button> </li>
      </ul>
    </>
  );
}

export default PaginationComponent;