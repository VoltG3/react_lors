import styled from 'styled-components'

export const StyledTimesSection = styled.div`
  display: flex;
  flex-direction: column;
    width: 100%;
    height: auto;

  
  .thisCell_odd {
    background: var(--color--list);
  }
  
  .thisCell_even {
    background: var(--color--none);
  }
`

export const StyledTimesHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    //max-width: 640px;
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
