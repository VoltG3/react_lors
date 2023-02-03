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
                <div className={"footerFirstSet"}>
                    <FooterNav />
                    <FooterLang />
                </div>

                <div className={"footerSecondSet"}>
                    <span className={"space"} />
                    <FooterTextcontent01 />
                    <span className={"space"} />
                    <FooterTextcontent02 />
                    <span className={"space"} />
                    <FooterTextcontent03 />
                </div>
            </div>

            <div style={{ boxShadow : '-0px -4px 4px rgba(0, 0, 0, 0.35)' }}>
                <div style={{ boxShadow : '0 4px 4px rgba(0, 0, 0, 0.35)' }}>
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
  white-space: pre-wrap;
  width: 100vw;
  color: white;
  background:#021928;//var(--crl--primary--dk);

  .innerFooter {
    display: flex;
    flex-direction: row;
    max-width: var(--page--width);
    width: var(--page--width100);
    height: auto;
    padding-top: 50px;
    padding-bottom: 50px;

    @media only screen and (max-width: 1170px) {
      gap: 30px;
      flex-direction: column;
      
    }
  }

  .footerFirstSet {
    display: flex;
    flex-direction: column;
    min-width: 237px;
    max-width: 237px;
    height: 172px;

    & div:nth-child(2) {
      max-width: 230px;
    }
  }

  .footerSecondSet {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // max-width: 1203px;
    width: 100%;
    height: auto;

    .space {
      display: flex;
      min-width: 30px;
      width: 100%;
    }

    & div {021928FF
      display: flex;
      flex-direction: column;
      min-width: 270px;
      height: 172px;

      & p {
        margin-bottom: 7px;
      }
    }

    @media only screen and (max-width: 1170px) {
      gap: 30px;
      flex-direction: column;
      
      
      .space {
        display: none;
      }
    }
  }
`

export default Footer