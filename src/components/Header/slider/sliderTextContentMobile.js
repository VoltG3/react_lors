import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import config from '../../../config'

import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

import { ButtonController } from '../../Button/Button.controller'

function SliderTextContentMobile(props) {
    const [t] = useTranslation(["chapter_header", "common"])
    const introHeader = config.common.introHeader

    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textContent--h0--rus' : 'textContent--h0'

    return (
        <Container $display={props.media}>
            <ContentWrapper>
                <p className={h1}>{introHeader}</p>
                <p className={paragraph}>{t("part_01")}</p>
            </ContentWrapper>

            <Link to={"contacts"}>
                <ButtonController variant={"sliderMobile"}/>
            </Link>
        </Container>
    )
}

const Container = styled.div`
  display: ${props => props.$display || 'flex'};
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 0 30px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 25px;

  @media (max-width: 480px) {
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 10px;
  }
`

export default SliderTextContentMobile