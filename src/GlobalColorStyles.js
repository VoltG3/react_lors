import { createGlobalStyle } from 'styled-components'

export const GlobalColorStyles = createGlobalStyle`
  :root {

    --color--list--header: #2d3436;
    --color--list--even: --color--none;
    --color--list--odd: #FBF9F9;

    --color--primary: #112734;
    --color--secondary: #152F3F;

    --color--paragraph--footer: #828181;
    --color--highlight: #F31850;

    --color--button--v1--background: #ffb81c;
    --color--button--v1--hover: rgb(255, 208, 105);
    --color--button--v1: #262626;
    --color--button--v2--background: #EF5DA8;
    --color--button--v2--hover: #f587bf;

    --color--line--variant--v1: #EDAE0E;
    --color--line--variant--v2: #EF5DA8;
    --color--line--variant--v3: #C20031;

    --color--tabledata: #373A36;
    --color--tabledata--border: #7f817e;

    --color--default: #030303;
    --color--none: #FFFFFF;
  }
`