import React from 'react'
import styled from 'styled-components'
import Logo from '../navigationDesktop/logo'
import MobileMenu from './MobileMenu'

function NavigationMobile() {
    return (
        <Container>
            <TopBar>
                <Logo variant={"colored"} />
            </TopBar>
            <MobileMenu />
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: auto;
`

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
  box-shadow: rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`

export default NavigationMobile