import styled from 'styled-components'

import FooterSetNavigation from './Footer.set.navigation'
import FooterSetLang from './Footer.set.lang'
import FooterSetTextcontent from './Footer.set.textcontent'
import FooterSetLogo from './Footer.set.logo'
import FooterSetDev from './Footer.set.dev'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: 100%;
      height: auto;
  color: white;
  background: var(--crl--primary--dk);

  .footerContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 47px 
            var(--page--side--margin) 
            47px 
            var(--page--side--margin);
    white-space: pre-wrap;

    .pMarginBottom {
      margin-bottom: 7px;
    }
  }
`

export default function Footer() {
    return (
        <StyledFooter>
            <div>
                <div className={"footerContent"}>
                    <div>
                        <FooterSetNavigation />
                        <FooterSetLang />
                    </div>
                   
                    <FooterSetTextcontent />
                </div>

                <div style={{ boxShadow : '-0px -4px 4px rgba(0, 0, 0, 0.25)' }}>
                    <div style={{ boxShadow : '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <FooterSetLogo />
                    </div>
                </div>

                <div >
                    <FooterSetDev />
                </div>
            </div>
        </StyledFooter>
    )
}
