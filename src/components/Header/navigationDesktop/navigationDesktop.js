import styled from 'styled-components'

import HeaderSubSetLogo from './Header.subset.logo'
import HeaderSubSetInfo from './Header.subset.info'
import HeaderSubSetLang from './Header.subset.lang'
import HeaderSubsetNav from './Header.subset.nav'

function NavigationDesktop() {

    return (
        <StyledNavigationDesktop>
            <div className={"navigationDesktop"}>
                <div className={"A"}><HeaderSubSetLogo /></div>
                <div className={"B"}><HeaderSubSetInfo /></div>
                <div className={"C"}><HeaderSubSetLang /></div>
                <div className={"D"}><HeaderSubsetNav /></div>
            </div>
        </StyledNavigationDesktop>
    )
}

const StyledNavigationDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    max-width: 1440px;
      width: var(--page--width100);
      height: var(--desktop--navigation--height);
  
 .navigationDesktop {
   display: grid;
   grid-template-rows: 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    height: auto;
   grid-template-areas: 
    "A B B B B B C"
    "A D D D D D D";
   
   .A { // Logo 
     grid-area: A;
      display: flex;
      align-self: center;
   }

   .B { // Info 
     grid-area: B;
      display: flex;
background-color: #d1d1d1;
   }

   .C { // Lang
     grid-area: C;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      padding-top: 5px;
     background-color: orange;
     border: 1px red;
   }

   .D { // Nav
     grid-area: D;
      display: flex;
      justify-content: flex-end;
   }
 }
`

export default NavigationDesktop