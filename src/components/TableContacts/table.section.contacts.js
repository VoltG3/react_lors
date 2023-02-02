import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import DataColumnPublicNames from './Columns/DataColumnPublicNames'
import DataColumnPublic from './Columns/DataColumnPublic'
import DataColumnPrivat from './Columns/DataColumnPrivat'
import { DataColumnDays } from './Columns/DataColumnDays'
import DataColumnPrivateNames from "./Columns/DataColumnPrivateNames";

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
                        <DataColumnPublicNames />
                    </StyledOpeningHoursColumns>
                </div>

                <div className={"openingHours"}>

                    { HeaderPrivat }

                    <StyledOpeningHoursColumns>
                        <DataColumnPrivateNames />
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
                        <DataColumnPublicNames />
                    </StyledOpeningHoursColumns>
                </div>

                <div className={"openingHours"}>

                    { HeaderPrivat }

                    <StyledOpeningHoursColumns>
                        <DataColumnDays />
                        <DataColumnPrivat />
                        <DataColumnPrivateNames />
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
  padding-top: var(--size--padding30);
  padding-bottom: var(--size--padding30);
  border-radius: var(--border--radius);
  //border: solid 1px red;
  
  .openingHours {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
      width: 100%;
      height: auto;
    box-shadow: var(--box--shadow);
    border-radius: var(--border--radius);
    
    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }
  }
  
  .openingHoursDesktop { display: flex!important; flex-direction: row; gap: var(--size--padding30);}
  .openingHoursMobile { display: none!important; }

  @media only screen and (max-width: 922px) {
    .openingHoursDesktop { display: none!important; }
    .openingHoursMobile { display: flex!important; flex-direction: column; gap: var(--size--padding30);}
  }
`

const StyledOpeningHoursHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 100%;
    height: 40px;
  border-top-left-radius: var(--border--radius);
  border-top-right-radius: var(--border--radius);
  background-color: var(--color--list--header);
`

const StyledOpeningHoursColumns = styled.div`
  display: flex;
  flex-direction: row;
    width: 100%;
    height: auto; 
  
  .column {
    display: flex;
    flex-direction: column;
        max-width: 100%;
        min-width: 33%;
          width: 100%;
          height: auto;
    //border: solid 1px red;
    
    & div:nth-child(odd) { background: var(--color--list--odd);
      & div {
        background: inherit;
      }
    }

    & div:nth-child(even) { background: var(--color--list--even);
      & div {
        background: inherit;
      }
    }
    
    .cell {
      display: flex;
      justify-content: center;
      align-items: center;
        width: 100%;
        height: 60px;
    }
    
    .cell--dobble {
      display: flex;
      flex-direction: column;
    }
    
    .cell--tripple {
      display: flex;
      flex-direction: row;
        width: 100%;
        height: auto;
      
        & div { display: flex; }
        & div:nth-child(1) { display: flex; width: 80px; justify-content: flex-end; }
        & div:nth-child(2) { display: flex; width: 30px; justify-content: center; }
        & div:nth-child(3) { display: flex; width: 80px; justify-content: flex-start; }
    }
  }

  .roundedBorderLeft { & div:nth-child(5) {
    border-bottom-left-radius: var(--border--radius);
  }}

  .roundedBorderRight { & div:nth-child(5) {
      border-bottom-right-radius: var(--border--radius);
  }}
`

export default TableSectionContacts