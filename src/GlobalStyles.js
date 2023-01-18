import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {

    --size--padding20:  20px;
    --size--padding30:  30px;
    --size--padding50:  50px;
    --size--padding70:  70px;
    --size--padding80:  80px;
   
    --box--shadow:      rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;
    --box--hover:       0 2px 15px 0 hsla(0,0%,69%,.5);
    
    /* ----------------------------------------------- */
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
    
    --margin--img--vertical: min(max(5.5vw, 40px), 80px); 
    
    --margin--img--horisontal: min(max(6.944vw, 40px), 100px); //100px; !!!!!!!!!
    --margin--h1--top: min(max(5.861vw, 30px), 70px);
    --margin--h1--bottom: 30px;
    --margin--p: 15px;

    --filter--img: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.7));

    
    --margin--minimal: 20px;
    --margin--v1: min(max(5.347vw, var(--margin--minimal)), 77px);
  }
  
  /* ------------------------------------------------------- */
  
  
  
  /* ------------------------- ------------------------------ */
  
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
      max-width: 1440px;
      min-width: auto;
          width: 100%;
          height: auto;
    box-sizing: border-box;
    padding: 
            var(--size--padding70)  // Top
            var(--size--padding20)  // Right
            var(--size--padding80)  // Bottom
            var(--size--padding20); // Left
    //background-color: var(--color--background);
 
      & h1 {
        align-self: flex-start;
        padding-bottom: var(--size--padding30);
      } 
    
      //& p { word-break: break-all; }
    
      & span {
        & p { padding-bottom: var(--size--padding20); }
        & p:last-child { padding-bottom: 0!important; }
      }
    
      .BTNSmallComponent {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        
        & p {
          padding-bottom: 0!important;
        }

        @media only screen and (max-width: 563px) {
          flex-direction: column;
        }
      }

      .rmBottomMargin {
        display: inline-block;
        margin-bottom: var(--margin--p);
        
        & * { margin-bottom: 0px!important; }
      }
    
    .noBottomPadding {
      padding-bottom: 0!important;
    }

    
   .shadow {
     box-shadow: var(--box--shadow);

     &:hover {
       transition: box-shadow .3s linear;
       box-shadow: var(--box--hover);
     }
   }
    
  }

/*  .img--set--to {
    width: 100%;
    height: auto;
    padding-top: 25px;
    //padding: 0 40px 0 40px;
    box-sizing: border-box;
    border: solid 1px red;

    & img {
      background-size: cover;
    }
  }
  
  .box {
        width: 100%;
        height: auto;
        padding-top: 25px;
        //padding: 0 40px 0 40px;
        box-sizing: border-box;
      border: solid 1px red;
    
    & img {
      background-size: cover;
    }
    }*/
  
`
