import { createGlobalStyle } from 'styled-components'

export const GlobalColorStyles = createGlobalStyle`
  :root {

    --color--list--header: #2d3436;
    --color--list--even: #F4F4F4;
    --color--list--odd: var(--color--none);

    --color--primary: #112734;
    --color--secondary: #152F3F;
    --c: #ffffff;
    --color--paragraph--footer: #828181;
    --color--paragraph--highlight: #F31850;

    --color--button--v1--background: #ffb81c;
    --color--button--v1--hover: rgb(255, 208, 105);
    /*   --color--button--v1: #262626;*/
    --color--button--v2--background: #EF5DA8;
    --color--button--v2--hover: #f587bf;
    --color--m: #112734;

    --color--line--variant--v1: #EDAE0E;
    --color--line--variant--v2: #EF5DA8;
    --color--line--variant--v3: #C20031;
    --color--line--lang: rgb(214, 214, 214);

    --color--tabledata: #373A36;
    --color--tabledata--border: #7f817e;

    --color--default: #030303;
    --color--none: #FFFFFF;

    /* color set */

    --crl--primary--dkr: #010B17;
    --crl--primary--dk: #07162C;
    --clr--primary--base: #132743;
    --crl--primary--lt: #243A5A;
    --crl--primary--ltr: #395070;

    --crl--secondary--dkr: #BC0C83;
    --crl--secondary--dk: #CA3198;
    --clr--secondary--base: #D851AC;
    --crl--secondary--lt: #E677C2;
    --crl--secondary--ltr: #F3AADB;

    --crl--neutral--dkr: #807F7F;
    --crl--neutral--dk: #ADADAD;
    --clr--neutral--base: #D9D9D9;

    --crl--accent--dkr: #926900;
    --crl--accent--dk: #BA8704;
    --clr--accent--base: #EDAE0E;
    --crl--accent--lt: #F8C441;
    --crl--accent--ltr: #FFD56B;

    --crl--attention--dkr: #C20031;
    --crl--attention--dk: #F1003C;
    --clr--attention--base: #F3184F;
    --crl--attention--lt: #F5426F;
    --crl--attention--ltr: #F76F91;

    --clr--default--ltst: #FFFFFF;
    --clr--default--dkst: #000000;
  }
`