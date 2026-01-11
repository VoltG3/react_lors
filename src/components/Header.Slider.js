import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import config from '../config'
import * as S from '../styles/styles.header'
import { ButtonController } from './Button'

const SliderTextContentDesktop = () => {
    const { t } = useTranslation(["chapter_header"])
    const introHeader = config.common.introHeader
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textContent--h0--rus' : 'textContent--h0'

    return (
        <S.SliderContentDesktop>
            <S.SliderTextWrapper>
                <p className={h1}>{introHeader}</p>
                <p className={paragraph}>{t("part_01")}</p>
            </S.SliderTextWrapper>
            <Link to={"contacts"}>
                <ButtonController variant={"sliderDesktop"} />
            </Link>
        </S.SliderContentDesktop>
    )
}

const SliderTextContentMobile = () => {
    const { t } = useTranslation(["chapter_header"])
    const introHeader = config.common.introHeader
    const paragraph = i18n.language === 'ru' ? 'textContent--paragraph--rus' : 'textContent--paragraph'
    const h1 = i18n.language === 'ru' ? 'textContent--h0--rus' : 'textContent--h0'

    return (
        <S.SliderContentMobile>
            <S.SliderMobileTextWrapper>
                <p className={h1}>{introHeader}</p>
                <p className={paragraph}>{t("part_01")}</p>
            </S.SliderMobileTextWrapper>
            <Link to={"contacts"}>
                <ButtonController variant={"sliderMobile"} />
            </Link>
        </S.SliderContentMobile>
    )
}

const HeaderSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        config.slider.URL_slider01,
        config.slider.URL_slider01,
        config.slider.URL_slider02
    ]

    const objectPositionDesktop = config.slider.objectPosition_desktop
    const objectPositionMobile = config.slider.objectPosition_mobile

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <>
            <S.SliderMainContainer>
                <SliderTextContentDesktop />
                <S.SlideWrapper>
                    {slides.map((slide, index) => (
                        <S.SlideImage
                            key={index}
                            src={slide}
                            alt={`slider ${index + 1}`}
                            $isActive={index === currentSlide}
                            $isPrevious={index === (currentSlide - 1 + slides.length) % slides.length}
                            $objectPositionDesktop={objectPositionDesktop}
                            $objectPositionMobile={objectPositionMobile}
                            loading="lazy"
                        />
                    ))}
                </S.SlideWrapper>
            </S.SliderMainContainer>
            <SliderTextContentMobile />
        </>
    )
}

export default HeaderSlider
