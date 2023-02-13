import styled from 'styled-components'
import React from "react";

import { useTranslation } from 'react-i18next'

function BTNmobile() {
    const [t] = useTranslation(["common", "sections"])

    return (
        <StyledButtonV4>
            <button className={"button2"}><p className={"textcontent--button"}>{ t("btn_variant02") }</p></button>
        </StyledButtonV4>
    )
}

const StyledButtonV4 = styled.div`
  display: flex;
  justify-content: flex-start;
  width: auto;
  height: auto;
  //border: solid 1px red;
  
  .button2 {
    position: relative;
    z-index: 1;
    display: inline-block;& :hover {
    color: var(--color--none);
  }
    min-width: 350px;
    width: inherit;
    box-sizing: border-box;
    padding: 5px 0 5px 0;
   // border: solid 10px red;
    border-radius: 5px;
    
    border: 1px solid white;
    background: var(--color--m);
    transition:
            background .5s linear,
            border-color ease-in .5s,
            padding-left ease-in .5s;
    & p {
      display: inline-block;
      margin-left: -70%;
      //border: solid 1px red;
      padding-left: 0!important;
      padding-right: 0!important;
      
      color: white;
    }

    &:hover {
      cursor: pointer;
      background: var(--color--button--v2--hover);
      //background: var(--c);
      border-color: var(--color--button--v2--hover);
      padding-left: 30px;
      transition:
              background .2s linear,
              border-color ease-out .2s,
              padding-left ease-out .2s;
    }
  }

  .button2:after, .button2:before {
    content: "";
    position: absolute;
    display: block;
  }

  .button2:before {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid white;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    right: 4px;
    top: 50%;
    margin-top: -6px;
  }

  .button2:after {
    border: 1px solid white;
    border-left: 0;
    border-bottom: 0;
    top: -1px;
    right: 1px;
    bottom: 1px;
    width: 40px;
    background: #112734;
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

  .button2:hover::after {
    background: var(--color--button--v2--hover);
    border-color: var(--color--button--v2--hover);
    transition:
            background .2s linear,
            border-color ease-out .2s;
  }
`

export default BTNmobile