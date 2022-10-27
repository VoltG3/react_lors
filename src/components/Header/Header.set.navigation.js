import styled from 'styled-components'

import HeaderSubSetLogo from './Header.subset.logo'
import HeaderSubSetInfo from './Header.subset.info'
import HeaderSubSetLang from './Header.subset.lang'
import HeaderSubsetNav1 from './Header.subset.nav1'
import HeaderSubsetNav2 from './Header.subset.nav2'
import {useTranslation} from "react-i18next";

const StyledHeaderSetNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    max-width: calc(var(--page--width) - calc(var(--page--side--margin) + var(--page--side--margin)));
        width: 100%;
        height: 94px;
 
 .innerSetNavigation {
   display: grid;
   grid-template-rows: 1fr 1fr;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
   width: 100%;
   height: 94px;
   grid-template-areas: 
    "A A B B B B C"
    "A A D D D D D";

   & :nth-child(1) {
     grid-area: A;
      display: flex;
      align-self: center;
   }

   & :nth-child(2) {
     grid-area: B;
   }

   & :nth-child(3) {
     grid-area: C;
     display: flex;
     justify-content: flex-end;
     align-items: center;
   }

   & :nth-child(4) {
     grid-area: D;
   }

  /* & :nth-child(5) {
     grid-area: E;
   }*/
 }
`

export default function HeaderSetNavigation() {
    const [t] = useTranslation(["sections"])

    return (
        <StyledHeaderSetNavigation>
            <div className={"innerSetNavigation"}>
                <HeaderSubSetLogo />
                <HeaderSubSetInfo />
                <HeaderSubSetLang />
                <HeaderSubsetNav1 />
               {/* <HeaderSubsetNav2 />*/}
            </div>
        </StyledHeaderSetNavigation>
    )
}
