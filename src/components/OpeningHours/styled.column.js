import styled from 'styled-components'

export const StyledOpeningHoursColumn = styled.div`
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
        height: auto;
        min-height: var(--list--line--height);
        
        @media only screen and (max-width: 700px) {
            min-height: 50px;
            padding: 8px 0;
        }
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
        & div:nth-child(1) { display: flex; width: 60px; justify-content: flex-end; }
        & div:nth-child(2) { display: flex; width: 20px; justify-content: center; }
        & div:nth-child(3) { display: flex; width: 60px; justify-content: flex-start; }

        @media only screen and (max-width: 700px) {
            & div:nth-child(1) { width: 50px; }
            & div:nth-child(2) { width: 15px; }
            & div:nth-child(3) { width: 50px; }
        }
    }
  }

  .roundedBorderLeft { & div:nth-child(5) {
    border-bottom-left-radius: var(--border--radius);
  }}

  .roundedBorderRight { & div:nth-child(5) {
      border-bottom-right-radius: var(--border--radius);
  }}
`