import styled from 'styled-components'

export const StyledTimesTable_Section = styled.div`
  display: flex;
  flex-direction: column;
    max-width: 640px;
        width: 100%;
        height: auto;
  //border: solid 1px red;
  
  .thisSection {
    display: flex;
    flex-direction: row;
      width: auto;
      height: auto;
  }
  
  .thisCell_odd {
    background: var(--color--list);
  }
  
  .thisCell_even {
    background: var(--color--none);
  }
`

export const StyledTimesTable_header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    max-width: 640px;
        width: 100%;
        height: 40px;
  background-color: var(--color--primary);
`

export const StyledThisCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    height: 40px;
    width: 100%;
`

export const StyledthisSection = styled.div`
  
  .thisWeek {
    display: flex;
    flex-direction: column;
      max-width: 214px;
    //min-width: 214px;
          width: 100%;
          height: auto;
    .innerThisWeek {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      //max-width: 80px;
      min-width: 120px;
      width: 100%;
      height: auto;
      margin-left: 15px;
    ///  border: solid 1px red;
    }
  }
 
  .thisHoursSecond {
    display: flex;
    flex-direction: column;
    //justify-content: center!important;
    align-items: center;
      max-width: 640px;
      min-width: 214px;
          width: 100%;
          height: auto;
  
    .innerThisHours {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      max-width: 80px;
      min-width: 65px;
        width: 100%;
        height: auto;
      //border: solid 1px red;
    }
  }

  .thisName {
    display: flex;
    flex-direction: column;
    max-width: 214px;
    //min-width: 214px;
    width: 100%;
    height: auto;
  //border: solid 1px red;
    .innerThisName {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      //max-width: 80px;
      //min-width: 130px;
      width: 150px;
      height: auto;
    // border: solid 1px green;
    }
  }
  
`
