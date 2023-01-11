import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  height: 60px
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
  float: right
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;


