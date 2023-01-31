import styled from 'styled-components'

import Icon01 from '../../../assets/icons/icon_telefon.svg'
import Icon02 from '../../../assets/icons/icon_mail.svg'
import Icon03 from '../../../assets/icons/icon_appointment.svg'

import { useTranslation } from 'react-i18next'
import { Link01 } from '../../../env'
import Covid from './covid'

function Info() {
    const [t] = useTranslation(["sections"])

    return (
        <StyledHeaderSubSetInfo>

            <Covid />

            <div className={"infoSquare"}>
                <img src={ Icon01 } alt={"icon"} style={{ width: '20px', height: '18px'}}/>
                <p className={"textcontent--header--desktop--infoline"}>{ t("sections:section_header_part02") }</p>
            </div>

            <div className={"infoSquare"}>
                <img src={ Icon02 } alt={"icon"} style={{ width: '20px', height: '18px'}}/>
                <p className={"textcontent--header--desktop--infoline"}>{ t("sections:section_header_part03") }</p>
            </div>

            <a className={""} href={ Link01 } target={"_blank"} rel={"noopner noreferrer"}>
                <div className={"infoSquare"}>
                    <img src={ Icon03 } alt={"icon"} style={{ width: '20px', height: '18px'}}/>
                    <p className={"textcontent--header--desktop--infoline hoverLink"}>{ t("sections:section_header_part04") }</p>
                </div>
            </a>

        </StyledHeaderSubSetInfo>
    )
}

const StyledHeaderSubSetInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
    width: 100%;
    height: auto;
  padding-top: 5px;
  
  & div {
    padding-right: 30px;
  }
  
  .infoSquare {
    display: flex;
    flex-direction: row;
    
    & img {
      margin-right: 10px;
    }
    
    .hoverLink:hover {
      color: var(--clr--accent--base);
    }
  }
`

export default Info