import { css } from 'styled-components'

export const ListInnerPrices = css`
  .productItemDescribe {
    flex: 1;
    display: flex;
    align-items: center;

    & p {
      padding: 8px 0;
      margin-right: 0 !important;

      @media only screen and (min-width: 1024px) {
        padding: 12px 0;
      }

      @media only screen and (max-width: 700px) {
        padding: 6px 0;
      }
    }
  }

  .productItemPrice {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 180px;
    width: 100%;
    height: auto;
    border-left: 1px solid rgba(0,0,0,0.08);
    background-color: rgba(0,0,0,0.02);
    padding-left: 20px;
    padding-right: var(--list--margin);

    @media only screen and (max-width: 700px) {
      max-width: 100px;
      padding-left: 10px;
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
`