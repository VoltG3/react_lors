import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
  :root {
    --font--primary: "Montserrat", sans-serif; // var(--font--primary)
    --font--secondary: "Open Sans", sans-serif; // var(--font--secondary)
    --font--third: "Crimson Text", serif; // var(--font--third)
    --font--opacity: 0.7;
  }
  
  .textcontent--header--firstline {
    font-family: var(--font--third);
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 52px;
    display: flex;
    align-items: center;
    opacity: var(--font--opacity);
    color: var(--color--headercolor);
  }
  
  .textcontent--header--secondline {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    opacity: var(--font--opacity);
    color: var(--color--headercolor);
  }
  
  .textcontent--index--header {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    text-transform: uppercase;
    opacity: var(--font--opacity);
    color: var(--color--secondary);
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
  
  .textcontent--paragraph--header {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    opacity: var(--font--opacity);
    color: var(--color--primary);
  }

  .textcontent--paragraph--header--red {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    opacity: var(--font--opacity);
    color: var(--color--highlight);
  }
  
  .textcontent--paragraph {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 26px;
    opacity: var(--font--opacity);
    color: var(--color--default);
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
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 26px;
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
    font-size: 20px;
    line-height: 29px;
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

  .textcontent--small--header {
    font-family: var(--font--primary);
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    //line-height: 29px;
    color: var(--color--primary);
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

    color: var(--font--secondary);

    & :hover {
      color: yellow;
    }
  }
  
  //
  // HEADER
  //
  
  .textcontent--header--nav--btn--over {
    /* Lors --> nav btn over */
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    opacity: 0.7;
    color: var(--clr--default--dkst);
  }
  
  .textcontent--header--nav--btn--under {
    /* Lors --> nav btn under */
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 400;
   // font-size: 18px;
    font-size: 14px;
    line-height: 25px;
    display: flex;
    align-items: center;
   // letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.7;
    color: var(--clr--primary--base);
  }
  
  .textcontent--header--nav--lang {
    /* L - btn lang */
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--clr--primary--base);
  }
  
  //
  // FOOTER
  //
  
  
`
