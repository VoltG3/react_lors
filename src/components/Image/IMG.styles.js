import styled from 'styled-components'
import { css } from 'styled-components'

const ImgContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
    width: 100%;
    height: auto;
  
  & img {
    border-radius: var(--border--radius);
    //box-shadow: var(--box--shadow);
   // padding: 10px;
    
    //filter: var(--filter--img);
    
    /*
    --filter--img: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.7));
    
    --box--shadow:      rgba(176, 176, 176, 0.3) 0px 2px 15px 0px;
    --box--hover:       0 2px 15px 0 hsla(0,0%,69%,.5);
    */
    //box-shadow: rgba(176, 176, 176, 0.9) 0px 2px 15px 0px;
    
    filter:
        drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.9))
        opacity(80%);
    
    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }
  }
`

/* MediaCollective4 */
/* MediaCollective5 */

const MediaEachPerson = css`
  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`

const MediaEquipment = css`
  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`

/* MediaOffice */

const MediaContacts = css`
  @media only screen and (max-width: 700px) {
    & {
      flex-direction: column;
    }
  }
`

export const StyledCollective4 = styled.div`
  ${ ImgContainer }
`

export const StyledCollective3 = styled.div`
  ${ ImgContainer }
`

export const StylesEachPerson = styled.div`
  ${ ImgContainer }
  ${ MediaEachPerson }
`

export const StyledEquipement = styled.div`
  ${ ImgContainer }
  ${ MediaEquipment }
`

export const StyledOffice = styled.div`
  ${ ImgContainer }
`

export const StyledContacts = styled.div`
  ${ ImgContainer }
  ${ MediaContacts }
`
