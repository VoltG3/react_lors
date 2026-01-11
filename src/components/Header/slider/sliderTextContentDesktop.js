import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import config from '../../../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { ButtonController } from '../../Button/Button.controller'

function SliderTextContentDesktop(props) {
    const [t] = useTranslation(["chapter_header"])
    const introHeader = config.common.introHeader

    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textContent--h0--rus' : 'textContent--h0'

    return (
      <SliderContentWrapper $media={props.media}>
          <Temporary>
              <p className={ h1 }>{ introHeader }</p>
              <p className={ paragraph }>{ t("part_01") }</p>
          </Temporary>

          <Link to={"contacts"}>
              <ButtonController variant={"sliderDesktop"} />
          </Link>
      </SliderContentWrapper>
    )
}

const SliderContentWrapper = styled.div`
  position: absolute;
  z-index: 3;
  display: ${props => props.$media};
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  height: inherit;
  padding: 0 40px;
  box-sizing: border-box;

  @media only screen and (max-width: 1220px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: 700px) {
    padding: 0 20px;
  }
`

const Temporary = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 140px;
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

export default SliderTextContentDesktop