import styled from 'styled-components'
import { slider01, slider02 } from '../../../env'
import SliderTextcontentDesktop from './sliderTextcontentDesktop'
import {MediaDesktop} from "../../../media";
import SliderTextcontentMobile from "./sliderTextcontentMobile";

const Slider = () => {

    return (
        <>
            <SliderContainer>
                <SliderTextcontentDesktop media={"var(--media--desktop)"}/>

                <div className={"slide"}>
                    <div><img src={ slider01 } width={"100%"} height={"auto"} alt={"slider"} /></div>
                    <div><img src={ slider01 } width={"100%"} height={"auto"} alt={"slider"} /></div>
                    <div><img src={ slider02 } width={"100%"} height={"auto"} alt={"slider"} /></div>
                </div>
            </SliderContainer>

            <SliderTextcontentMobile media={"var(--media--mobile)"}/>
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
      object-fit: contain;
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
    
    @media only screen and (max-width: 922px) {
      min-height: 95px;
      max-height: 243px;
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