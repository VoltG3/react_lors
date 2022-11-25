import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom";

const StyledBtnVariant04 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
    max-width: 350px;
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

export default function BtnVariant04() {
    const [t] = useTranslation(["common"])

    return (
        <StyledBtnVariant04>
            <Link to={"contacts"}>
                <p className={"textcontent--paragraph"}>{ t("btn_variant04") }</p>
            </Link>
        </StyledBtnVariant04>
    )
}

