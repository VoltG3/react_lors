import { css } from 'styled-components'

export const ListContainer = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
    width: 100%;
    height: auto;
    white-space: pre-wrap;
  border-radius: var(--border--radius);
  box-shadow: var(--box--shadow);

      &:hover {
        transition: box-shadow .3s linear;
        box-shadow: var(--box--hover);
      }

      & > div {
        display: flex;
        align-items: center;
            width: 100%;
        min-height: var(--list--line--height);
      }
    
      & > div:nth-child(even) {
        background: var(--color--list--even);
      }
    
      & > div:nth-child(odd) {
        background: var(--color--list--odd);
      }
    
      & > div:nth-last-child(-n + 1) {
        border-bottom-left-radius: var(--border--radius);
        border-bottom-right-radius: var(--border--radius);
      }
    
      & p {
        margin: 8px var(--list--margin);
        
        @media only screen and (min-width: 1024px) {
          margin: 12px 45px;
        }

        @media only screen and (max-width: 700px) {
          margin: 6px var(--list--margin);
        }
      }
`