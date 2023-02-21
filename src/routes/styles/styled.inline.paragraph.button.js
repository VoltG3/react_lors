import styled from 'styled-components'
import { css } from 'styled-components'

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