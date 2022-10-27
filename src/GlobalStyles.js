import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --page--width: 1440px;
    --list--line--height: 40px;
    --page--side--margin: 80px;
    --image--vertical--margin: 100px;

    --margin--var01: 70px;
    --margin--var02: 30px;

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
    width: 100%;
    height: auto;
  }

  * {
    padding: 0;
    margin: 0;
    //white-space: pre-wrap;
  }

  a:link {
    text-decoration: none;
  }
`
