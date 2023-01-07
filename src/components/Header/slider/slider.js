import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { slider01, slider02 } from '../../../env'
import SliderTextcontent from "./sliderTextcontent";
function Slider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const images = [slider01, slider02]
    const interval = 5000; // interval at which images will change (in milliseconds)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)
        }, interval);
        return () => clearInterval(intervalId)
    }, [currentImageIndex, images.length, interval])

    return (
        <StyledSlider>


            <div className={"mask"}>
                <img src={images[currentImageIndex]} alt="header image" />
            </div>

            <div className="header-text"><SliderTextcontent /></div>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: auto;
  border: solid 1px red;
  background-color: var(--color--none);
  
  .innerSlider {
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    width: inherit;
    height: inherit;
  }
  
  .header-text {
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
  }
  
  .mask {
    position: relative;
    z-index: 2;
    width: 100vw;
    height: 100%;
    opacity: 0.4;
  }
  
  & img {
    position: relative;
    z-index: 1;
    width: 100vw;
    height: auto;
    //object-fit: cover;
  }
`

export default Slider