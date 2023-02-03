import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledBtnSmallMob = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 223px;
  max-height: 21px;
  min-width: 223px;
  width: 100%;
  height: 100%;
  margin-left: 5px;
  box-sizing: border-box;
  border: solid 1px white;
  border-radius: 15px;

  @media only screen and (max-width: 790px) {
    min-width: min(max(15.486vw, 150px), 223px);
  }

  @media only screen and (max-width: 563px) {
    min-width: min(max(39.097vw, 360px), 563px);
    max-width: 563px;
  }

  & p {
    color: white;
  }
  
  &:hover {
    border: none;
    background: yellow;

    & p {
      color: var(--color--primary);
    }
  }
`

function BTNSmallMobile() {
    const [t] = useTranslation(["common"])

    return (
        <StyledBtnSmallMob>
            <p className={"textcontent--button--v2"}>{ t("btn_variant02") }</p>
        </StyledBtnSmallMob>
    )
}

export default BTNSmallMobile