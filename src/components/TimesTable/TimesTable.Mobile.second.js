import TimesTablePartHeaderSecond from "./parts/TimesTablePart.header.second";
import {StyledTimesTable_Section} from "./TimeTable.Styles";
import TimeTablePart_days from "./parts/TimeTablePart.days";
import TimeTablePartHoursSecond from "./parts/TimeTablePart.hourSecond";
import TimesTablePartName from "./parts/TimesTablePart.name";

export default function TimesTableMobileSecond () {
    return (
        <StyledTimesTable_Section>
            <TimesTablePartHeaderSecond />

            <div className={"thisSection"}>
                <TimeTablePart_days />
                <TimeTablePartHoursSecond />
                <TimesTablePartName />
            </div>
        </StyledTimesTable_Section>
    )
}
