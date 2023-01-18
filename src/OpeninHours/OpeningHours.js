import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import ColumnDays from "./column.days";
import ColumnName from "./column.name";
import ColumnPublic from "./column.public";
import ColumnPrivat from "./column.privat";

const OpeningHours = () => {
    const [t] = useTranslation(["times"])

    const HeaderPublic = <StyledOpeningHoursHeader><p className={"textcontent--list--header"}>{ t("times:times02")}</p></StyledOpeningHoursHeader>
    const HeaderPrivat = <StyledOpeningHoursHeader><p className={"textcontent--list--header"}>{ t("times:times03")}</p></StyledOpeningHoursHeader>

    const DataColumnDays = <ColumnDays
        days={[
            `${ t("times:times04") }`,
            `${ t("times:times05") }`,
            `${ t("times:times06") }`,
            `${ t("times:times07") }`,
            `${ t("times:times08") }`
        ]}
    />

    return (
        <StyledOpeningHoursContainer>
            <div className={"openingHoursDesktop"}>
                <div className={"openingHours"}>
                    { HeaderPublic }

                    <StyledOpeningHoursColumns>
                        { DataColumnDays }
                        <ColumnPublic />
                        <ColumnName />
                    </StyledOpeningHoursColumns>
                </div>

                <div className={"openingHours"}>
                    { HeaderPrivat }

                    <StyledOpeningHoursColumns>
                        {/*<p>Column 1</p>*/}
                        <ColumnPrivat />
                        {/*<p>Column 3</p>*/}
                    </StyledOpeningHoursColumns>
                </div>
            </div>

            <div className={"openingHoursMobile"}>
                <div className={"openingHours"}>
                    { HeaderPublic }

                    <StyledOpeningHoursColumns>
                        { DataColumnDays }
                        <ColumnPublic />
                        <ColumnName />
                    </StyledOpeningHoursColumns>
                </div>

                <div className={"openingHours"}>
                    { HeaderPrivat }

                    <StyledOpeningHoursColumns>
                        { DataColumnDays }
                        <ColumnPrivat />
                        <ColumnName />
                    </StyledOpeningHoursColumns>
                </div>
            </div>
        </StyledOpeningHoursContainer>
    )
}

const StyledOpeningHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
    width: 100%;
    height: 100%;
  border: solid 1px red;
  
  .openingHours {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
      width: 100%;
      height: auto;
    border: solid 1px green;
  }
  
  .openingHoursDesktop { display: flex!important; flex-direction: row; }
  .openingHoursMobile { display: none!important; }

  @media only screen and (max-width: 922px) {
    .openingHoursDesktop { display: none!important; }
    .openingHoursMobile { display: flex!important; flex-direction: column; }
  }
`

const StyledOpeningHoursHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 100%;
    height: 40px;
  background-color: var(--color--primary);
`

const StyledOpeningHoursColumns = styled.div`
  display: flex;
  flex-direction: row;
  
  .column {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-width: 33%;
      width: 100%;
      height: auto;
    border: solid 1px blue;
    
    .cell {
      display: flex;
      justify-content: center;
      align-items: center;
        width: 100%;
        height: 40px;
      border: solid 2px red;
    }
    
    .cell--dobbel {
      display: flex;
      flex-direction: column;
      //padding-left: 10px;
      //background-color: burlywood;
    }
    
    .cell--tripple {
      
      display: flex;
      flex-direction: row;
        width: 100%;
        height: auto;
      
        & div { display: flex; }
        & div:nth-child(1) { display: flex; width: 45%; justify-content: flex-end; }
        & div:nth-child(2) { display: flex; width: 30px; justify-content: center!important;  border: solid 1px red; }
        & div:nth-child(3) { display: flex; width: 45%;}
    }
    
    & div:nth-child(odd).cell {
      background: var(--color--list);
    }
    
    & div:nth-child(even).cell {
      background: var(--color--none);
    }
  }
`

export default OpeningHours