import styled from 'styled-components'

import { ListContainer } from './ListContainer'
import { ListInnerInformation } from './ListInnerInformation'
import { ListInnerServices } from './ListInnerServices'
import { ListInnerPrices } from './ListInnerPrices'

export const StyledInformation = styled.div`
  ${ ListContainer }
  ${ ListInnerInformation }
`

export const StyledServices = styled.div`
  ${ ListContainer }
  ${ ListInnerServices }
`

export const StyledPrices = styled.div`
  ${ ListContainer }
  ${ ListInnerPrices }
`
