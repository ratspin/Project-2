import styled from 'styled-components'

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    background-color: #fff;
    --color: #f8ae1a;
    padding: 0.8em 1.7em;
    border-radius: .3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    font-family: inherit;
    text-transform: uppercase;
    color: var(--color);
    z-index: 1;
`;

export const IconImg = styled.img`
    width: 50px;
    height: 50px;
    padding-top: 10px;
`
export const IconBox = styled.div`
    padding-top: 30px;
`