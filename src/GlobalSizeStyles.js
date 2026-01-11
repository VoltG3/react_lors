import { createGlobalStyle } from 'styled-components'

export const GlobalSizeStyles = createGlobalStyle`
    :root {

      --size--padding30: 30px;
      --size--padding40: 40px;
      --size--padding60: 60px;
      
      --page--width: 1440px;

      --list--margin: 30px;

      @media only screen and (max-width: 700px)  {
        --list--margin: 20px;
      }
      
      --list--line--height: 40px;
      
      --box--shadow:      rgba(0, 0, 0, 0.08) 0px 4px 12px;
      --box--hover:       rgba(0, 0, 0, 0.15) 0px 8px 24px;

      --border--radius: 0;
      
      --media--desktop: flex;
      --media--mobile: none;

      @media only screen and (max-width: 700px) { 
        --media--desktop: none;
        --media--mobile: flex; 
      }
      
    }
`