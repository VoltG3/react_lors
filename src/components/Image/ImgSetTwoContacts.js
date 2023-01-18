import styled from 'styled-components'

import Img from './Img'
import { image09, image10 } from '../../env'

const ImgSetTwoContacts = () => {

    return (
        <StyledImgSetC>
            <Img img={ image10 } maxWidth={'770'} verticalMargin={"--margin--img--vertical"} />
            <Img img={ image09 } maxWidth={'670'} verticalMargin={"--margin--img--vertical"} />
        </StyledImgSetC>
    )
}

const StyledImgSetC = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
    width: 100%;
    height: auto;
  //gap: 30px;
  padding-top: 25px;

    :root {
      --first--img--maxWidth: 770;
      --second--img--maxWidth: 367;
    }
  
  & img {
    background-size: cover;
  }

  @media only screen and (max-width: 700px) {
    & {
      flex-direction: column;
    }
  }
`

export default ImgSetTwoContacts