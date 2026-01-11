import styled, { css } from 'styled-components'

const ListContainerBase = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  border-radius: 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  &:hover {
    transition: box-shadow 0.3s linear;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
  }

  & > div {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: 40px;
    padding: 0;
    box-sizing: border-box;
  }

  & > div:nth-child(even) {
    background: #F9F9F9;
  }

  & > div:nth-child(odd) {
    background: #FFFFFF;
  }

  & > div:nth-last-child(-n + 1) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & p {
    margin: 0 30px;

    @media only screen and (min-width: 1024px) {
      margin: 0 45px;
    }
    @media only screen and (max-width: 700px) {
      margin: 0 20px;
    }
  }
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  background: #2d3436 !important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  & p {
    margin-top: 15px !important;
    margin-bottom: 15px !important;
  }

  white-space: pre-wrap;
`

export const StyledListContainer = styled.div`
  ${ListContainerBase}

  ${(props) =>
    props.variant === 'information' &&
    css`
      margin-top: 30px;
    `}

  ${(props) =>
    (props.variant === 'information' || props.variant === 'services') &&
    css`
      & p {
        padding: 8px 0;
        @media only screen and (min-width: 1024px) {
          padding: 12px 0;
        }
        @media only screen and (max-width: 700px) {
          padding: 6px 0;
        }
      }
    `}

  ${(props) =>
    props.variant === 'prices' &&
    css`
      .productItemDescribe {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
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
        border-left: 1px solid rgba(0, 0, 0, 0.08);
        background-color: rgba(0, 0, 0, 0.02);
        padding-left: 20px;
        padding-right: 30px;
        @media only screen and (max-width: 700px) {
          max-width: 100px;
          padding-left: 10px;
          padding-right: 20px;
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
    `}
`
