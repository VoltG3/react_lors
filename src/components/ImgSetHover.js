import styled from 'styled-components'

import  { image01 } from '../env'
import GetImg from './GetImg'

const StyledThisImg = styled.div`
  
    //&:nth-child(1) {
  .q {
      position: relative;
      z-index: 0;
    
        width: 1000px;
        height: 1000px;
      border: solid 1px red;

      //&:nth-child(3) {
    .s {
        position: relative;
        z-index: 1;
        width: 100px;
        height: 300px;
        background: violet;
        opacity: 0.7;
      }

    .s2 {
      position: relative;
      z-index: 2;
      width: 100px;
      height: 300px;
      background: darkred;
      opacity: 0.7;
      padding-top: 40px;
      padding-left: 40px;
      margin-left: 40px;
      margin-top: -40px;
    }
    }
`

export default function ImgSetHover() {
    return (
        <StyledThisImg>
            <div className={"q"}>
                {/*<GetImg img={ image01 } width={"1017"} height={"auto"} verticalMargin={"--margin--img--vertical"} />*/}
                <div className={"s"}>

                </div>
                <div className={"s2"}></div>
            </div>



            <div></div>
            <div></div>
        </StyledThisImg>
    )
}
