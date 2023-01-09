import styled from 'styled-components'

import Img from './Img'
import { image03, image04, image05 } from '../../env'


function ImgSetTre() {
    return (
        <StyledImgSetTree>
            <div className={"firstImg"}>
                <Img img={ image05 } width={"402"} height={"auto"} />
            </div>

            <div className={"firstImg"}>
                <Img img={ image03 } width={"402"} height={"auto"} />
            </div>

            <div className={"firstImg"}>
                <Img img={ image04 } width={"402"} height={"auto"} />
            </div>
        </StyledImgSetTree>
    )
}

const StyledImgSetTree = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
      width: 100%;
      height: auto;
  gap: 30px;
  margin: var(--margin--img--vertical)
          0
          var(--margin--img--vertical)
          0;
  @media only screen and (max-width: 600px) {
    & {
      align-items: center;
      flex-direction: column;
    }
    
    .firstImg {
      max-width: 300px;
          width: 100%;
          height: auto;
    }
  }
`

export default ImgSetTre