import TimesTablePartHeaderFirst from "./parts/TimesTablePart.header.first";
import {StyledTimesTable_Section} from "./TimeTable.Styles";
import TimeTablePart_days from "./parts/TimeTablePart.days";
import TimeTablePartHoursFirst from "./parts/TimeTablePart.hoursFirst";
import TimesTablePartName from "./parts/TimesTablePart.name";

export default function TimesTableDesktopFirst() {
    return (
        <StyledTimesTable_Section>
            <TimesTablePartHeaderFirst />

            <div className={"thisSection"}>
                <TimeTablePart_days />
                <TimeTablePartHoursFirst />
                <TimesTablePartName />
            </div>
        </StyledTimesTable_Section>
    )
}
