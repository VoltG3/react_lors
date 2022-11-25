import {StyledThisCell, StyledthisSection, StyledthisSection_hoursSecond} from "../TimeTable.Styles";

import { GetJsonData } from '../../GetJsonData'
import { DATA_TEXTCONTENT_TABLES } from '../../../env'


export default function TimeTablePartHoursFirst() {
    return (
        <StyledthisSection>
            <div className={"thisHoursSecond"}>
                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"01"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"02"}/>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"03"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_even"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"04"}/>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"05"}/>
                    </div>
                </StyledThisCell>

                <StyledThisCell className={"thisCell_odd"}>
                    <div className={"innerThisHours"}>
                        <GetJsonData textcontent={ DATA_TEXTCONTENT_TABLES } section={"access times"} partId={"06"}/>
                    </div>
                </StyledThisCell>
            </div>
        </StyledthisSection>
    )
}