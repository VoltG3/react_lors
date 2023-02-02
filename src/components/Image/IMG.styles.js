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
    filter:
        drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.9))
        opacity(80%);
    
    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }
  }
`

const ImgResponsiveVertical = css`
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    
    & img {
      display: flex;
    }
  }
`

/* MediaCollective4 */

const MediaCollective3_Desktop = css`
 // max-width: 500px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`

const MediaCollective3_Mobile = css`
  @media only screen and (min-width: 700px) {
    display: none;
  }
`

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
      padding-bottom: var(--sie--padding30);
    }
  }
`

/* MediaOffice */

const MediaContacts = css`
  //justify-content: space-between;
  gap: 30px;
  
  & img:nth-child(1) { max-width: calc( 55% - calc(var(--size--padding30) / 2)); }
  & img:nth-child(2) { max-width: calc( 45% - calc(var(--size--padding30) / 2)); }
  
  @media only screen and (max-width: 700px) {
    & {
      flex-direction: column;
      gap: var(--size--padding30);
      
      & img:nth-child(1) { max-width: 100%; }
      & img:nth-child(2) { max-width: 100%; }
    }
  }
`

export const StyledCollective4 = styled.div`
  ${ ImgContainer }
`

export const StyledCollective3_Desktop = styled.div`
  ${ ImgContainer }
  ${ MediaCollective3_Desktop }
`

export const StyledCollective3_Mobile = styled.div`
  ${ ImgContainer }
  ${ MediaCollective3_Mobile }
`

export const StylesEachPerson = styled.div`
  ${ ImgContainer }
  ${ ImgResponsiveVertical }
  ${ MediaEachPerson }
`

export const StyledEquipement = styled.div`
  ${ ImgContainer }
  ${ ImgResponsiveVertical }
  ${ MediaEquipment }
`

export const StyledOffice = styled.div`
  ${ ImgContainer }
`

export const StyledContacts = styled.div`
  ${ ImgContainer }
  ${ ImgResponsiveVertical }
  ${ MediaContacts }
`
