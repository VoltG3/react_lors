import styled from 'styled-components'

import Icon01 from '../../../assets/img/icons/icon_telefon.svg'
import Icon02 from '../../../assets/img/icons/icon_mail.svg'
import Icon03 from '../../../assets/img/icons/icon_appointment.svg'

import { useTranslation } from 'react-i18next'

const StyledHeaderSubSetInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
    width: 100%;
    height: auto;
  
  //
  //border: solid 1px brown;
  //
  
  white-space: pre-wrap;
  
  .infoSquare {
    display: flex;
    //width: 100%;
    flex-direction: row;
    
    & img {
      margin-right: 10px;
    }

    @media only screen and (max-width: 600px) {
      & {
        flex-direction: column;
      }
    }
  }
`

export default function HeaderSubSetInfo() {
    const [t] = useTranslation(["sections"])

    return (
        <StyledHeaderSubSetInfo>
            <div className={"infoSquare"}>
                <p className={"textcontent--header--nav--btn--over"}>{ t("sections:section_header_part01") }</p>
            </div>

            <div className={"infoSquare"}>
                <img src={ Icon01 } alt={"icon"} style={{ width: '20px', height: '20px'}}/>
                <p className={"textcontent--header--nav--btn--over"}>{ t("sections:section_header_part02") }</p>
            </div>

            <div className={"infoSquare"}>
                <img src={ Icon02 } alt={"icon"} style={{ width: '24px', height: '18px'}}/>
                <p className={"textcontent--header--nav--btn--over"}>{ t("sections:section_header_part03") }</p>
            </div>

            <div className={"infoSquare"}>
                <img src={ Icon03 } alt={"icon"} style={{ width: '24px', height: '22px'}}/>
                <p className={"textcontent--header--nav--btn--over"}>{ t("sections:section_header_part04") }</p>
            </div>
        </StyledHeaderSubSetInfo>
    )
}
