import styled from 'styled-components'

import { useTranslation } from 'react-i18next'
import NavSetFooter from './Footer.set.navigation'


const StyledFooterSetTextcontent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 47px 40px 47px 40px;
  
  white-space: pre-wrap;
  
  .pmg {
    margin-bottom: 7px;
  }
`

export default function FooterSetTextcontent() {
    const [t] = useTranslation(["sections"])

    return (
        <StyledFooterSetTextcontent>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
            }}>
                <div>
                    <NavSetFooter />
                </div>

                <div>
                    <p className={"pmg textcontent--header--footer"}>{ t("sections:section_footer_part01") }</p>
                    <p className={"pmg textcontent--header--footer"}>{ t("sections:section_footer_part02") }</p>
                    <p className={"    textcontent--paragraph--footer"}>{ t("sections:section_footer_part03") }</p>
                </div>

                <div>
                    <p className={"pmg textcontent--header--footer"}>{ t("sections:section_footer_part04") }</p>
                    <p className={"    textcontent--paragraph--footer"}>{ t("sections:section_footer_part05") }</p>
                </div>

                <div>
                    <p className={"pmg textcontent--header--footer"}>{ t("sections:section_footer_part06") }</p>
                    <p className={"pmg textcontent--paragraph--footer"}>{ t("sections:section_footer_part07") }</p>
                    <p className={"pmg textcontent--header--footer"}>{ t("sections:section_footer_part08") }</p>
                    <p className={"    textcontent--paragraph--footer"}>{ t("sections:section_footer_part09") }</p>
                </div>
            </div>
        </StyledFooterSetTextcontent>
    )
}
