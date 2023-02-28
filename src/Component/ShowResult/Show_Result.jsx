import React from "react";
import {RecipeListContainer,RecipeContainer,CoverImage,RecipeName,SeeNutrients,
  // SeeIngredients,SeeMoreText,DialogImage
} from './Styled'
import Modal1 from "../Modal/Modal_Ingredients";
import Modal2 from "../Modal/Modal_Nutrients";

export default function ShowResult({ data }) {
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const { food_img,food_name,
    // food_ingr,food_nutr
  } = data;

  
  return (
    
    <RecipeListContainer>

        <Modal1 open={openModal1} data={food_name} onClose={() => setOpenModal1(false)}/>
        <Modal2 open={openModal2} data={food_name} onClose={() => setOpenModal2(false)}/> 

        <RecipeContainer>
          <CoverImage src={food_img} alt={food_name} />
          <RecipeName>{food_name}</RecipeName>
          <SeeNutrients onClick={() => setOpenModal1(true)}>
            ข้อมูลวัตถุดิบ
          </SeeNutrients>
          {/* <SeeIngredients onClick={() => setOpenModal2(true)}>
            ข้อมูลโภชนาการ
          </SeeIngredients> */}
          {/* <SeeRecFood> แนะนำอาหารทางเลือก </SeeRecFood> */}
        </RecipeContainer>
  </RecipeListContainer>
  )
}
