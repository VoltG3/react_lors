import styled from 'styled-components'

import Icon01 from '../../assets/img/icons/icon_telefon.svg'
import Icon02 from '../../assets/img/icons/icon_mail.svg'
import Icon03 from '../../assets/img/icons/icon_appointment.svg'

import { STDS } from '../STDCOUT.sections'
import { DATA_TEXTCONTENT_SECTIONS } from '../../env'

const StyledHeaderSubSetInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
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
            <div className={"infoSquare textcontent--header--nav--btn--over"}>
                <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"01"}/>
            </div>

            <div className={"infoSquare textcontent--header--nav--btn--over"}>
                <img src={ Icon01 } alt={"icon"} style={{ width: '20px', height: '20px'}}/>
                <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"02"}/>
            </div>

            <div className={"infoSquare textcontent--header--nav--btn--over"}>
                <img src={ Icon02 } alt={"icon"} style={{ width: '24px', height: '18px'}}/>
                <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"03"}/>
            </div>

            <div className={"infoSquare textcontent--header--nav--btn--over"}>
                <img src={ Icon03 } alt={"icon"} style={{ width: '24px', height: '22px'}}/>
                <STDS textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"04"}/>
            </div>
        </StyledHeaderSubSetInfo>
    )
}
