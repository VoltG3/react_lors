import styled, { css } from 'styled-components'

export const themes = {
    covid: {
        justifyContent: 'flex-start',
        minWidth: '250px',
        paddingVertical: '15px',
        paragraphMarginLeft: '-40%',
        color: '#FFFFFF',
        arrowColor: '#030303',
        borderColor: '#EF5DA8',
        backgroundColor: '#EF5DA8',
        backgroundHover: '#F482BC'
    },
    mobile: {
        justifyContent: 'flex-start',
        minWidth: '280px',
        paddingVertical: '8px',
        paragraphMarginLeft: '-45%',
        color: '#FFFFFF',
        arrowColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        backgroundColor: '#112734',
        backgroundHover: '#F482BC'
    },
    sliderDesktop: {
        justifyContent: 'flex-start',
        minWidth: '390px',
        paddingVertical: '10px',
        paragraphMarginLeft: '-45%',
        color: '#FFFFFF',
        arrowColor: '#030303',
        borderColor: '#FFB81C',
        backgroundColor: '#FFB81C',
        backgroundHover: '#FFC94D'
    },
    sliderMobile: {
        justifyContent: 'flex-start',
        minWidth: '350px',
        paddingVertical: '8px',
        paragraphMarginLeft: '-40%',
        color: '#FFFFFF',
        arrowColor: '#030303',
        borderColor: '#FFFFFF',
        backgroundColor: '#EF5DA8',
        backgroundHover: '#F482BC'
    },
    appointment: {
        justifyContent: 'flex-end',
        minWidth: '190px',
        paddingVertical: '5px',
        paragraphMarginLeft: '-25%',
        color: '#FFFFFF',
        arrowColor: '#030303',
        borderColor: '#FFB81C',
        backgroundColor: '#FFB81C',
        backgroundHover: '#FFC94D'
    },
    contacts: {
        justifyContent: 'flex-start',
        minWidth: '218px',
        paddingVertical: '8px',
        paragraphMarginLeft: '-35%',
        color: '#FFFFFF',
        arrowColor: '#030303',
        borderColor: '#FFB81C',
        backgroundColor: '#FFB81C',
        backgroundHover: '#FFC94D'
    },
    info: {
        justifyContent: 'flex-start',
        minWidth: '150px',
        paddingVertical: '2px',
        paragraphMarginLeft: '-40%',
        color: '#FFFFFF',
        arrowColor: '#030303',
        borderColor: '#EF5DA8',
        backgroundColor: '#EF5DA8',
        backgroundHover: '#F482BC'
    },
    default: {
        justifyContent: 'flex-start',
        minWidth: '100px',
        paddingVertical: '10px',
        paragraphMarginLeft: '0',
        color: 'black',
        arrowColor: 'white',
        borderColor: 'black',
        backgroundColor: 'black',
        backgroundHover: 'none'
    }
}

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: ${({ $theme }) => $theme.justifyContent};
  width: 100%;
  height: auto;
  overflow: hidden;

  #button {
    display: flex;
    width: ${({ $theme }) => $theme.minWidth};
    height: auto;
    margin-right: 30px;
    @media only screen and (max-width: 700px) {
      min-width: 190px;
    }
  }

  .button {
    position: relative;
    z-index: 1;
    display: inline-block;
    min-width: inherit;
    width: inherit;
    box-sizing: border-box;
    padding-top: ${({ $theme }) => $theme.paddingVertical};
    padding-bottom: ${({ $theme }) => $theme.paddingVertical};
    border-radius: 0;
    border: 1px solid ${({ $theme }) => $theme.borderColor};
    background: ${({ $theme }) => $theme.backgroundColor};
    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    & p {
      display: inline-block;
      margin-left: ${({ $theme }) => $theme.paragraphMarginLeft};
      color: ${({ $theme }) => $theme.color}!important;
      opacity: 1 !important;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 1.5;
      letter-spacing: 0.5px;
      margin-top: 0;
      margin-bottom: 0;
    }

    &:hover {
      background-color: ${({ $theme }) => $theme.backgroundHover};
      border-color: ${({ $theme }) => $theme.backgroundHover};
      padding-left: 10px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
      transform: translateY(-2px);
    }

    &:before {
      content: "";
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-left: 5px solid ${({ $theme }) => $theme.arrowColor};
      border-bottom: 5px solid transparent;
      border-right: 5px solid transparent;
      right: 4px;
      top: 50%;
      margin-top: -5px;
    }

    &:after {
      content: "";
      position: absolute;
      display: block;
      border: 1px solid ${({ $theme }) => $theme.borderColor};
      border-left: 0;
      border-bottom: 0;
      top: -1px;
      right: -1px;
      bottom: 0;
      width: 40px;
      background: ${({ $theme }) => $theme.backgroundColor};
      transform-origin: bottom left;
      transform: skew(-25deg);
      z-index: -1;
      transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover:after {
      background: ${({ $theme }) => $theme.backgroundHover};
      border-color: ${({ $theme }) => $theme.backgroundHover};
    }
  }
`
