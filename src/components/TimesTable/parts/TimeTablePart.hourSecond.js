import {StyledThisCell, StyledthisSection, StyledthisSection_hoursSecond} from "../TimeTable.Styles";

import { GetJsonData } from '../../GetJsonData'
import { DATA_TEXTCONTENT_TABLES } from '../../../env'


export default function TimeTablePartHoursSecond() {
    return (
        <StyledthisSection>
            <div className={"thisHoursSecond"}>
                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"02"}/>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"02"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"special times"} partId={"03"}/>
                    </div>
                </StyledThisCell>
            </div>
        </StyledthisSection>
    )
}
