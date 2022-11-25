import styled from "styled-components";
import TimesTableDesktopFirst from "./TimesTable.Desktop.first";
import TimesTableDesktopSecond from "./TimesTable.Desktop.second";
import TimesTableMobileFirst from "./TimesTable.Mobile.first";
import TimesTableMobileSecond from "./TimesTable.Mobile.second";

const StyledTimesTable = styled.div`
  display: flex;
  //flex-wrap: wrap;
  //white-space: pre-wrap;
    max-width: 1440px;
        width: 100%;
        height: auto;
  margin-bottom: 30px;
  //border: solid 1px red;
  
  .thisTable {
    display: flex;
      max-width: 1440px;
          width: 100%;
          height: auto;
    //border: solid 3px yellow;
  }
  
  .timesTableDirection { flex-direction: row; }
  .timesTableDesktop { visibility: visible; }
  .timesTableMobile { visibility: collapse; }
}
  
  @media only screen and (max-width: 600px) {
    & {
      .timesTableDirection { flex-direction: column; }
      .timesTableDesktop { visibility: collapse; }
      .timesTableMobile { visibility: visible; }
    }
`

export default function TimesTable() {
    return (
        <StyledTimesTable>
            <div
                // style={{ display: 'flex', flexDirection: 'row' }}
                className={"thisTable timesTableDirection timesTableDesktop"}
            >
                <TimesTableDesktopFirst />
                <TimesTableDesktopSecond />
            </div>

            <div
                // style={{ display: 'flex', flexDirection: 'column'  }}
                className={"thisTable timesTableDirection timesTableMobile"}
            >
                <TimesTableMobileFirst />
                <TimesTableMobileSecond />
            </div>
        </StyledTimesTable>
    )
}
