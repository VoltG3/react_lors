import styled from 'styled-components'
import { Link01 } from '../../../env'
import { useTranslation } from 'react-i18next'

function BTN_variant01() {
    const [t] = useTranslation(["common"])

    return (
        <BTN01Container>
            <StyledButtonV01>
                <a href={ Link01 } target="_blank" rel="noopener noreferrer">
                    <p className={"textcontent--button--v1"}>{ t("common:eapointment") }</p>
                </a>
            </StyledButtonV01>
        </BTN01Container>
    )
}

const BTN01Container = styled.div`
  display: flex;
  justify-content: flex-end;
    width: 100%;
    height: auto;
  padding: 20px 0 20px 0;
`

const StyledButtonV01 = styled.button`
  padding: 8px 25px 8px 25px;
  box-sizing: border-box;
  border: none;
  background-color: rgb(255, 208, 105);
  
  &:hover {
    transition: background-color .3s linear;
    background-color: var(--color--palevioletred);
  }
`
export default BTN_variant01