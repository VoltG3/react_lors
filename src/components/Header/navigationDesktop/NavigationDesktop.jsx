import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Info from './info'
import Languages from './languages'
import Navigation from './navigation'
import DesktopMenu from './DesktopMenu'

function NavigationDesktop() {
  return (
    <Container>
      <Grid>
        <LogoSection>
          <Logo variant="colored" />
        </LogoSection>

        <InfoSection>
          <Info />
          <Languages />
        </InfoSection>

        <NavSection>
          <Navigation />
          <DesktopMenu />
        </NavSection>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: var(--page--width, 1440px);
  height: auto;
`

const Grid = styled.nav`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto 1fr;
  gap: 20px;
  width: 100%;
  max-width: var(--page--width, 1440px);
  padding: 20px 40px;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
  box-shadow: rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;

  grid-template-areas:
    'logo info'
    'logo nav';

  @media (max-width: 1220px) {
    padding: 15px 30px;
    gap: 15px;
  }

  @media (max-width: 922px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'logo';
    padding: 15px 20px;
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
  align-items: flex-start;
  justify-content: flex-end;
  gap: 30px;

  @media (max-width: 1220px) {
    gap: 20px;
  }

  @media (max-width: 922px) {
    display: none;
  }
`

const NavSection = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 922px) {
    display: none;
  }
`

export default NavigationDesktop
