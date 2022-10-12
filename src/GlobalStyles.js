import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  
  :root {
    --page--width: 1440px;
    --list--line--height: 40px;
    --page--side--margin: 80px;
    --filter--img: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.7));
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
