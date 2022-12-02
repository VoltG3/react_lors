import styled from 'styled-components'

import HeaderSubSetLogo from './Header.subset.logo'
import HeaderSubSetInfo from './Header.subset.info'
import HeaderSubSetLang from './Header.subset.lang'
import HeaderSubsetNav from './Header.subset.nav'

const StyledHeaderSetNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    //max-width: calc(var(--page--width) - calc(var(--page--side--margin) + var(--page--side--margin)));
  max-width: 1440px;
        width: calc(100% - calc(var(--page--side--margin) + var(--page--side--margin)));
        height: 94px;
 //border: solid 1px red;

  @media only screen and (max-width: 1440px) {
    width: calc(100% - min(max(1.458vw, 18px), 21px)); // error!!
  }
  
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
   
   & :nth-child(1) {       // Logo  padding: 0 40px 0 40px;
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

export default function HeaderNavigationDesktop() {

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
