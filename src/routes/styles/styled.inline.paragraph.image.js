import styled from 'styled-components'

export const StyledInlineParagraphWithImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  & span {
    margin-right: 30px;
    //border: solid 1px red;  // - issue
  }
  
  .inlineParagraphWithImage {
    width: 100%;
  }
  
  @media only screen and (max-width: 700px) {
    flex-direction: column;

    & span {
      width: 100%;
      //margin-right: auto;
      //border: solid 1px red; // - issue
    }

    .inlineParagraphWithImage {
      padding-top: 30px;
    }
  }
`
