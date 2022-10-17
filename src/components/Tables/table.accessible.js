import styled from 'styled-components'

import { STDS } from '../STDCOUT.sections'
import { DATA_TEXTCONTENT_TABLES } from '../../env'

import Icon01 from '../../assets/img/icons/icon_accessible_01.svg'
import Icon02 from '../../assets/img/icons/icon_accessible_02.svg'
import Icon03 from '../../assets/img/icons/icon_accessible_03.svg'
import Icon04 from '../../assets/img/icons/icon_accessible_04.svg'
import Icon05 from '../../assets/img/icons/icon_accessible_05.svg'
import Icon06 from '../../assets/img/icons/icon_accessible_06.svg'
import Icon07 from '../../assets/img/icons/icon_accessible_07.svg'
import Icon08 from '../../assets/img/icons/icon_accessible_08.svg'

const StyledContainer = styled.div`
  max-width: 689px;
      width: 100%;
  max-height: 660px;
      height: 100%;
  
  .accessibleTable {
   display: flex;
    flex-direction: column;
  }
  
  .accessibleSquare {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0 0 0;
  }
  
  .accessibleIcon {
      width: 40px;
      height: 40px;
    margin: 0 10px 0 0;
  }
`

export default function TableAccessible() {
    return (
        <StyledContainer>
            <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"01"}/>

            <div className={"accesibleTable"}>
                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon01 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"02"}/>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon02 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"03"}/>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon03 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"04"}/>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon04 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"05"}/>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon05 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"06"}/>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon06 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"07"}/>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} src={ Icon07 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"08"}/>
                </div>

                <div className={"accessibleSquare"}>
                    <img className={"accessibleIcon"} style={{ width: '40px', height: '25px'}} src={ Icon08 } alt={"icon"} />
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"accessible"} partId={"09"}/>
                </div>
            </div>
        </StyledContainer>
    )
}
