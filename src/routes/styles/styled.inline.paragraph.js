import styled from 'styled-components'

export const StyledInlineParagraphContainer = styled.div`
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
`