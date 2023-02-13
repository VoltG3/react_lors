import { createGlobalStyle } from 'styled-components'

export const GlobalSizeStyles = createGlobalStyle`
    :root {

      --size--padding10: 10px;
      --size--padding20: 20px;
      --size--padding30: 30px;
      --size--padding40: 40px;
      --size--padding50: 50px;
      --size--padding60: 60px;
      --size--padding70: 70px;
      --size--padding80: 80px;
      
      --page--width: 1440px;
      --page--width100: 100%;

      --desktop--navigation--height: 75px;
      
          @media only screen and (max-width: 1500px) { :root { --page--width100: calc(100% - calc(var(--size--padding40) * 2)); }}
          @media only screen and (max-width: 700px)  { :root { --page--width100: calc(100% - calc(var(--size--padding10) * 2)); }}
      
      --tile--margin: var(--size--padding40);
      
          @media only screen and (max-width: 700px)  { :root { --tile--margin: var(--size--padding10); }}

      --list--margin: var(--size--padding30);

          @media only screen and (max-width: 700px)  { :root { --list--margin: var(--size--padding10); }}
      
      --list--line--height: 40px;
      
      --box--shadow:      rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;
      --box--hover:       0 2px 15px 0 hsla(0,0%,69%,.5);

      --border--radius: 4px;
      
      --media--desktop: flex;
      --media--mobile: none;

        @media only screen and (max-width: 700px) { 
          :root {
            --media--desktop: none;
            --media--mobile: flex; 
          }}
      
    }
`