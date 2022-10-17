import styled from 'styled-components'

import DefaultSlider01 from '../../assets/default_slider_01.png'
import DefaultSlider02 from '../../assets/default_slider_02.png'

import { DATA_TEXTCONTENT_HEADERS, DATA_TEXTCONTENT_SECTIONS } from '../../env'
import { STDL } from '../STDCOUT.lists'
import { STDH } from '../STDCOUT.headers'

const StyledSlider = styled.div`
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
        <StyledSlider>
            <section className="banner">
                <div className={"textcontent"}>
                    <div style={{ margin: '47px 0 0 80px' }}>
                        <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"company"} />
                        <div style={{ margin: '16px 0 0 25px'}}>
                            <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"05"}/>
                            <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"06"}/>
                            <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"07"}/>
                        </div>

                        <div style={{ margin: '31px 0 0 0'}}>
                            <STDL textcontent={ DATA_TEXTCONTENT_SECTIONS } section={"header"} partId={"08"}/>
                        </div>
                    </div>

                </div>

                <div className={"slide"}>
                    <div><img src={ DefaultSlider01 } alt={"slider img"} /></div>
                    <div><img src={ DefaultSlider01 } alt={"slider img"} /></div>
                    <div><img src={ DefaultSlider02 } alt={"slider img"} /></div>
                </div>

            </section>
        </StyledSlider>
    )
}
