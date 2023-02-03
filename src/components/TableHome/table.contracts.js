import styled from 'styled-components'

import Logo01 from '../../assets/logo_colored/BALTA_colored.png'
import Logo02 from '../../assets/logo_colored/BTA_colored.png'
import Logo03 from '../../assets/logo_colored/ERGO_colored.jpg'
import Logo04 from '../../assets/logo_colored/Gjensidige_colored.png'
import Logo05 from '../../assets/logo_colored/Seesam_colored.png'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import LineShort from '../line.short'

function TableContracts() {
    const [t] = useTranslation(["common"])
    //const paragraphTableItem = i18n.language === 'ru' ? 'textcontent--table--item--rus' : 'textcontent--table--item'
    //const tableHeader = i18n.language === 'ru' ? 'textcontent--table--header--rus' : 'textcontent--table--header'
    const tHeader = "textcontent--tabledata--header"
    const tItem = "textcontent--tabledata--item"

    return (
        <StyledContainer>
            <div className={"stInner"}>
                <p className={ tHeader }>{ t("common:contracts01") }</p>
                {/*<p className={ tHeader }>Business Lines</p>*/}

                <LineShort color={"colorSecond"}/>

                <p className={ tItem }>{ t("common:contracts02")}</p>

                <div className={"logoSquare"}>
                    <img src={ Logo01 } alt={"logo"} style={{ maxWidth: '55px', minWidth: '35px' }}/>
                    <img src={ Logo02 } alt={"logo"} style={{ maxWidth: '90px', minWidth: '35px' }}/>
                    <img src={ Logo03 } alt={"logo"} style={{ maxWidth: '80px', minWidth: '35px' }}/>
                    <img src={ Logo04 } alt={"logo"} style={{ maxWidth: '150px', minWidth: '70px' }}/>
                    <img src={ Logo05 } alt={"logo"} style={{ maxWidth: '120px', minWidth: '70px', marginBottom: '12px'}}/>
                </div>
            </div>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
    width: auto;
    height: 100%;
  box-sizing: border-box;
  //margin: 40px 40px 40px 40px;
  //border: dotted 1px blue;
  
  .stInner {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    box-sizing: border-box;
    margin: 60px 40px 40px 40px;
    //border: dotted 1px blue;
    border-bottom: solid 1px var(--color--tabledata--border);
  }
  
  .logoSquare {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 44px;
    padding-bottom: 44px;
    
    
    
    & img {
      width: 100%;
      height: auto;
      margin-right: 20px;
    }
  }
`

export default TableContracts