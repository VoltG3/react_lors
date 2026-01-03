import React from 'react'
import styled from 'styled-components'
import Logo from '../navigationDesktop/Logo'
import MobileMenu from './MobileMenu'

function NavigationMobile() {
    return (
        <Container>
            <TopBar>
                <Logo variant="colored" />
                <MobileMenu />
            </TopBar>
        </Container>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  width: 100%;
  display: none;

  @media only screen and (max-width: 922px) {
    display: block;
  }
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  box-sizing: border-box;
  background: transparent;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`

export default NavigationMobile