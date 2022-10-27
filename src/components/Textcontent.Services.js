import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledTextcontentServices = styled.div`
  width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));;
  height: auto;
  
    & h1 {
      margin: 40px 0 40px 0;
    }

    & p {
      margin-top: var(--margin--var02);
    }
`

export default function TextcontentServices() {
    const [t] = useTranslation(["common"])

    return (
        <StyledTextcontentServices>
            <h1 className={"textcontent--section--header"}>{ t("common:services") }</h1>
        </StyledTextcontentServices>
    )
}
