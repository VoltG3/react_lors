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

export default function TextcontentContactsSecond() {
    const [t] = useTranslation(["sections"])

    return (
        <StyledTExtcontentContactsSecond>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <p className={"textcontent--paragraph--header"}>{ t("sections:section_footer_part01") }</p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <p className={"textcontent--paragraph--header"}>{ t("sections:section_contacts_part03") }</p>
                    <p className={"textcontent--paragraph--header--red"}>{ t("sections:section_contacts_part04") }</p>
                </div>
            </div>
        </StyledTExtcontentContactsSecond>
    )
}
