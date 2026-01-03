import React from 'react'
import styled from 'styled-components'
import Navigation from './navigation'

function NavigationDesktop2() {
    return (
        <Container2>
            <Grid2>


                <NavSection2>
                    <Navigation />

                </NavSection2>
            </Grid2>
        </Container2>
    )
}

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: var(--page--width, 1440px);
  height: auto;
`

const Grid2 = styled.nav`
  display: grid;
  grid-template-rows: repeat(1, auto);
  grid-template-columns: auto 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  padding: 20px 10px;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
  box-shadow: rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;

  grid-template-areas:
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



const NavSection2 = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border: solid 1px red;

  @media (max-width: 922px) {
    display: none;
  }
`

export default NavigationDesktop2
