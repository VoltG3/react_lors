import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  gap: var(--size--padding40);
  padding-top: var(--size--padding40);
  padding-bottom: var(--size--padding40);

  @media only screen and (max-width: 700px) {
    gap: var(--size--padding30);
    padding-top: var(--size--padding30);
    padding-bottom: var(--size--padding30);
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: var(--color--list--header);

  @media only screen and (max-width: 700px) {
    min-height: 40px;
  }
`

export const ColumnSet = styled.div`
  display: ${({ showContent }) => showContent === false ? 'none' : 'flex'};
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  box-shadow: var(--box--shadow);
  border-radius: var(--border--radius);
  background-color: var(--color--none);
  overflow: hidden;
  transition: all .3s ease;

  &:hover {
    box-shadow: var(--box--hover);
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

    & > div:nth-child(odd) {
      background: var(--color--list--odd);
    }
    & > div:nth-child(even) {
      background: var(--color--list--even);
    }

    .cell {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: auto;
      min-height: var(--list--line--height);
      box-sizing: border-box;
      padding: 8px 15px;

      @media only screen and (min-width: 1024px) {
        padding: 12px 30px;
      }
      @media only screen and (max-width: 700px) {
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

      @media only screen and (max-width: 700px) {
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
  gap: var(--size--padding40);

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
    gap: var(--size--padding40);
  }
`
