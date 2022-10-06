import { createGlobalStyle } from 'styled-components'

export const GlobalColorStyles = createGlobalStyle`
    :root {
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