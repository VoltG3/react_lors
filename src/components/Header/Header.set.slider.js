import styled from 'styled-components'

import { slider01, slider02 } from '../../env'
import { useTranslation } from 'react-i18next'

const StyledSlider = styled.div`
    max-width: var(--page--width);
        width: 100%;
        height: 381px;

  .textcontent {
    width: var(--page--width);
    height: 380px;
    position: absolute;
    z-index: 2;
    //border: solid 1px red;
  }
  
  .slide {
      max-width: var(--page--width);
          width: 100%;
          height: 381px;
    overflow: hidden;
    position: relative;
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

                        <div style={{ margin: '115px 0 0 0'}}>
                            <p>BUTTON</p>
                        </div>
                    </div>

                </div>

                <Tmp>
                    <div className={"firstDiv"}>
                        <div className={"secondDiv"}>
                            <div className={"slide"}>
                                <div><img src={ slider01 } alt={"slider img"} /></div>
                                <div><img src={ slider01 } alt={"slider img"} /></div>
                                <div><img src={ slider02 } alt={"slider img"} /></div>
                            </div>
                        </div>
                    </div>
                </Tmp>
            </section>
        </StyledSlider>
    )
}
