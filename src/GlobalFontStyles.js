import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
    :root {

      --font--Montserrat: "Montserrat", sans-serif;
      --font--OpenSans: "Open Sans", sans-serif;
      //--font--CrimsonText: "Crimson Text", serif;
      --font--Roboto: "Roboto", sans-serif;

      //--font--GTWalsheimBold: "GTWalsheimBold", sans-serif;
      //--font--GTWalsheimMedium: "GTWalsheimMedium", sans-serif;
      --font--GTWalsheimLight: "GTWalsheimLight", sans-serif;
      --font--opacity: 0.7;
      
      // intro
      --textContent--h0--fontsize: min(max(2.5vw, 22px), 36px);
      --textContent--h0--lineheight: min(max(3.056vw, 24px), 44px);
      --textContent--h0--rus--fontsize: min(max(2.5vw, 22px), 36px);
      --textContent--h0--rus--lineheight: min(max(3.056vw, 24px), 44px);
      
      --textContent--h1--fontsize: min(max(2.5vw, 18px), 36px);
      --textContent--h1--lineheight: min(max(3.056vw, 24px), 44px);
      --textContent--h1--rus--fontsize: min(max(1.944vw, 18px), 28px);
      --textContent--h1--rus--lineheight: min(max(3.056vw, 24px), 44px);
      
      // semiheader
      --textContent--h2--fontsize: min(max(1.389vw, 18px), 20px);                                    
      --textContent--h2--lineheight: min(max(3.056vw, 22px), 44px);
      --textContent--h2--rus--fontsize: min(max(1.389vw, 18px), 20px);
      --textContent--h2--rus--lineheight: min(max(3.056vw, 22px), 44px);
      
      // h3 to delete
      --textContent--h3--fontsize: 20px;
      
      --textContent--paragraph--fontsize: min(max(1.458vw, 18px), 21px);
      --textContent--paragraph--lineheight: min(max(1.806vw, 20px), 26px);
      --textContent--paragraph--rus--fontsize: min(max(1.458vw, 18px), 21px);
      --textContent--paragraph--rus--lineheight: min(max(1.806vw, 20px), 26px);
      // lists
      --textContent--list--header--fontsize: min(max(1.389vw, 16px), 20px);
      --textContent--list--item--fontsize: min(max(1.250vw, 14px), 18px);
      // header
      --textContent--header--navigation--languages--fontsize: min(max(0.972vw, 10px), 16px);
      --textContent--header--navigation--infoline--fontsize: min(max(0.972vw, 10px), 14px);
      --textContent--header--desktop--navigation--fontsize: min(max(0.972vw, 10px), 16px);
      // footer
      --textContent--footer--navigation--fontsize: 14px;
      --textContent--footer--navigation--lineheight: 19px;
      --textContent--footer--header--fontsize: 14px;
      --textContent--footer--header--lineheight: 20px;
      --textContent--footer--item--fontsize: 14px;
      --textContent--footer--item--lineheight: 20px;
      // tabledata
      --textContent--table--header--fontsize: 28px;
      --textContent--table--header--rus--fontsie: 20px;
      --textContent--table--item--fontsize: 18px;
      --textContent--table--item--lineheight: 20px;
      --textContent--table--item--rus--fontsize: 16px;
      --textContent--table--item--rus--lineheight: 20px;
      
      
      
      
      // [ BUTTONS ] -----------------------------------------------

      .textContent--button {
        font-family: var(--font--Roboto);
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        //opacity: var(--font--opacity);
        color: var(--color--button--v1);
      }
      
          .textContent--button--contacts {
            font-family: var(--font--Roboto);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
            //opacity: var(--font--opacity);
            color: var(--color--button--v1);
          }
    
          .textContent--button--appointment {
            font-family: var(--font--Roboto);
            font-size: 15px;
            font-weight: 400;
            line-height: 1.5;
            // text-align: start;
            color: var(--color--button--v1);
            //border: solid 1px red;
          }
      
      // [ COMMON ] ------------------------------------------------
      // [ NEW ] ---------------------------------------------------
      .textContent--h0 {
        font-family: var(--font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h0--fontsize);
        line-height: var(--textContent--h0--lineheight);!important;
        white-space: pre-wrap;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
        
       // margin-bottom: .5em;
      }

      .textContent--h0--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h0--rus--fontsize);
        line-height: var(--textContent--h0--rus--lineheight);!important;
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }
      // [ NEW ] ---------------------------------------------------
      .textContent--h1 {
        font-family: var(--font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h1--fontsize);
        line-height: var(--textContent--h1--lineheight)!important;
          white-space: pre-wrap;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textContent--h1--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h1--rus--fontsize);
        line-height: var(--textContent--h1--rus--lineheight);!important;
          text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textContent--paragraph {
        font-family: var(--font--GTWalsheimLight);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--paragraph--fontsize);
        line-height: var(--textContent--paragraph--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--default);
      }

      .textContent--paragraph--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--paragraph--rus--fontsize);
        line-height: var(--textContent--paragraph--rus--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--default);
      }

      .textContent--h2 {
        font-family: var( --font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h2--fontsize);
        line-height: var(--textContent--h2--lineheight);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textContent--h2--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--h2--rus--fontsize);
        line-height: var(--textContent--h2--rus--lineheight);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textContent--h3 {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--h3--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      // [ LISTS ] -------------------------------------------------

      .textContent--list--header {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--list--header--fontsize);
        text-transform: uppercase;
        color: var(--color--none);

        @media only screen and (max-width: 700px) {
          font-weight: 400;
        }
      }

      .textContent--list--item {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--list--item--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      // [ HEADER ] ------------------------------------------------

      .textContent--header--navigation--languages {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 300;
        font-size: var(--textContent--header--navigation--languages--fontsize);
        color: var(--color--default);
      }

      .textContent--header--desktop--infoline {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 300;
        font-size: var(--textContent--header--navigation--infoline--fontsize);
        color: var(--color--default);
      }

      .textContent--header--desktop--navigation {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--header--desktop--navigation--fontsize);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--clr--primary--base);
      }

      .textContent--header--mobile--navigation {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 33px;
        text-transform: uppercase;
        //opacity: var(--font--opacity);
        //color: var(--color--none);
      }

      .textContent--header--mobile--languages {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 300;
        font-size: 23px;
        text-transform: uppercase;
        //opacity: var(--font--opacity);
        //color: var(--color--none);

      }

      // [ FOOTER ] ------------------------------------------------

      .textContent--footer--navigation {
        font-family: var(--font--OpenSans);
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
      
      .textContent--footer--header {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--footer--header--fontsize);
        line-height: var(--textContent--footer--header--lineheight);
        color: var(--color--none);
      }

      .textContent--footer--item {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--footer--item--fontsize);
        line-height: var(--textContent--footer--item--lineheight);
        color: var(--color--paragraph--footer);
      }

      // [ TABLEDATA ] ---------------------------------------------
      // [ NEW ] ---------------------------------------------------

      .textContent--tabledata--header {
        font-family: var(--font--Roboto);
        font-size: 26px;
        font-weight: 300;
        color: var(--color--tabledata);

        @media only screen and (max-width: 700px) {
          font-size: 20px;
        }
      }

      .textContent--tabledata--item {
        font-family: var(--font--Roboto);
        font-size: 18px;
        font-weight: 300;
        line-height: 1.5;
        color: var(--color--button--v1);

        @media only screen and (max-width: 700px) {
          line-height: 1.3;
          font-size: 16px;
        }
      }

      .textContent--tabledata--item--small {
        font-family: var(--font--Roboto);
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
        color: var(--color--button--v1);
        
        @media only screen and (max-width: 700px) {
          line-height: 1.3;
          font-size: 14px;
        }
      }

      .textContent--tabledata--item--names {
        font-family: var(--font--OpenSans);
        font-size: 12px;
        font-weight: 600;
        opacity: var(--font--opacity);
        color: var(--color--button--v1);
      
        @media only screen and (max-width: 700px) {
          font-size: 10px;
        }
      }

      // [ NEW ] ---------------------------------------------------
      
      .textContent--table--header {
        font-family: var(--font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--table--header--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      .textContent--table--header--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textContent--table--header--rus--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      .textContent--table--item {
        font-family: var(--font--GTWalsheimLight);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--table--item--fontsize);
        line-height: var(--textContent--table--item--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      .textContent--table--item--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textContent--table--item--rus--fontsize);
        line-height: var(--textContent--table--item--rus--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }
    }
`