import styled from 'styled-components'
import NavigationDesktop from './navigationDesktop/NavigationDesktop'
import NavigationMobile from './navigationMobile/navigationMobile'
import Slider from './slider/slider'

function Header() {
    return (
        <StyledHeader>
            <NavigationWrapper className="desktop">
               <NavigationDesktop />
            </NavigationWrapper>

            <NavigationWrapper className="mobile">
               <NavigationMobile />
            </NavigationWrapper>

            <Slider />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
`

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  
border: solid 1px red;
  &.desktop {
    display: flex;
  }

  &.mobile {
    display: none;
  }

  @media only screen and (max-width: 922px) {
    &.desktop {
      display: none;
    }

    &.mobile {
      display: block;
    }
  }
`

export default Header