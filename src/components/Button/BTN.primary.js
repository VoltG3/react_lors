import styled from 'styled-components'
import React from "react";

import { useTranslation } from 'react-i18next'

function BTNPrimary(props) {
    const [t] = useTranslation(["common", "sections"])
    const paragraphMargin = props.paragraphMarginLeft
    const btn_contacts = <p style={{ marginLeft: paragraphMargin }} className={"textcontent--button"}>{ t("btn_variant04") }</p>
    const btn_appointment = <p style={{ marginLeft: paragraphMargin }} className={"textcontent--button"}>{ t("common:eapointment") }</p>

    return (
        <StyledButtonV1 style={{ justifyContent: props.justifyContent }}>
            <div className={"innerButton"} style={{ width: props.minWidth }}>
                <button style={{
                    paddingTop: props.paddingVertical,
                    paddingBottom: props.paddingVertical
                }} className={"button"}>{
                    props.label === "btn_contacts"
                        ? btn_contacts
                        : btn_appointment
                }</button>
            </div>
        </StyledButtonV1>
    )
}
/*
*   <BTNPrimary
                label={"btn_appointment"}
                minWidth={"190px"}
                paragraphMarginLeft={"-25%"}
                paddingVertical={"5px"}
                justifyContent={"flex-start"}
            />
* */

const StyledButtonV1 = styled.div`
  display: flex;
  //justify-content: flex-end;
    width: 100%;
    height: auto;
  overflow: hidden;
 // border: solid 1px red;
  
  .innerButton {
    display: flex;
    //width: 100%!important;
    @media only screen and (max-width: 700px) { min-width: 190px; }
    height: auto;
    margin-right: var(--size--padding30);
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
    
    border: 1px solid var(--color--button--v1--background);
    background: var(--color--button--v1--background);
    transition:
            background .5s linear,
            border-color ease-in .5s,
            padding-left ease-in .5s;
    & p {
      display: inline-block;
      //margin-left: -25%;
      //border: solid 1px red;
      
    }

    &:hover {
      cursor: pointer;
      background: var(--color--button--v1--hover);
      //background: var(--c);
      border-color: var(--color--button--v1--hover);
      padding-left: 30px;
      transition:
              background .2s linear,
              border-color ease-out .2s,
              padding-left ease-out .2s;
    }
  }

  .button:after, .button:before {
    content: "";
    position: absolute;
    display: block;
  }

  .button:before {
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

  .button:after {
    border: 1px solid var(--color--button--v1--background);
    border-left: 0;
    border-bottom: 0;
    top: -1px;
    right: -1px;
    bottom: 0;
    width: 40px;
    background: var(--color--button--v1--background);
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
    background: var(--color--button--v1--hover);
    border-color: var(--color--button--v1--hover);
    transition:
            background .2s linear,
            border-color ease-out .2s;
  }
`

export default BTNPrimary