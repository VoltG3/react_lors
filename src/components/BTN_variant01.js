import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledBtnVariant01 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    max-width: 223px;
    max-height: 31px;
      width: 100%;
      height: 100%;
  margin: 20px 0 20px 0;
  background: var(--color--button);
  border-radius: 5px;
  
  &:hover {
    border: none;
    background: var(--color--hover);
    
    & p {
      color: var(--color--none);
    }
  }
`

export default function BtnVariant01() {
    const [t] = useTranslation(["common"])

    return (
        <StyledBtnVariant01>
            <p className={"textcontent--paragraph"}>{ t("btn_variant01") }</p>
        </StyledBtnVariant01>
    )
}
