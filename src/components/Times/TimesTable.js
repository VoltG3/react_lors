import styled from "styled-components";
import TimesDesktop from "./times.desktop";

import TimesMobile from "./times.mobile";

import {useTranslation} from "react-i18next";

function TimesTable() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimesTable>
            <div className={"thisTable timesTableDirection timesTableDesktop"}>
                <TimesDesktop />
            </div>

            <div className={"thisTable timesTableDirection timesTableMobile"}>
                <TimesMobile />
            </div>
        </StyledTimesTable>
    )
}

const StyledTimesTable = styled.div`
  display: flex;
  justify-content: space-between;
    max-width: 1440px;
        width: 100%;
        height: auto;
  box-sizing: border-box;
  margin-bottom: 50px;
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

export default TimesTable