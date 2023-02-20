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
  
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.background };
    background: ${({ theme }) => theme.colors.background };
    
    transition:
            background .5s linear,
            border-color ease-in .5s,
            padding-left ease-in .5s;
    & p {
      display: inline-block;
      margin-left: ${({ theme }) => theme.sizes.paragraphMarginLeft };
      color: ${({ theme }) => theme.colors.color }!important; /**/
    }

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.backgroundHover };
      border-color: ${({ theme }) => theme.colors.backgroundHover };
      padding-left: 30px;
      transition:
              background .2s linear,
              border-color ease-out .2s,
              padding-left ease-out .2s;
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
    border: 1px solid ${({ theme }) => theme.colors.background};
    border-left: 0;
    border-bottom: 0;
    top: -1px;
    right: -1px;
    bottom: 0;
    width: 40px;
    background: ${({ theme }) => theme.colors.background};
    -webkit-transform-origin: bottom left;
    -moz-transform-origin: bottom left;
    transform-origin: bottom left;
    -webkit-transform: skew(-25deg);
    -ms-transform: skew(-25deg);
    transform: skew(-25deg);
    z-index: -1;
    transition:
            background .5s linear,
            border-color ease-in .5s;
  }

  .button:hover::after {
    background: ${({ theme }) => theme.colors.backgroundHover };
    border-color: ${({ theme }) => theme.colors.backgroundHover };
    transition:
            background .2s linear,
            border-color ease-out .2s;
  }
`

export const Button = styled.div`
  ${ Container }
  ${ AfterBefore }
  ${ Before }
  ${ After }
`