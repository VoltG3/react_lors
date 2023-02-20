import React from 'react'
import styled from 'styled-components'
import config from '../../../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { ButtonController } from '../../Button/Button.controller'

function Covid() {
    const [t] = useTranslation(["sections", "covid"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'

    const [covidBarVisible, setCovidbarVisible] = useState(false);
    const URL_04 = config.external_url.URL_04

    const toggleInfobar = () => {
        setCovidbarVisible(!covidBarVisible)
    }

    return (
        <StyledCovid onClick={toggleInfobar}>

            <div className={`covidbar ${covidBarVisible ? 'visible' : 'hidden'}`}>
                <div className={"innerCovid"}>
                    <div><p className={ paragraph }>{ t("covid:covid")}</p></div>
                    <div><a href={ `${URL_04}` } target="_blank" rel="noopener noreferrer"> <ButtonController variant={"covid"} /></a></div>
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