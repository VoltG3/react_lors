import styled from 'styled-components'

import { slider01, slider02 } from '../../../env'
import { useTranslation } from 'react-i18next'
import GetImg from '../../GetImg'
import BtnVariant04 from '../../BTN_variant04'
import BTN from "../../../materials/BTN";

const StyledSlider = styled.div`
    max-width: var(--page--width);
        width: 100%;
  max-height: 381px;
        height: auto;

  .banner {                   // del
    flex-wrap: wrap;
    max-width: var(--page--width);
      width: 100%;
    height: auto;
  }
  
  .textSection {              // del
    display: flex;
    flex-direction: column;
      max-width: 381px;
          width: 100%;
    height: auto;
    margin: 67px 0 0 var(--margin--v1);
  }

  .textcontent {
    max-width: var(--page--width);
    width: 100%;
    max-height: 380px;
    position: absolute;
    z-index: 2;
  }
  
  .slide {
      max-width: var(--page--width);
          width: 100%;
          height: 381px;
    overflow: hidden;
    position: relative;
    
    & img {
      object-fit: cover;
    }
  }
  
  .slide > div {
    max-width: var(--page--width);
        width: 100%;
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
const Tmp = styled.div`
          display: flex;
  max-width: var(--page--width);
  width: 100%;
  height: 100%;
  
    .firstDiv {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      background: white;
    }
  
    .secondDiv {
      position: relative;
      z-index: 2;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      background: white;
    }
`

export default function HeaderSetSlider() {
    const [t] = useTranslation(["sections"])

    return (
        <StyledSlider>
            <section className="banner">
                <div className={"textcontent"}>
                    <div style={{ margin: '67px 0 0 var(--margin--v1)' }}>
                        <p className={"textcontent--header--firstline"}>{ t("sections:section_header_part05") }</p>
                        <p className={"textcontent--header--secondline"}>{ t("sections:section_header_part06") }</p>
                        <BTN />

                        <div style={{ margin: '115px 0 0 0'}}>
                            <BtnVariant04 />
                        </div>
                    </div>

                </div>

                <Tmp>
                    <div className={"firstDiv"}>
                        <div className={"secondDiv"}> {/*mask div*/}
                            <div className={"slide"}>
                                <div><GetImg img={ slider01 } width={"1440"} height={"auto"} /></div>
                                <div><GetImg img={ slider01 } width={"1440"} height={"auto"} /></div>
                                <div><GetImg img={ slider02 } width={"1440"} height={"auto"} /></div>
                            </div>
                        </div>
                    </div>
                </Tmp>
            </section>
        </StyledSlider>
    )
}
