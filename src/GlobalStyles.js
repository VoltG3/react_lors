import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  
  :root {
    --page--width: 1440px;
  }
  
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
  
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
  
  * {
    padding: 0;
    margin: 0;
  }
`
