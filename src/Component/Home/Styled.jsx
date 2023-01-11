import styled from 'styled-components'

import HeaderBG from '../../assets/tom-yum-kung.jpg'

export const HeaderCon = styled.section`
    height: 750px;
    background: url(${HeaderBG});
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
    border-bottom: 3px solid #222;
    background-position: center;
    background-size: cover;
`
export const Logo = styled.img`
    width: 120px;
    height: 120px;
    padding: 2rem 2rem;
`