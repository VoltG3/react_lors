import styled from 'styled-components'

import Img from './Img'
import { image06, image07 } from '../../env'

const ImgSetTwo = () => {

   return (
       <StyledImgSetTwo>
           <Img img={ image07 } width={"100%"} height={"auto"} />
           <Img img={ image06 } width={"100%"} height={"auto"} />
       </StyledImgSetTwo>
   )
}

const StyledImgSetTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
    width: 100%;
    height: auto;
  gap: 30px;
  padding-top: 25px;
  
    & img {
      background-size: cover;
    }
  
  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`

export default ImgSetTwo