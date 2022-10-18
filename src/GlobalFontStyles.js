import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
  :root {
    --font--primary: "Montserrat", sans-serif; // var(--font--primary)
    --font--secondary: "Open Sans", sans-serif; // var(--font--secondary)
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
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1em;
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
    letter-spacing: 0.08em;
    
    color: #828181;
    
    & :hover {
      color: yellow;
    }
  }
`
