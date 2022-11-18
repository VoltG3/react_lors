import styled from 'styled-components'

import LogoTransparent00 from '../../assets/img/logo_transparent/Lors_transparent.svg'
import LogoTransparent01 from '../../assets/img/logo_transparent/Balta_transaprent.png'
import LogoTransparent02 from '../../assets/img/logo_transparent/BTA_transsparent.png'
import LogoTransparent03 from '../../assets/img/logo_transparent/ERGO_transparent.png'
import LogoTransparent04 from '../../assets/img/logo_transparent/Gjensidige_transparent.png'
import LogoTransparent05 from '../../assets/img/logo_transparent/Seesam_transpareent.png'

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
    max-width: 1440px;
        width: 100%;
        height: auto;
  background: var(--clr--primary--base);
  
  & :nth-child(1) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
      //max-width: 720px;
      max-width: calc(calc(var(--page--width) / 2) - 2px);
          width: 100%;
          height: auto;
    
    & img {
      width: 100%;
      height: auto;
      margin-right: 20px;
    }
  }
  
  & :nth-child(2) {
    display: flex;
    justify-content: flex-start;
      max-width: calc(var(--page--width) / 2);
          width: 100%;
          height: auto;
    gap: 14px;
    align-items: center;
     
    margin: 24px 0 24px 0;
    
    & :nth-child(1) {
      margin-left: 20px;
    }
    
    & :nth-child(5) {
      margin-bottom: 8px;
    }
  }
`

export default function FooterSetLogo() {
    return (
        <StyledLogo className={"box"}>
           <div style={{
               borderRight: 'solid 1px var(--color--list)'
           }}>
               <img src={ LogoTransparent00 } alt={"icon"} style={{ maxWidth: '70px', minWidth: '35px' }}/>
              {/* <img src={ LogoTransparent00 } alt={"icon"} style={{ width: '70px', height: '70px' }}/>*/}
           </div>

           <div>
               <img src={ LogoTransparent01 } alt={"icon"} style={{ maxWidth: '40px', minWidth: '25px' }}/>
               <img src={ LogoTransparent02 } alt={"icon"} style={{ maxWidth: '60px', minWidth: '30px' }}/>
               <img src={ LogoTransparent03 } alt={"icon"} style={{ maxWidth: '53px', minWidth: '25px' }}/>
               <img src={ LogoTransparent04 } alt={"icon"} style={{ maxWidth: '99px', minWidth: '45px' }}/>
               <img src={ LogoTransparent05 } alt={"icon"} style={{ maxWidth: '95px', minWidth: '45px' }}/>

               {/*<img src={ LogoTransparent01 } alt={"icon"} style={{ width: '45px', height: '38px' }}/>
               <img src={ LogoTransparent02 } alt={"icon"} style={{ width: '60px', height: '34px' }}/>
               <img src={ LogoTransparent03 } alt={"icon"} style={{ width: '53px', height: '16px' }}/>
               <img src={ LogoTransparent04 } alt={"icon"} style={{ width: '99px', height: '27px' }}/>
               <img src={ LogoTransparent05 } alt={"icon"} style={{ width: '95px', height: '43px' }}/>*/}
           </div>
        </StyledLogo>
    )
}
