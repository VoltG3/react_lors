import styled from 'styled-components'

import DefaultSlider01 from '../../assets/default_slider_01.png'
import DefaultSlider02 from '../../assets/default_slider_02.png'
import { GetHeader } from '../Props.header'
import { DATA_TEXTCONTENT_HEADERS, DATA_TEXTCONTENT_SECTIONS } from '../../env'
import { GetTextcontent } from '../Props.textcontent'

const StyledContainer = styled.div`
  width: 100%;
  height: 381px;

  .textcontent {
    width: 100%;
    height: 381px;
    position: absolute;
    z-index: 2;
  }
  
  .slide {
    width: 100%;
    height: 381px;
    overflow: hidden;
    position: relative;
  }

  .slide > div {
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

export default function HeaderSetSlider() {
    return (
        <StyledContainer>
            <section className="banner">
                <div className={"textcontent"}>
                    <div style={{ margin: '47px 0 0 80px' }}>
                        <p><GetHeader textcontent={ DATA_TEXTCONTENT_HEADERS } part={"7"} /></p>
                        <div style={{ margin: '16px 0 0 25px'}}>
                            <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"05"}/></p>
                            <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"06"}/></p>
                            <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"07"}/></p>
                        </div>

                        <div style={{ margin: '31px 0 0 0'}}>
                            <p><GetTextcontent textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"08"}/></p>
                        </div>
                    </div>

                </div>

                <div className={"slide"}>
                    <div><img src={ DefaultSlider01 } alt={"slider img"} /></div>
                    <div><img src={ DefaultSlider01 } alt={"slider img"} /></div>
                    <div><img src={ DefaultSlider02 } alt={"slider img"} /></div>
                </div>

            </section>
        </StyledContainer>
    )
}
