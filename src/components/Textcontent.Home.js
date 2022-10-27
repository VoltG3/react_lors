import styled from 'styled-components'

import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const StyledTextcontentHome = styled.div`
  
    max-width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
        width: 100%;
        height: auto;
  margin-top: var(--margin--var01);
 // border: solid 1px red;
  
  & div {
      max-width: 1000px;
          width: 100%;
          height: 100%;
    //border: solid 1px red;
  }
  
  & p {
    margin-top: var(--margin--var02);
  }
`

export default function TextcontentHome() {
    const [t] = useTranslation(["sections"])

    return (
        <StyledTextcontentHome>
            <div>
                <h1 className={"textcontent--index--header"}>{ i18next.t("sections:section_home_header_part01") }</h1>
                <h1 className={"textcontent--index--header"}>{ i18next.t("sections:section_home_header_part02") }</h1>
                <h1 className={"textcontent--index--header"}>{ i18next.t("sections:section_home_header_part03") }</h1>
            </div>

            <div>
                <p className={"textcontent--paragraph"}>{ i18next.t("sections:section_home_part01") }</p>
                <p className={"textcontent--paragraph"}>{ i18next.t("sections:section_home_part02") }</p>
                <p className={"textcontent--paragraph"}>{ i18next.t("sections:section_home_part03") }</p>
            </div>
        </StyledTextcontentHome>
    )
}
