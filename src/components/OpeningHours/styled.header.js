import styled from 'styled-components'

export const StyledOpeningHoursHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  background-color: var(--color--list--header);
  
  @media only screen and (max-width: 700px) {
    min-height: 40px;
  }
`