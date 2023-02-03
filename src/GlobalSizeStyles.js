import { createGlobalStyle } from 'styled-components'

export const GlobalSizeStyles = createGlobalStyle`
    :root {
      
      --page--width: 1440px;
      --page--width100: 100%;

      --size--padding20: 20px;
      --size--padding30: 30px;
      --size--padding40: 40px;
      --size--padding50: 50px;
      --size--padding60: 60px;
      --size--padding70: 70px;
      --size--padding80: 80px;

      --list--line--height: 40px;
      
      --border--radius: 4px;
      
      --box--shadow:      rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;
      --box--hover:       0 2px 15px 0 hsla(0,0%,69%,.5);
      
    }
`