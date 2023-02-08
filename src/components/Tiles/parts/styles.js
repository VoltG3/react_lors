import styled from 'styled-components'
import { css } from 'styled-components'

const TileContainer  = css`
  display: flex;
  flex-direction: column;
    width: auto;
    height: 100%;
  box-sizing: border-box;
  
  .innerTile {
    display: flex;
    flex-direction: column;
      width: auto;
      height: 100%;
    box-sizing: border-box;
    margin: 60px 40px 40px 40px;
    border-bottom: solid 1px var(--color--tabledata--border);
    padding-bottom: 44px;
  }
`

const Hours = css`
  .timetable {
    display: flex;
    flex-direction: row;
      width: auto;
      height: auto;
  }

  .timetableSquareFirstColumn {
    display: flex;
    flex-direction: column;
    max-width: 180px;
    width: 100%;
    height: auto;

        & p { padding: 0 25px 0 25px; }
        & div:nth-child(even) { background: var(--color--list--even); }
        & div:nth-child(odd) { background: var(--color--list--odd); }
  }

  .timetableSquareSecondTable {
    display: flex;
    flex-direction: column;
    max-width: 200px;
      width: 100%;
      height: auto;
    // tile.hours.JSON.js
  }

  .cell {
    display: flex;
    flex-direction: row;
    align-items: center;
      width: auto;
      height: 40px;
  }
`

const Contracts = css`
  
  .logoSquare {
    display: flex;
    flex-direction: row;
    align-items: center;
      width: 100%;
      height: auto;
    padding-top: 44px;
    padding-bottom: 44px;

    @media only screen and (max-width: 700px) {  flex-direction: column; }
    
    .r1c1 { max-width: 40px; & img { max-width: 40px; }}
    .r1c2 { max-width: 55px; & img { max-width: 55px; }}
    .r1c3 { max-width: 55px; & img { max-width: 55px; }}
    .r2c1 { max-width: 99px; & img { max-width: 99px; }}
    .r2c2 { max-width: 81px; & img { max-width: 81px; padding-bottom: 14px; }}
    
    .logoSquareRow {
      display: flex;
      flex-direction: row;
        width: auto;
        height: auto;

         & div:nth-child(1) { margin-right: 10px; }
         & div:nth-child(2) { margin-right: 10px; }
         & div:nth-child(3) { margin-right: 10px; }
         & div:nth-child(4) { margin-right: 10px; }
    } 
    
        .logoSquareCell{
          display: flex;
          align-items: center;
            width: 100%;
            height: auto;
        }
  }
`

const Availability = css`
  
  .availabilitySquare {
    display: flex;
    flex-direction: column;
    
    & div {
      display: flex;
      flex-direction: row;
      align-items: center;
        width: auto;
        height: auto;
      margin: 12px 0 0 0;
      
      & img {
        width: 28px;
        height: 28px;
        margin: 0 15px 0 0;
      }
    }
  }
`

export const TileHours = styled.div`
    ${ TileContainer }
    ${ Hours }
`

export const TileContracts = styled.div`
    ${ TileContainer }
    ${ Contracts }
`

export const TileAvailability = styled.div`
    ${ TileContainer }
    ${ Availability }
`