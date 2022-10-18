import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { DATA_TEXTCONTENT_HEADERS } from '../../env'
import { STDH } from '../STDCOUT.headers'

const StyledSubSetNavFirst = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & p:hover {
    cursor: pointer;
    color: var(--clr--accent--base);
  }
`

export default function HeaderSubsetNav1() {
    return (
        <StyledSubSetNavFirst>
            <Link className={"textcontent--header--nav--btn--under"} to={"home"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"home"} />
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"about"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"about"} />
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"services"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"services"} />
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"prices"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"prices"} />
            </Link>

            <Link className={"textcontent--header--nav--btn--under"} to={"info"}>
                <STDH textcontent={ DATA_TEXTCONTENT_HEADERS } stock={"info"} />
            </Link>

        </StyledSubSetNavFirst>
    )
}
