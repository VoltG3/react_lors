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

    @media only screen and (max-width: 922px) {
      filter: opacity(95%);
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

const ImgCollective4Hiddenelements = css`
  .hiddenContainer {
    position: relative;
    z-index: 1;
    display: flex;
      width: 100%;
      height: auto;
  }

  .hiddenItem {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
      width: 100%;
      height: 100%;
    
    & div {
      display: flex;
        width: 25%;
        height: auto;
    }

    .hiddenParagraph {
      display: flex;
      justify-content: center;
      align-items: center;
        width: 100%;
        height: 20%;
      overflow: hidden;
      
      .hiddenParagraphContainer {
        display: flex;
          width: auto;
          height: auto;
        background: var(--color--none);
        padding: 5px 10px 5px 10px;
        box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.3);
        border-radius: var(--border--radius);
      }
    }
  }
`

const MediaCollective4 = css`
  @media only screen and (max-width: 700px) {
    .hiddenItem {
      visibility: hidden;
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

/* MediaOffice */

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
  ${ ImgCollective4Hiddenelements }
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
