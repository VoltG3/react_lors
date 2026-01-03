import React from 'react'
import styled from 'styled-components'
import Logo from '../navigationDesktop/Logo'
import MobileMenu from './MobileMenu'

function NavigationMobile() {
    return (
        <Container>
            <TopBar>
                <Logo variant="colored" maxHeight="70px" />
                <MobileMenu />
            </TopBar>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  width: 100%;
  display: none;

  @media only screen and (max-width: 922px) {
    display: flex;
    justify-content: center;
    background: rgb(244, 244, 244);
  }
`

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  height: 90px;
  padding: 0 40px;
  box-sizing: border-box;
  background: transparent;
  transition: all 0.3s ease;

  & > div:first-child {
    max-width: 250px;
    min-width: 220px;
  }

  @media only screen and (max-width: 1220px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 700px) {
    padding: 0 20px;
    height: 85px;

    & > div:first-child {
      max-width: 240px;
      min-width: 210px;
    }
  }
`

export default NavigationMobile