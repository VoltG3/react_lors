import styled, { css } from 'styled-components'

// [ PAGE CONTAINER ] ---------------------------------------------------------
export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 80px 40px;
  @media only screen and (max-width: 700px) {
    padding: 40px 20px;
  }
  & h1,
  & h2 {
    width: 100%;
    margin-bottom: 40px;

    @media only screen and (max-width: 700px) {
        margin-bottom: 24px;
    }
  }
  & h2 {
    display: flex;
    @media only screen and (max-width: 700px) {
        display: none;
    }
  }
  & span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media only screen and (max-width: 700px) {
        gap: 20px;
    }
    & p:last-child {
      margin-bottom: 0;
    }
  }
`

// [ INLINE PARAGRAPH ] -------------------------------------------------------
export const StyledInlineParagraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    width: 100%;
    height: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  & p:nth-last-child(-n +1) {
    color: var(--color--paragraph--highlight);
  }
  & p:nth-last-child(-n +2) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;

    & p:nth-last-child(-n +2) {
      padding-left: 0;
    }
  }
`

// [ INLINE PARAGRAPH WITH IMAGE ] --------------------------------------------
export const StyledInlineParagraphWithImageContainer = styled.div`
  display: flex;
  flex-direction: row;

  & span {
    margin-right: 30px;
  }

  .inlineParagraphWithImage {
    width: 100%;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    & span {
      width: 100%;
    }
    .inlineParagraphWithImage {
      padding-top: 30px;
    }
  }
`

// [ INLINE PARAGRAPH WITH BUTTON ] -------------------------------------------
const thisContainer = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    & div {
        display: flex;
        justify-content: flex-start;
    }

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      & div { width: 100%; }
    }
`

const thisContainerParagraph = css`
  .inlineParagraphWithButton {
    display: flex;
    flex-direction: row;
    p {
      padding-bottom: 0!important;
      padding-right: 10px;
    }
    @media only screen and (max-width: 700px) {
      p {
        padding-right: 0;
        padding-bottom: 10px!important;
      }
      & p:nth-last-child(-n + 1) {
        display: none;
      }
    }
  }
`

export const StyledInlineParagraphWithButtonContainer = styled.div`
  ${ thisContainer }
  ${ thisContainerParagraph }
`
