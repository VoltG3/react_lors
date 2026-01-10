import styled from 'styled-components'
import { css } from 'styled-components'

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

    @media (max-width: 922px) {
      padding: 40px 30px;
    }

    @media (max-width: 480px) {
      padding: 30px 20px;
    }
  }
`

const Hours = css`
  .timetable {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`

const Contracts = css`

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

const Availability = css`

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

      & svg {
        flex-shrink: 0;
        width: 32px;
        height: 32px;

        @media (max-width: 768px) {
          width: 28px;
          height: 28px;
        }
      }

      & img {
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

export const TileHours = styled.div`
    ${ TileContainer }
    ${ Hours }
`

export const TileContracts = styled.div`
    ${ TileContainer }
    ${ Contracts }
`

export const TileAvailability = styled.div`
    ${ TileContainer }
    ${ Availability }
`