import { createGlobalStyle } from 'styled-components'

export const GlobalColorStyles = createGlobalStyle`
  :root {

    --color--list--header: #2d3436;
    --color--list--even: #F9F9F9;
    --color--list--odd: #FFFFFF;

    --color--primary: #112734;
    --color--secondary: #152F3F;
    --color--paragraph--footer: #828181;
    --color--paragraph--highlight: #F31850;

    --color--button--v1--background: #FFB81C;
    --color--button--v1--hover: #FFC94D;
    --color--button--v1: #262626;
    --color--button--v2--background: #EF5DA8;
    --color--button--v2--hover: #F482BC;
    --color--m: #112734;

    --color--line--variant--v1: #EDAE0E;
    --color--line--variant--v2: #EF5DA8;
    --color--line--variant--v3: #C20031;
    --color--line--lang: rgb(214, 214, 214);

    --color--tabledata: #373A36;

    --color--default: #030303;
    --color--none: #FFFFFF;

    --clr--primary--base: #132743;
    --clr--accent--base: #EDAE0E;
  }
`