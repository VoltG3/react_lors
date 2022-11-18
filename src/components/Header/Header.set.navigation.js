import styled from 'styled-components'

import HeaderSubSetLogo from './Header.subset.logo'
import HeaderSubSetInfo from './Header.subset.info'
import HeaderSubSetLang from './Header.subset.lang'
import HeaderSubsetNav from './Header.subset.nav'

const StyledHeaderSetNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    max-width: calc(var(--page--width) - calc(var(--page--side--margin) + var(--page--side--margin)));
        width: 100%;
        height: 94px;
 
 .navigationDesktop {
   display: grid;
   grid-template-rows: 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   width: 100%;
   height: 94px;
   grid-template-areas: 
    "A A B B B B C"
    "A A D D D D D";

    @media only screen and (max-width: 1440px) {
     grid-template-areas: 
      "A B B B B B C"
      "A D D D D D D";
    }
   
   & :nth-child(1) {       // Logo
     grid-area: A;
      display: flex;
      align-self: center;
   }

   & :nth-child(2) {       // Info line
     grid-area: B;
   }

   & :nth-child(3) {       // Language nav
     grid-area: C;
     display: flex;
     justify-content: flex-end;
     align-items: center;
   }

   & :nth-child(4) {       // Navigation 
     grid-area: D;
   }
 }
`

export default function HeaderSetNavigation() {

    return (
        <StyledHeaderSetNavigation>
            <div className={"navigationDesktop"}>
                <HeaderSubSetLogo />
                <HeaderSubSetInfo />
                <HeaderSubSetLang />
                <HeaderSubsetNav />
            </div>
        </StyledHeaderSetNavigation>
    )
}
