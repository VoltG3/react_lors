import React from 'react'
import styled from 'styled-components';
import Hamburger from "../materials/Hamburer";

// import { FaBars } from 'react-icons/fa';

const Toggle = ({handleNavToggle}) => {
    return (
        <StyledToggle className="animate__animated animate__fadeInRight" onClick={handleNavToggle}>
            <Hamburger
            color={"var(--color--primary)"}/>
        </StyledToggle>
    )
}

const StyledToggle = styled.div`
    position: fixed;
    top: 1%;
    right: 4%;
    color: #222;
    //background: #eee;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
`;

export default Toggle
