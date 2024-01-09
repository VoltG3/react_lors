import styled from 'styled-components'

import SliderTextContentDesktop from './sliderTextContentDesktop'

import config from '../../../config'
import SliderTextContentMobile from './sliderTextContentMobile'

const Slider = () => {
    const URL_slider01 = config.slider.URL_slider01
    const URL_slider02 = config.slider.URL_slider02

    return (
        <>
            <SliderContainer>
                <SliderTextContentDesktop media={"var(--media--desktop)"}/>

                <div className={"slide"}>
                    <div><img src={ URL_slider01 } width={"100%"} height={"auto"} alt={"slider"} loading="lazy" /></div>
                    <div><img src={ URL_slider01 } width={"100%"} height={"auto"} alt={"slider"} loading="lazy" /></div>
                    <div><img src={ URL_slider02 } width={"100%"} height={"auto"} alt={"slider"} loading="lazy" /></div>
                </div>
            </SliderContainer>

            <SliderTextContentMobile media={"var(--media--mobile)"}/>
        </>

    )
}
/*

.desktop { display: block!important; }
    .mobile { display: none!important; }

  @media only screen and (max-width: 922px) {
    .desktop { display: none!important; }
    .mobile { display: block!important; }
  }
 */
const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
    width: 100vw;
    height: auto;
 
  & img {
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 922px) {
      //min-height: 241px;
     // object-fit: contain;
      height: auto;
    }
  }
  
  .slide {
        width: 100vw;
    min-height: 481px;
    max-height: 500px;
        height: auto;
    overflow: hidden;
    position: relative;
    opacity: 0.4;
    //border: solid 2px red;
    
    @media only screen and (max-width: 922px) {
      opacity: 0.7;
      //min-height: 95px;
      //max-height: 243px; 
      min-height: 150px;
      max-height: 150px;
      height: auto!important;
    }
    
    //border: solid 1px black;
  }
  
  .slide > div {
    width: 100vw;
    height: 100%;
    position: absolute;
    z-index: 1;
    animation: slide 9s infinite;
    opacity: 0;
  }
  .slide > div:nth-child(3) {
    animation-delay: 3s;
  }

  .slide > div:nth-child(2) {
    animation-delay: 6s;
  }
  
  @keyframes slide {
    10% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
  }
`

export default Slider