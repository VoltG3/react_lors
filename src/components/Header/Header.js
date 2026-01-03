import styled from 'styled-components'
import NavigationDesktop from './navigationDesktop/NavigationDesktop'
import NavigationMobile from './navigationMobile/NavigationMobile'
import SecondaryNav from './navigationDesktop/SecondaryNav'
import Slider from './slider/slider'

function Header() {
    return (
        <StyledHeader>
            {/* Slider with navigation over it (both desktop & mobile) */}
            <SliderWrapper>
                <NavigationDesktop />
                <NavigationMobile />
                <Slider />
            </SliderWrapper>

            {/* Secondary navigation below slider (desktop only) */}
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

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`

const SecondaryNavWrapper = styled.div`
  display: block;
  width: 100%;

  @media only screen and (max-width: 922px) {
    display: none;
  }
`

export default Header