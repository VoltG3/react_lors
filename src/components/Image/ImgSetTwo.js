import styled from 'styled-components'

import Img from './Img'
import { image06, image07 } from '../../env'

const StyledImgSetTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
    width: 100%;
    height: auto;
  gap: 30px;
  margin: var(--margin--img--vertical)
          var(--margin--img--horisontal) // !!!!!!!!
          var(--margin--img--vertical)
          var(--margin--img--horisontal); // !!!!!!!!!
  
  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`

export default function ImgSetTwo(props) {

   return (
       <StyledImgSetTwo className={"box"}>
           <Img img={ image07 } width={"625"} height={"auto"} />
           <Img img={ image06 } width={"625"} height={"auto"} />
       </StyledImgSetTwo>
   )
}
