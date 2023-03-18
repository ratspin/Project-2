import React from 'react';
import { Recipe,RecipeName,RecipeContainer,ResultBox,CoverImage,} from "./Styled";
var data = require("../../calculatetion/food.json");

export default function SearchResult(props) {
    const search_name = props.data;
    
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

    const search_check = search_result.map((d, index) => {
        var key_result;
        for (var ind = 0; ind < data.length; ind++) {
          if (d.food_name !== foodname[ind]) {
            key_result = 0;
          }
          if (d.food_name === foodname[ind]) {
            key_result = 1;
            break;
          }
        }
    
        if (key_result === 1) {
          return (
              <Recipe key={index}>
                <RecipeContainer>
                    <CoverImage src = {d.food_img} alt = {search_name} />
                </RecipeContainer> <br/>
                <RecipeContainer>
                    <CoverImage src = {d.food_ing} alt = {search_name} />
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
        <>
            <RecipeName>ผลลัพธ์ของคุณ : {search_name}</RecipeName> 
            {search_check}
        </>
    );
}