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
    box-shadow: var(--box--shadow);
    opacity: 0.95;

    &:hover {
      transition: box-shadow .3s linear;
      box-shadow: var(--box--hover);
    }

    @media only screen and (max-width: 922px) {
      box-shadow: var(--box--shadow);
      opacity: 0.95;
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

const MediaCollective4 = css`
  padding-top: var(--size--padding30);
  padding-bottom: var(--size--padding30);

  @media only screen and (max-width: 700px) {
    & {
      padding-top: var(--size--padding30);
      padding-bottom: var(--size--padding30);
    }
  }
`

const MediaCollective3 = css`
  @media only screen and (max-width: 700px) {
    & {
      padding-top: var(--size--padding30);
    }
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
    }
  }
`

const MediaContacts = css`
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
  ${ MediaCollective4 }
`
export const StyledCollective3 = styled.div`
  ${ ImgContainer }
  ${ MediaCollective3 }
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

export const StyledBuilding = styled.div`
  ${ ImgContainer }
`