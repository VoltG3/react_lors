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
    border-radius: 3px;
    filter: var(--filter--img);
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
