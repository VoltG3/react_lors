import { GetJsonData } from '../../GetJsonData'
import { DATA_TEXTCONTENT_TABLES } from '../../../env'
import {StyledThisCell, StyledthisSection} from "../TimeTable.Styles";


export default function TimesTablePartName() {
    return (
        <StyledthisSection>
            <div className={"thisName"}>
                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisName"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisName"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisName"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"02"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisName"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"01"}/>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"02"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisName"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"fName_lName"} partId={"02"}/>
                    </div>
                </StyledThisCell>
            </div>
        </StyledthisSection>
    )
}