import styled from 'styled-components'

import Logo from './logo'
import Info from './info'
import Languages from './languages'
import Navigation from './navigation'

function NavigationDesktop() {

    return (
        <StyledNavigationDesktop>
            <div className={"navigationDesktop"}>
                <div className={"A"}>
                    <Logo variant={"colored"}/>
                </div>

                <div className={"B"}>
                    <Info />
                    <Languages />
                </div>

                <div className={"D"}>
                    <Navigation />
                </div>
            </div>
        </StyledNavigationDesktop>
    )
}

const StyledNavigationDesktop = styled.div`
  display: flex;
  flex: 1 100%;
  justify-content: center;
  max-width: var(--page--width);
      width: 100%;
      height: var(--desktop--navigation--height);
  
 .navigationDesktop {
   display: grid;
   grid-template-rows: repeat(2, 1fr);
   grid-template-columns: repeat(7, 1fr);
    width: 100%;
    height: auto;
   grid-template-areas: 
    "A B B B B B B"
    "A D D D D D D";
   
   .A { // Logo 
     grid-area: A;
      display: flex;
      align-self: center;
   }

   .B { // Info & Lang
     grid-area: B;
      display: flex;
   }
   
   .D { // Nav
     grid-area: D;
      display: flex;
      justify-content: flex-end;
   }
 }
`

export default NavigationDesktop