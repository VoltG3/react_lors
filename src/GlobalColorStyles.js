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
      
      --color--default: #030303;
      --color--none: #FFFFFF;
    }
`