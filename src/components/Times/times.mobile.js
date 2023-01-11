import HeaderPublic from "./parts/header.public";
import {StyledTimesSection} from "./times.styles";
import ColumnDays from "./parts/column.days";
import ColumnPublic from "./parts/column.public";
import ColumnNames from "./parts/column.names";
import HeaderPrivat from "./parts/header.privat";
import ColumnPrivat from "./parts/column.privat";

export default function TimesMobile () {
    return (
        <>
            <StyledTimesSection>
                <HeaderPublic />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ColumnDays />
                    <ColumnPublic />
                    <ColumnNames />
                </div>
            </StyledTimesSection>

            <StyledTimesSection>
                <HeaderPrivat />

                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <ColumnDays />
                    <ColumnPrivat />
                    <ColumnNames />
                </div>
            </StyledTimesSection>
        </>
    )
}

/*REMOVE THIS!*/
