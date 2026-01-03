import styled from 'styled-components'
import { css } from 'styled-components'

const TileContainer = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .innerTile {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 60px 40px 44px;
    border-bottom: solid 1px var(--color--tabledata--border);

    @media (max-width: 922px) {
      padding: 40px 30px 30px;
    }

    @media (max-width: 480px) {
      padding: 30px 20px 25px;
    }
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px 40px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding-top: 44px;
    padding-bottom: 44px;

    @media (max-width: 768px) {
      gap: 25px 30px;
      max-width: 100%;
    }

    .logoSquareRow {
      display: contents;
    }

    .logoSquareCell {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }
    }

    .r1c1 {
      width: 80px;
      @media (max-width: 768px) { width: 60px; }
    }
    .r1c2 {
      width: 100px;
      @media (max-width: 768px) { width: 80px; }
    }
    .r1c3 {
      width: 100px;
      @media (max-width: 768px) { width: 80px; }
    }
    .r2c1 {
      width: 140px;
      @media (max-width: 768px) { width: 110px; }
    }
    .r2c2 {
      width: 120px;
      @media (max-width: 768px) { width: 90px; }
    }
  }
`

const Availability = css`

  .availabilitySquare {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 30px;

    @media (max-width: 768px) {
      gap: 18px;
      padding-top: 20px;
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      width: 100%;

      @media (max-width: 768px) {
        gap: 15px;
      }

      & svg {
        flex-shrink: 0;
        width: 32px;
        height: 32px;

        @media (max-width: 768px) {
          width: 28px;
          height: 28px;
        }
      }

      & img {
        flex-shrink: 0;
        width: 32px;
        height: 32px;

        @media (max-width: 768px) {
          width: 28px;
          height: 28px;
        }
      }

      & p {
        flex: 1;
        margin: 0;
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