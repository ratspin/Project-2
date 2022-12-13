import React, { useState } from "react";
import {RecipeListContainer,RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText,SeeNutrients,DialogImage} from './Styled'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

export default function ShowResult({ data }) {
  const [show, setShow] = useState("");
  const [show2, setShow2] = useState("");
  const { food_img,food_name,food_ingr,food_nutr} = data;
  return (
    <RecipeListContainer>
      <Dialog onClose={() => console.log("")}  open={!!show}>     
        <DialogContent>
          <DialogImage src={food_ingr} alt={food_name} />     
        </DialogContent>

        <DialogActions>
          <SeeMoreText onClick={() => setShow("")}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>

      <Dialog onClose={() => console.log("")}  open={!!show2}>
        <DialogContent>
          <DialogImage src={food_nutr} alt={food_name} />
        </DialogContent>
        <DialogActions>
          <SeeMoreText onClick={() => setShow2("")}>Close</SeeMoreText>
        </DialogActions>
      </Dialog>

      <RecipeContainer>
        <CoverImage src={food_img} alt={food_name} />
        <RecipeName>{food_name}</RecipeName>
        <SeeNutrients onClick={() => setShow(!show)}> ข้อมูลวัตถุดิบ</SeeNutrients>  
        <IngredientsText onClick={() => setShow2(!show2)} > ข้อมูลโภชนาการ </IngredientsText>
        {/* <SeeMoreText> Calories </SeeMoreText> */}
    </RecipeContainer>
  </RecipeListContainer>
  )
}
