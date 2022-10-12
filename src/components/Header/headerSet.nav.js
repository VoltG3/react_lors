import styled from 'styled-components'
import LogoColored00 from '../../assets/img/logo_colored/Lors_colored.svg'

import HeaderSubSetNavInfoline from './headerSubSet.nav.infoline'
import HeaderSubSetNavNavigation from './headerSubSet.nav.navigation'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    max-width: calc(var(--page--width) - calc(var(--page--side--margin) + var(--page--side--margin)));
        width: 100%;
        height: 94px;
  
  .firstpart {
    display: flex;
    justify-content: flex-start;
    align-items: center;
        width: 340px;
        height: 100%;
  }
  
  .secondpart {
    display: flex;
    flex-direction: column;
      width: 1100px;
      height: 94px;
  }
`

export default function HeaderSetNav() {
    return (
        <StyledContainer>
            <div className={"firstpart"}>
                <img src={ LogoColored00 }
                     alt={"icon"}
                     style={{
                         width: '60px',
                         height: '60px'
                     }}/>
            </div>

            <div className={"secondpart"}>
                <div>
                    <HeaderSubSetNavInfoline />
                </div>
                <div>
                    <HeaderSubSetNavNavigation />
                </div>
            </div>
        </StyledContainer>
    )
}
