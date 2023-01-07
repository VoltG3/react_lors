import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --page--width: 1440px;
    --page--width100: 100%;
    --desktop--navigation--height: 75px;
    --page--side--margin20: 20px;
    --page--side--margin40: 40px;
    --page--side--margin80: 80px;
    
    --layer--covid: 2;
    
    @media only screen and (max-width: 1440px) {
      :root {
        --page--width100: calc(100% - calc(var(--page--side--margin40) * 2));
      }
    }

    @media only screen and (max-width: 922px) {
      :root {
        --page--width100: calc(100% - calc(var(--page--side--margin20) * 2));
      }
    }
   
    
    --list--line--height: 40px;
    --page--side--margin: 80px; // min(max(5.556vw, 30px), 80px);
    --page--sideInner--margin: 40px;
    
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
   //grid-template-rows: 1fr 1fr;
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
      //max-width: calc(var(--page--width) - calc(var(--page--side--margin) * 2));
      max-width: 1440px;
          width: 100%;
          height: auto;
    background-color: var(--color--none);
    border: solid 5px red;
    
        & h1 {
          align-self: flex-start;
          margin-top: var(--margin--h1--top);
          margin-bottom: var(--margin--h1--bottom);
        }  
    
        & p, h1 { 
          padding-left: var(--page--sideInner--margin);
          padding-right: var(--page--sideInner--margin);
        }
    
        & span {
          & p { margin-bottom: var(--margin--p); }
          & p:last-child { margin-bottom: 0!important; }
        }
    
          .rmBottomMargin {
            display: inline-block;
            margin-bottom: var(--margin--p);
      
            & * { margin-bottom: 0px!important; }
          }
    
          .center {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 80px;
          }
          
  } 
  
  .box {
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
`
