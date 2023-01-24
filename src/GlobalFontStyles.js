import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
  :root {
    --font--primary: "Montserrat", sans-serif; // var(--font--primary)
    --font--secondary: "Open Sans", sans-serif; // var(--font--secondary)
    --font--third: "Crimson Text", serif; // var(--font--third)

    --font--Montserrat: "Montserrat", sans-serif; 
    
    --font--GTWalsheimBold: "GTWalsheimBold", sans-serif;
    --font--GTWalsheimMedium: "GTWalsheimMedium", sans-serif;
    --font--GTWalsheimLight: "GTWalsheimLight", sans-serif;
    --font--opacity: 0.7;
  }

  // // /// //
  //  PAGE  //
  // //  // //
  
  .textcontent--paragraph {
    font-family: var(--font--GTWalsheimLight);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(1.458vw, 18px), 21px);
    line-height: min(max(1.806vw, 20px), 26px);
    opacity: var(--font--opacity);
    color: var(--color--default);
  }

          .textcontent--paragraph--rus {
            font-family: var(--font--Montserrat);
            font-style: normal;
            font-weight: 400;
            font-size: min(max(1.458vw, 18px), 21px);
            line-height: min(max(1.806vw, 20px), 26px);
            opacity: var(--font--opacity);
            color: var(--color--default);
          }
  
  .textcontent--header1 {
    font-family: var( --font--GTWalsheimMedium);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(2.5vw, 18px), 36px);
    line-height: min(max(3.056vw, 22px), 44px);
    //text-transform: uppercase;
    white-space: pre-wrap;
    opacity: var(--font--opacity);
    color: var(--color--secondary);
  }  h1, p {
      padding-left: 0!important;
    }

          .textcontent--header1--rus {
            font-family: var(--font--Montserrat);
            font-style: normal;
            font-weight: 400;
            font-size: min(max(2.5vw, 18px), 36px);
            line-height: min(max(3.056vw, 22px), 44px);
            text-transform: uppercase;
            //white-space: pre-wrap;
            opacity: var(--font--opacity);
            color: var(--color--secondary);
          }  h1, p {
      padding-left: 0!important;
    }

  .textcontent--semiheader {
    font-family: var( --font--GTWalsheimMedium);
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    //font-size: min(max(2.5vw, 18px), 36px);
    line-height: min(max(3.056vw, 22px), 44px);
    text-transform: uppercase;
    //text-transform: uppercase;
    white-space: pre-wrap;
    opacity: var(--font--opacity);
    color: var(--color--secondary);
  }

  .textcontent--semiheader--rus {
    font-family: var(--font--Montserrat);
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    //font-size: min(max(2.5vw, 18px), 36px);
    line-height: min(max(3.056vw, 22px), 44px);
    text-transform: uppercase;
    //white-space: pre-wrap;
    opacity: var(--font--opacity);
    color: var(--color--secondary);
  }
  
  // // // // //
  //  TABLES  //
  // // // // //
  
  .textcontent--table--item {
    font-family: var(--font--GTWalsheimLight);
    font-style: normal;
    //font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    opacity: var(--font--opacity);
    color: var(--color--primary);
  }

          .textcontent--table--item--rus {
            font-family: var(--font--Montserrat);
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            opacity: var(--font--opacity);
            color: var(--color--primary);
          }

  .textcontent--table--header {
    font-family: var(--font--GTWalsheimMedium);
    font-style: normal;
    //font-weight: 600;
    //text-transform: uppercase;
    font-size: 28px;
    opacity: var(--font--opacity);
    color: var(--color--primary);

    @media only screen and (max-width: 700px) {
      //font-weight: 400;
      font-size: 18px;
      text-transform: uppercase;
    }
  }

          .textcontent--table--header--rus {
            font-family: var(--font--Montserrat);
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            opacity: var(--font--opacity);
            color: var(--color--primary);
        
            @media only screen and (max-width: 700px) {
              font-weight: 400;
              font-size: 18px;
              text-transform: uppercase;
            }
          }

  // // /// // //
  //  BUTTONS  //
  // // /// // //

  .textcontent--buttonV1 {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(1.458vw, 18px), 18px);
    line-height: min(max(1.806vw, 20px), 26px);
    opacity: var(--font--opacity);
    color: var(--color--default);
  }
  
  
  /* ---------------------------------------------- */
  .textcontent--header--desktop--infoline {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    opacity: 0.7;
    color: var(--clr--default--dkst);
  }

  .textcontent--header--desktop--navigation {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 400;
    // font-size: 18px;
    font-size: 16px;
    //line-height: 25px;
    // display: flex;
    //align-items: center;
    // letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.7;
    color: var(--clr--primary--base);
  }

  .textcontent--header--desktop--languages {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    //line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--clr--primary--base);
  }
  
  // ------------------------------------------------
  
  
  //h1 {
  //  font-family: var(--font--primary);
  //  font-style: normal;
  //  font-weight: 400;
  //  font-size: min(max(2.5vw, 18px), 36px);
  //  line-height: min(max(3.056vw, 22px), 44px);
  //      text-transform: uppercase;
  //      opacity: var(--font--opacity);
  //      color: var(--color--secondary);
 // }

  .textcontent--paragraph_older {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(1.458vw, 18px), 21px);
    line-height: min(max(1.806vw, 20px), 26px);
        opacity: var(--font--opacity);
        color: var(--color--default);
  }

  .textcontent--small--header1 {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    opacity: var(--font--opacity);
    color: var(--color--primary);

    @media only screen and (max-width: 700px) {
      font-weight: 400;
      font-size: 18px;
      text-transform: uppercase;
    }
  }

  .textcontent--small--item1 {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    opacity: var(--font--opacity);
    color: var(--color--primary);
  }
  
  .textcontent--section--header {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 59px;
    opacity: var(--font--opacity);
    color: var(--color--secondary);
  }
  


  .textcontent--paragraph_older--header--red {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    opacity: var(--font--opacity);
    color: var(--color--highlight);
  }
  
  

  .textcontent--paragraph_older--highlight {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    opacity: var(--font--opacity);
    color: var(--color--highlight);
  }
  
  .textcontent--paragraph_older--bold {
    // rm
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 500;
    font-size: min(max(1.458vw, 18px), 21px);
    line-height: min(max(1.806vw, 20px), 26px);
        opacity: var(--font--opacity);
        color: var(--color--default);
  }
  
  .textcontent--paragraph_older--2 {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
  }
  
  .textcontent--list--header {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 600;
    font-size: min(max(1.389vw, 16px), 20px);
    //line-height: 29px;
    text-transform: uppercase;
    color: var(--color--none);
  }
  
  .textcontent--list--item {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    opacity: var(--font--opacity);
    color: var(--color--secondary);
  }

  

  .textcontent--timeTable {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    opacity: var(--font--opacity);
    color: var(--color--primary);
  }
  
  // // // // //
  //  HEADER  //
  // // // // //

  .textcontent--header--firstline {
    font-family: var(--font--third);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(2.778vw, 25px), 40px);
    //line-height: 52px;
    display: flex;
    align-items: center;
    opacity: var(--font--opacity);
    color: var(--color--headercolor);
  }

  .textcontent--header--secondline {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(1.389vw, 18px), 20px);
    //line-height: 27px;
    opacity: var(--font--opacity);
    color: var(--color--headercolor);
  }
  

  
  //
  // FOOTER
  //

  .textcontent--paragraph_older--footer {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    //letter-spacing: 0.08em;
    color: var(--color--paragraph--footer);
  }

  .textcontent--header--footer {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    //letter-spacing: 0.08em;
    color: var(--color--none);
  }

  .textcontent--footer--nav {
    /* Lors --> f paragraph */
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    //letter-spacing: 0.08em;
    color: var(--color--paragraph--footer);
    
    & :hover {
      color: var(--color--none);
    }
  }
  
`
