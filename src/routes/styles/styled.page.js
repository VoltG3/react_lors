import styled from 'styled-components'

export const StyledPageContainer = styled.div`
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
    width: 100%;
    height: auto;
    
    & p {
      padding-bottom: var(--size--padding20);
    }

    & p:last-child {
      padding-bottom: 0 !important;
    }
  }
`
