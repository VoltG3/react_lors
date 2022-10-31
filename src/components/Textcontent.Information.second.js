import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

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
    const [t] = useTranslation(["sections"])

    return (
        <StyledTExtcontentInformationSecond>
            <p className={"textcontent--paragraph--header"}>{ t("sections:section_info_part04") }</p>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <p className={"textcontent--paragraph--2"}>{ t("sections:section_info_part05") }</p>
                <p className={"textcontent--paragraph--2"}>{ t("sections:section_info_part06") }</p>
                <p className={"textcontent--paragraph--2"}>{ t("sections:section_info_part07") }</p>
            </div>
        </StyledTExtcontentInformationSecond>
    )
}
