import styled from 'styled-components'

import GetImg from '../GetImg'
import { image06, image07 } from '../../env'

const StyledImgSetTwo = styled.div`
  display: flex;
  flex-direction: row;
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

export default function ImgSetTwo() {
   return (
       <StyledImgSetTwo>
           <GetImg img={ image07 } width={"625"} height={"auto"} />
           <GetImg img={ image06 } width={"625"} height={"auto"} />
       </StyledImgSetTwo>
   )
}
