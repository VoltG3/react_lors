import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {

    --page--width: 1440px;
    
    --size--padding20: 20px;
    --size--padding30: 30px;
    --size--padding40: 40px;
    --size--padding50: 50px;
    --size--padding60: 60px;
    --size--padding70: 70px;
    --size--padding80: 80px;
   
    --border--radius: 7px;

    //--filter--img: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.7));
    
    --filter--img: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.7));
    
    --box--shadow:      rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;
    --box--hover:       0 2px 15px 0 hsla(0,0%,69%,.5);
    
   
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
    --margin--img--vertical: min(max(5.5vw, 40px), 80px);
    --margin--img--horisontal: min(max(6.944vw, 40px), 100px); //100px; !!!!!!!!!
    --margin--h1--top: min(max(5.861vw, 30px), 70px);
--margin--h1--bottom: 30px;
    --margin--p: 15px;
    
    --margin--minimal: 20px;
    --margin--v1: min(max(5.347vw, var(--margin--minimal)), 77px);
  }
`
