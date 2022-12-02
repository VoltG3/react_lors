import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from "../materials/Hamburer";
import HeaderSubSetLogo from "../Header.subset.logo";
import HeaderSubsetNav from "../Header.subset.nav";
import FooterSetLang from "../../Footer/Footer.set.lang";

// isColored = false true

const Menu = ({handleNavToggle}) => {
    return (
        <StyledMenu>
            <CloseToggleLogo>
                <HeaderSubSetLogo variant={"transparent"}/>
            </CloseToggleLogo>

            {/*<StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/">Home</StyledLink>*/}
            {/*<StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/example">Example Page</StyledLink>*/}
            {/*<StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/contact">Contact Page</StyledLink>*/}


            <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/"><HeaderSubsetNav /></StyledLink>
            <StyledLink className="animate__animated animate__fadeInRight" onClick={handleNavToggle} to="/"><FooterSetLang /></StyledLink>

            <CloseToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}><Hamburger color={"white"}/></CloseToggle>
        </StyledMenu>
    )
}

const StyledMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    @media screen and (min-width: 790px) {
        width: 60%;
    }
    //background-color: rgb(58, 66, 81, .9);

  background-color: rgb(58, 66, 81);
    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    color: #eee;
    text-decoration: none;
    //font-size: clamp(3rem, 4vw, 6vw);
    //font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;

    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */

    &:hover {
        transition: .2s all ease-in-out;
        color: orangered;
    }
  
  & p {
    color: white;
    font-weight: bold;
    font-size: larger;
    margin-top: 10px;
  }
`;

const CloseToggle = styled.div`
    position: fixed;
    top: 1%;
    right: 4%;
    //background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

const CloseToggleLogo = styled.div`
    position: fixed;
    top: 0%;
    left: -3%;
    //background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

export default Menu
