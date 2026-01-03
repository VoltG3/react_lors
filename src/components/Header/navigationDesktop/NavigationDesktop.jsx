import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import TopBar from './TopBar'
import Languages from './Languages'
import DesktopMenu from './DesktopMenu'

function NavigationDesktop() {
  return (
    <Container>
      <Grid>
        <LogoSection>
          <Logo variant="colored" />
        </LogoSection>

        <InfoSection>
          <TopBar />
          <Languages />
          <DesktopMenu />
        </InfoSection>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: 100%;
  background: transparent;
  transition: all 0.3s ease;

  @media (max-width: 922px) {
    display: none;
  }
`

const Grid = styled.nav`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr;
  gap: 20px;
  width: 100%;
  max-width: 100%;
  padding: 15px 20px;
  box-sizing: border-box;

  grid-template-areas: 'logo info';

  @media (max-width: 1220px) {
    padding: 12px 16px;
    gap: 15px;
  }
`

const LogoSection = styled.div`
  grid-area: logo;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const InfoSection = styled.div`
  grid-area: info;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 1220px) {
    gap: 12px;
  }
`

export default NavigationDesktop
