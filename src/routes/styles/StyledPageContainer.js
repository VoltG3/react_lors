import styled from 'styled-components'

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 70px 40px 80px;

  @media only screen and (max-width: 700px) {
    padding: 30px 20px;
  }

  & h1,
  & h2 {
    width: 100%;
    margin-bottom: 30px;
  }

  & h2 {
    display: var(--media--desktop);
  }

  & span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & p:last-child {
      margin-bottom: 0;
    }
  }
`