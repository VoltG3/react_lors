import { createGlobalStyle } from 'styled-components'

export const GlobalFontStyles = createGlobalStyle`
    /* [ BUTTON ] */
    .textContent--button {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 1.5;
        color: #262626;
    }
        
    /* [ SLIDER ] */
    .textContent--h0 {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: min(max(2.5vw, 22px), 36px);
        line-height: min(max(3.056vw, 24px), 44px) !important;
        white-space: pre-wrap;
        opacity: 0.7;
        color: #152F3F;
    }

    .textContent--h0--rus {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: min(max(2.5vw, 22px), 36px);
        line-height: min(max(3.056vw, 24px), 44px) !important;
        text-transform: uppercase;
        opacity: 0.7;
        color: #152F3F;
    }

    /* [ TEXTCONTENT ] */
    .textContent--h1 {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: min(max(2.5vw, 20px), 36px);
        line-height: 1.4 !important;
        white-space: pre-wrap;
        opacity: 0.7;
        color: #152F3F;
    }

    .textContent--h1--rus {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: min(max(2.5vw, 20px), 36px);
        line-height: 1.4 !important;
        text-transform: uppercase;
        opacity: 0.7;
        color: #152F3F;
    }

    .textContent--paragraph {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: min(max(1.2vw, 16px), 18px);
        line-height: 1.6;
        opacity: 0.7;
        color: #030303;
    }

    .textContent--paragraph--rus {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: min(max(1.2vw, 16px), 18px);
        line-height: 1.6;
        opacity: 0.7;
        color: #030303;
    }

    .textContent--h2 {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: min(max(1.8vw, 18px), 24px);
        line-height: 1.5;
        text-transform: uppercase;
        opacity: 0.7;
        color: #152F3F;
    }

    .textContent--h2--rus {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: min(max(1.8vw, 18px), 24px);
        line-height: 1.5;
        text-transform: uppercase;
        opacity: 0.7;
        color: #152F3F;
    }

    .textContent--h3 {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 1.5;
        opacity: 0.7;
    }
        
    /* [ TABLEDATA ] */
    .textContent--tabledata--header {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        font-weight: 500;
        line-height: 1.4;
        text-transform: uppercase;
        color: #373A36;

        @media only screen and (max-width: 700px) {
            font-size: 18px;
        }
    }

    .textContent--tabledata--item--small {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        font-weight: 300;
        line-height: 1.6;
        color: #262626;

        @media only screen and (max-width: 700px) {  
            font-size: 14px;
        }
    }

    /* [ LIST ] */
    .textContent--list--header {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: min(max(1.389vw, 16px), 20px);
        line-height: 1.4;
        text-transform: uppercase;
        color: #FFFFFF;

        @media only screen and (max-width: 700px) {
            font-weight: 400;
            line-height: 1.3;
        }
    }

    .textContent--list--item {
        font-family: "Montserrat", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: min(max(1.250vw, 14px), 16px);
        line-height: 1.6;
        opacity: 0.7;
        color: #152F3F;
    }  

    /* [ FOOTER ] */
    .textContent--footer--head {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }

    .textContent--footer--item {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #828181;
    }
`