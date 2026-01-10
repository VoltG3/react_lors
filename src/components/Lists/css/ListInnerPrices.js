import { css } from 'styled-components'

export const ListInnerPrices = css`
  .productItemDescribe {
    width: 100%;
  }

  .productItemPrice {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 180px;
    width: 100%;
    min-height: inherit;
    height: 100%;
    margin-right: 0;
    border-left: 1px solid rgba(0,0,0,0.08);
    background-color: rgba(0,0,0,0.02);
    padding-left: 20px;
    padding-right: var(--list--margin);
    margin: -8px 0; /* Negatīvs margins, lai kompensētu tēva paddingu un aizpildītu pilnu augstumu */

    @media only screen and (min-width: 1024px) {
      margin: -12px 0;
    }
    
    @media only screen and (max-width: 700px) { 
      max-width: 100px;
      padding-left: 10px;
      padding-right: var(--list--margin);
      margin: -6px 0;
    }
    
    & div:nth-child(1) {
      display: flex;
      justify-content: flex-end;
      width: 50px;
      
      @media only screen and (max-width: 700px) {
        width: 45px; 
      }
      
      & p {
        margin: 0 5px 0 0 !important;
      }
    }

    & div:nth-child(2) {
      display: flex;
      justify-content: flex-start;
      width: 20px;
      
      @media only screen and (max-width: 700px) { 
        width: 15px; 
      }
      
      & p {
        margin: 0 !important;
      }
    }
  }

  .productItemDescribe {
    flex: 1;
    
    & p {
        margin-right: 0 !important;
    }
  }
`