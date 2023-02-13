import styled from 'styled-components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from "i18next";
import {Link03, Link04} from "../../../env";

import BTNcovid from "../../Button/temp/BTN.covid";

function Covid() {
    const [t] = useTranslation(["sections", "covid"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const [covidBarVisible, setCovidbarVisible] = useState(false);

    const toggleInfobar = () => {
        setCovidbarVisible(!covidBarVisible);
    }

    return (
        <StyledCovid onClick={toggleInfobar}>

            <div className={`covidbar ${covidBarVisible ? 'visible' : 'hidden'}`}>
                <div className={"innerCovid"}>
                    <div><p className={ paragraph }>{ t("covid:covid")}</p></div>
                    <div><a href={ Link04 } target="_blank" rel="noopener noreferrer"><BTNcovid /></a></div>
                   {/* <div><p>x</p></div>*/}
                </div>
            </div>

            <p className={"textcontent--header--desktop--infoline hoverLink"}>{ t("sections:section_header_part01") }</p>
        </StyledCovid>
    )
}

const StyledCovid = styled.div`
  
  .covidbar {
    position: absolute;
    z-index: 2;
      top: -100%;
      left: 0;
      right: 0;
    display: flex;
    justify-content: center;
      width: 100vw;
      height: var(--desktop--navigation--height);
    background: white;
    transition: top 0.5s ease-in-out;
    box-sizing: border-box;
 
    .innerCovid {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
        max-width: var(--page--width);
            width: var(--page--width100);
            height: var(--desktop--navigation--height);
      box-sizing: border-box;
      //background-color: aquamarine;
      
      /*& div:nth-child(3) {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: auto;
        height: auto;
      }*/
      
      & div {
        //border: dotted 1px blue;
      }
    }
  }

  .covidbar.visible {
    top: 0;
  }

  .covidbar.hidden {
    top: -100%;
  }
`

export default Covid