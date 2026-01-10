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
      
      --spacing--xs: 0.5rem;
      --spacing--sm: 1rem;
      --spacing--md: 2rem;
      --spacing--lg: 4rem;
      --spacing--xl: 8rem;
      
      @media only screen and (max-width: 1500px) {
        --page--width100: calc(100% - 80px);
      }
      @media only screen and (max-width: 700px)  {
        --page--width100: calc(100% - 40px);
      }
      
      --tile--margin: 40px;
      
      @media only screen and (max-width: 700px)  {
        --tile--margin: 20px;
      }

      --list--margin: 30px;

      @media only screen and (max-width: 700px)  {
        --list--margin: 20px;
      }
      
      --list--line--height: 40px;
      
      --box--shadow:      rgba(0, 0, 0, 0.08) 0px 4px 12px;
      --box--hover:       rgba(0, 0, 0, 0.15) 0px 8px 24px;

      --border--radius: 8px;
      
      --media--desktop: flex;
      --media--mobile: none;

      @media only screen and (max-width: 700px) { 
        --media--desktop: none;
        --media--mobile: flex; 
      }
      
    }
`