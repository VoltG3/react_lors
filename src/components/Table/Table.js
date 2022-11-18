import styled from 'styled-components'

import TableAccessible from './table.accessible'
import TableContracts from './table.contracts'
import TableHours from './table.hours'
import TableAppointment from './table.appointment'

const StyledTable = styled.div`
  display: flex;
  flex-direction: row;
//align-items: center;
    width: 100%;
    height: auto;
  margin-bottom: var(--margin--img--vertical);

  .firstTile {
    display: flex;
    flex-direction: column;
      max-width: 640px;
          width: 100%;
          height: auto;
    /*border: solid 1px red;*/
  }
  
  .secondTile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
      max-width: 640px;
          width: 100%;
          height: auto;
    /*border: solid 1px red;*/
  }
  
  @media only screen and (max-width: 1440px) {
    flex-direction: column;
    align-items: center;
    
    .secondTile {
      align-items: flex-start;
      margin-top: 15px;
    }
  }
`

export default function Table() {
    return (
        <StyledTable className={"box"}>
            <div className={"firstTile"}>
                <TableHours />
                <TableAppointment />
                <TableContracts />
            </div>

            <div className={"secondTile"}>
                <TableAccessible />
            </div>
        </StyledTable>
    )
}
