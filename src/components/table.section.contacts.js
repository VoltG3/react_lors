import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import DataColumnNames from './TableContacts/Columns/DataColumnNames'
import DataColumnPublic from './TableContacts/Columns/DataColumnPublic'
import DataColumnPrivat from './TableContacts/Columns/DataColumnPrivat'
import { DataColumnDays } from './TableContacts/Columns/DataColumnDays'

const TableSectionContacts = () => {
    const [t] = useTranslation(["times"])

    const HeaderPublic = <StyledOpeningHoursHeader><p className={"textcontent--list--header"}>{ t("times:times01")}</p></StyledOpeningHoursHeader>
    const HeaderPrivat = <StyledOpeningHoursHeader><p className={"textcontent--list--header"}>{ t("times:times02")}</p></StyledOpeningHoursHeader>

    return (
        <StyledOpeningHoursContainer>
            <div className={"openingHoursDesktop"}>
                <div className={"openingHours"}>
                    { HeaderPublic }

                    <StyledOpeningHoursColumns>
                        <DataColumnDays />
                        <DataColumnPublic />
                        <DataColumnNames />
                    </StyledOpeningHoursColumns>
                </div>

                <div className={"openingHours"}>
                    { HeaderPrivat }

                    <StyledOpeningHoursColumns>
                        <DataColumnPrivat />
                    </StyledOpeningHoursColumns>
                </div>
            </div>

            <div className={"openingHoursMobile"}>
                <div className={"openingHours"}>
                    { HeaderPublic }

                    <StyledOpeningHoursColumns>
                        <DataColumnDays />
                        <DataColumnPublic />
                        <DataColumnNames />
                    </StyledOpeningHoursColumns>
                </div>

                <div className={"openingHours"}>
                    { HeaderPrivat }

                    <StyledOpeningHoursColumns>
                        <DataColumnDays />
                        <DataColumnPrivat />
                        <DataColumnNames />
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
      
        & div { display: flex; border: solid 1px red; }
        & div:nth-child(1) { display: flex; width: 70px; justify-content: flex-end; }
        & div:nth-child(2) { display: flex; width: 30px; justify-content: center!important;  border: solid 1px red; }
        & div:nth-child(3) { display: flex; width: 70px; justify-content: flex-end; }
    }
    
    & div:nth-child(odd).cell {
      background: var(--color--list);
    }
    
    & div:nth-child(even).cell {
      background: var(--color--none);
    }
  }
`

export default TableSectionContacts