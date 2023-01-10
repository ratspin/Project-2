import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  SeeIngredients,
  SeeNutrients,
  SeeRecFood,
} from "./Styled";
import NavBar from "../NavBar/NavBar";
import Modal1 from "../Modal/Modal_Ingredients";
import Modal2 from "../Modal/Modal_Nutrients";

export default function ShowResult() {
  const [openModal1, setOpenModal1] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  const { state } = useLocation();
  const name = state.value;

  const food_name = name;
  const food_img = "food/" + name + ".png";
  const food_ingr = "ingredients/" + name + ".png";
  const food_nutr = "nutrients/" + name + ".png";
  const showinfo = [];

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
        <Modal1
          open={openModal1}
          data={food_name}
          onClose={() => setOpenModal1(false)}
        />

        <Modal2
          open={openModal2}
          data={food_name}
          onClose={() => setOpenModal2(false)}
        />

        <RecipeContainer>
          <CoverImage src={food_img} alt={food_name} />
          <RecipeName>{food_name}</RecipeName>
          <SeeNutrients onClick={() => setOpenModal1(true)}>
            ข้อมูลวัตถุดิบ
          </SeeNutrients>
          <SeeIngredients onClick={() => setOpenModal2(true)}>
            ข้อมูลโภชนาการ
          </SeeIngredients>
          <SeeRecFood> แนะนำอาหารทางเลือก </SeeRecFood>
        </RecipeContainer>
      </RecipeListContainer>
    </Container>
  );
}
