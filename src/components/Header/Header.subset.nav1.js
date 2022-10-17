import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

const StyledSubSetNavFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export default function HeaderSubsetNav1() {
    return (
        <StyledSubSetNavFirst>
            <Link to={"home"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"home"} /></Link>
            <Link to={"about"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"about"} /></Link>
            <Link to={"services"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"services"} /></Link>
            <Link to={"prices"}><STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"prices"} /></Link>
        </StyledSubSetNavFirst>
    )
}
