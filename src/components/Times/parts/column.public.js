import styled from 'styled-components'
import { StyledThisCell }from "../times.styles";

import { JsonData } from '../../JSON/JsonData'
import { DATA_LVRU, DATA_EN } from '../../../env'
import i18n from "i18next";

function ColumnPublic() {
    const languageDataType = i18n.language === 'en' ? DATA_EN : DATA_LVRU

    return (
        <StyledColumnPublic>
            <div className={"thisHoursSecondPublic"}>
                <StyledThisCell className={"thisCell_odd"}>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <JsonData textcontent={ languageDataType  } section={"public access"} partId={"10"}/>
                        <JsonData textcontent={ languageDataType  } section={"public access"} partId={"20"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHoursPublic"}>
                        <JsonData textcontent={ languageDataType  } section={"public access"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHoursPublic"}>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <JsonData textcontent={ languageDataType  } section={"public access"} partId={"05"}/>
                            <JsonData textcontent={ languageDataType  } section={"public access"} partId={"06"}/>
                        </div>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHoursPublic"}>
                        <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <JsonData textcontent={ languageDataType  } section={"public access"} partId={"04"}/>
                            <JsonData textcontent={ languageDataType  } section={"public access"} partId={"05"}/>
                        </div>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHoursPublic"}>
                        <JsonData textcontent={ languageDataType  } section={"public access"} partId={"06"}/>
                    </div>
                </StyledThisCell>
            </div>
        </StyledColumnPublic>
    )
}

const StyledColumnPublic = styled.div`
  
  .thisHoursSecondPublic {
    display: flex;
    flex-direction: column;
    //justify-content: center!important;
    align-items: center;
    max-width: 270px;
    min-width: 270px;
    width: 100%;
    height: auto;

    .innerThisHoursPublic {
      display: flex;
      flex-direction: row;
      justify-content: center;
      //max-width: 80px;
      min-width: 100px;
      width: 100%;
      height: auto;
      //border: solid 1px red;
    }
  }
`

export default ColumnPublic