import styled from 'styled-components'

import Img from './Img'
import { image03, image04, image05 } from '../../env'

const ImgSetTre = () => {

    return (
        <StyledImgSetTre>
            <Img img={ image05 } width={"100%"} height={"auto"} />
            <Img img={ image03 } width={"100%"} height={"auto"} />
            <Img img={ image04 } width={"100%"} height={"auto"} />
        </StyledImgSetTre>
    )
}

const StyledImgSetTre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
    width: 100%;
    height: auto;
  gap: 30px;
  padding-top: 25px;
  padding-bottom: 25px;

  & img {
    width: 33%;
    background-size: cover;
  }

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`

export default ImgSetTre