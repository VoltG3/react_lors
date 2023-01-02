import styled from "styled-components"
import { css } from 'styled-components'

const Header = css`
  display: flex;
  flex-direction: column;
  align-items: center;
    max-width: 1440px;
      width: 100%;
      height: auto;
`

const InnerHeader = css`
  display: flex;
  justify-content: center;
  width: inherit;
`

export const StyledHeader = styled.div`
  ${ Header }

  .navDesktop { visibility: visible; }
  .navMobile { visibility: collapse; }
  
  @media only screen and (max-width: 922px) {
    .navDesktop { visibility: collapse; }
    .navMobile { visibility: visible; }
  }
`

export const StyledInnerHeader = styled.div`
  ${ InnerHeader }
`
