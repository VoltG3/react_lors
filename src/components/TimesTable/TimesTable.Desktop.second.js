import TimesTablePartHeaderFirst from "./parts/TimesTablePart.header.first";
import TimesTablePartHeaderSecond from "./parts/TimesTablePart.header.second";
import {StyledTimesTable_Section} from "./TimeTable.Styles";
import TimeTablePartHoursSecond from "./parts/TimeTablePart.hourSecond";

export default function TimesTableDesktopSecond () {
    return (
        <StyledTimesTable_Section>
            <TimesTablePartHeaderSecond />
            <TimeTablePartHoursSecond />
        </StyledTimesTable_Section>
    )
}