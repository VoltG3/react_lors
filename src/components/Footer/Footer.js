import styled from 'styled-components'
import FooterDev from './FooterDev'
import FooterLogo from './FooterLogo'
import FooterTextcontent01 from './FooterTextcontent01'
import FooterTextcontent02 from './FooterTextcontent02'
import FooterTextcontent03 from './FooterTextcontent03'
import FooterNav from './FooterNav'
import FooterLang from './FooterLang'

function Footer() {
    return (
        <StyledFooter>
            <div className={"innerFooter"}>
                <div>
                    <FooterNav />
                    <FooterLang />
                </div>

               <FooterTextcontent01 />
               <FooterTextcontent02 />
               <FooterTextcontent03 />
            </div>

            <div style={{ boxShadow : '-0px -4px 4px rgba(0, 0, 0, 0.25)' }}>
                <div style={{ boxShadow : '0 4px 4px rgba(0, 0, 0, 0.25)' }}>
                    <FooterLogo />
                </div>
            </div>

            <FooterDev />
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    width: 100vw;
    color: white;
  /*background: var(--color--primary);*/
  background: var(--crl--primary--dk);
  
  white-space: pre-wrap;
  //box-sizing: border-box;

  
  .innerFooter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
      max-width: 1440px;
          width: 100%;
          height: auto;
    padding-top: 50px;
    padding-bottom: 50px;

    @media only screen and (max-width: 730px) {
      gap: 30px;
      flex-direction: column;
    }
  }

  .pMarginBottom {
    margin-bottom: 7px;
  }
`

export default Footer