import styled from 'styled-components'
import { GetJsonData } from '../GetJsonData'
import { DATA_TEXTCONTENT_TABLES } from '../../env'
import { useTranslation } from 'react-i18next'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
    max-width: 600px;
        width: 100%;
    max-height: 113px;
        height: 100%;
  
  .tableLine {
    display: flex;
    flex-direction: row;
    height: 25px;
  }
  
  .tableCell {
    display: flex;
    justify-content: center;
    align-items: center;
      max-width: 120px;
          width: 100%;
          height: auto;
  }
`

export default function TableHours() {
    const [t, i18next] = useTranslation(["times"])
    
    return (
        <StyledContainer>
            <div style={{ margin: '0 0 20px 0'}}>
                <p className={"textcontent--small--header"}>{ i18next.t("times:times03") }</p>
            </div>

            <div className={"tableLine"}>
                <div className={"tableCell"}>
                    <p className={"textcontent--small--item"}>{ i18next.t("times:times04") }</p>
                </div>

                <div className={"tableCell"}>
                    <p className={"textcontent--small--item"}>{ i18next.t("times:times05") }</p>
                </div>

                <div className={"tableCell"}>
                    <p className={"textcontent--small--item"}>{ i18next.t("times:times04") }</p>
                </div>

                <div className={"tableCell"}>
                    <p className={"textcontent--small--item"}>{ i18next.t("times:times07") }</p>
                </div>

                <div className={"tableCell"}>
                    <p className={"textcontent--small--item"}>{ i18next.t("times:times08") }</p>
                </div>
            </div>

            <div className={"tableLine"}>
                <div className={"tableCell"}>
                    <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"01"}/>
                </div>

                <div className={"tableCell"}>
                    <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"02"}/>
                </div>

                <div className={"tableCell"}>
                    <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"03"}/>
                </div>

                <div className={"tableCell"}>
                    <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"04"}/>
                </div>

                <div className={"tableCell"}>
                    <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"05"}/>
                </div>
            </div>

        </StyledContainer>
    )
}
