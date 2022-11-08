import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --page--width: 1440px;
    --list--line--height: 40px;
    --page--side--margin: 80px; // min(max(5.556vw, 30px), 80px);
    
    --margin--img--vertical: min(max(6.944vw, 40px), 100px); //100px;
    --margin--img--horisontal: min(max(6.944vw, 40px), 100px); //100px; !!!!!!!!!
    --margin--h1: 70px;
    --margin--p: 30px;

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
    background: #e8e8e8;
  }

  .page {
    display: flex;
    flex-direction: column;
    white-space: pre-wrap; // !
    align-items: center;
    max-width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
  //margin: var(--page--side--margin) 0 var(--page--side--margin) 0;
   // margin-left: 40px;
   // margin-right: 40px;
    width: 100%;
    height: auto;
  }
  
  .sectionTextContent {
    width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
    height: auto;
    border: solid 1px black;

    & p {
      margin-bottom: var(--margin--p);
      border: solid 1px red;
    }
    
    & p:last-child {
      margin-bottom: 0!important;
    }
  }

  * {
    padding: 0;
    margin: 0;
    //white-space: pre-wrap;
  }

  a:link {
    text-decoration: none;
  }

  & h1 {
    margin-top: var(--margin--h1);
    margin-bottom: var(--margin--h1);
  }
`
