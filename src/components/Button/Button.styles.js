import styled from 'styled-components'
import { css } from 'styled-components'

const Container = css`
  display: flex;
  justify-content: ${({ theme }) => theme.position.justifyContent }
    width: 100%;
    height: auto;
    overflow: hidden;

    button {
        padding-top: ${({ theme }) => theme.sizes.paddingVertical };
        padding-bottom: ${({ theme }) => theme.sizes.paddingVertical };
    }
  
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
`

export const Button = styled.div`
  ${ Container }
  ${ AfterBefore }
  ${ Before }
  ${ After }
`