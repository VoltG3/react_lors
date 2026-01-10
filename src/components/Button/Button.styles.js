import styled from 'styled-components'
import { css } from 'styled-components'

const Container = css`
  display: flex;
  justify-content: ${({ theme }) => theme.position.justifyContent }
  width: 100%;
  height: auto;
  overflow: hidden;

  #button {
    display: flex;
    width: ${({ theme }) => theme.sizes.minWidth };
    height: auto;
    margin-right: var(--size--padding30);

    @media only screen and (max-width: 700px) { min-width: 190px; }
  }

  button {
    padding-top: ${({ theme }) => theme.sizes.paddingVertical };
    padding-bottom: ${({ theme }) => theme.sizes.paddingVertical };
  }

  .button {
    position: relative;
    z-index: 1;
    display: inline-block;
    min-width: inherit;
    width: inherit;
    box-sizing: border-box;
    //padding: 15px 0 15px 0;

    border-radius: var(--border--radius);
    border: 1px solid ${({ theme }) => theme.colors.borderColor };
    background: ${({ theme }) => theme.colors.backgroundColor };

    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
    & p {
      display: inline-block;
      margin-left: ${({ theme }) => theme.sizes.paragraphMarginLeft };
      color: ${({ theme }) => theme.colors.color }!important;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.backgroundHover };
      border-color: ${({ theme }) => theme.colors.backgroundHover };
      padding-left: 10px;
      box-shadow: var(--box--hover);
      transform: translateY(-2px);
    }
  }
`

const AfterBefore = css`
  .button:after, .button:before {
    content: "";
    position: absolute;
    display: block;
  }
`

const Before = css`
  .button:before {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid ${({ theme }) => theme.colors.arrowColor };
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    right: 4px;
    top: 50%;
    margin-top: -5px;
  }
`

const After = css`
  .button:after {
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-left: 0;
    border-bottom: 0;
    top: -1px;
    right: -1px;
    bottom: 0;
    width: 40px;
    background: ${({ theme }) => theme.colors.backgroundColor};
    transform-origin: bottom left;
    transform: skew(-25deg);
    z-index: -1;
    transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button:hover::after {
    background: ${({ theme }) => theme.colors.backgroundHover };
    border-color: ${({ theme }) => theme.colors.backgroundHover };
  }
`

export const Button = styled.div`
  ${ Container }
  ${ AfterBefore }
  ${ Before }
  ${ After }
`