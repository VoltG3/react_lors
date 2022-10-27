import styled from 'styled-components'
import i18next, { t } from "i18next";
import { I18nRenderListInformation } from "../translations/i18n.render.list.information";
import BtnVariant02 from "./BTN_variant02";

const StyledTExtcontentInformationSecond = styled.div`
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

export default function TextcontentInformationSecond() {
    return (
        <StyledTExtcontentInformationSecond>
            <p className={"textcontent--paragraph--header"}>{ i18next.t("sections:section_info_part04") }</p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <p className={"textcontent--paragraph--2"}>{ i18next.t("sections:section_info_part05") }</p>
                <p className={"textcontent--paragraph--2"}>{ i18next.t("sections:section_info_part06") }</p>
                <p className={"textcontent--paragraph--2"}>{ i18next.t("sections:section_info_part07") }</p>
            </div>
        </StyledTExtcontentInformationSecond>
    )
}
