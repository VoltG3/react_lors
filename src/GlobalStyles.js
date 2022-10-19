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
    background: cyan;
  }
  
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
      max-width: var(--page--width);
          width: 100%;
          height: auto;
    margin: 0
            var(--page--side--margin)
            0 
            var(--page--side--margin);
    background: green;
  } 
  
  * {
    padding: 0;
    margin: 0;
  }
  
  a:link {
    text-decoration: none;
  }
  
  
  
`
