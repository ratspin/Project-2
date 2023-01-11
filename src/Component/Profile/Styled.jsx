import styled from 'styled-components'

export const Logo = styled.img`
    width: 120px;
    height: 120px;
    padding: 2rem 2rem;
`;

export const Container = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Box = styled.div`
    background: #fff;
    color: #fff;
    padding-top: 50px;
`;

export const TitleContainer = styled.div`
    background: #303030; 
    fontSize: 1.5rem ;
    // width: 100%;
    borderBottom: 1px solid #000;
    display: flex;
    justifyContent: space-between;
    padding: 1rem 2rem;
`;

export const Title = styled.div`
    display: flex;
    justifyContent: center;
`;

export const Button = styled.div`
    border: none;
    background: transparent;
    fontSize: 5rem;
    color: #fff;
`;
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
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;