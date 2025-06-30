import styled from 'styled-components'

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