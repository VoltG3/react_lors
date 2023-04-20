import styled from 'styled-components'

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    white-space: pre-wrap;
    width: 100vw;
  color: white;
  background: #021928;

  .innerFooter {
    display: flex;
    flex-direction: row;
        max-width: var(--page--width);
        width: var(--page--width100);
        height: auto;
    padding-top: 50px;
    padding-bottom: 50px;

    @media only screen and (max-width: 1170px) {
      gap: 30px;
      flex-direction: column;
    }
  }
  
  
`
export const StyledFooterNavigationSet = styled.div`
    display: flex;
    flex-direction: column;
        min-width: 237px;
        max-width: 237px;
        height: 172px;
    margin-right: 40px;
    border: solid 1px white;
  
    & div:nth-child(2) {
      max-width: 230px;
      border: solid 1px red;
    }
`

export const StyledFooterTextContentSet = styled.div`
    display: flex;
    flex-direction: row;
    //justify-content: space-between;
    //max-width: 1203px;
    width: 100%;
    height: auto;
    border: dotted 1px white;
  
    & div {
      display: flex;
      flex-direction: column;
          width: 100%;
          height: 172px;
      border: solid 1px yellow;

      & p {
        margin-bottom: 7px;
      }
    }

    @media only screen and (max-width: 1170px) {
      gap: 30px;
      flex-direction: column;
    }
`