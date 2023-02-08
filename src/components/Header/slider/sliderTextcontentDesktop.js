import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

import {introHeader} from "../../../env";
import BTNPrimary from "../../Button/BTN.primary";
import React from "react";
import {Link} from "react-router-dom";

function SliderTextcontentDesktop(props) {
    const [t] = useTranslation(["sections", "common"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h0--rus' : 'textcontent--h0'

    return (
      <div style={{
          position: 'absolute',
          zIndex: '3',
          display: props.media,
          flexDirection: 'column',
          maxWidth: 'var(--page--width)',
          width: 'var(--page--width100)',
          height: 'inherit'

      }}>
          <Temporary>
              <p className={ h1 }>{ introHeader }</p>
              <p className={ paragraph }>{ t("sections:section_header_part06") }</p>
          </Temporary>

          <Link to={"contacts"}>
              <BTNPrimary
                  label={"btn_contacts"}
                  minWidth={"390px"}
                  paragraphMarginLeft={"-20%"}
                  paddingVertical={"10px"}
                  justifyContent={"flex-start"}
              />
          </Link>
      </div>
    )
}

const Temporary = styled.div`
  
  display: flex;
  flex-direction: column;
    width: 100%;
    height: 100%;
  margin-top: 80px;
  padding-bottom: 10%;
  
  & div:first-child {
    margin-top: 80px;
  }

  @media only screen and (max-width: 900px) {
    margin-top: 40px;
    
    & p:first-child {
      padding-bottom: 10px;
    }

    & div:first-child {
      margin-top: 20px;
    }
  }
`

export default SliderTextcontentDesktop