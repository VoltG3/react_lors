import styled from 'styled-components'
import { css } from 'styled-components'

export const ListHeader = styled.div`
  display: ${({ isTrue }) => {
    if (isTrue === false) return 'none;'
    else return 'flex;'
  }}
  
  align-items: center;
  background: var(--color--list--header)!important;
  border-top-left-radius: var(--border--radius);
  border-top-right-radius: var(--border--radius);
  
  & p {
    margin-top: 15px!important;
    margin-bottom: 15px!important;
  }
`

const ListContainer = css`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border-radius: var(--border--radius);
  box-shadow: var(--box--shadow);

  &:hover {
    transition: box-shadow .3s linear;
    box-shadow: var(--box--hover);
  }

  & div {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: var(--list--line--height);
  }

  & div:nth-child(even) {
    background: var(--color--list--even);
  }

  & div:nth-child(odd) {
    background: var(--color--list--odd);
  }

  & div:nth-last-child(-n + 1) {
    border-bottom-left-radius: var(--border--radius);
    border-bottom-right-radius: var(--border--radius);
  }

  & p {
    word-break: break-all;
    margin: 5px 30px;
  }
`

/* MediaListServices */
/* MediaListInformation */
/* MediaListPrices */

const InnerServices = css``
const InnerInformation = css``

const InnerPrices = css`
  #productItemDescribe {
    width: 100%;
  }

  #productItemPrice {
    display: flex;
    flex-direction: row;
    max-width: 181px;
    width: 100%;
    height: auto;
    
    & div:nth-child(1) {
      display: flex;
      justify-content: flex-end;
      max-width: 96px;
      width: 100%;

      & p {
        margin: 0 10px 0 0;
      }
    }

    & div:nth-child(2) {
      display: flex;
      justify-content: flex-start;
      max-width: 74px;
      width: 100%;

      & p {
        margin: 0;
      }
    }
  }

  .line {
    height: auto;
    min-height: var(--list--line--height);
  }

    & div:nth-child(even) .line {
      background: var(--color--list--even);
    }
  
    & div:nth-child(odd) .line {
      background: var(--color--list--odd);
    }
`

export const StyledServices = styled.div`
  ${ ListContainer }
  ${ InnerServices }
`

export const StyledInformation = styled.div`
  ${ ListContainer }
  ${ InnerInformation }
`

export const StyledPrices = styled.div`
  ${ ListContainer }
  ${ InnerPrices }
`
