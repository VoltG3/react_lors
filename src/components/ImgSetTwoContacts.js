import styled from 'styled-components'

import GetImg from './GetImg'
import {image06, image07, image09, image10} from '../env'

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
  
  .thisBox {
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 600px) {
      & {
        flex-direction: column;
      }
    }
  }
`

export default function ImgSetTwoContacts() {
    return (
        <StyledImgSetTwo className={"box"}>
            <div className={"thisBox"}>
                <GetImg img={ image10 } width={"770"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
                <GetImg img={ image09 } width={"670"} height={"auto"} verticalMargin={"--margin--img--vertical"} />
            </div>
        </StyledImgSetTwo>
    )
}
