import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    max-width: 1440px;
    min-width: auto;
        width: var(--page--width100);
        height: auto;
  box-sizing: border-box;
  padding-top: var(--size--padding70);
  padding-bottom: var(--size--padding80);
  //padding-top: var(--page--paddingTop);
  //padding-bottom: var(--page--paddingBottom);

  @media only screen and (max-width: 700px) {
    padding-top: var(--size--padding30);
    padding-bottom: var(--size--padding30);
  }
  
  & h1, h2 {
    align-self: flex-start;
    padding-bottom: var(--size--padding30);
  }
  
  & h2 { display: var(--media--desktop); }

  & span {
    & p {
      padding-bottom: var(--size--padding20);
    }

    & p:last-child {
      padding-bottom: 0 !important;
    }
  }
  
  .inlineSpan {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    padding-top: var(--size--padding30);
    padding-bottom: var(--size--padding30);

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
  }

  .inlineSpanWithBtn {
    display: flex;
    flex-direction: row;
    align-items: center;
      width: 100%;
      height: auto;
    box-sizing: border-box;
    
    & div:first-child {
      padding-right: 10px;
      padding-bottom: 20px;
    }

    @media only screen and (max-width: 700px) {
      flex-direction: column;
      & div:nth-child(2) {
        display: flex;
        justify-content: flex-start;
          width: 100%;
        height:auto;
      }
    }
  }
  
    .rmBottomMargin {
      display: inline-block;
      margin-bottom: var(--margin--p);
    
      & * {
        margin-bottom: 0px !important;
      }
    }
    
    .noBottomPadding {
      padding-bottom: 0 !important;
    }
    
    .shadow {
      box-shadow: var(--box--shadow);
    
      &:hover {
        transition: box-shadow .3s linear;
        box-shadow: var(--box--hover);
      }
    }
`

