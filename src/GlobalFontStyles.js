import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
    :root {

      --font--Montserrat: "Montserrat", sans-serif;
      --font--OpenSans: "Open Sans", sans-serif;
      --font--Roboto: "Roboto", sans-serif;
      --font--GTWalsheimLight: "GTWalsheimLight", sans-serif;
      --font--opacity: 0.7;
        
    // [ BUTTON ] ------------------------------------------------

    .textContent--button {
        font-family: var(--font--Roboto), sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        color: var(--color--button--v1);
    }
        
    // [ HEADER ] ------------------------------------------------
        
    --textContent--header--navigation--languages--fontsize: min(max(0.972vw, 10px), 16px);
    --textContent--header--navigation--infoline--fontsize: min(max(0.972vw, 10px), 14px);
    --textContent--header--desktop--navigation--fontsize: min(max(0.972vw, 10px), 16px);  
        
    .textContent--header--navigation--languages {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: var(--textContent--header--navigation--languages--fontsize);
        color: var(--color--default);
    }

    .textContent--header--desktop--infoline {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: var(--textContent--header--navigation--infoline--fontsize);
        color: var(--color--default);
    }

    .textContent--header--desktop--navigation {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--header--desktop--navigation--fontsize);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--clr--primary--base);
    }

    .textContent--header--mobile--navigation {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 33px;
        text-transform: uppercase;
    }

    .textContent--header--mobile--languages {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 23px;
        text-transform: uppercase;
    }
        
    // [ SLIDER ] ------------------------------------------------
        
    --textContent--h0--fontsize: min(max(2.5vw, 22px), 36px);
    --textContent--h0--lineheight: min(max(3.056vw, 24px), 44px);
    --textContent--h0--rus--fontsize: min(max(2.5vw, 22px), 36px);
    --textContent--h0--rus--lineheight: min(max(3.056vw, 24px), 44px);    
        
    .textContent--h0 {
        font-family: var(--font--GTWalsheimMedium),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h0--fontsize);
        line-height: var(--textContent--h0--lineheight) !important;
        white-space: pre-wrap;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
    }

    .textContent--h0--rus {
        font-family: var(--font--Montserrat),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h0--rus--fontsize);
        line-height: var(--textContent--h0--rus--lineheight) !important;
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
    }

    // [ TEXTCONTENT ] -------------------------------------------

   --textContent--h1--fontsize: min(max(2.5vw, 20px), 36px);
   --textContent--h1--lineheight: 1.4;
   --textContent--h1--rus--fontsize: min(max(2.5vw, 20px), 36px);
   --textContent--h1--rus--lineheight: 1.4;
   --textContent--h2--fontsize: min(max(1.8vw, 18px), 24px);
   --textContent--h2--lineheight: 1.5;
   --textContent--h2--rus--fontsize: min(max(1.8vw, 18px), 24px);
   --textContent--h2--rus--lineheight: 1.5;
   --textContent--h3--fontsize: 20px;
   --textContent--paragraph--fontsize: min(max(1.2vw, 16px), 18px);
   --textContent--paragraph--lineheight: 1.6;
   --textContent--paragraph--rus--fontsize: min(max(1.2vw, 16px), 18px);
   --textContent--paragraph--rus--lineheight: 1.6;
        
    .textContent--h1 {
        font-family: var(--font--GTWalsheimMedium),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h1--fontsize);
        line-height: var(--textContent--h1--lineheight) !important;
        white-space: pre-wrap;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
    }

    .textContent--h1--rus {
        font-family: var(--font--Montserrat),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h1--rus--fontsize);
        line-height: var(--textContent--h1--rus--lineheight) !important;
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
    }

    .textContent--paragraph {
        font-family: var(--font--GTWalsheimLight),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--paragraph--fontsize);
        line-height: var(--textContent--paragraph--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--default);
    }

    .textContent--paragraph--rus {
        font-family: var(--font--Montserrat),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--paragraph--rus--fontsize);
        line-height: var(--textContent--paragraph--rus--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--default);
    }

    .textContent--h2 {
        font-family: var( --font--GTWalsheimMedium),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h2--fontsize);
        line-height: var(--textContent--h2--lineheight);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
    }

    .textContent--h2--rus {
        font-family: var(--font--Montserrat),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h2--rus--fontsize);
        line-height: var(--textContent--h2--rus--lineheight);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
    }

    .textContent--h3 {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--h3--fontsize);
        line-height: 1.5;
        opacity: var(--font--opacity);
    }
        
    // [ TABLEDATA ] ---------------------------------------------

    .textContent--tabledata--header {
        font-family: var(--font--GTWalsheimMedium),sans-serif;
        font-size: 22px;
        font-weight: 400;
        line-height: 1.4;
        text-transform: uppercase;
        color: var(--color--tabledata);

        @media only screen and (max-width: 700px) {
            font-size: 18px;
        }
    }

    .textContent--tabledata--item--small {
        font-family: var(--font--GTWalsheimLight),sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.6;
        color: var(--color--button--v1);

        @media only screen and (max-width: 700px) {  
            font-size: 14px;
        }
    }

    .textContent--tabledata--item--names {
        font-family: var(--font--OpenSans),sans-serif;
        font-size: 12px;
        font-weight: 600;
        opacity: var(--font--opacity);
        color: var(--color--button--v1);

        @media only screen and (max-width: 700px) {
            font-size: 10px;
        }
    }   
        
    // [ LIST ] --------------------------------------------------

    --textContent--list--header--fontsize: min(max(1.389vw, 16px), 20px);
    --textContent--list--item--fontsize: min(max(1.250vw, 14px), 16px);
    --textContent--list--item--lineheight: 1.6;
        
    .textContent--list--header {
        font-family: var(--font--Montserrat),sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--list--header--fontsize);
        line-height: 1.4;
        text-transform: uppercase;
        color: var(--color--none);

        @media only screen and (max-width: 700px) {
            font-weight: 400;
            line-height: 1.3;
        }
    }

    .textContent--list--item {
        font-family: var(--font--Montserrat),sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--list--item--fontsize);
        line-height: var(--textContent--list--item--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--secondary);
    }  

    // [ FOOTER ] ------------------------------------------------
        
    --textContent--footer--navigation--fontsize: 14px;
    --textContent--footer--navigation--lineheight: 19px;
    --textContent--footer--header--fontsize: 14px;
    --textContent--footer--header--lineheight: 20px;
    --textContent--footer--item--fontsize: 14px;
    --textContent--footer--item--lineheight: 20px;
        
    .textContent--footer--navigation {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--footer--navigation--fontsize);
        line-height: var(--textContent--footer--navigation--lineheight);
        text-transform: uppercase;
        color: var(--color--paragraph--footer);

        & :hover {
            color: var(--color--none);
        }
    }
               
    .textContent--footer--head {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--footer--header--fontsize);
        line-height: var(--textContent--footer--header--lineheight);
        color: var(--color--none);
    }

    .textContent--footer--item {
        font-family: var(--font--OpenSans),sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--footer--item--fontsize);
        line-height: var(--textContent--footer--item--lineheight);
        color: var(--color--paragraph--footer);
    }
  }
`