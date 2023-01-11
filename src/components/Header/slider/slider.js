import styled from 'styled-components'
import { slider01, slider02 } from '../../../env'
import SliderTextcontent from './sliderTextcontent'

const Slider = () => {

    return (
        <SliderContainer>
            <SliderTextcontent />

            <div className={"slide"}>
                <div><img src={ slider01 } width={"100%"} height={"auto"} alt={"slider"} /></div>
                <div><img src={ slider01 } width={"100%"} height={"auto"} alt={"slider"} /></div>
                <div><img src={ slider02 } width={"100%"} height={"auto"} alt={"slider"} /></div>
            </div>
        </SliderContainer>
    )
}

const SliderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
    width: 100vw;
    height: auto;
  //border: solid 1px red;
  
  & img {
    width: 100%;
    height: 100%;
  }
  
  .slide {
        width: 100vw;
    min-height: 481px;
    max-height: 500px;
        height: 100%;
    overflow: hidden;
    position: relative;
    opacity: 0.4;

    @media only screen and (max-width: 922px) {
      min-height: 281px;
    }
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