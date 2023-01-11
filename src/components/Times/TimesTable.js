import styled from "styled-components";
import TimesDesktop from "./times.desktop";

import TimesMobile from "./times.mobile";

import {useTranslation} from "react-i18next";

function TimesTable() {
    const [t] = useTranslation(["times"])

    return (
        <StyledTimesTable>
            <div className={"tableSection timesTableDirection timesTableDesktop"}>
                <TimesDesktop />
            </div>

            <div className={"tableSection timesTableDirection timesTableMobile"}>
                <TimesMobile />
            </div>
        </StyledTimesTable>
    )
}

const StyledTimesTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
    max-width: 1440px;
        width: 100%;
        height: auto;
  box-sizing: border-box;
  margin-bottom: 50px;
  //border: solid 1px red;
  
  .tableSection {
    display: flex;
    width: 100%;
    height: auto;
  }
  
  @media only screen and (max-width: 922px) {
    max-width: 900px;
  }
  
  .timesTableDirection { flex-direction: row; }
  .timesTableDesktop { display: block!important; }
  .timesTableMobile { display: none!important; }
}
  
  @media only screen and (max-width: 992px) {
    & {
      .timesTableDirection { flex-direction: column; }
      .timesTableDesktop { display: none!important; }
      .timesTableMobile { display: block!important; }
    }
`

export default TimesTable