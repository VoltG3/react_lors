import styled from 'styled-components'

import { JsonData } from '../../JSON/data/JsonData'
import { DATA_OTHER } from '../../../env'
import {StyledThisCell} from "../times.styles";


function ColumnNames() {
    return (
        <StyledColumnNames>
            <div className={"thisName"}>
                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisName"}>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"02"}/>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisName"}>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisName"}>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"01"}/>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"02"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisName"}>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"01"}/>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"02"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisName"}>
                        <JsonData textcontent={ DATA_OTHER } section={"fName_lName"} partId={"02"}/>
                    </div>
                </StyledThisCell>
            </div>
        </StyledColumnNames>
    )
}

const StyledColumnNames = styled.div`
  
  .thisName {
    display: flex;
    flex-direction: column;
    max-width: 270px;
    min-width: 100px;
    width: 100%;
    height: auto;
    //border: solid 1px red;

    @media only screen and (max-width: 922px) {
    
      & p {
        font-size: 12px!important;
      }
    }
    
    .innerThisName {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      //max-width: 80px;
      //min-width: 130px;
      width: 100%;
      height: auto;
      // border: solid 1px green;
    }
  }
`

export default ColumnNames