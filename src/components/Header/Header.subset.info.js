import styled from 'styled-components'

import Icon01 from '../../assets/img/icons/icon_telefon.svg'
import Icon02 from '../../assets/img/icons/icon_mail.svg'
import Icon03 from '../../assets/img/icons/icon_appointment.svg'

import { t } from "i18next";

const StyledHeaderSubSetInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid 1px brown;
  
  .infoSquare {
    display: flex;
    flex-direction: row;
    
    & img {
      margin-right: 10px;
    }
  }
`

export default function HeaderSubSetInfo() {
    return (
        <StyledHeaderSubSetInfo>
            <div>
                <p className={"infoSquare textcontent--header--nav--btn--over"}>{ t("sections:section_header_part01") }</p>
            </div>

            <div>
                <img src={ Icon01 } alt={"icon"} style={{ width: '20px', height: '20px'}}/>
                <p className={"infoSquare textcontent--header--nav--btn--over"}>{ t("sections:section_header_part02") }</p>
            </div>

            <div>
                <img src={ Icon02 } alt={"icon"} style={{ width: '24px', height: '18px'}}/>
                <p className={"infoSquare textcontent--header--nav--btn--over"}>{ t("sections:section_header_part03") }</p>
            </div>

            <div>
                <img src={ Icon03 } alt={"icon"} style={{ width: '24px', height: '22px'}}/>
                <p className={"infoSquare textcontent--header--nav--btn--over"}>{ t("sections:section_header_part04") }</p>
            </div>
        </StyledHeaderSubSetInfo>
    )
}
