import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

import {introHeader} from "../../../env";
import BTNPrimary from "../../Button/temp/BTN.primary";
import React from "react";
import {Link} from "react-router-dom";
import BTNSecondary from "../../Button/temp/BTN.secondary";
import BTNSecondaryMobile from "../../Button/temp/BTN.secondaryMobile";

function SliderTextcontentMobile(props) {
    const [t] = useTranslation(["sections", "common"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h0--rus' : 'textcontent--h0'

    return (
        <div style={{

            display: props.media,
            flexDirection: 'column',
            maxWidth: 'var(--page--width)',
            width: 'var(--page--width100)',
            height: 'auto'
        }}>
            <Temporary3>
                <p className={ h1 }>{ introHeader }</p>
                <p style={{ paddingTop: '7px'}} className={ paragraph }>{ t("sections:section_header_part06") }</p>
            </Temporary3>

           <Link to={"contacts"}>
               <BTNSecondaryMobile />
            </Link>
        </div>
    )
}

const Temporary3 = styled.div`
  display:flex;
  flex-direction: column;
    width: 100%;
    height: auto;
  margin-top: 20px;
  padding-bottom: 20px;
  

  @media only screen and (max-width: 900px) {
   
  }
`

export default SliderTextcontentMobile