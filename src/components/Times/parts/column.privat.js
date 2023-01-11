import styled from 'styled-components'
import {StyledThisCell } from "../times.styles";

import { JsonData } from '../../JSON/JsonData'
import { DATA_LVRU, DATA_EN } from '../../../env'
import i18n from "i18next";

function ColumnPrivat() {
    const languageDataType = i18n.language === 'en' ? DATA_EN : DATA_LVRU

    return (
        <StyledColumnPrivat>
            <div className={"thisHoursPrivat"}>
                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHoursPrivat"}>
                        <JsonData textcontent={ languageDataType } section={"privat access"} partId={"10"}/>
                        <JsonData textcontent={ languageDataType } section={"privat access"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHoursPrivat"}>
                        <JsonData textcontent={ languageDataType } section={"privat access"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHoursPrivat"}>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <JsonData textcontent={ languageDataType } section={"privat access"} partId={"04"}/>
                            <JsonData textcontent={ languageDataType } section={"privat access"} partId={"10"}/>
                        </div>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHoursPrivat"}>
                        <JsonData textcontent={ languageDataType } section={"privat access"} partId={"02"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHoursPrivat"}>
                        <JsonData textcontent={ languageDataType } section={"privat access"} partId={"03"}/>
                    </div>
                </StyledThisCell>
            </div>
        </StyledColumnPrivat>
    )
}

const StyledColumnPrivat = styled.div`
  
  .thisHoursPrivat {
    display: flex;
    flex-direction: column;
    //justify-content: center!important;
    align-items: center;
    max-width: 640px;
    min-width: 100px;
    width: 100%;
    height: auto;

    @media only screen and (max-width: 922px) {
     
      & p {
        font-size: 12px!important;
      }
    }

    .innerThisHoursPrivat {
      display: flex;
      flex-direction: row;
      justify-content: center;
      //max-width: 80px;
      //min-width: 100px;
      width: 100%;
      height: auto;
      //border: solid 1px red;
    }
  }
`

export default ColumnPrivat
