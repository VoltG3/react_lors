import styled from 'styled-components'

export const StyledMediaDesktop = styled.div`
  display: flex!important; flex-direction: row; gap: var(--size--padding30);
      @media only screen and (max-width: 922px) {
        display: none!important; 
      }
`

export const StyledMediaMobile = styled.div`
  display: none!important;
      @media only screen and (max-width: 922px) {
         display: flex!important; flex-direction: column; gap: var(--size--padding30);
      }
`
