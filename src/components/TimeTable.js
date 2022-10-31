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
  
  .cell {
    min-width: 640px;
    width: 100%;
    height: 40px;
    border: solid 1px red;
  }
  
  .rows {
    display: flex;
    flex-direction: row;
  }
  
  .F {
    width: 213px;
  }
  
  .S {
    width: 213px;
  }
  
  .T {
    width: 213px;
  }
`

export default function TimeTable() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimetable>
            <div className={"firstTable"}>

                <div className={"cell"} style={{background: 'var(--color--primary)'}}>
                    <p className={"textcontent--list--header"}>{ t("times:times02")}</p>
                </div>

                <div className={"cells "}>
                    <div className={"cell rows"}>
                        <div className={"F"}>
                            <p className={"textcontent--small--item"}>{ t("times:times04") }</p>
                        </div>

                        <div className={"S"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                        </div>

                        <div className={"T"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F"}>
                            <p className={"textcontent--small--item"}>{ t("times:times05") }</p>
                        </div>

                        <div className={"S"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                        </div>

                        <div className={"T"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F"}>
                            <p className={"textcontent--small--item"}>{ t("times:times06") }</p>
                        </div>

                        <div className={"S"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"02"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"03"}/>
                        </div>

                        <div className={"T"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"02"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F"}>
                            <p className={"textcontent--small--item"}>{ t("times:times07") }</p>
                        </div>

                        <div className={"S"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"03"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"04"}/>
                        </div>

                        <div className={"T"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"02"}/>
                        </div>
                    </div>

                    <div className={"cell rows"}>
                        <div className={"F"}>
                            <p className={"textcontent--small--item"}>{ t("times:times08") }</p>
                        </div>

                        <div className={"S"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"06"}/>
                        </div>

                        <div className={"T"}>
                            <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        </div>
                    </div>
                </div>

            </div>

            <div className={"secondTable"}>

                <div className={"cell"} style={{background: 'var(--color--primary)'}}>
                    <p className={"textcontent--list--header"}>{ t("times:times03")}</p>
                </div>

                <div className={"cells"}>
                    <div className={"cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"02"}/>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                    </div>

                    <div className={"cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>

                    <div className={"cell"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                    </div>

                </div>

            </div>
        </StyledTimetable>
    )
}
