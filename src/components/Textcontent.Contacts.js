import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import BtnVariant01 from "./BTN_variant01";

const StyledTextcontentContacts = styled.div`
  width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));;
  height: auto;
  
    & h1 {
      margin: 40px 0 40px 0;
    }

    & p {
      margin-top: var(--margin--var02);
    }
`

export default function TextcontentContacts() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <StyledTextcontentContacts>
            <h1 className={"textcontent--section--header"}>{t("common:contacts")}</h1>

            <p className={"textcontent--paragraph--bold"}>{t("sections:section_contacts_part01")}</p>

            <p className={"textcontent--paragraph--header"}>{t("sections:section_contacts_part02")}</p>
            <BtnVariant01 />
        </StyledTextcontentContacts>
    )
}
