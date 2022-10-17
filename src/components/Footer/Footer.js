import styled from 'styled-components'

import LogoSetFooter from './Footer.set.logo'
import FooterSetTextcontent from './Footer.set.textcontent'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
      width: 100%;
      height: auto;
  color: white;
  background: var(--crl--primary--dk);
  
  .section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
            <div >
                <FooterSetTextcontent />
                <LogoSetFooter />

                <div style={{ height: '46px'}}>
                    <p>Developed by VoltG3 © 2022</p>
                </div>
            </div>
        </StyledFooter>
    )
}
