import { createGlobalStyle } from 'styled-components'

export const GlobalStyles2 = createGlobalStyle`
  :root {
    
    --page--width: 1440px;
    --page--width100: 100%;
    
    --size--padding20: 20px;
    --size--padding30: 30px;
    --size--padding40: 40px;
    --size--padding50: 50px;
    --size--padding60: 60px;
    --size--padding70: 70px;
    --size--padding80: 80px;
   
  

    --space--between--footer--tiles: 131px;
    
    --filter--img: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.7));
    
    
   
   
    
    --desktop--navigation--height: 75px;
    
    --page--side--margin20: 20px;
    --page--side--margin40: 40px;
    --page--side--margin80: 80px;
    
    --layer--covid: 2;

    @media only screen and (max-width: 1500px) {
      :root {   
        --page--width100: calc(100% - calc(var(--size--padding40) * 2));
        --space--between--footer--tiles: calc(min(max(9.097, 30px), 131px));
      }
    }
    
    /*@media only screen and (max-width: 1440px) {
      :root {
        --page--width100: calc(100% - calc(var(--page--side--margin40) * 2));
      }
    }

font-size: min(max(1.458vw, 18px), 21px);

https://vw.joealden.com/



    @media only screen and (max-width: 922px) {
      :root {
        --page--width100: calc(100% - calc(var(--page--side--margin20) * 2));
      }
    }*/
    
   
    --page--side--margin: 80px; // min(max(5.556vw, 30px), 80px);
    --page--sideInner--margin: 40px;
    --margin--img--vertical: min(max(5.5vw, 40px), 80px);
    --margin--img--horisontal: min(max(6.944vw, 40px), 100px); //100px; !!!!!!!!!
    --margin--h1--top: min(max(5.861vw, 30px), 70px);
--margin--h1--bottom: 30px;
    --margin--p: 15px;
    
    --margin--minimal: 20px;
    --margin--v1: min(max(5.347vw, var(--margin--minimal)), 77px);
  }
`
