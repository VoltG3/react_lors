import styled from 'styled-components'

export const StyledOpeningHoursColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;

  .column {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-width: 33%;
    width: 100%;
    height: auto;

    & > div:nth-child(odd) {
      background: var(--color--list--odd);
    }

    & > div:nth-child(even) {
      background: var(--color--list--even);
    }

    .cell {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      min-height: var(--list--line--height);
      box-sizing: border-box;
      padding: 8px 15px;

      @media only screen and (max-width: 700px) {
        min-height: 50px;
        padding: 6px 10px;
      }
    }

    .cell--dobble {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    .cell--tripple {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: auto;
      
      & div {
        display: flex;
        align-items: center;
      }
      & div:nth-child(1) {
        justify-content: flex-end;
        width: 50px;
      }
      & div:nth-child(2) {
        justify-content: center;
        width: 20px;
      }
      & div:nth-child(3) {
        justify-content: flex-start;
        width: 50px;
      }

      @media only screen and (max-width: 700px) {
        & div:nth-child(1) { width: 45px; }
        & div:nth-child(2) { width: 15px; }
        & div:nth-child(3) { width: 45px; }
      }
    }
  }
`