import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    margin-top : 90px;
    display: flex;
    flex-direction: column;
`;

export const ContainerERR = styled.div`
    margin: 5%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 10px;
    justify-content: space-evenly;
`;

export const Recipe = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    gap: 10px;
    justify-content: space-evenly;
    margin-left: 140px;
    margin-right: 90px;
`;

export  const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column; 
    padding: 10px; 
    width: 400px;
    box-shadow: 0 3px 10px 0 #aaa;
    border: 3px solid #f8ae1a;
`;

export  const CoverImage = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const RecipeImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;

`;

export const RecipeName = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: black;
  text-align: center;
  margin-left:  3%;
  margin-bottom:  10px;
  display: flex;
  justify-content: flex-start;
  `;

export const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 200px;
  opacity: 50%;
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
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  height: 60px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  margin-right: 50px;
  margin-top: 13px;
  width: 90%;
  background-color: white;
  border: solid 1px #f8ae1a; 
`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
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

export const ResultBox = styled.h2`
  /* background-color: #e30606; */
  text-align: center;
  height : 200px;
`;
