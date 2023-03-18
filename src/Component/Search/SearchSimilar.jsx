import React from 'react';
import ShowResult from "../ShowResult/Show_Result";
import {RecipeListContainer, RecipeName,} from "./Styled";
import stringSimilarity from "string-similarity";

export default function SearchSimilar(props) {
    const search_name = props.data1;
    const data = props.data2;

    var foodname = [];
    for (var index = 0; index < data.length; index++) {
      foodname.push(data[index]["อาหาร"]);
    }

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
    if (search_name  === similar_ratings[0].target) {
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

    console.log(props.data2);
    console.log(data);

    return (
        <>
            <RecipeName>ผลลัพธ์ที่ใกล้เคียง</RecipeName>
            <RecipeListContainer>{similar_result !== [] &&similar_result.map((data, index) => {return <ShowResult key={index} data={data} />;})}</RecipeListContainer>
        </>
    );
}