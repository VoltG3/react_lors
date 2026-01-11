import styled, { css } from 'styled-components'

export const StyledTiles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  box-sizing: border-box;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }

  .tableContentContainer {
    max-width: calc(1440px / 3);
    width: 100%;
    height: auto;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    background-color: #FFFFFF;
    border-radius: 0;

    @media only screen and (max-width: 992px) {
      max-width: 1440px;
    }
    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
    }
  }
`

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
    padding: 60px 40px;

    .tile-header {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        font-weight: 500;
        line-height: 1.4;
        text-transform: uppercase;
        color: #373A36;
        margin: 0;

        @media only screen and (max-width: 700px) {
            font-size: 18px;
        }
    }

    .tile-paragraph {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        font-weight: 300;
        line-height: 1.6;
        color: #262626;
        margin: 0;

        @media only screen and (max-width: 700px) {  
            font-size: 14px;
        }
    }

    @media (max-width: 922px) {
      padding: 40px 30px;
    }
    @media (max-width: 480px) {
      padding: 30px 20px;
    }
  }
`

export const TileHours = styled.div`
  ${TileContainer}
  
  .timetable {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`

export const TileContracts = styled.div`
  ${TileContainer}
  
  .logoSquare {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px 40px;
    width: 100%;
    margin: 0 auto;
    padding-top: 44px;
    padding-bottom: 44px;
    @media (max-width: 768px) {
      gap: 20px 30px;
    }
    & > img {
      filter: grayscale(1);
      opacity: 0.7;
      transition: all 0.3s ease;
      &:hover {
        filter: grayscale(0);
        opacity: 1;
        transform: scale(1.05);
      }
    }
  }
`

export const TileAvailability = styled.div`
  ${TileContainer}
  
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
      & svg, & img {
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

export const StyledHoursList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  & p {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.6;
    color: #262626;
    margin: 0;

    @media only screen and (max-width: 700px) {  
        font-size: 14px;
    }
  }
  
  .row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    align-items: center;
  }

  .dayCell {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 25px;
  }

  .hoursCell {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .hoursWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    & div:nth-child(1) {
      display: flex;
      justify-content: flex-end;
      width: 50px;
    }
    
    & div:nth-child(2) {
      display: flex;
      justify-content: center;
      width: 20px;
    }

    & div:nth-child(3) {
      display: flex;
      justify-content: flex-start;
      width: 50px;
    }
  }
  
  & .row:nth-child(even) {
    background: #F9F9F9;
  }

  & .row:nth-child(odd) {
    background: #FFFFFF;
  }

  @media only screen and (max-width: 700px) {
    .dayCell { padding-left: 15px; }
    .hoursWrapper div:nth-child(1),
    .hoursWrapper div:nth-child(3) { width: 45px; }
  }
`
