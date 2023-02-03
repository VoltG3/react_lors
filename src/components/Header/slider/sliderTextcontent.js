import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

import {introHeader} from "../../../env";
import BTNPrimary from "../../Button/BTN.primary";
import React from "react";
import {Link} from "react-router-dom";

function SliderTextcontent() {
    const [t] = useTranslation(["sections", "common"])
    const paragraph = i18n.language === 'ru' ? 'textcontent--paragraph--rus' : 'textcontent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textcontent--h1--rus' : 'textcontent--h1'

    return (
      <div style={{
          position: 'absolute',
          zIndex: '3',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 'var(--page--width)',
          width: 'var(--page--width100)',
          height: 'inherit'
      }}>
          <div style={{ margin: '80px 0 0 0' }}>
              <p className={ h1 }>{ introHeader }</p>
              <p className={ paragraph }  style={{ paddingBottom: '120px'}}>{ t("sections:section_header_part06") }</p>

              <Link to={"contacts"}>
                  <BTNPrimary
                      label={"btn_appointment_x"}
                      minWidth={"390px"}
                      paragraphMarginLeft={"-20%"}
                      paddingVertical={"10px"}
                      justifyContent={"flex-start"}
                  />
              </Link>

          </div>
      </div>
    )
}

export default SliderTextcontent