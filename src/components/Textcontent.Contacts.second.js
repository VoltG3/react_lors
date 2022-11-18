import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

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

const StyledthisDivBefore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 600px) {
   margin-left: 20px;
  }
`

const StyledThisDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`

export default function TextcontentContactsSecond() {
    const [t] = useTranslation(["sections"])

    return (

            <StyledthisDivBefore>
                <p className={"textcontent--small--header"}>{ t("sections:section_footer_part01") }</p>

                <StyledThisDiv>
                    <p style={{  color: 'var(--color--highlight)' }} className={"textcontent--small--header"}>{ t("sections:section_contacts_part03") }</p>
                    <p style={{ paddingLeft: '5px'}} className={"textcontent--small--header"}>{ t("sections:section_contacts_part04") }</p>
                </StyledThisDiv>
            </StyledthisDivBefore>

    )
}
