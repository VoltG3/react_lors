import styled from 'styled-components'

import Icon01 from '../../assets/icons/icon_accessible_01.svg'
import Icon02 from '../../assets/icons/icon_accessible_02.svg'
import Icon03 from '../../assets/icons/icon_accessible_03.svg'
import Icon04 from '../../assets/icons/icon_accessible_04.svg'
import Icon05 from '../../assets/icons/icon_accessible_05.svg'
import Icon06 from '../../assets/icons/icon_accessible_06.svg'
import Icon07 from '../../assets/icons/icon_accessible_07.svg'
import Icon08 from '../../assets/icons/icon_accessible_08.svg'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import LineShort from '../line.short'

function TableAccessible() {
    const [t] = useTranslation(["accessible"])
    // const paragraphTableItem = i18n.language === 'ru' ? 'textcontent--table--item--rus' : 'textcontent--table--item'
    // const tableHeader = i18n.language === 'ru' ? 'textcontent--table--header--rus' : 'textcontent--table--header'

    const tableHeader = "textcontent--tabledata--header"
    const paragraphTableItem = "textcontent--tabledata--item--small"

    return (
        <StyledAccessibleContainer>
            <div className={"stInner"}>
                <p className={ tableHeader }>{ t("accessible:accessible01") }</p>

                <LineShort color={"colorThird"}/>

                <div className={"accesibleTable"}>
                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} src={ Icon01 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible02") }</p>
                    </div>

                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} src={ Icon02 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible03") }</p>
                    </div>

                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} src={ Icon03 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible04") }</p>
                    </div>

                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} src={ Icon04 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible05") }</p>
                    </div>

                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} src={ Icon05 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible06") }</p>
                    </div>

                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} src={ Icon06 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible07") }</p>
                    </div>

                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} src={ Icon07 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible08") }</p>
                    </div>

                    <div className={"accessibleSquare"}>
                        <img className={"accessibleIcon"} style={{ width: '28px', height: '25px'}} src={ Icon08 } alt={"icon"} />
                        <p className={ paragraphTableItem }>{ t("accessible:accessible09") }</p>
                    </div>
                </div>
            </div>


        </StyledAccessibleContainer>
    )
}

const StyledAccessibleContainer = styled.div`

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
    padding-bottom: 44px;
  }
  
  .accessibleTable {
    display: flex;
    flex-direction: column;
  border: solid 1px red;5
  }
  
  .accessibleSquare {
    display: flex;
      width: auto;
      height: auto;
    flex-direction: row;
    align-items: center;
    margin: 12px 0 0 0;
  }
  
  .accessibleIcon {
      width: 28px;
      height: 28px;
    margin: 0 15px 0 0;
  }
`

export default TableAccessible