import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --page--width: 1440px;
    --list--line--height: 40px;
    --page--side--margin: 80px; // min(max(5.556vw, 30px), 80px);
    
    --margin--img--vertical: min(max(6.944vw, 40px), 100px); //100px;
    --margin--img--horisontal: min(max(6.944vw, 40px), 100px); //100px; !!!!!!!!!
    --margin--h1--top: min(max(5.861vw, 30px), 70px);
    --margin--h1--bottom: 30px;
    --margin--p: 15px;

    --filter--img: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.7));
    
    --margin--minimal: 20px;
    --margin--v1: min(max(5.347vw, var(--margin--minimal)), 77px);
  }

  html, body {
    margin: 0 auto;
    height: 100%;
   grid-template-rows: 1fr 1fr;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #e8e8e8;
  }

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
      max-width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
          width: 100%;
          height: auto;
  } .box {
        width: 100%;
        height: auto;
        padding: 0 40px 0 40px;
        box-sizing: border-box;
    }
  
  * {
    padding: 0;
    margin: 0;
  }

  a:link {
    text-decoration: none;
  }

  & h1 {
    margin-top: var(--margin--h1--top);
    margin-bottom: var(--margin--h1--bottom);
  }
`
