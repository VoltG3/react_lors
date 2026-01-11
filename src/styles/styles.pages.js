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
  @media only screen and (max-width: 768px) {
    padding: 40px 20px;
  }
  @media only screen and (max-height: 500px) and (orientation: landscape) {
    padding: 20px 40px;
  }
  & h1 {
    width: 100%;
    margin-bottom: 40px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: ${props => props.$lang === 'ru' ? '400' : '500'};
    font-size: min(max(2.5vw, 20px), 36px);
    line-height: 1.4 !important;
    text-transform: ${props => props.$lang === 'ru' ? 'uppercase' : 'none'};
    white-space: pre-wrap;
    color: #152F3F;

    @media only screen and (max-width: 768px) {
        margin-bottom: 24px;
        font-size: 24px;
    }
  }
  & h2 {
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: ${props => props.$lang === 'ru' ? '400' : '500'};
    font-size: min(max(1.8vw, 18px), 24px);
    line-height: 1.5;
    text-transform: uppercase;
    color: #152F3F;

    @media only screen and (max-width: 768px) {
        margin-bottom: 24px;
    }
  }
  & h3 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    color: #152F3F;
    
    @media only screen and (max-width: 768px) {
        font-size: 18px;
    }
  }
  & span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media only screen and (max-width: 768px) {
        gap: 12px;
    }
    & p {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: ${props => props.$lang === 'ru' ? '400' : '300'};
      font-size: min(max(1.2vw, 16px), 18px);
      line-height: 1.6;
      color: #262626;
      margin: 0;
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
    color: #F31850;
  }
  & p:nth-last-child(-n +2) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 768px) {
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

  @media only screen and (max-width: 768px) {
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

    @media only screen and (max-width: 768px) {
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

// [ CONTACTS SPECIFIC ] -------------------------------------------------------

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 1100px) {
    gap: 30px;
  }

  @media (max-width: 922px) {
    display: none;
  }
`

export const ContactDesktopMedia = styled.div`
  display: flex !important;
  flex-direction: row;
  gap: 40px;
  width: 100%;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 922px) {
    display: none !important;
  }
`

export const ContactMobileMedia = styled.div`
  display: none !important;

  @media only screen and (max-width: 922px) {
    display: flex !important;
    flex-direction: column;
  }
`

export const ContactTile = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  background-color: #FFFFFF;
  padding: 40px;
  justify-content: center;
  transition: all .3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
    transform: translateY(-2px);
  }

  & p {
      margin-bottom: 20px !important;
  }
`

export const ContactImageTile = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  background-color: #FFFFFF;
  overflow: hidden;
  transition: all .3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
    transform: translateY(-2px);
  }

  & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
  }
`
