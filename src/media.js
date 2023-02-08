import styled from 'styled-components'
import { css } from 'styled-components'

export const MediaDesktop = styled.span`
  display: flex;
  width: inherit;
  height: inherit;
  @media only screen and (max-width: 922px) { display: none!important; }
`

export const MediaMobile = styled.span`
  display: block;
  @media only screen and (max-width: 922px) { display: none!important; }
`
