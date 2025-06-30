import { css } from 'styled-components'

export const ListInnerPrices = css`
  .productItemDescribe {
    width: 100%;
  }

  .productItemPrice {
    display: flex;
    flex-direction: row;
      max-width: 180px;
          width: auto; 
          height: auto;
    margin-right: var(--list--margin);
    
    @media only screen and (max-width: 700px) { 
      max-width: 90px; 
    }
    
    & div:nth-child(1) {
      display: flex;
      justify-content: flex-end;
        max-width: 90px;
            width: 100%;
      
      @media only screen and (max-width: 700px) {
        max-width: 45px; 
      }
      
      & p {
        margin: 0 10px 0 0;
      }
    }

    & div:nth-child(2) {
      display: flex;
      justify-content: flex-start;
        max-width: 90px;
            width: 100%;
      
      @media only screen and (max-width: 700px) { 
        max-width: 45px; 
      }
      
      & p {
        margin: 0;
      }
    }
  }

  .line {
    height: auto;
    min-height: var(--list--line--height);
  }

    & div:nth-child(even) .line {
      background: var(--color--list--even);
    }
  
    & div:nth-child(odd) .line {
      background: var(--color--list--odd);
    }
`