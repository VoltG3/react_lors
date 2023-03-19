import styled from 'styled-components'

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  
  background: var(--color--list--header)!important;
  border-top-left-radius: var(--border--radius);
  border-top-right-radius: var(--border--radius);
  
      & p {
        margin-top: 15px!important;
        margin-bottom: 15px!important;
      }
  
  white-space: pre-wrap;
`
