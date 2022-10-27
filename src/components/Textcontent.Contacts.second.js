import styled from 'styled-components'
import i18next, { t } from "i18next";
import { I18nRenderListInformation } from "../translations/i18n.render.list.information";
import BtnVariant02 from "./BTN_variant02";

const StyledTExtcontentContactsSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));;
  height: auto;
  margin-bottom: 60px;

  & p {
    opacity: var( --font--opacity);
  }
`

export default function TextcontentContactsSecond() {
    return (
        <StyledTExtcontentContactsSecond>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <p className={"textcontent--paragraph--header"}>{ i18next.t("sections:section_footer_part01") }</p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <p className={"textcontent--paragraph--header"}>{ i18next.t("sections:section_contacts_part03") }</p>
                    <p className={"textcontent--paragraph--header--red"}>{ i18next.t("sections:section_contacts_part04") }</p>
                </div>
            </div>
        </StyledTExtcontentContactsSecond>
    )
}
