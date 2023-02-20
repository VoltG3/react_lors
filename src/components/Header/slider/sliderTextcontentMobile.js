import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import config from '../../../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { ButtonController } from '../../Button/Button.controller'

function SliderTextcontentMobile(props) {
    const [t] = useTranslation(["sections", "common"])
    const introHeader = config.common.introHeader

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
               <ButtonController variant={"sliderMobile"} />
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
`

export default SliderTextcontentMobile