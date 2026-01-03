import styled from 'styled-components'
import NavigationDesktop from './navigationDesktop/NavigationDesktop'
import NavigationMobile from './navigationMobile/NavigationMobile'
import SecondaryNav from './navigationDesktop/SecondaryNav'
import Slider from './slider/slider'

function Header() {
    return (
        <StyledHeader>
            {/* Fixed transparent navigation over slider */}
            <NavigationDesktop />

            {/* Mobile navigation */}
            <MobileWrapper>
               <NavigationMobile />
            </MobileWrapper>

            {/* Slider with padding-top for fixed nav */}
            <SliderWrapper>
                <Slider />
            </SliderWrapper>

            {/* Secondary navigation below slider */}
            <SecondaryNavWrapper>
                <SecondaryNav />
            </SecondaryNavWrapper>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`

const MobileWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 922px) {
    display: block;
    width: 100%;
  }
`

const SliderWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 923px) {
    padding-top: 100px;
  }

  @media only screen and (max-width: 922px) {
    padding-top: 70px;
  }
`

const SecondaryNavWrapper = styled.div`
  display: block;
  width: 100%;

  @media only screen and (max-width: 922px) {
    display: none;
  }
`

export default Header