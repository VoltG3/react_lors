import styled from 'styled-components'
import { STDL } from '../STDCOUT.lists'
import { DATA_TEXTCONTENT_TABLES } from '../../env'

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

export default function TableTimesSmall() {
    return (
        <StyledContainer>
            <div style={{ margin: '0 0 20px 0'}}>
                <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"01"}/></p>
            </div>

            <div className={"tableLine"}>
                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"02"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"04"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"06"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"08"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"10"}/></p>
                </div>
            </div>

            <div className={"tableLine"}>
                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"03"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"05"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"07"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"09"}/></p>
                </div>

                <div className={"tableCell"}>
                    <p><STDL textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"11"}/></p>
                </div>
            </div>

        </StyledContainer>
    )
}
