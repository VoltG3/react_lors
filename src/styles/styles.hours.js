import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: 768px) {
    gap: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: #2d3436;

  & p {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: min(max(1.389vw, 16px), 20px);
    line-height: 1.4;
    text-transform: uppercase;
    color: #FFFFFF !important;
    opacity: 1 !important;
    margin: 0;

    @media only screen and (max-width: 768px) {
        font-weight: 400;
        line-height: 1.3;
    }
  }

  @media only screen and (max-width: 768px) {
    min-height: 40px;
  }
`

export const ColumnSet = styled.div`
  display: ${({ showContent }) => showContent === false ? 'none' : 'flex'};
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 0;
  background-color: #FFFFFF;
  overflow: hidden;
  transition: all .3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
    transform: translateY(-2px);
  }
`

export const ColumnWrapper = styled.div`
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

    & > div:nth-child(4n + 1) {
      background: #F9F9F9;
    }
    & > div:nth-child(4n + 2) {
      background: #F4F4F4;
    }
    & > div:nth-child(4n + 3) {
      background: #EFEFEF;
    }
    & > div:nth-child(4n + 4) {
      background: #EAEAEA;
    }

    .cell {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: auto;
      min-height: 40px;
      box-sizing: border-box;
      padding: 8px 15px;

      & p {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.6;
        color: #262626;
        margin: 0;

        @media only screen and (max-width: 768px) {  
            font-size: 14px;
        }
      }

      @media only screen and (min-width: 1024px) {
        padding: 12px 30px;
      }
      @media only screen and (max-width: 768px) {
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

      @media only screen and (max-width: 768px) {
        & div:nth-child(1) { width: 45px; }
        & div:nth-child(2) { width: 15px; }
        & div:nth-child(3) { width: 45px; }
      }
    }
  }
`

export const DesktopMedia = styled.div`
  display: flex !important;
  flex-direction: row;
  gap: 40px;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 922px) {
    display: none !important;
  }
`

export const MobileMedia = styled.div`
  display: none !important;

  @media only screen and (max-width: 922px) {
    display: flex !important;
    flex-direction: column;
    gap: 40px;
  }
`
