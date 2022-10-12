import styled from 'styled-components'
import { GetTextcontent } from '../Props.textcontent'
import { DATA_TEXTCONTENT_TABLES } from '../../env'

import Logo01 from '../../assets/img/logo_colored/BALTA_colored.png'
import Logo02 from '../../assets/img/logo_colored/BTA_colored.png'
import Logo03 from '../../assets/img/logo_colored/ERGO_colored.jpg'
import Logo04 from '../../assets/img/logo_colored/Gjensidige_colored.png'
import Logo05 from '../../assets/img/logo_colored/Seesam_colored.png'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
    max-width: 696px;
        width: 100%;
    max-height: 180px;
        height: 100%;
  
  .logoSquare {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0 20px 0;
  }
`

export default function TableContracts() {
    return (
        <StyledContainer>
            <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_TABLES } section={"contracts"} partId={"01"}/></p>

            <div className={"logoSquare"}>
                <img src={ Logo01 } alt={"logo"} style={{ width: '70px', height: '60px'}}/>
                <img src={ Logo02 } alt={"logo"} style={{ width: '70px', height: '40px'}}/>
                <img src={ Logo03 } alt={"logo"} style={{ width: '90px', height: '30px'}}/>
                <img src={ Logo04 } alt={"logo"} style={{ width: '150px', height: '40px'}}/>
                <img src={ Logo05 } alt={"logo"} style={{ width: '130px', height: '65px', marginBottom: '18px'}}/>
            </div>

            <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_TABLES } section={"contracts"} partId={"02"}/></p>
        </StyledContainer>
    )
}
