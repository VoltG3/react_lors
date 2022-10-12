import styled from 'styled-components'

import Icon01 from '../../assets/img/icons/icon_telefon.svg'
import Icon02 from '../../assets/img/icons/icon_mail.svg'
import Icon03 from '../../assets/img/icons/icon_appointment.svg'

import { GetTextcontent } from '../Props.textcontent'
import { DATA_TEXTCONTENT_SECTIONS } from '../../env'

import HeaderSubSetNavLanguage from './headerSubSet.nav.language'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
    width: 100%;
    height: 47px;
  
 .infoSquare {
    display: flex;
    flex-direction: row;
      width: 100%;
  }
`

export default function HeaderSubSetNavInfoline() {
    return (
        <StyledContainer>
            <div className={"infoSquare"}>
                <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"01"}/></p>
            </div>

            <div className={"infoSquare"}>
                <img src={ Icon01 } alt={"icon"} style={{ width: '20px', height: '20px'}}/>
                <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"02"}/></p>
            </div>

            <div className={"infoSquare"}>
                <img src={ Icon02 } alt={"icon"} style={{ width: '24px', height: '18px'}}/>
                <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"03"}/></p>
            </div>

            <div className={"infoSquare"}>
                <img src={ Icon03 } alt={"icon"} style={{ width: '24px', height: '22px'}}/>
                <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"04"}/></p>
            </div>

            <div>
                <HeaderSubSetNavLanguage />
            </div>
        </StyledContainer>
    )
}
