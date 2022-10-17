import styled from 'styled-components'
import { STDS } from '../STDCOUT.sections'
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
                <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"01"}/>
            </div>

            <div className={"tableLine"}>
                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"02"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"04"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"06"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"08"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"10"}/>
                </div>
            </div>

            <div className={"tableLine"}>
                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"03"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"05"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"07"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"09"}/>
                </div>

                <div className={"tableCell"}>
                    <STDS textcontent={ DATA_TEXTCONTENT_TABLES } section={"times small table"} partId={"11"}/>
                </div>
            </div>

        </StyledContainer>
    )
}
