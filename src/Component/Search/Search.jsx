// import React, { useState } from "react";
import React from "react";
import {
  Container,
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  SeeIngredients,
  SeeNutrients,
  SeeRecFood,
  // SeeMoreText,DialogImage
} from "./Styled";
// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogActions from "@material-ui/core/DialogActions";
import { useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function ShowResult() {
  // const [show, setShow] = useState("");

  const { state } = useLocation();
  var name = state.value;

  var food_name = [];
  var food_img = [];
  var food_ingr = [];
  var food_nutr = [];
  var showinfo = [];

  food_img = "food/" + name + ".png";
  food_ingr = "ingredients/" + name + ".png";
  food_nutr = "nutrients/" + name + ".png";
  food_name = name;
  showinfo.push({
    food_img: food_img,
    food_nutr: food_nutr,
    food_ingr: food_ingr,
    food_name: food_name,
  });
  console.log(showinfo);

  return (
    <Container>
      <NavBar /> <br />
      <RecipeListContainer>
        {/* <Dialog onClose={() => console.log("")}  open={!!show}>     
          <DialogContent>
            <DialogImage src={food_ingr} alt= {food_name} />       
          </DialogContent>

          <DialogActions>
            <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
          </DialogActions>
        </Dialog> */}

        <RecipeContainer>
          <CoverImage src={food_img} alt={food_name} />
          <RecipeName>{food_name}</RecipeName>
          <SeeNutrients
          // onClick={() => setShow(!show)}
          >
            {" "}
            ข้อมูลวัตถุดิบ
          </SeeNutrients>
          <SeeIngredients> ข้อมูลโภชนาการ </SeeIngredients>
          <SeeRecFood> แนะนำอาหารทางเลือก </SeeRecFood>
        </RecipeContainer>

      </RecipeListContainer>
    </Container>
  );
}
