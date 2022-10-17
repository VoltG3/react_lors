import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

const StyledSubSetNavg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export default function HeaderSubsetNav2() {
    return (
        <StyledSubSetNavg>
            <Link to={"contacts"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"appointment"} /></Link>
        </StyledSubSetNavg>
    )
}
