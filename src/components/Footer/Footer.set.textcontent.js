import styled from 'styled-components'

import NavSetFooter from './Footer.set.navigation'

import i18next, {t} from "i18next";

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
                    <p className={"pmg textcontent--header--footer"}>{ i18next.t("sections:section_footer_part01") }</p>
                    <p className={"pmg textcontent--header--footer"}>{ i18next.t("sections:section_footer_part02") }</p>
                    <p className={"    textcontent--paragraph--footer"}>{ i18next.t("sections:section_footer_part03") }</p>
                </div>

                <div>
                    <p className={"pmg textcontent--header--footer"}>{ i18next.t("sections:section_footer_part04") }</p>
                    <p className={"    textcontent--paragraph--footer"}>{ i18next.t("sections:section_footer_part05") }</p>
                </div>

                <div>
                    <p className={"pmg textcontent--header--footer"}>{ i18next.t("sections:section_footer_part06") }</p>
                    <p className={"pmg textcontent--paragraph--footer"}>{ i18next.t("sections:section_footer_part07") }</p>
                    <p className={"pmg textcontent--header--footer"}>{ i18next.t("sections:section_footer_part08") }</p>
                    <p className={"    textcontent--paragraph--footer"}>{ i18next.t("sections:section_footer_part09") }</p>
                </div>
            </div>
        </StyledFooterSetTextcontent>
    )
}
