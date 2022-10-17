import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

const StyledSubSetNavg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default function HeaderSubsetNav1() {
    return (
        <StyledSubSetNavg>
            <Link to={"home"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"home"} /></Link>
            <Link to={"admission"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"admission"} /></Link>
            <Link to={"services"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"services"} /></Link>
            <Link to={"info"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"info"} /></Link>
            <Link to={"about"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"about"} /></Link>
        </StyledSubSetNavg>
    )
}
