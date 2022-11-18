import styled from 'styled-components'

import Logo01 from '../../assets/img/logo_colored/BALTA_colored.png'
import Logo02 from '../../assets/img/logo_colored/BTA_colored.png'
import Logo03 from '../../assets/img/logo_colored/ERGO_colored.jpg'
import Logo04 from '../../assets/img/logo_colored/Gjensidige_colored.png'
import Logo05 from '../../assets/img/logo_colored/Seesam_colored.png'

import { useTranslation } from 'react-i18next'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
    max-width: 600px;
        width: 100%;
    max-height: 180px;
        height: 100%;
  
  .logoSquare {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 10px 0;
    
    & img {
      width: 100%;
      height: auto;
      margin-right: 20px;
    }
  }
`

export default function TableContracts() {
    const [t] = useTranslation(["common"])

    return (
        <StyledContainer>
            <p className={"textcontent--small--header"}>{ t("common:contracts01") }</p>

           <div className={"logoSquare"}>
                <img src={ Logo01 } alt={"logo"} style={{ maxWidth: '55px', minWidth: '35px' }}/>
                <img src={ Logo02 } alt={"logo"} style={{ maxWidth: '70px', minWidth: '35px' }}/>
                <img src={ Logo03 } alt={"logo"} style={{ maxWidth: '80px', minWidth: '35px' }}/>
                <img src={ Logo04 } alt={"logo"} style={{ maxWidth: '150px', minWidth: '70px' }}/>
                <img src={ Logo05 } alt={"logo"} style={{ maxWidth: '120px', minWidth: '70px', marginBottom: '18px'}}/>
            </div>

            <p className={"textcontent--small--item"}>{ t("common:contracts02")}</p>
        </StyledContainer>
    )
}
