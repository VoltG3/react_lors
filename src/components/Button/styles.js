import styled from 'styled-components'
import { css } from 'styled-components'

const Container = css`
  display: flex;
  justify-content: flex-start;
    width: auto;
    height: auto;
`

const AfterBefore = css`
  button:after, .button2:before {
    content: "";
    position: absolute;
    display: block;
  }
`

const Button = css`
  button {
    position: relative;
    z-index: 1;
    display: inline-block;

    & :hover {
      color: var(--color--none);
    }

    min-width: 150px;
    width: inherit;
    box-sizing: border-box;
    padding: 2px 0 2px 0;
    // border: solid 10px red;
    border-radius: 5px;

    border: 1px solid var(--color--button--v1--background);
    
   /* background: var(--color--button--v2--background);*/
    
    background-color: ${({ variant }) => {
      if (variant === 'covid')  return 'var(--color--button--v2--background);'
      else if (variant === 'mobile') return 'var(--color--m);'
      else return 'var(--color--button--v1--background);'
    }}
    
    transition:
        background .5s linear,
        border-color ease-in .5s,
        padding-left ease-in .5s;
    & p {
      display: inline-block;
      margin-left: -40%;
      //border: solid 1px red;
      padding-left: 0!important;
      padding-right: 0!important;

      color: white!important;
    }

    &:hover {
      cursor: pointer;
      background: var(--color--button--v2--hover);
      border-color: var(--color--button--v2--hover);
      padding-left: 30px;
      transition:
          background .2s linear,
          border-color ease-out .2s,
          padding-left ease-out .2s;
    }
  }
`

const Before = css`
  button:before {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid var(--color--default);
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    right: 4px;
    top: 50%;
    margin-top: -5px;
  }
`

const After = css`
  button:after {
    border: 1px solid var(--color--button--v2--background);
    border-left: 0;
    border-bottom: 0;
    top: 0px;
    right: -1px;
    bottom: 0;
    width: 40px;
    background: var(--color--button--v2--background);
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

  button:hover::after {
    background: var(--color--button--v2--hover);
    border-color: var(--color--button--v2--hover);
    transition:
        background .2s linear,
        border-color ease-out .2s;
  }
`

export const StyledButton = styled.div`
  ${ Container }
  ${ Button }
  ${ AfterBefore }
  ${ Before }
  ${ After }
`