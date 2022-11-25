import styled from 'styled-components'

import { useTranslation } from 'react-i18next'
import { GetJsonData } from './GetJsonData'
import { DATA_TEXTCONTENT_TABLES } from '../env'

const StyledTimetable = styled.div`
    display: flex;
    flex-direction: row;
  white-space: pre-wrap;
      max-width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
          width: 100%;
          height: 100%;
  margin-bottom: 30px;
  
  .cell {
    min-width: 640px;
    width: 100%;
    height: 40px;
   // border: solid 1px red;
  }
  
  .rows {
    display: flex;
    flex-direction: row;
  }
 
  .thisHeader {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
  
  .thisListStyle {
    display: flex;
 /*   flex-direction: column;*/
    /*align-items: center;*/
    width: 40px;
   // border: solid 3px red;
  }
  
  .F {
    flex-direction: row;
    align-items: center;
    width: 213px;
   
   & p {
     margin-left: 30px;
   } 
  }
  
  .S {
    flex-direction: column;
    justify-content: center;
    width: 213px;

    & p {
      margin-left: 70px;
    }
  }
  
  .T {
    flex-direction: column;
    justify-content: center;
    width: 213px;
  }
  
  .fourth {
    display: flex;
    align-items: center;
    & p {
      margin-left: 280px;
    }
  }
`

export default function TimeTable() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimetable>
            <div className={"firstTable"}>

                <div className={"cell"} style={{background: 'var(--color--primary)'}}>
                    <div className={"thisHeader"}>
                        <p className={"textcontent--list--header"}>{ t("times:times02")}</p>
                    </div>
                </div>

                <div className={"cells "}>
                    <div className={"cell rows"}>
                        <div className={"F thisListStyle"}>
                            <p className={"textcontent--small--item"}>{ t("times:times04") }</p>
                        </div>

                        <div className={"S thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                        </div>

                        <div className={"T thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F thisListStyle"}>
                            <p className={"textcontent--small--item"}>{ t("times:times05") }</p>
                        </div>

                        <div className={"S thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                        </div>

                        <div className={"T thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F thisListStyle"}>
                            <p className={"textcontent--small--item"}>{ t("times:times06") }</p>
                        </div>

                        <div className={"S thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"02"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"03"}/>
                        </div>

                        <div className={"T thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"02"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F thisListStyle"}>
                            <p className={"textcontent--small--item"}>{ t("times:times07") }</p>
                        </div>

                        <div className={"S thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"03"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"04"}/>
                        </div>

                        <div className={"T thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"02"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F thisListStyle"}>
                            <p className={"textcontent--small--item"}>{ t("times:times08") }</p>
                        </div>

                        <div className={"S thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"06"}/>
                        </div>

                        <div className={"T thisListStyle"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        </div>
                    </div>
                </div>

            </div>

            <div className={"secondTable"}>

               {/* //
                // Next
                //*/}

                <div className={"cell"} style={{background: 'var(--color--primary)'}}>
                    <div className={"thisHeader"}>
                        <p className={"textcontent--list--header"}>{ t("times:times03")}</p>
                    </div>
                </div>

                <div className={"cells"}>
                    <div className={"fourth cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"fourth cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"fourth cell"}>
                        <div>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"02"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                        </div>
                    </div>

                    <div className={"fourth cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"fourth cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                    </div>

                </div>

            </div>
        </StyledTimetable>
    )
}
