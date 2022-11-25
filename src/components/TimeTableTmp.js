import styled from "styled-components"

import { useTranslation } from 'react-i18next'
import { GetJsonData } from './GetJsonData'
import { DATA_TEXTCONTENT_TABLES } from '../env'

const StyledTimeTableTmp = styled.div`
  display: flex;
  flex-direction: row;
    max-width: 1440px;
        width: 100%;
        height: auto;
  //border: solid 1px red;
  margin-bottom: 30px;
  
  .timesTables {
    display: flex;
    flex-direction: column;
      max-width: 640px;
          width: 100%;
          height: auto;
    border: solid 1px red;
  }
  
  .cellHeader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: var(--color--primary);
  }
  
  .cellList {
    
    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      
    }  
    
    .cell {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      border: solid 1px red;
      
      & div {
        display: flex;
        flex-direction: column;
       align-items: flex-start;
        max-width: 65px;
            width: 100%;
        border: solid 1px purple;
      }
    }
    
    .even {
      background: var(--color--none);
    }
    
    .odd {
      background: var(--color--list);
    }
  }
  
  .timesFirstTable {
      
  }
  
  .timesSecondTable {
    
  }
`

export default function TimeTableTmp() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimeTableTmp>
            <div className={"timesTables timesFirstTable"}>
                <div className={"cellHeader"}>
                    <p className={"textcontent--list--header"}>{ t("times:times03")}</p>
                </div>

                <div className={"cellList"}>
                    <div className={"cell"}>

                    </div>

                    <div className={"cell"}>

                    </div>

                    <div className={"cell"}>

                    </div>

                    <div className={"cell"}>

                    </div>

                    <div className={"cell"}>

                    </div>
                </div>
            </div>

            <div className={"timesTables timesSecondTable"}>
                <div className={"cellHeader"}>
                    <p className={"textcontent--list--header"}>{ t("times:times02")}</p>
                </div>

                <div className={"cellList"}>
                    <div className={"odd cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"even cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"odd cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"02"}/>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                    </div>

                    <div className={"even cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"odd cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                    </div>
                </div>
            </div>
        </StyledTimeTableTmp>
    )
}
