import styled from 'styled-components'

export const MediaDesktop = styled.div`
  width: 100%;
  
  @media only screen and (max-width: 700px) { display: none!important; }
`

export const MediaMobile = styled.span`
  @media only screen and (min-width: 700px) { display: none!important; }
`
