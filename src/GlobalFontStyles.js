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
      
      // common
      --textcontent--h0--fontsize: min(max(2.5vw, 28px), 36px);
      --textcontent--h0--lineheight: min(max(3.056vw, 28px), 44px);
      --textcontent--h0--rus--fontsize: min(max(2.5vw, 28px), 36px);
      --textcontent--h0--rus--lineheight: min(max(3.056vw, 22px), 44px);
      
      --textcontent--h1--fontsize: min(max(2.5vw, 18px), 36px);
      --textcontent--h1--lineheight: min(max(3.056vw, 22px), 44px);
      --textcontent--h1--rus--fontsize: min(max(2.5vw, 18px), 36px);
      --textcontent--h1--rus--lineheight: min(max(3.056vw, 22px), 44px);
      --textcontent--h2--fontsize: 24px;
      --textcontent--h2--lineheight: min(max(3.056vw, 22px), 44px);
      --textcontent--h2--rus--fontsize: 24px;
      --textcontent--h2--rus--lineheight: min(max(3.056vw, 22px), 44px);
      --textcontent--h3--fontsize: 20px;
      --textcontent--paragraph--fontsize: min(max(1.458vw, 18px), 21px);
      --textcontent--paragraph--lineheight: min(max(1.806vw, 20px), 26px);
      --textcontent--paragraph--rus--fontsize: min(max(1.458vw, 18px), 21px);
      --textcontent--paragraph--rus--lineheight: min(max(1.806vw, 20px), 26px);
      // lists
      --textcontent--list--header--fontsize: min(max(1.389vw, 16px), 20px);
      --textcontent--list--item--fontsize: 18px;
      // header
      --textcontent--header--navigation--languages--fontsize: 16px;
      --textcontent--header--navigation--infoline--fontsize: 14px;
      --textcontent--header--desktop--navigation--fontsize: 16px;
      // footer
      --textcontent--footer--navigation--fontsize: 14px;
      --textcontent--footer--navigation--lineheight: 19px;
      --textcontent--footer--header--fontsize: 14px;
      --textcontent--footer--header--lineheight: 20px;
      --textcontent--footer--item--fontsize: 14px;
      --textcontent--footer--item--lineheight: 20px;
      // tabledata
      --textcontent--table--header--fontsize: 28px;
      --textcontent--table--header--rus--fontsie: 20px;
      --textcontent--table--item--fontsize: 18px;
      --textcontent--table--item--lineheight: 20px;
      --textcontent--table--item--rus--fontsize: 16px;
      --textcontent--table--item--rus--lineheight: 20px;
      
      
      .textcontent--button {
        font-family: var(--font--Roboto);
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
       // text-align: start;
        color: var(--color--button--v1);
        //border: solid 1px red;
      }
      
      .textcontent--opening--hours {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
          letter-spacing: 2px;
        line-height: 22px;
       // opacity: var(--font--opacity);
        color: var(--color--default);
      }
      
      // [ BUTTONS ] -----------------------------------------------

      .textcontent--button--v1 {
        font-family: var(--font--secondary);
        font-style: normal;
        font-weight: 400;
        font-size: min(max(1.458vw, 18px), 18px);
        line-height: min(max(1.806vw, 20px), 26px);
        opacity: var(--font--opacity);
        color: var(--color--default);
      }

      .textcontent--button--v2 {
        font-family: var(--font--primary);
        font-style: normal;
        font-weight: 400;
        font-size: min(max(1.458vw, 18px), 21px);
        line-height: min(max(1.806vw, 20px), 26px);
        opacity: var(--font--opacity);
        color: var(--color--default);
      }
      
      // [ COMMON ] ------------------------------------------------
      // [ NEW ] ---------------------------------------------------
      .textcontent--h0 {
        font-family: var(--font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--h0--fontsize);
        line-height: var(--textcontent--h0--lineheight);
        white-space: pre-wrap;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
        
       // margin-bottom: .5em;
      }

      .textcontent--h0--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--h0--rus--fontsize);
        line-height: var(--textcontent--h0--rus--lineheight);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }
      // [ NEW ] ---------------------------------------------------
      .textcontent--h1 {
        font-family: var(--font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--h1--fontsize);
        line-height: var(--textcontent--h1--lineheight);
          white-space: pre-wrap;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textcontent--h1--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--h1--rus--fontsize);
        line-height: var(--textcontent--h1--rus--lineheight);
          text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textcontent--paragraph {
        font-family: var(--font--GTWalsheimLight);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--paragraph--fontsize);
        line-height: var(--textcontent--paragraph--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--default);
      }

      .textcontent--paragraph--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--paragraph--rus--fontsize);
        line-height: var(--textcontent--paragraph--rus--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--default);
      }

      .textcontent--h2 {
        font-family: var( --font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--h2--fontsize);
        line-height: var(--textcontent--h2--lineheight);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textcontent--h2--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--h2--rus--fontsize);
        line-height: var(--textcontent--h2--rus--lineheight);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      .textcontent--h3 {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textcontent--h3--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      // [ LISTS ] -------------------------------------------------

      .textcontent--list--header {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textcontent--list--header--fontsize);
        text-transform: uppercase;
        color: var(--color--none);
      }

      .textcontent--list--item {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--list--item--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--secondary);
      }

      // [ HEADER ] ------------------------------------------------

      .textcontent--header--navigation--languages {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 300;
        font-size: var(--textcontent--header--navigation--languages--fontsize);
        color: var(--color--default);
      }

      .textcontent--header--desktop--infoline {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 300;
        font-size: var(--textcontent--header--navigation--infoline--fontsize);
        color: var(--color--default);
      }

      .textcontent--header--desktop--navigation {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--header--desktop--navigation--fontsize);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--clr--primary--base);
      }

      .textcontent--header--mobile--navigation {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        text-transform: uppercase;
        //opacity: var(--font--opacity);
        //color: var(--color--none);
      }

      .textcontent--header--mobile--languages {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 300;
        font-size: 23px;
        text-transform: uppercase;
        //opacity: var(--font--opacity);
        //color: var(--color--none);

      }

      // [ FOOTER ] ------------------------------------------------

      .textcontent--footer--navigation {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textcontent--footer--navigation--fontsize);
        line-height: var(--textcontent--footer--navigation--lineheight);
        text-transform: uppercase;
        color: var(--color--paragraph--footer);

        & :hover {
          color: var(--color--none);
        }
      }
      
      .textcontent--footer--header {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textcontent--footer--header--fontsize);
        line-height: var(--textcontent--footer--header--lineheight);
        color: var(--color--none);
      }

      .textcontent--footer--item {
        font-family: var(--font--OpenSans);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textcontent--footer--item--fontsize);
        line-height: var(--textcontent--footer--item--lineheight);
        color: var(--color--paragraph--footer);
      }

      // [ TABLEDATA ] ---------------------------------------------
      // [ NEW ] ---------------------------------------------------

      .textcontent--tabledata--header {
        font-family: var(--font--Roboto);
        font-size: 26px;
        font-weight: 300;
        
        color: var(--color--tabledata);
        //line-height: 1.5;
        // text-align: start;
        //color: var(--color--button--v1);
        //border: solid 1px red;
      }

      .textcontent--tabledata--item {
        font-family: var(--font--Roboto);
        font-size: 18px;
        font-weight: 300;
        line-height: 1.5;
        // text-align: start;
        color: var(--color--button--v1);
        //border: solid 1px red;
      }

      .textcontent--tabledata--item--small {
        font-family: var(--font--Roboto);
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
        // text-align: start;
        color: var(--color--button--v1);
        //border: solid 1px red;
      }

      // [ NEW ] ---------------------------------------------------
      
      .textcontent--table--header {
        font-family: var(--font--GTWalsheimMedium);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textcontent--table--header--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      .textcontent--table--header--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 600;
        font-size: var(--textcontent--table--header--rus--fontsize);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      .textcontent--table--item {
        font-family: var(--font--GTWalsheimLight);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--table--item--fontsize);
        line-height: var(--textcontent--table--item--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }

      .textcontent--table--item--rus {
        font-family: var(--font--Montserrat);
        font-style: normal;
        font-weight: 400;
        font-size: var(--textcontent--table--item--rus--fontsize);
        line-height: var(--textcontent--table--item--rus--lineheight);
        opacity: var(--font--opacity);
        color: var(--color--primary);
      }
    }
`