import styled from 'styled-components'

import LogoTransparent00 from '../../assets/logo_transparent/Lors_transparent.svg'
import LogoTransparent01 from '../../assets/logo_transparent/Balta_transaprent.svg'
import LogoTransparent02 from '../../assets/logo_transparent/BTA_transsparent.svg'
import LogoTransparent03 from '../../assets/logo_transparent/ERGO_transparent.svg'
import LogoTransparent04 from '../../assets/logo_transparent/Gjensidige_transparent.svg'
import LogoTransparent05 from '../../assets/logo_transparent/Seesam_transpareent.svg'

function FooterLogo() {
    return(
        <StyledFooterLogo>
            <div className={"innerFooterLogo"}>
                <div className={"firstLogo"}>
                    <img src={ LogoTransparent00 } alt={"icon"} style={{ maxWidth: '70px', minWidth: '35px' }}/>
                </div>

                <div className={"secondLogo"}>
                    <img src={ LogoTransparent01 } alt={"icon"} style={{ maxWidth: '40px', minWidth: '25px' }}/>
                    <img src={ LogoTransparent02 } alt={"icon"} style={{ maxWidth: '60px', minWidth: '30px' }}/>
                    <img src={ LogoTransparent03 } alt={"icon"} style={{ maxWidth: '53px', minWidth: '25px' }}/>
                    <img src={ LogoTransparent04 } alt={"icon"} style={{ maxWidth: '99px', minWidth: '45px' }}/>
                    <img src={ LogoTransparent05 } alt={"icon"} style={{ maxWidth: '95px', minWidth: '45px', paddingBottom: '12px' }}/>
                </div>
            </div>
        </StyledFooterLogo>
    )
}

const StyledFooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    width: 100vw;
    height: auto;
  background: var(--clr--primary--base);
  
  .innerFooterLogo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
      max-width: 1440px;
      width: calc(100% - 40px);
      height: auto;
    
    .firstLogo {
      display: flex;
      justify-content: center;
        height: 140px;
        width: auto;
      border-right: solid 1px var( --color--list);
      
      & img {
        width: 100%;
        height: auto;
        margin-right: 15px;
      }
    }
    
    .secondLogo {
      display: flex;
      flex-direction: row;
        height: 140px;
        width: auto;
      
      & img {
        display: flex;
        width: 100%;
        height: auto;
        padding-left: 20px;
      }
    }
  }
`

export default FooterLogo