import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

const StyledSubSetNavSecond = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
`

export default function HeaderSubsetNav2() {
    return (
        <StyledSubSetNavSecond>
            <Link className={"textcontent--header--nav--btn--under"} to={"contacts"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"contacts"} /></Link>
        </StyledSubSetNavSecond>
    )
}
