import styled from 'styled-components'

import LogoSetFooter from './Footer/footerSet.logo'
import FooterSetInfo from './Footer/footerSet.info'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: 100%;
      height: auto;
  color: white;
  background: var(--crl--primary--dk);
  
  section {
    display: grid;
    grid-template-columns: repeat(1fr, 3);
    grid-template-rows: 1fr;
        width: 100%;
        height: auto;
    grid-template-areas:
    "."
    "."
    ".";
  }
`

export default function Footer() {
    return (
        <StyledFooter>
            <section>
                <FooterSetInfo />
                <LogoSetFooter />

                <div style={{ height: '46px'}}>
                    <p>Developed by VoltG3 © 2022</p>
                </div>
            </section>
        </StyledFooter>
    )
}