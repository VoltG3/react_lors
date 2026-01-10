import styled from 'styled-components'

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--page--width);
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
    display: var(--media--desktop);
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