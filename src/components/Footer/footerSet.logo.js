import styled from 'styled-components'

import LogoTransparent00 from '../../assets/img/logo_transparent/Lors_transparent.svg'
import LogoTransparent01 from '../../assets/img/logo_transparent/Balta_transaprent.png'
import LogoTransparent02 from '../../assets/img/logo_transparent/BTA_transsparent.png'
import LogoTransparent03 from '../../assets/img/logo_transparent/ERGO_transparent.png'
import LogoTransparent04 from '../../assets/img/logo_transparent/Gjensidige_transparent.png'
import LogoTransparent05 from '../../assets/img/logo_transparent/Seesam_transpareent.png'

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  grid-template-rows: 1fr;
    width: 100%;
    height: 100%;
  grid-template-areas: ". .";
  background: var(--clr--primary--base);
`

const StyledLeft = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
    width: calc(var(--page--width) / 2);

  
  & :first-child { 
      width: 70px; 
      height: 70px;
    margin-right: 28px;
  }
`

const StyledRight = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 18px;
  align-items: center;
    width: calc(var(--page--width) / 2);
  margin: 24px 0 24px 0;

  & :first-child { margin-left: 23px; }
  & :nth-child(1) { width: 45px; height: 38px; }
  & :nth-child(2) { width: 60px; height: 34px; }
  & :nth-child(3) { width: 53px; height: 16px; }
  & :nth-child(4) { width: 99px; height: 27px; }
  & :nth-child(5) { width: 95px; height: 43px; }
`

export default function FooterSetLogo() {
    return (
        <StyledContainer>
           <StyledLeft>
               <img src={ LogoTransparent00 } alt={"icon"} />
           </StyledLeft>

           <StyledRight>
               <img src={ LogoTransparent01 } alt={"icon"} />
               <img src={ LogoTransparent02 } alt={"icon"} />
               <img src={ LogoTransparent03 } alt={"icon"} />
               <img src={ LogoTransparent04 } alt={"icon"} />
               <img src={ LogoTransparent05 } alt={"icon"} />
           </StyledRight>
        </StyledContainer>
    )
}
