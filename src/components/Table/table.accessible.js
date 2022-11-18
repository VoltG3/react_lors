import styled from 'styled-components'

import Icon01 from '../../assets/img/icons/icon_accessible_01.svg'
import Icon02 from '../../assets/img/icons/icon_accessible_02.svg'
import Icon03 from '../../assets/img/icons/icon_accessible_03.svg'
import Icon04 from '../../assets/img/icons/icon_accessible_04.svg'
import Icon05 from '../../assets/img/icons/icon_accessible_05.svg'
import Icon06 from '../../assets/img/icons/icon_accessible_06.svg'
import Icon07 from '../../assets/img/icons/icon_accessible_07.svg'
import Icon08 from '../../assets/img/icons/icon_accessible_08.svg'

import { useTranslation } from 'react-i18next'

const StyledContainer = styled.div`
  max-width: 500px;
      width: 100%;
  max-height: 660px;
      height: 100%;
  
  .accessibleTable {
   display: flex;
    flex-direction: column;
  }
  
  .accessibleSquare {
    display: flex;
      width: 100%;
      height: auto;
    flex-direction: row;
    align-items: center;
    margin: 10px 0 0 0;
  }
  
  .accessibleIcon {
      width: 40px;
      height: 40px;
    margin: 0 10px 0 0;
  }
`

export default function TableAccessible() {
    const [t, i18next] = useTranslation(["accessible"])

    return (
        <StyledContainer>
            <p style={{ marginBottom: '20px' }} className={"textcontent--small--header"}>{ i18next.t("accessible:accessible01") }</p>

            <div className={"accesibleTable"}>
                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon01 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible02") }</p>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon02 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible03") }</p>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon03 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible04") }</p>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon04 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible05") }</p>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon05 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible06") }</p>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon06 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible07") }</p>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon07 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible08") }</p>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} style={{ width: '40px', height: '25px'}} src={ Icon08 } alt={"icon"} />
                    <p className={"textcontent--small--item"}>{ i18next.t("accessible:accessible09") }</p>
                </div>
            </div>
        </StyledContainer>
    )
}
