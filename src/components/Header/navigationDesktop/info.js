import React from 'react'
import styled from 'styled-components'
import config from '../../../config'

import { useTranslation } from 'react-i18next'

import {
    IconNavigation01,
    IconNavigation02,
    IconNavigation03
} from '../../../assets/icons'

function Info() {
    const [t] = useTranslation(["navigation"])
    const URL_01 = config.external_url.URL_01
    const p = 'textContent--header--desktop--infoline'

    return (
        <StyledHeaderSubSetInfo>
            <div className={"infoSquare"}>
                <IconNavigation01 size={16} />
                <p className={ p }>{ t("navigation_secondary.telephone") }</p>
            </div>

            <div className={"infoSquare"}>
                <IconNavigation02 size={20} />
                <p className={ p }>{ t("navigation_secondary.email") }</p>
            </div>

            <a className={""} href={ `${URL_01}`} target={"_blank"} rel={"noopener noreferrer"}>
                <div className={"infoSquare"}>
                    <IconNavigation03 size={20} />
                    <p className={ p }>{ t("navigation_secondary.e_appointment") }</p>
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