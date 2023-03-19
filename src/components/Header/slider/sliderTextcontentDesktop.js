import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import config from '../../../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { ButtonController } from '../../Button/Button.controller'

function SliderTextcontentDesktop(props) {
    const [t] = useTranslation(["chapter_header", "common"])
    const introHeader = config.common.introHeader

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
              <p className={ paragraph }>{ t("part_01") }</p>
          </Temporary>

          <Link to={"contacts"}>
              <ButtonController variant={"sliderDesktop"} />
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