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

  & > div:nth-child(4n + 2) {
    background: #FFFFFF;
  }

  & > div:nth-child(4n + 3) {
    background: #F9F9F9;
  }

  & > div:nth-child(4n + 4) {
    background: #F4F4F4;
  }

  & > div:nth-child(4n + 5) {
    background: #EFEFEF;
  }

  & > div:nth-last-child(-n + 1) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  & p {
    margin: 0 30px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.6;
    color: #262626;

    @media only screen and (min-width: 1024px) {
      margin: 0 45px;
    }
    @media only screen and (max-width: 768px) {
      margin: 0 20px;
      font-size: 14px;
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
    padding: 0 !important;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 15px !important;
    margin-bottom: 15px !important;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: min(max(1.389vw, 16px), 20px);
    line-height: 1.4;
    text-transform: uppercase;
    color: #FFFFFF !important;
    opacity: 1 !important;

    @media only screen and (min-width: 1024px) {
      margin-left: 45px;
      margin-right: 45px;
    }

    @media only screen and (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
        font-weight: 400;
        line-height: 1.3;
        font-size: 16px;
    }
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
        @media only screen and (max-width: 768px) {
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
          margin-left: 30px;
          margin-right: 15px !important;
          @media only screen and (min-width: 1024px) {
            padding: 12px 0;
            margin-left: 45px;
            margin-right: 20px !important;
          }
          @media only screen and (max-width: 768px) {
            padding: 6px 0;
            margin-left: 20px;
            margin-right: 10px !important;
          }
        }
      }
      .productItemPrice {
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 130px;
        width: 100%;
        height: auto;
        padding-left: 10px;
        padding-right: 15px;
        @media only screen and (min-width: 1024px) {
          padding-right: 20px;
        }
        @media only screen and (max-width: 768px) {
          max-width: 90px;
          padding-left: 5px;
          padding-right: 10px;
        }
        & div:nth-child(1) {
          display: flex;
          justify-content: flex-end;
          width: 50px;
          @media only screen and (max-width: 768px) {
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
          @media only screen and (max-width: 768px) {
            width: 15px;
          }
          & p {
            margin: 0 !important;
          }
        }
      }

      & > div:nth-child(4n + 2) .productItemPrice {
        background-color: #F9F9F9;
      }
      & > div:nth-child(4n + 3) .productItemPrice {
        background-color: #FFFFFF;
      }
      & > div:nth-child(4n + 4) .productItemPrice {
        background-color: #EFEFEF;
      }
      & > div:nth-child(4n + 5) .productItemPrice {
        background-color: #F4F4F4;
      }
    `}
`
