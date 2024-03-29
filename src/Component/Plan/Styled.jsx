import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 100px 30px 30px 30px;
`;

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    /* flex-grow: 4;  */
    gap: 20px; 
    justify-content: center;
    /* background-color: #5900ff; */
`;

export  const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 250px;
    box-shadow: 0 3px 10px 0 #aaa;
    border: 3px solid #f8ae1a;


`;

export const MealBox = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    font-size: x-large;
    width: 270px;
    /* background-color: #ff0000; */
`;

export const DayBox = styled.div`
    display: flex;
    /* background-color: #ff0000; */
    justify-content: space-between;
`;

export  const CoverImage = styled.img`
  object-fit: cover;
  height: 250px;
`;

export  const DialogImage = styled.img`
  object-fit: cover;
  height: 500px;
`;

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  `;
export const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const IngredientsText = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

export const SeeNewTab = styled(SeeMoreText)`
  color: green;
  border: solid 1px green;
`;

export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
`;

export const Seecalories = styled(SeeMoreText)`
  color:red;
  border: solid 1px red;
`;

export const SeeNutrients = styled(SeeMoreText)`
  color: #5677fc;
  border: solid 1px #5677fc;
`;


export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
`;
export const Header = styled.div`
  background-color: #FFA500;
  // color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  // align-items: center;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  height: 60px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  // padding-top: 30px;
  border-radius: 6px;
  margin-right: 50px;
  margin-top: 13px;
  width: 90%;
  background-color: white;
  // box-shadow: 0 3px 6px 0 #555;
  border: solid 1px #f8ae1a; 
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export const RecipeImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  width: 70%;
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Day = styled.div`
  width: 15%;
  margin-top: 1rem;
  background-color: #2abd1fc7;
  color: #fff;
  padding: 20px 1rem;
  font-size: 1.5rem;
`;

export const Name = styled.span`
  font-size: 25px;
  font-weight: 400;
  color: black;
  margin: 5px;
  padding: 10px;
  `;