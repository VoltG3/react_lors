import styled from 'styled-components'

import HeaderSetNavigation from './Header.set.navigation'
import HeaderSetSlider from './Header.set.slider'
import HeaderSetMobile from "./mobile/Header.set.mobile";

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
                <HeaderSetNavigation />
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: 'inherit'
            }} className={"navMobile"}>
                <HeaderSetMobile />
            </div>

           <HeaderSetSlider />
        </StyledHeader>
    )
}
