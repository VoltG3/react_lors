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
    border-radius: 0;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    opacity: 1;

    transition: all .3s ease;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
      transform: translateY(-2px);
    }

    @media only screen and (max-width: 922px) {
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
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
  padding-top: 30px;
  padding-bottom: 30px;

  @media only screen and (max-width: 700px) {
    & {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
`

const MediaCollective3 = css`
  @media only screen and (max-width: 700px) {
    & {
      padding-top: 30px;
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
  
  & img:nth-child(1) { max-width: calc( 55% - calc(30px / 2)); }
  & img:nth-child(2) { max-width: calc( 45% - calc(30px / 2)); }
  
  @media only screen and (max-width: 700px) {
    & {
      flex-direction: column;
      gap: 30px;
      
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
  
  gap: 30px;
  padding-top: 60px;
  padding-bottom: 30px;
`

export const StyledEquipment = styled.div`
  ${ ImgContainer }
  ${ ImgResponsiveVertical }
  ${ MediaEquipment }
  
  gap: 30px;
  padding-top: 30px;
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