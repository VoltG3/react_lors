import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const StyledTextcontentAbout = styled.div`
  width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));;
  height: auto;
  
    & h1 {
      margin: 40px 0 40px 0;
    }

    & p {
      margin-top: var(--margin--var02);
    }
`

export default function TextcontentAbout() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <StyledTextcontentAbout>
            <h1 className={"textcontent--section--header"}>{t("common:about")}</h1>
            <p className={"textcontent--paragraph"}>{ i18next.t("sections:section_about_part01") }</p>
        </StyledTextcontentAbout>
    )
}
