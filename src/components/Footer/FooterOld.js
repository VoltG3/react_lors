import styled from 'styled-components'

import FooterSetNavigation from './Footer.set.navigation'
import FooterSetLang from './Footer.set.lang'
import FooterSetTextcontent from './Footer.set.textcontent'
import FooterSetLogo from './Footer.set.logo'
import FooterSetDev from './Footer.set.dev'

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--page--width);
      width: 100%;
      height: auto;
  color: white;
  background: var(--crl--primary--dk);

  .footerContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1440px;
      width: 100%;
    height: auto;
    
   padding: 47px 
            max(min(1.389vw, 20px), 40px) //var(--page--side--margin) 
            47px
            max(min(1.389vw, 20px), 40px);
    white-space: pre-wrap;
    box-sizing: border-box;
    
    .pMarginBottom {
      margin-bottom: 7px;
    }
    
    @media only screen and (max-width: 730px) {
      gap: 30px;
      flex-direction: column;
    }
    
  }

  .ft {
   
    max-width: 1440px;
    width: 100%;
    height: auto;
    box-sizing: border-box;
 
   
  }
`

export default function FooterOld() {
    return (
        <StyledFooter>
                <div className={"footerContent"}>
                   <div>
                        <FooterSetNavigation />
                        <FooterSetLang />
                    </div>
                   
                    <FooterSetTextcontent />
                </div>

                <div className={"ft"}>
                    <div style={{ boxShadow : '-0px -4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <div style={{ boxShadow : '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                            <FooterSetLogo />
                        </div>
                    </div>
                </div>

                <div>
                    <FooterSetDev />
                </div>
        </StyledFooter>
    )
}
