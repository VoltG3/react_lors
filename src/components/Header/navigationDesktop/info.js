import React from 'react'
import styled from 'styled-components'
import config from '../../../config'

import { useTranslation } from 'react-i18next'

import Covid from './covid'

function Info() {
    const [t] = useTranslation(["sections"])
    const { icons_navigation } = config
    const URL_01 = config.external_url.URL_01
    const p = 'textcontent--header--desktop--infoline'

    return (
        <StyledHeaderSubSetInfo>

            <Covid />

            <div className={"infoSquare"}>
                <img src={ icons_navigation.icon_T } alt={"icon"} style={{ width: '20px', height: '18px'}}/>
                <p className={ p }>{ t("sections:section_header_part02") }</p>
            </div>

            <div className={"infoSquare"}>
                <img src={ icons_navigation.icon_M } alt={"icon"} style={{ width: '20px', height: '18px'}}/>
                <p className={ p }>{ t("sections:section_header_part03") }</p>
            </div>

            <a className={""} href={ `${URL_01}`} target={"_blank"} rel={"noopener noreferrer"}>
                <div className={"infoSquare"}>
                    <img src={ icons_navigation.icon_A } alt={"icon"} style={{ width: '20px', height: '18px'}}/>
                    <p className={ p }>{ t("sections:section_header_part04") }</p>
                </div>
            </a>

        </StyledHeaderSubSetInfo>
    )
}

const StyledHeaderSubSetInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
    width: 100%;
    height: auto;
  padding-top: 5px;
  //border: solid 1px red;
  & div:first-child {
    & p:hover {
      cursor: pointer;
      color: var(--clr--accent--base);
    }
  }
  
  & div {
    padding-right: 30px;
  }

  @media only screen and (max-width: 1500px) {
   & div {
     padding-right: 10px;
   }
  }

  @media only screen and (max-width: 1220px) {
    & div {
      padding-right: 5px;
    }
  }
  .infoSquare {
    display: flex;
    flex-direction: row;
    
    & img {
      margin-right: 10px;
    }
    
    .hoverLink:hover {
      color: var(--clr--accent--base);
    }
  }
`

export default Info