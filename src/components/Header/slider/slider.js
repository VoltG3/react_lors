import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import SliderTextContentDesktop from './sliderTextContentDesktop'
import SliderTextContentMobile from './sliderTextContentMobile'
import config from '../../../config'

const Slider = () => {
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
        }, 5000) // 5 seconds per slide

        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <>
            <SliderContainer $objectPositionDesktop={objectPositionDesktop} $objectPositionMobile={objectPositionMobile}>
                <SliderTextContentDesktop media={"var(--media--desktop)"} />

                <SlideWrapper>
                    {slides.map((slide, index) => (
                        <SlideImage
                            key={index}
                            src={slide}
                            alt={`slider ${index + 1}`}
                            $isActive={index === currentSlide}
                            $isPrevious={index === (currentSlide - 1 + slides.length) % slides.length}
                            loading="lazy"
                        />
                    ))}
                </SlideWrapper>
            </SliderContainer>

            <SliderTextContentMobile media={"var(--media--mobile)"} />
        </>
    )
}

const SlideWrapper = styled.div`
  width: 100vw;
  min-height: 481px;
  max-height: 500px;
  height: auto;
  overflow: hidden;
  position: relative;
  opacity: 0.4;

  @media only screen and (max-width: 922px) {
    opacity: 0.7;
    min-height: 250px;
    max-height: 280px;
    height: 280px;
  }
`

const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$isActive ? 1 : props.$isPrevious ? 1 : 0};
  z-index: ${props => props.$isActive ? 2 : props.$isPrevious ? 1 : 0};
  transition: opacity 2s ease-in-out;
`

const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: auto;
  box-shadow: rgba(176, 176, 176, 0.3) 0px 4px 15px 0px;
  position: relative;

  ${SlideImage} {
    object-position: ${props => props.$objectPositionDesktop || 'center center'};

    @media only screen and (max-width: 922px) {
      object-position: ${props => props.$objectPositionMobile || 'center center'};
    }
  }
`

export default Slider
