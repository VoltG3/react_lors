import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
  :root {
    --font--primary: "Montserrat", sans-serif; // var(--font--primary)
    --font--secondary: "Open Sans", sans-serif; // var(--font--secondary)
    --font--third: "Crimson Text", serif; // var(--font--third)
    --font--opacity: 0.7;
  }

  // // // // //
  //  HEADER  //
  // // // // //
  
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
    font-weight: 700;
    font-size: 14px;
    //line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--clr--primary--base);
  }
  
  // ------------------------------------------------
  
  
  h1 {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(2.5vw, 18px), 36px);
    line-height: min(max(3.056vw, 22px), 44px);
        text-transform: uppercase;
        opacity: var(--font--opacity);
        color: var(--color--secondary);
  }

  .textcontent--paragraph {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: min(max(1.458vw, 18px), 21px);
    line-height: min(max(1.806vw, 20px), 26px);
        opacity: var(--font--opacity);
        color: var(--color--default);
  }

  .textcontent--small--header {
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

  .textcontent--small--item {
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
  


  .textcontent--paragraph--header--red {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    opacity: var(--font--opacity);
    colo#e8e8e8r: var(--color--highlight);
  }
  
  

  .textcontent--paragraph--highlight {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    opacity: var(--font--opacity);
    color: var(--color--highlight);
  }
  
  .textcontent--paragraph--bold {
    // rm
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 500;
    font-size: min(max(1.458vw, 18px), 21px);
    line-height: min(max(1.806vw, 20px), 26px);
        opacity: var(--font--opacity);
        color: var(--color--default);
  }
  
  .textcontent--paragraph--2 {
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

  .textcontent--paragraph--footer {
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
