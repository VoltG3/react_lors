import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0 auto;
    height: 100%;
  }
  
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`
