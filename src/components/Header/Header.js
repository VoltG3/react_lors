import styled from 'styled-components'

import HeaderNavigationDesktop from './Header.navigation.desktop'
import HeaderSetSlider from './Header.set.slider'
import HeaderNavigationMobile from "./Header.navigation.mobile";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
              max-width: 1440px;
    width: 100%;
  //max-height: 474px;
  height: auto;
    //height: 474px;
  //border: solid 1px red;
  
  .navDesktop { visibility: visible; }
  .navMobile { visibility: collapse; }

  
  @media only screen and (max-width: 922px) {
    .navDesktop { visibility: collapse; }
    .navMobile { visibility: visible; }
  }
`

export default function Header() {
    return (
        <StyledHeader>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: 'inherit'
            }} className={"navDesktop"}>
                <HeaderNavigationDesktop />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: 'inherit'
            }} className={"navMobile"}>
                <HeaderNavigationMobile />
            </div>

           <HeaderSetSlider />
        </StyledHeader>
    )
}
